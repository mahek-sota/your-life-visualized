"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DashboardEntry } from '@/types';
import { getEntries, clearEntries } from '@/lib/storage';

const moodEmoji = (m: number) => m >= 8 ? '🌟' : m >= 6 ? '😊' : m >= 4 ? '😐' : '🌧️';
const moodColor = (m: number) => m >= 8 ? '#4ade80' : m >= 6 ? '#fbbf24' : m >= 4 ? '#fb923c' : '#93c5fd';

export default function HistoryPage() {
  const [entries, setEntries] = useState<DashboardEntry[]>([]);

  useEffect(() => {
    setEntries(getEntries());
  }, []);

  const handleClear = () => {
    if (confirm('Clear all saved entries? This cannot be undone.')) {
      clearEntries();
      setEntries([]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFBEE' }}>
      <Navbar />

      <main className="max-w-[900px] mx-auto px-6 py-10 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-900 text-3xl text-gray-900 flex items-center gap-2" style={{ fontWeight: 900 }}>
              Your History <span className="text-[#fbbf24]">✦</span>
            </h1>
            <p className="text-gray-500 text-sm mt-1" style={{ fontWeight: 600 }}>
              Last {entries.length} check-ins, saved locally.
            </p>
          </div>
          {entries.length > 0 && (
            <button
              onClick={handleClear}
              className="text-xs text-gray-400 hover:text-red-400 transition-colors font-600 underline"
              style={{ fontWeight: 600 }}
            >
              Clear all
            </button>
          )}
        </div>

        {entries.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-16 text-center card-shadow"
          >
            <div className="text-6xl mb-4">📭</div>
            <h2 className="font-800 text-xl text-gray-800 mb-2" style={{ fontWeight: 800 }}>No entries yet</h2>
            <p className="text-gray-500 text-sm mb-6" style={{ fontWeight: 600 }}>
              Your daily check-ins will appear here.<br/>Go do one!
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 bg-gray-900 text-white font-700 text-sm px-6 py-3 rounded-full hover:bg-gray-800 transition-all"
              style={{ fontWeight: 700 }}
            >
              Start today&apos;s check-in ✨
            </Link>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {entries.map((e, i) => {
              const date = new Date(e.date).toLocaleDateString('en-US', {
                weekday: 'long', month: 'long', day: 'numeric',
              });
              const avgMetric = Math.round(
                (e.metrics.mainCharacterEnergy + e.metrics.emotionalBandwidth) / 2
              );

              return (
                <motion.div
                  key={e.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="bg-white rounded-2xl p-5 card-shadow hover:scale-[1.01] transition-transform"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Date + summary */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        {i === 0 && (
                          <span className="text-xs font-700 bg-[#fef9c3] text-[#b45309] px-2 py-0.5 rounded-full" style={{ fontWeight: 700 }}>
                            Latest
                          </span>
                        )}
                        <span className="font-800 text-gray-900 text-sm" style={{ fontWeight: 800 }}>{date}</span>
                      </div>
                      <p className="text-gray-500 text-xs leading-snug truncate" style={{ fontWeight: 600 }}>
                        {e.summary}
                      </p>
                    </div>

                    {/* Mood badge */}
                    <div className="flex items-center gap-1.5 flex-shrink-0">
                      <span className="text-xl">{moodEmoji(e.mood)}</span>
                      <span className="font-900 text-2xl" style={{ fontWeight: 900, color: moodColor(e.mood) }}>
                        {e.mood}
                      </span>
                    </div>
                  </div>

                  {/* Metrics mini row */}
                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {[
                      { label: 'Main Character', v: e.metrics.mainCharacterEnergy, color: '#fbbf24' },
                      { label: 'Avoidance', v: e.metrics.avoidanceRate, color: '#a78bfa' },
                      { label: 'Bandwidth', v: e.metrics.emotionalBandwidth, color: '#4ade80' },
                      { label: 'Delusion', v: e.metrics.delusionToExecutionRatio, color: '#f472b6' },
                      { label: 'Overthinking', v: e.metrics.overthinkingIndex, color: '#60a5fa' },
                    ].map(m => (
                      <div key={m.label} className="text-center">
                        <div className="h-1.5 rounded-full bg-gray-100 mb-1 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${m.v}%`, backgroundColor: m.color }}
                          />
                        </div>
                        <span className="text-[10px] text-gray-400 block" style={{ fontWeight: 600 }}>{m.label}</span>
                        <span className="text-xs font-800" style={{ fontWeight: 800, color: m.color }}>{m.v}</span>
                      </div>
                    ))}
                  </div>

                  {/* Vitals */}
                  <div className="mt-3 flex gap-2 flex-wrap">
                    {[
                      { emoji: '😊', v: e.mood, label: 'mood' },
                      { emoji: '🌙', v: e.sleep, label: 'sleep' },
                      { emoji: '🔋', v: e.socialBattery, label: 'social' },
                      { emoji: '🎯', v: e.focus, label: 'focus' },
                      { emoji: '👟', v: e.movement, label: 'move' },
                      { emoji: '🎭', v: e.dramatic, label: 'drama' },
                    ].map(v => (
                      <span key={v.label} className="text-xs bg-gray-50 rounded-lg px-2 py-1 text-gray-600" style={{ fontWeight: 600 }}>
                        {v.emoji} {v.v}
                      </span>
                    ))}
                    <span className="ml-auto text-xs bg-gray-50 rounded-lg px-2 py-1 font-700" style={{ fontWeight: 700 }}>
                      avg vibes: <span style={{ color: moodColor(avgMetric / 10) }}>{avgMetric}/100</span>
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
