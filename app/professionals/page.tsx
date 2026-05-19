"use client";

import Link from "next/link";
import { useState } from "react";

const BENEFITS = [
  {
    icon: "💰",
    title: "You set the price",
    body: "Your time, your rate. Set whatever hourly rate reflects the value of your expertise. Charge $500, $1,000, $3,000 — it's your call.",
  },
  {
    icon: "🎵",
    title: "Artists come prepared",
    body: "Every artist submits up to 15 minutes of their music before the session. You listen on your own time. No cold pitches in the meeting.",
  },
  {
    icon: "🗓️",
    title: "Fully flexible scheduling",
    body: "You control your calendar. Open availability when you want, close it when you don't. One session a month or ten — up to you.",
  },
  {
    icon: "🌐",
    title: "Build your legacy",
    body: "The artists you connect with today could be the names everyone knows tomorrow. TapdIn is how the industry pays it forward — and gets paid for it.",
  },
];

export default function ProfessionalsPage() {
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
        <span className="text-sm text-white/40">For Professionals</span>
      </header>

      {/* Hero */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <p className="text-sm uppercase tracking-widest text-white/40 mb-5">
          For Industry Professionals
        </p>
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
          Your knowledge is worth money.
          <br />
          <span className="text-white/40">Start getting paid for it.</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto">
          TapdIn lets industry professionals monetize their expertise through
          private sessions with vetted artists — on your schedule, at your
          price, with zero cold outreach.
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
              title: "Set your profile and rate",
              body: "Tell us who you are, what you do, and what you charge per hour. You control everything.",
            },
            {
              step: "02",
              title: "Listen on your time",
              body: "Artists submit up to 15 minutes of audio before each session. Review it whenever works for you.",
            },
            {
              step: "03",
              title: "Meet, advise, and get paid",
              body: "Join a private 1-on-1 video session and share your honest expertise. Payouts are processed automatically.",
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

      {/* Example rates callout */}
      <section className="px-6 pb-20 max-w-4xl mx-auto w-full">
        <div className="border border-white/10 rounded-2xl p-8 bg-white/5 text-center">
          <p className="text-xs uppercase tracking-widest text-white/30 mb-6">
            Example rates on TapdIn
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            {[
              { role: "Radio DJ / Music Director", rate: "$1,000 / session" },
              { role: "A&R Representative", rate: "$750 / session" },
              { role: "Major Label Manager", rate: "$3,000 / session" },
            ].map((ex) => (
              <div key={ex.role} className="flex-1 min-w-0">
                <p className="text-2xl font-bold mb-1">{ex.rate}</p>
                <p className="text-white/40 text-sm">{ex.role}</p>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-6">
            You keep 80%. TapdIn takes 20% to cover platform, payments, and support.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white/5 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs uppercase tracking-widest text-white/30 mb-10 text-center">
            Why professionals choose TapdIn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BENEFITS.map((b) => (
              <div
                key={b.title}
                className="flex gap-5 p-6 rounded-2xl border border-white/10"
              >
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

      {/* Application form */}
      <section className="px-6 py-24 max-w-xl mx-auto w-full">
        <h2 className="text-3xl font-bold text-center mb-3">
          Apply to join as a professional
        </h2>
        <p className="text-white/50 text-center mb-10">
          We&apos;re onboarding a select group of professionals for our launch.
          Tell us about yourself and we&apos;ll be in touch.
        </p>

        {submitted ? (
          <div className="text-center py-12">
            <p className="text-2xl font-bold mb-3">Application received.</p>
            <p className="text-white/50">
              We&apos;ll review your profile and reach out within a few days.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input type="hidden" name="type" value="professional" />
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
              <label className="text-sm text-white/50">Your role in the industry</label>
              <input
                name="role"
                required
                placeholder="e.g. A&R Manager at Atlantic Records"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-white/50">
                What rate would you charge per session? (USD)
              </label>
              <input
                name="rate"
                placeholder="e.g. $1,000"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm text-white/50">
                Instagram, LinkedIn, or website (so we can verify your profile)
              </label>
              <input
                name="profile_link"
                placeholder="https://"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-white/30"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-white text-[#0a0a0a] font-bold py-4 rounded-xl hover:bg-[#f0ede8] transition-colors disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Apply Now"}
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
