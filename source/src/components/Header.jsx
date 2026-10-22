import { useEffect, useRef, useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { getCopy, localeHref, supportedLocales } from '../i18n';

export default function Header({ copy, locale }) {
  const [open, setOpen] = useState(false);
  const navigationTimer = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      window.removeEventListener('keydown', closeOnEscape);
      window.clearTimeout(navigationTimer.current);
    };
  }, []);

  const followMobileLink = (event, href) => {
    event.preventDefault();
    window.clearTimeout(navigationTimer.current);
    const mobileNavigation = document.getElementById('mobile-navigation');
    let completed = false;

    const finishNavigation = () => {
      if (completed) return;
      completed = true;
      window.clearTimeout(navigationTimer.current);
      mobileNavigation?.removeEventListener('transitionend', handleTransitionEnd);

      const target = document.querySelector(href);
      if (!target) return;

      const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 0;
      const targetTop = window.scrollY + target.getBoundingClientRect().top - headerHeight - 16;
      target.focus({ preventScroll: true });
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
      window.history.pushState(null, '', href);
    };

    const handleTransitionEnd = (transitionEvent) => {
      if (transitionEvent.target === mobileNavigation) finishNavigation();
    };

    mobileNavigation?.addEventListener('transitionend', handleTransitionEnd);
    setOpen(false);
    navigationTimer.current = window.setTimeout(finishNavigation, 1200);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-ivory/95 backdrop-blur-lg">
      <div className="page-shell flex min-h-[76px] items-center justify-between gap-7 lg:min-h-[82px]">
        <a href="#home" className="group flex items-center gap-3" aria-label="Budva | English Conversation Club home">
          <span className="grid size-10 place-items-center rounded-full border border-navy/30 transition-colors group-hover:border-terracotta group-hover:text-terracotta">
            <MessageCircle aria-hidden="true" className="size-[18px]" strokeWidth={1.6} />
          </span>
          <span className="font-display text-[16px] font-semibold leading-[1.02] tracking-[-0.02em]">
            Budva | English{' '}<br />Conversation Club
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label={copy.mainNav}>
          <a href="#topics" className="nav-link">{copy.topics.label}</a>
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <div className="flex items-center rounded-full border border-navy/15 bg-cream p-1" aria-label={copy.language}>
            {supportedLocales.map((item) => <a key={item} href={localeHref(item)} lang={getCopy(item).htmlLang} aria-current={locale === item ? 'page' : undefined} onClick={() => window.localStorage.setItem('english-club-locale', item)} className={`rounded-full px-2.5 py-1.5 text-[11px] font-bold transition ${locale === item ? 'bg-navy text-cream' : 'text-navy/55 hover:text-navy'}`}>{item.toUpperCase()}</a>)}
          </div>
          <a className="button-primary min-h-11 px-7" href="https://t.me/EnglishSpeakingClubBudva" target="_blank" rel="noreferrer">{copy.joinUs}</a>
        </div>

        <button
          className="grid size-12 place-items-center rounded-full border border-navy/20 bg-cream lg:hidden"
          type="button"
          aria-label={open ? copy.menuClose : copy.menuOpen}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={`page-shell overflow-hidden transition-[max-height,opacity,padding] duration-300 lg:hidden ${open ? 'max-h-[300px] pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'}`}
        aria-label={copy.mobileNav}
        aria-hidden={!open}
        inert={open ? undefined : ''}
      >
        <div className="rounded-3xl border border-navy/10 bg-cream p-4 shadow-soft">
          <a href="#topics" className="flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-peach px-4 py-3 text-sm font-bold transition hover:bg-terracotta/20" onClick={(event) => followMobileLink(event, '#topics')}>
            <MessageCircle className="size-4 text-terracotta" aria-hidden="true" />
            {copy.topics.label}
          </a>
          <div className="my-3 flex items-center justify-center gap-2 border-y border-navy/10 py-3" aria-label={copy.language}>
            {supportedLocales.map((item) => <a key={item} href={localeHref(item)} lang={getCopy(item).htmlLang} aria-current={locale === item ? 'page' : undefined} onClick={() => window.localStorage.setItem('english-club-locale', item)} className={`rounded-full px-4 py-2 text-xs font-bold ${locale === item ? 'bg-navy text-cream' : 'bg-peach text-navy/65'}`}>{item.toUpperCase()}</a>)}
          </div>
          <a className="button-primary mt-3 flex w-full" href="https://t.me/EnglishSpeakingClubBudva" target="_blank" rel="noreferrer">{copy.joinUs}</a>
        </div>
      </nav>
    </header>
  );
}
