import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const CHANNEL = 'EnglishSpeakingClubBudva';
const FEED_URL = `https://t.me/s/${CHANNEL}`;
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const outputPath = path.resolve(scriptDirectory, '../source/public/data/latest-event.json');

const namedEntities = new Map([
  ['amp', '&'],
  ['apos', "'"],
  ['gt', '>'],
  ['lt', '<'],
  ['nbsp', ' '],
  ['quot', '"'],
]);

function decodeEntities(value) {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number.parseInt(code, 10)))
    .replace(/&([a-z]+);/gi, (entity, name) => namedEntities.get(name.toLowerCase()) ?? entity);
}

function htmlToText(value) {
  return decodeEntities(value)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(?:div|p|blockquote)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/\u00a0/g, ' ')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function normalizeUrl(value) {
  return decodeEntities(value).replace(/^http:\/\//i, 'https://');
}

function isLocationUrl(value) {
  try {
    const hostname = new URL(value).hostname.toLowerCase();
    return hostname === 'maps.app.goo.gl'
      || hostname === 'maps.google.com'
      || hostname.endsWith('.maps.google.com')
      || hostname === 'share.google'
      || hostname === 'goo.gl';
  } catch {
    return false;
  }
}

function extractSchedule(text, publishedAt) {
  const match = text.match(
    /\b(?:(today|tonight|tomorrow)(?:\s*\((monday|tuesday|wednesday|thursday|friday|saturday|sunday)\))?|(monday|tuesday|wednesday|thursday|friday|saturday|sunday))[^\n.!?]{0,30}?\b(?:at\s*)?(\d{1,2}(?::\d{2})?\s*(?:a\.?m\.?|p\.?m\.?))\b/i,
  );

  if (!match) return null;

  const relativeDay = match[1]?.toLowerCase();
  const weekday = (match[2] || match[3])?.toLowerCase();
  const time = match[4].replace(/\./g, '').replace(/\s+/g, ' ').toLowerCase();
  const publishedDate = publishedAt ? new Date(publishedAt) : null;

  if (publishedDate && !Number.isNaN(publishedDate.valueOf())) {
    if (relativeDay === 'tomorrow') {
      publishedDate.setUTCDate(publishedDate.getUTCDate() + 1);
    } else if (!relativeDay && weekday) {
      const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
      const targetDay = weekdays.indexOf(weekday);
      const currentDay = publishedDate.getUTCDay();
      const daysAhead = (targetDay - currentDay + 7) % 7;
      publishedDate.setUTCDate(publishedDate.getUTCDate() + daysAhead);
    }

    const dateLabel = new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      timeZone: 'Europe/Podgorica',
      weekday: 'long',
    }).format(publishedDate);

    return {
      eventDate: publishedDate.toISOString().slice(0, 10),
      label: `${dateLabel} · ${time}`,
    };
  }

  const day = relativeDay && weekday ? `${relativeDay} (${weekday})` : relativeDay || weekday;

  return {
    eventDate: null,
    label: `${day.charAt(0).toUpperCase()}${day.slice(1)} · ${time}`,
  };
}

function extractVenue(text, locationUrl) {
  if (!locationUrl) return null;

  const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
  const locationLineIndex = lines.findIndex((line) => line.includes(locationUrl));
  if (locationLineIndex === -1) return null;

  const sameLine = lines[locationLineIndex]
    .replace(locationUrl, '')
    .replace(/^[📍\s:–—-]+|[📍\s:–—-]+$/g, '')
    .trim();

  if (sameLine && !/^location$/i.test(sameLine)) return sameLine;

  const previousLine = lines[locationLineIndex - 1];
  return previousLine && previousLine.length <= 80 ? previousLine : null;
}

function parsePost(segment) {
  const postMatch = segment.match(/data-post="([^"]+)\/(\d+)"/i);
  if (!postMatch) return null;

  const textMatch = segment.match(/<div class="tgme_widget_message_text[^>]*>([\s\S]*?)<\/div>/i);
  if (!textMatch) return null;

  const text = htmlToText(textMatch[1]);
  const links = [...textMatch[1].matchAll(/<a[^>]+href="([^"]+)"/gi)]
    .map((match) => normalizeUrl(match[1]));
  const locationUrl = links.find(isLocationUrl) ?? null;
  const dateMatch = segment.match(/<time[^>]+datetime="([^"]+)"/i);
  const publishedAt = dateMatch ? decodeEntities(dateMatch[1]) : null;
  const messageId = Number.parseInt(postMatch[2], 10);
  const meetingLanguage = /\b(club|meet(?:ing)?|tonight|today|tomorrow|venue|location|cafe|coffee|restaurant|bar)\b/i.test(text);
  const schedule = extractSchedule(text, publishedAt);
  const score = (locationUrl ? 8 : 0) + (schedule ? 4 : 0) + (meetingLanguage ? 3 : 0);

  return {
    eventDate: schedule?.eventDate ?? null,
    messageId,
    message: text,
    locationUrl,
    postUrl: `https://t.me/${CHANNEL}/${messageId}`,
    publishedAt,
    schedule: schedule?.label ?? null,
    score,
    venue: extractVenue(text, locationUrl),
  };
}

function selectAnnouncement(html) {
  const posts = html
    .split(/<div class="tgme_widget_message_wrap[^>]*>/i)
    .slice(1)
    .map(parsePost)
    .filter(Boolean)
    .sort((left, right) => left.messageId - right.messageId);

  if (!posts.length) throw new Error('Telegram feed did not contain readable posts.');

  const announcement = [...posts].reverse().find((post) => post.score >= 7) ?? posts.at(-1);
  const messageWithoutUrls = announcement.message
    .replace(/https?:\/\/\S+/gi, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  return {
    channel: CHANNEL,
    eventDate: announcement.eventDate,
    locationUrl: announcement.locationUrl,
    message: messageWithoutUrls,
    messageId: announcement.messageId,
    postUrl: announcement.postUrl,
    publishedAt: announcement.publishedAt,
    schedule: announcement.schedule,
    venue: announcement.venue,
  };
}

const response = await fetch(FEED_URL, {
  headers: {
    'User-Agent': 'Mozilla/5.0 (compatible; BudvaEnglishClubSite/1.0)',
  },
  signal: AbortSignal.timeout(20_000),
});

if (!response.ok) {
  throw new Error(`Telegram feed returned HTTP ${response.status}.`);
}

const announcement = selectAnnouncement(await response.text());
await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, `${JSON.stringify(announcement, null, 2)}\n`, 'utf8');

console.log(`Saved Telegram post ${announcement.messageId} to ${outputPath}`);
