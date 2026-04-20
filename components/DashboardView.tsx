"use client";
import { motion } from 'framer-motion';
import { DashboardEntry } from '@/types';
import MetricCard from './MetricCard';
import SummaryCard from './SummaryCard';
import InsightCard from './InsightCard';
import StickyNote from './StickyNote';
import HeroIllustration from './illustrations/HeroIllustration';

interface DashboardViewProps {
  entry: DashboardEntry;
}

const moodEmoji = (m: number) => m >= 8 ? '🌟' : m >= 6 ? '😊' : m >= 4 ? '😐' : '🌧️';

export default function DashboardView({ entry }: DashboardViewProps) {
  const date = new Date(entry.date).toLocaleDateString('en-US', {
    month: 'long', day: 'numeric', year: 'numeric',
  });

  return (
    <div>
      {/* Header banner */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-3xl p-6 mb-6 relative overflow-hidden flex items-center justify-between"
        style={{ backgroundColor: '#FFF3CC' }}
      >
        <span className="absolute top-4 right-32 text-[#fbbf24] text-2xl sparkle-anim">✦</span>
        <span className="absolute bottom-6 right-52 text-[#f472b6] text-base sparkle-anim" style={{ animationDelay: '0.8s' }}>✦</span>
        <span className="absolute top-8 left-72 text-[#a78bfa] text-sm sparkle-anim" style={{ animationDelay: '1.2s' }}>✦</span>

        <div>
          <h1 className="font-900 text-3xl text-gray-900 mb-1 flex items-center gap-2" style={{ fontWeight: 900 }}>
            Good job, human! 🌈
          </h1>
          <p className="text-gray-600 text-sm mb-3" style={{ fontWeight: 600 }}>
            Here&apos;s your life dashboard for
          </p>
          <div className="inline-flex items-center gap-2 bg-white/70 border border-yellow-200 rounded-xl px-4 py-2 text-sm font-700 text-gray-800" style={{ fontWeight: 700 }}>
            {date}
          </div>
        </div>

        <div className="float">
          <HeroIllustration />
        </div>
      </motion.div>

      {/* Metrics heading */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-900 text-gray-900 text-xl" style={{ fontWeight: 900 }}>Your Life Metrics</h2>
        <span className="text-[#fbbf24] text-lg">✦</span>
      </div>

      {/* Metrics grid */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <MetricCard metric="mainCharacterEnergy" value={entry.metrics.mainCharacterEnergy} index={0} />
        <MetricCard metric="avoidanceRate" value={entry.metrics.avoidanceRate} index={1} />
        <MetricCard metric="emotionalBandwidth" value={entry.metrics.emotionalBandwidth} index={2} />
        <MetricCard metric="delusionToExecutionRatio" value={entry.metrics.delusionToExecutionRatio} index={3} />
        <MetricCard metric="overthinkingIndex" value={entry.metrics.overthinkingIndex} index={4} fullWidth />
      </div>

      {/* Bottom row: sticky note + summary + insight */}
      <div className="flex gap-4 items-start">
        <StickyNote />
        <SummaryCard summary={entry.summary} />
        <InsightCard insight={entry.insight} />
      </div>

      {/* Today's vitals strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="mt-5 bg-white rounded-2xl px-5 py-4 card-shadow flex items-center gap-3 flex-wrap"
      >
        <span className="text-sm font-700 text-gray-500 flex-shrink-0" style={{ fontWeight: 700 }}>Today&apos;s vitals</span>
        <div className="flex gap-3 flex-wrap">
          {[
            { label: 'Mood', v: entry.mood, emoji: moodEmoji(entry.mood), color: '#fbbf24' },
            { label: 'Sleep', v: entry.sleep, emoji: '🌙', color: '#a78bfa' },
            { label: 'Social', v: entry.socialBattery, emoji: '🔋', color: '#4ade80' },
            { label: 'Focus', v: entry.focus, emoji: '🎯', color: '#60a5fa' },
            { label: 'Move', v: entry.movement, emoji: '👟', color: '#f472b6' },
            { label: 'Drama', v: entry.dramatic, emoji: '🎭', color: '#f87171' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-1.5 bg-gray-50 rounded-xl px-3 py-1.5">
              <span className="text-sm">{item.emoji}</span>
              <span className="text-xs text-gray-500" style={{ fontWeight: 600 }}>{item.label}</span>
              <span className="text-sm font-800" style={{ fontWeight: 800, color: item.color }}>{item.v}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
