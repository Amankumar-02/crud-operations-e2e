export default function Section({ id, eyebrow, title, description, className = '', children }) {
  return (
    <section id={id} className={`space-y-10 scroll-mt-24 ${className}`}>
      <div className="max-w-2xl space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">{title}</h2>
        <p className="text-base leading-8 text-slate-600">{description}</p>
      </div>
      {children}
    </section>
  );
}
