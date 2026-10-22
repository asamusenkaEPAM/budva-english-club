import { useEffect, useMemo, useState } from 'react';
import { assetHref } from '../i18n';

export const telegramChannel = 'https://t.me/EnglishSpeakingClubBudva';

export const fallbackAnnouncement = {
  message: 'Come for a drink, take a seat, and join whatever conversation feels right. The exact place is posted in Telegram each week.',
  postUrl: telegramChannel,
  schedule: 'Wednesday · 19:00',
  venue: 'Budva · venue in Telegram',
};

function budvaToday() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    timeZone: 'Europe/Podgorica',
    year: 'numeric',
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
  return `${values.year}-${values.month}-${values.day}`;
}

export default function useAnnouncement() {
  const [announcement, setAnnouncement] = useState(fallbackAnnouncement);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    fetch(assetHref('data/latest-event.json'), { cache: 'no-store' })
      .then((response) => {
        if (!response.ok) throw new Error('Latest event is unavailable');
        return response.json();
      })
      .then((latestEvent) => {
        if (active && latestEvent?.message && latestEvent?.postUrl) {
          setAnnouncement({ ...fallbackAnnouncement, ...latestEvent });
        }
      })
      .catch(() => {
        // Keep the useful weekly fallback when Telegram is temporarily unavailable.
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  const isUpcoming = useMemo(
    () => Boolean(announcement.eventDate && announcement.eventDate >= budvaToday()),
    [announcement.eventDate],
  );

  return { announcement, isUpcoming, loading };
}
