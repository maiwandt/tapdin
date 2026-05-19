import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="flex items-center px-8 py-6 border-b border-white/10">
        <span className="text-2xl font-bold tracking-tight">TapdIn</span>
      </header>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center flex-1 px-6 py-20">
        <p className="text-sm uppercase tracking-widest text-white/40 mb-6">
          The music industry&apos;s inner circle — now accessible
        </p>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight max-w-4xl mb-6">
          Real sessions.
          <br />
          Real feedback.
          <br />
          <span className="text-white/40">Real connections.</span>
        </h1>
        <p className="text-lg text-white/60 max-w-xl mb-14">
          TapdIn connects artists directly with top music industry professionals
          for private, one-on-one feedback sessions. No gatekeepers.
        </p>

        {/* Split CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <Link
            href="/artists"
            className="flex-1 flex flex-col items-center gap-1 bg-white text-[#0a0a0a] font-bold text-lg py-5 px-6 rounded-xl hover:bg-[#f0ede8] transition-colors"
          >
            <span>I&apos;m an Artist</span>
            <span className="text-sm font-normal text-black/50">
              Get feedback from the pros
            </span>
          </Link>
          <Link
            href="/professionals"
            className="flex-1 flex flex-col items-center gap-1 border border-white/20 font-bold text-lg py-5 px-6 rounded-xl hover:bg-white/5 transition-colors"
          >
            <span>I&apos;m a Professional</span>
            <span className="text-sm font-normal text-white/40">
              Monetize your expertise
            </span>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-white/20 text-sm py-8 border-t border-white/10">
        © 2026 TapdIn. All rights reserved.
      </footer>
    </main>
  );
}
