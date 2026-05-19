"use client";

import Link from "next/link";
import { useState } from "react";

const BENEFITS = [
  {
    icon: "🎧",
    title: "They actually listen first",
    body: "Before the session starts, your professional listens to up to 15 minutes of your music. You walk in already heard — not pitching cold.",
  },
  {
    icon: "🎯",
    title: "Real feedback, not pleasantries",
    body: "These are industry insiders — A&R reps, radio DJs, managers, producers. They tell you what needs work and what turns heads.",
  },
  {
    icon: "🔑",
    title: "Access that money can't normally buy",
    body: "A session with a Power 106 DJ or a label exec would normally require years of networking. TapdIn puts that meeting one booking away.",
  },
  {
    icon: "📅",
    title: "Book on your schedule",
    body: "Pick your professional, pick a time that works, and show up. No cold DMs, no favors owed, no gatekeepers.",
  },
];

export default function ArtistsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    await fetch("https://formspree.io/f/REPLACE_WITH_YOUR_ID", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Nav */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-white/10">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          TapdIn
        </Link>
        <span className="text-sm text-white/40">For Artists</span>
      </header>

      {/* Hero */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-white/40 mb-5">
          For Artists
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Stop hoping to get heard.
          <br />
          <span className="text-white/40">Start booking the meeting.</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          TapdIn gives you direct access to the music industry professionals who
          can actually change the trajectory of your career — on your terms, on
          your schedule.
        </p>
      </section>

      {/* How it works */}
      <section className="px-6 pb-20 max-w-4xl mx-auto w-full">
        <h2 className="text-xs uppercase tracking-widest text-white/30 mb-10 text-center">
          How it works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              step: "01",
              title: "Browse professionals",
              body: "Filter by role — A&R, radio, management, publishing, production. See their rates and availability.",
            },
            {
              step: "02",
              title: "Submit your music",
              body: "Upload up to 15 minutes of audio before the session. Your professional listens before you meet.",
            },
            {
              step: "03",
              title: "Show up and connect",
              body: "Join a private 1-on-1 video session. Walk away with honest feedback and a real industry connection.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="border border-white/10 rounded-2xl p-7"
            >
              <p className="text-4xl font-bold text-white/10 mb-4">
                {item.step}
              </p>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white/5 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-white/30 mb-10 text-center">
            Why TapdIn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div key={b.title} className="flex gap-5 p-6 rounded-2xl border border-white/10">
                <span className="text-3xl">{b.icon}</span>
                <div>
                  <h3 className="font-bold mb-1">{b.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{b.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign-up form */}
      <section className="px-6 py-24 max-w-xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-3">
          Join the waitlist
        </h2>
        <p className="text-white/50 text-center mb-10">
          We&apos;re launching soon. Get early access and be the first to book
          a session.
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <p className="text-2xl font-bold mb-3">You&apos;re in.</p>
            <p className="text-white/50">
              We&apos;ll reach out when early access opens.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="hidden" name="type" value="artist" />
            <div className="flex flex-col gap-1">
              <label className="text-sm text-white/50">Full name</label>
              <input
                name="name"
                required
                placeholder="Your name"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-white/50">Email address</label>
              <input
                name="email"
                type="email"
                required
                placeholder="you@example.com"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-white/50">
                What genre or style do you make?
              </label>
              <input
                name="genre"
                placeholder="e.g. R&B, Hip-Hop, Pop..."
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-white/50">
                What type of professional are you most looking to connect with?
              </label>
              <select
                name="professional_type"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-white/30"
              >
                <option value="" className="bg-[#0a0a0a]">Select one</option>
                <option value="ar" className="bg-[#0a0a0a]">A&R / Label Rep</option>
                <option value="radio" className="bg-[#0a0a0a]">Radio DJ / Music Director</option>
                <option value="manager" className="bg-[#0a0a0a]">Artist Manager</option>
                <option value="producer" className="bg-[#0a0a0a]">Producer / Songwriter</option>
                <option value="publisher" className="bg-[#0a0a0a]">Publisher / Sync Licensing</option>
                <option value="other" className="bg-[#0a0a0a]">Other</option>
              </select>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-white text-[#0a0a0a] font-bold py-4 rounded-xl hover:bg-[#f0ede8] transition-colors disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Request Early Access"}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center text-white/20 text-sm py-8 border-t border-white/10">
        © 2026 TapdIn. All rights reserved.
      </footer>
    </main>
  );
}
