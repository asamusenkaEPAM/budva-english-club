import { Check } from 'lucide-react';

export default function AboutSection({ copy }) {
  return (
    <section id="about" className="bg-peach py-16 lg:py-20">
      <div className="page-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <div className="reveal">
          <p className="eyebrow">{copy.about.label}</p>
          <h2 className="section-title mt-6 max-w-xl">{copy.about.title}</h2>
        </div>
        <div className="reveal" style={{ transitionDelay: '100ms' }}>
          <p className="text-xl leading-[1.75] text-navy/72">{copy.about.text}</p>
          <ul className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {copy.about.promises.map((promise) => <li key={promise} className="flex gap-3 text-sm font-semibold leading-snug"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-terracotta/25"><Check className="size-3.5" aria-hidden="true" /></span>{promise}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
