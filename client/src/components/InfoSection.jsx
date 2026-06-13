export default function InfoSection({ id, title, description, items, variant = 'default' }) {
  return (
    <section id={id} className="mt-24 grid gap-12 md:grid-cols-2 scroll-mt-24">
      <div className="rounded-3xl bg-white p-10 shadow-sm">
        <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600">{description}</p>
        <ul className="mt-8 space-y-5 text-sm text-slate-600">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={`rounded-3xl p-10 shadow-lg shadow-slate-900/10 ${variant === 'dark' ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'}`}>
        <h3 className="text-2xl font-semibold">{variant === 'dark' ? 'A clean workspace for busy teams' : 'A clean workflow for busy teams'}</h3>
        <p className={`mt-5 text-sm leading-7 ${variant === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
          {variant === 'dark'
            ? 'Focus on the work that matters with a calm, intuitive interface that makes it easy to move from planning to delivery.'
            : 'TaskFlow helps teams stay aligned with clear priorities, shared progress, and fast execution.'}
        </p>
        <div className="mt-10 space-y-4 rounded-3xl bg-slate-900/80 p-6">
          {['Weekly planning', 'Team alignment', 'Delivery rhythm'].map((item, index) => (
            <div key={item} className="flex items-center justify-between text-sm text-slate-300">
              <span>{item}</span>
              <span className={`rounded-full px-3 py-1 ${index === 1 ? 'bg-emerald-500 text-white' : 'bg-slate-800'}`}>
                {index === 0 ? 'Ready' : index === 1 ? 'Live' : 'Steady'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
