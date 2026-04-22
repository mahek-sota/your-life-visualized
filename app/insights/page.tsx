"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DashboardEntry } from '@/types';
import { getEntries } from '@/lib/storage';

const METRIC_LABELS = {
  mainCharacterEnergy: { label: 'Main Character Energy', emoji: '👑', color: '#fbbf24', bg: '#FFF9E0' },
  avoidanceRate: { label: 'Avoidance Rate', emoji: '🙈', color: '#a78bfa', bg: '#F3EEFF' },
  emotionalBandwidth: { label: 'Emotional Bandwidth', emoji: '🧠', color: '#4ade80', bg: '#EDFBF2' },
  delusionToExecutionRatio: { label: 'Delusion-to-Execution', emoji: '🎈', color: '#f472b6', bg: '#FFF0F6' },
  overthinkingIndex: { label: 'Overthinking Index', emoji: '☁️', color: '#60a5fa', bg: '#EEF3FF' },
};

export default function InsightsPage() {
  const [entries, setEntries] = useState<DashboardEntry[]>([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  if (entries.length === 0) {
    return (
      <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFBEE' }}>
        <Navbar />
        <main className="max-w-[900px] mx-auto px-4 md:px-6 py-8 md:py-16 text-center flex-1">
          <div className="bg-white rounded-3xl p-8 md:p-16 card-shadow">
            <div className="text-6xl mb-4">🔮</div>
            <h2 className="font-800 text-xl text-gray-800 mb-2" style={{ fontWeight: 800 }}>No insights yet</h2>
            <p className="text-gray-500 text-sm mb-6" style={{ fontWeight: 600 }}>
              Do a few check-ins first and we&apos;ll surface your patterns here.
            </p>
            <Link href="/" className="inline-flex items-center gap-1.5 bg-gray-900 text-white font-700 text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition-all" style={{ fontWeight: 700 }}>
              Start checking in ✨
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Compute averages
  const avgMood = Math.round(entries.reduce((s, e) => s + e.mood, 0) / entries.length * 10) / 10;
  const metricAvgs = Object.keys(METRIC_LABELS).map(key => {
    const k = key as keyof typeof METRIC_LABELS;
    const avg = Math.round(entries.reduce((s, e) => s + e.metrics[k], 0) / entries.length);
    return { key: k, avg, ...METRIC_LABELS[k] };
  });

  const bestDay = entries.reduce((best, e) =>
    e.metrics.mainCharacterEnergy > best.metrics.mainCharacterEnergy ? e : best
  );
  const roughDay = entries.reduce((worst, e) =>
    e.metrics.emotionalBandwidth < worst.metrics.emotionalBandwidth ? e : worst
  );

  const moodTrend = entries.slice(0, 7).reverse().map(e => ({ date: e.date, mood: e.mood }));

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFBEE' }}>
      <Navbar />

      <main className="max-w-[900px] mx-auto px-4 md:px-6 py-6 md:py-10 flex-1">
        <div className="mb-8">
          <h1 className="font-900 text-3xl text-gray-900 flex items-center gap-2" style={{ fontWeight: 900 }}>
            Your Insights <span className="text-[#fbbf24]">✦</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1" style={{ fontWeight: 600 }}>
            Patterns from your last {entries.length} check-in{entries.length > 1 ? 's' : ''}.
          </p>
        </div>

        {/* Mood trend */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl p-6 card-shadow mb-6"
        >
          <h2 className="font-800 text-gray-900 text-lg mb-4 flex items-center gap-2" style={{ fontWeight: 800 }}>
            Mood Trend 😊
          </h2>
          <div className="flex items-end gap-3 h-24">
            {moodTrend.map((d, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div
                  className="w-full rounded-t-xl transition-all"
                  style={{
                    height: `${(d.mood / 10) * 80}px`,
                    background: `linear-gradient(to top, #fbbf24, #fde68a)`,
                    minHeight: 8,
                  }}
                />
                <span className="text-[10px] text-gray-400" style={{ fontWeight: 600 }}>
                  {new Date(d.date).toLocaleDateString('en-US', { weekday: 'short' })}
                </span>
                <span className="text-xs font-800 text-gray-700" style={{ fontWeight: 800 }}>{d.mood}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
            <span className="text-sm text-gray-500" style={{ fontWeight: 600 }}>Average mood</span>
            <span className="font-900 text-2xl text-[#fbbf24]" style={{ fontWeight: 900 }}>{avgMood}/10</span>
          </div>
        </motion.div>

        {/* Metric averages */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 gap-4 mb-6 sm:grid-cols-3"
        >
          {metricAvgs.map((m, i) => (
            <motion.div
              key={m.key}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 + i * 0.06 }}
              className="rounded-2xl p-4 card-shadow"
              style={{ backgroundColor: m.bg }}
            >
              <div className="text-2xl mb-1">{m.emoji}</div>
              <div className="font-900 text-3xl mb-0.5" style={{ fontWeight: 900, color: m.color }}>{m.avg}</div>
              <div className="text-xs text-gray-500 font-600" style={{ fontWeight: 600 }}>/100 avg</div>
              <div className="text-xs text-gray-700 mt-1 font-700 leading-tight" style={{ fontWeight: 700 }}>{m.label}</div>
              <div className="mt-2 h-1.5 bg-white/60 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${m.avg}%`, backgroundColor: m.color }} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Best day / rough day */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-[#FFF3CC] rounded-2xl p-5 card-shadow"
          >
            <div className="text-2xl mb-2">🌟</div>
            <div className="font-800 text-gray-900 text-sm mb-1" style={{ fontWeight: 800 }}>Peak Main Character Day</div>
            <div className="text-xs text-gray-600 mb-2" style={{ fontWeight: 600 }}>
              {new Date(bestDay.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            </div>
            <div className="font-900 text-4xl text-[#fbbf24]" style={{ fontWeight: 900 }}>
              {bestDay.metrics.mainCharacterEnergy}
            </div>
            <div className="text-xs text-gray-500 mt-1" style={{ fontWeight: 600 }}>main character energy</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-[#EEF3FF] rounded-2xl p-5 card-shadow"
          >
            <div className="text-2xl mb-2">☁️</div>
            <div className="font-800 text-gray-900 text-sm mb-1" style={{ fontWeight: 800 }}>Lowest Bandwidth Day</div>
            <div className="text-xs text-gray-600 mb-2" style={{ fontWeight: 600 }}>
              {new Date(roughDay.date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
            </div>
            <div className="font-900 text-4xl text-[#60a5fa]" style={{ fontWeight: 900 }}>
              {roughDay.metrics.emotionalBandwidth}
            </div>
            <div className="text-xs text-gray-500 mt-1" style={{ fontWeight: 600 }}>emotional bandwidth</div>
          </motion.div>
        </div>

        {/* Recent summaries */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl p-6 card-shadow"
        >
          <h2 className="font-800 text-gray-900 text-lg mb-4 flex items-center gap-2" style={{ fontWeight: 800 }}>
            Recent Summaries 🌸
          </h2>
          <div className="space-y-3">
            {entries.slice(0, 5).map((e, i) => (
              <div key={e.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                <span className="text-base flex-shrink-0 mt-0.5">
                  {e.mood >= 8 ? '🌟' : e.mood >= 6 ? '😊' : e.mood >= 4 ? '😐' : '🌧️'}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5" style={{ fontWeight: 600 }}>
                    {new Date(e.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </p>
                  <p className="text-sm text-gray-700 leading-snug" style={{ fontWeight: 600 }}>
                    {e.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
