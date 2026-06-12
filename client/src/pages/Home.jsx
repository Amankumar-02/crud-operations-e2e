import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link to="/" className="text-xl font-semibold text-slate-900">TaskFlow</Link>
          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <a href="#features" className="transition hover:text-slate-900">Features</a>
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="#footer" className="transition hover:text-slate-900">Contact</a>
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/about"
              className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
            >
              About
            </Link>
            <a
              href="#get-started"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Get Started
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
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
              <div className="rounded-3xl bg-slate-100 p-4 text-center">
                <p className="text-3xl font-semibold text-slate-950">24/7</p>
                <p className="text-sm text-slate-500">Real-time updates</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-4 text-center">
                <p className="text-3xl font-semibold text-slate-950">10K+</p>
                <p className="text-sm text-slate-500">Tasks completed monthly</p>
              </div>
              <div className="rounded-3xl bg-slate-100 p-4 text-center">
                <p className="text-3xl font-semibold text-slate-950">120%</p>
                <p className="text-sm text-slate-500">Team productivity growth</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-4xl bg-linear-to-br from-slate-950 via-slate-800 to-indigo-600 p-8 text-white shadow-2xl shadow-slate-900/10 sm:p-12">
            <div className="absolute inset-0 opacity-20 mask-[linear-gradient(180deg,white_60%,transparent)]"></div>
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
                      <div className="h-1 w-2/3 rounded-full bg-white"></div>
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

        <section className="mt-24 space-y-10" id="features">
          <div className="max-w-2xl space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700">Features</p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              The simplest way to manage your team and stay aligned.
            </h2>
            <p className="text-base leading-8 text-slate-600">
              Create plans, assign tasks, and track progress from a single dashboard that makes collaboration effortless.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-3xl">🗂️</p>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Organized Boards</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Structure every project with lists, cards, and custom labels so nothing slips through the cracks.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-3xl">🤝</p>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Real-Time Collaboration</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Share updates, assign owners, and comment on work instantly so every team member stays informed.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-3xl">📈</p>
              <h3 className="mt-6 text-xl font-semibold text-slate-900">Progress Analytics</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Know which tasks are on track, overdue, or blocked with clean reporting and status summaries.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-12 md:grid-cols-2" id="about">
          <div className="rounded-3xl bg-white p-10 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-950">Built for every workflow</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Whether you run a lean startup or a cross-functional enterprise team, TaskFlow adapts to the way you plan, review, and ship work.
            </p>
            <ul className="mt-8 space-y-5 text-sm text-slate-600">
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">✓</span>
                Custom boards, priorities, and reminders for every team.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">✓</span>
                Automations that keep recurring work moving without manual follow-up.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-100 text-indigo-700">✓</span>
                A single view for priorities, progress, and next actions.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-slate-950 p-10 text-white shadow-lg shadow-slate-900/10">
            <h3 className="text-2xl font-semibold">A clean workspace for busy teams</h3>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              Focus on the work that matters with a calm, intuitive interface that makes it easy to move from planning to delivery.
            </p>
            <div className="mt-10 space-y-4 rounded-3xl bg-slate-900/80 p-6">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Weekly planning</span>
                <span className="rounded-full bg-slate-800 px-3 py-1">Ready</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Team alignment</span>
                <span className="rounded-full bg-emerald-500 px-3 py-1 text-white">Live</span>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Delivery rhythm</span>
                <span className="rounded-full bg-slate-800 px-3 py-1">Steady</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-950">TaskFlow</p>
            <p className="mt-2 text-sm text-slate-600">Task management designed for teams that ship on time.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <a href="#features" className="transition hover:text-slate-900">Features</a>
            <a href="#about" className="transition hover:text-slate-900">About</a>
            <a href="/about" className="transition hover:text-slate-900">Company</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
