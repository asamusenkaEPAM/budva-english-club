import { ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';
import { telegramChannel } from '../hooks/useAnnouncement';
import { assetHref } from '../i18n';

function ConversationDoodle() {
  return (
    <svg className="absolute -right-2 -top-5 hidden h-20 w-20 text-terracotta md:block lg:-right-8" viewBox="0 0 88 88" fill="none" aria-hidden="true">
      <path d="M45 12 42 2M61 17l6-9M71 31l10-3M22 22l-7-8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M58 27c-12 4-17 15-12 26 4 8 13 12 22 9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Hero({ announcement, isUpcoming, loading, copy }) {
  return (
    <section id="home" className="page-shell grid items-center gap-10 pb-5 pt-10 lg:min-h-[450px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-0 lg:py-6">
      <div className="reveal relative z-10 lg:pl-3 lg:pr-10">
        <div className="relative w-fit">
          <h1 className="hero-title font-display font-medium leading-[0.96] tracking-[-0.048em] text-navy">
            <span className="block">{copy.hero.line1}</span>
            <span className="block">{copy.hero.line2}</span>
          </h1>
          <ConversationDoodle />
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-4">
          <a className="button-primary" href="https://t.me/EnglishSpeakingClubBudva" target="_blank" rel="noreferrer">
            {copy.joinClub}
          </a>
        </div>
      </div>

      <div className="reveal relative" style={{ transitionDelay: '100ms' }}>
        <div className="absolute -left-6 -top-6 size-24 rounded-full bg-terracotta/25 blur-2xl" aria-hidden="true" />
        <div className="hero-image-frame relative h-[470px] overflow-hidden shadow-lift sm:h-[520px] lg:h-[420px]">
          <img
            src={assetHref('images/budva-old-town-hero.webp')}
            alt="Budva Old Town with its stone walls, terracotta roofs, church tower, and the Adriatic Sea"
            className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            width="1600"
            height="1000"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" aria-hidden="true" />
          <aside id="events" className="hero-event-card absolute inset-x-4 bottom-4 z-10 scroll-mt-28 rounded-[26px] border border-white/20 bg-navy/90 p-5 text-cream shadow-2xl backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-6 lg:left-auto lg:w-[430px]" aria-label="Next Budva English Conversation Club meetup">
            <div className="hero-event-step flex items-center justify-between gap-4">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cream/80">
                <span className="size-2 rounded-full bg-terracotta" aria-hidden="true" />
                {copy.hero.next}
              </span>
              <CalendarDays className="size-5 text-terracotta" strokeWidth={1.7} aria-hidden="true" />
            </div>

            {loading ? (
              <p className="hero-event-step mt-5 font-display text-2xl leading-tight">{copy.hero.checking}</p>
            ) : isUpcoming ? (
              <>
                <p className="hero-event-step mt-5 text-xs font-bold uppercase tracking-[0.15em] text-terracotta">{announcement.schedule}</p>
                <h2 className="hero-event-step mt-2 font-display text-[1.75rem] leading-[1.08] tracking-[-0.025em]">{announcement.venue || 'Budva'}</h2>
                <div className="hero-event-step mt-5 flex flex-wrap gap-2.5">
                  {announcement.locationUrl && (
                    <a className="inline-flex min-h-11 items-center gap-2 rounded-full bg-cream px-5 text-sm font-bold text-navy transition hover:-translate-y-0.5" href={announcement.locationUrl} target="_blank" rel="noreferrer"><MapPin className="size-4" aria-hidden="true" />{copy.hero.openLocation}</a>
                  )}
                  <a className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 text-sm font-bold text-cream transition hover:-translate-y-0.5 hover:bg-white/10" href={announcement.postUrl} target="_blank" rel="noreferrer">Telegram <ArrowUpRight className="size-4" /></a>
                </div>
              </>
            ) : (
              <>
                <h2 className="hero-event-step mt-5 max-w-sm font-display text-[1.6rem] leading-[1.12] tracking-[-0.02em]">{copy.hero.soon}</h2>
                <p className="hero-event-step mt-2 max-w-sm text-sm leading-relaxed text-cream/70">{copy.hero.automatic}</p>
                <a className="hero-event-step mt-5 inline-flex min-h-11 w-fit items-center gap-2 rounded-full bg-cream px-5 text-sm font-bold text-navy transition hover:-translate-y-0.5" href={telegramChannel} target="_blank" rel="noreferrer">{copy.hero.check} <ArrowUpRight className="size-4" /></a>
              </>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
