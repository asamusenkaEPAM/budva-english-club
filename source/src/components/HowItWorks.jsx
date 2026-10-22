export default function HowItWorks({ copy }) {
  return (
    <section className="page-shell py-24 lg:py-32">
      <div className="reveal"><p className="eyebrow">{copy.how.label}</p><h2 className="section-title mt-6 max-w-3xl">{copy.how.title}</h2></div>
      <div className="relative mt-14 grid gap-5 md:grid-cols-3">
        <div className="absolute left-[16%] right-[16%] top-7 hidden border-t border-dashed border-navy/20 md:block" aria-hidden="true" />
        {copy.how.steps.map(([title, description], index) => {
          const number = String(index + 1).padStart(2, '0');
          return (
            <article key={number} className="reveal relative rounded-[26px] border border-navy/10 bg-ivory p-7 text-center" style={{ transitionDelay: `${index * 90}ms` }}>
              <span className="relative mx-auto grid size-14 place-items-center rounded-full border border-navy/15 bg-cream font-display text-lg shadow-soft">{number}</span>
              <h3 className="mt-7 font-display text-2xl">{title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-navy/60">{description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
