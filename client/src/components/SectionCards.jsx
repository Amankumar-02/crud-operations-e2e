export default function SectionCards({ cards, className = '' }) {
  return (
    <div className={`grid gap-6 lg:grid-cols-3 ${className}`}>
      {cards.map((card) => (
        <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          {card.icon && <p className="text-3xl">{card.icon}</p>}
          <h3 className="mt-6 text-xl font-semibold text-slate-900">{card.title}</h3>
          {card.price ? (
            <>
              <p className="mt-3 text-3xl font-semibold text-slate-950">{card.price}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{card.description}</p>
            </>
          ) : (
            <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
          )}
        </article>
      ))}
    </div>
  );
}
