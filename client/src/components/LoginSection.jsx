export default function LoginSection() {
  return (
    <section className="mt-24 rounded-3xl bg-indigo-950 p-10 text-white shadow-lg shadow-slate-900/10 scroll-mt-24" id="login">
      <div className="max-w-3xl space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-300">Login</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Ready to streamline your team’s work?</h2>
        <p className="text-base leading-8 text-slate-300">
          Sign in to access your boards, track progress, and keep every project moving forward.
        </p>
        <a
          href="#"
          className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
        >
          Go to Login
        </a>
      </div>
    </section>
  );
}
