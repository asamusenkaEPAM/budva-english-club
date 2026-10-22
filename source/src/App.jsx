import { useEffect } from 'react';
import AboutSection from './components/AboutSection';
import FeatureGrid from './components/FeatureGrid';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import TopicsSection from './components/TopicsSection';
import useAnnouncement from './hooks/useAnnouncement';
import { currentLocale, getCopy } from './i18n';

export default function App() {
  const locale = currentLocale();
  const copy = getCopy(locale);
  const announcementState = useAnnouncement();

  useEffect(() => {
    document.documentElement.lang = copy.htmlLang;
  }, [copy.htmlLang]);

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal');
    if (reducedMotion) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-clip bg-ivory text-navy">
      <a href="#main-content" className="skip-link">{copy.skip}</a>
      <Header copy={copy} locale={locale} />
      <main id="main-content">
        <Hero {...announcementState} copy={copy} />
        <FeatureGrid copy={copy} />
        <TopicsSection copy={copy} />
        <HowItWorks copy={copy} />
        <AboutSection copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}
