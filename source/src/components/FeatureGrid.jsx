import { BadgeDollarSign, CalendarDays, TrendingUp, UsersRound } from 'lucide-react';

const icons = [UsersRound, BadgeDollarSign, CalendarDays, TrendingUp];

export default function FeatureGrid({ copy }) {
  return (
    <section className="page-shell relative z-20 pb-20 pt-4" aria-label={copy.highlights}>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
        {copy.features.map((title, index) => {
          const Icon = icons[index];
          return (
          <article key={title} className="reveal feature-card flex min-h-[140px] flex-col items-center justify-center text-center sm:min-h-[150px]" style={{ transitionDelay: `${index * 70}ms` }}>
            <span className="text-ocean"><Icon className="size-8" strokeWidth={1.45} aria-hidden="true" /></span>
            <h2 className="mt-5 text-sm font-semibold leading-tight sm:text-base">{title}</h2>
          </article>
          );
        })}
      </div>
    </section>
  );
}
