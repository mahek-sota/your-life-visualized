"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const comingSoon = [
  { emoji: '🎨', title: 'Custom Themes', desc: 'Build your own color palette and vibe. Make it yours.' },
  { emoji: '📊', title: 'Weekly Wrap', desc: 'An automatic end-of-week summary. Sunday edition.' },
  { emoji: '🤝', title: 'Share a Vibe', desc: 'Generate a shareable card of your dashboard. Screenshots are so last year.' },
  { emoji: '🎵', title: 'Mood Playlist', desc: 'A playlist recommendation based on your vibe. DJ mode: unlocked.' },
  { emoji: '⏰', title: 'Daily Reminder', desc: 'A gentle nudge to check in. Not pushy. Very chill.' },
  { emoji: '🌙', title: 'Night Reflection', desc: 'An evening version of the check-in. For the "how did today go" crowd.' },
];

export default function PlaygroundPage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFBEE' }}>
      <Navbar />

      <main className="max-w-[900px] mx-auto px-4 md:px-6 py-6 md:py-10 flex-1">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="float inline-block mb-4">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="45" fill="#fef9c3" stroke="#fbbf24" strokeWidth="2"/>
              <text x="50" y="66" fontSize="40" textAnchor="middle">🧪</text>
              <text x="18" y="25" fontSize="14" fill="#fbbf24">✦</text>
              <text x="75" y="22" fontSize="12" fill="#f472b6">✦</text>
              <text x="80" y="78" fontSize="10" fill="#a78bfa">✦</text>
              <text x="12" y="78" fontSize="10" fill="#60a5fa">✦</text>
            </svg>
          </div>
          <h1 className="font-900 text-4xl text-gray-900 mb-3" style={{ fontWeight: 900 }}>
            The Playground ✦
          </h1>
          <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed" style={{ fontWeight: 600 }}>
            This is where future features live while they&apos;re still dreaming.
            Big ideas, baby. Execution… pending. 🎈
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm font-700 text-gray-500 card-shadow" style={{ fontWeight: 700 }}>
            <span className="w-2 h-2 rounded-full bg-[#fbbf24] animate-pulse" />
            Coming soon — probably
          </div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {comingSoon.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-5 card-shadow hover:scale-105 transition-transform cursor-default"
            >
              <div className="text-3xl mb-3">{item.emoji}</div>
              <h3 className="font-800 text-gray-900 text-sm mb-1.5" style={{ fontWeight: 800 }}>
                {item.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed" style={{ fontWeight: 600 }}>
                {item.desc}
              </p>
              <div className="mt-3">
                <span className="text-[10px] font-700 bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full" style={{ fontWeight: 700 }}>
                  In the dream board
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 text-center"
        >
          <p className="text-gray-400 text-sm mb-4" style={{ fontWeight: 600 }}>
            For now, the best playground is today&apos;s check-in. ✨
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gray-900 text-white font-700 text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95"
            style={{ fontWeight: 700 }}
          >
            Go to Today →
          </Link>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
