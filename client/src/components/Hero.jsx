export default function Hero() {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-indigo-100 px-4 py-1 text-sm font-medium text-indigo-700">
          Built for organized teams
        </span>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Keep every task on track with smarter planning, collaboration, and progress.
        </h1>
        <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
          TaskFlow helps teams prioritize work, share progress, and execute quickly with a modern workspace built for clarity and focus.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            id="get-started"
            href="#features"
            className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Explore Features
          </a>
          <a
            href="/about"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Learn More
          </a>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { value: '24/7', label: 'Real-time updates' },
            { value: '10K+', label: 'Tasks completed monthly' },
            { value: '120%', label: 'Team productivity growth' },
          ].map((item) => (
            <div key={item.value} className="rounded-3xl bg-slate-100 p-4 text-center">
              <p className="text-3xl font-semibold text-slate-950">{item.value}</p>
              <p className="text-sm text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-slate-950 via-slate-800 to-indigo-600 p-8 text-white shadow-2xl shadow-slate-900/10 sm:p-12">
        <div className="absolute inset-0 opacity-20 mask-[linear-gradient(180deg,white_60%,transparent)]" />
        <div className="relative space-y-6">
          <div className="rounded-3xl bg-white/10 p-5">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-200">Sprint board</p>
            <div className="mt-4 space-y-4">
              <div className="rounded-2xl bg-white/15 p-4">
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>Design review</span>
                  <span>In progress</span>
                </div>
                <div className="mt-3 h-1 rounded-full bg-white/30">
                  <div className="h-1 w-2/3 rounded-full bg-white" />
                </div>
              </div>
              <div className="rounded-2xl bg-white/10 p-4">
                <div className="flex items-center justify-between text-sm text-slate-200">
                  <span>Client feedback</span>
                  <span>Next up</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Team progress</p>
              <p className="mt-3 text-3xl font-semibold">86%</p>
            </div>
            <div className="rounded-3xl bg-white/10 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Upcoming</p>
              <p className="mt-3 text-lg font-semibold">Sprint planning</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
