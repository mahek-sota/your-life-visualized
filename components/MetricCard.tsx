"use client";
import { motion } from 'framer-motion';
import { Metrics } from '@/types';
import { getMetricLabel } from '@/lib/metrics';
import {
  MainCharacterIllustration,
  AvoidanceIllustration,
  BandwidthIllustration,
  DelusionIllustration,
  OverthinkingIllustration,
} from './illustrations/MetricIllustrations';

const METRIC_CONFIG: Record<keyof Metrics, {
  label: string;
  bg: string;
  badgeBg: string;
  badgeText: string;
  blurb: (v: number) => string;
  illustration: () => React.ReactNode;
}> = {
  mainCharacterEnergy: {
    label: 'Main Character Energy',
    bg: '#FFF9E0',
    badgeBg: '#fef9c3',
    badgeText: '#b45309',
    blurb: v => v >= 70
      ? "You're in your own movie and the soundtrack is 🔥"
      : v >= 45
      ? "You're building up to your big scene."
      : "Side character arc. But make it intentional.",
    illustration: () => <MainCharacterIllustration />,
  },
  avoidanceRate: {
    label: 'Avoidance Rate',
    bg: '#F3EEFF',
    badgeBg: '#ede9fe',
    badgeText: '#6d28d9',
    blurb: v => v >= 70
      ? "Productive procrastination at its finest."
      : v >= 45
      ? "Hovering near the to-do list. Respect."
      : "Surprisingly present today. We're proud.",
    illustration: () => <AvoidanceIllustration />,
  },
  emotionalBandwidth: {
    label: 'Emotional Bandwidth',
    bg: '#EDFBF2',
    badgeBg: '#dcfce7',
    badgeText: '#15803d',
    blurb: v => v >= 70
      ? "Running on full signal. Excellent range."
      : v >= 45
      ? "Running a few tabs, but Chrome is holding on."
      : "Low signal. Airplane mode is valid self-care.",
    illustration: () => <BandwidthIllustration />,
  },
  delusionToExecutionRatio: {
    label: 'Delusion-to-Execution Ratio',
    bg: '#FFF0F6',
    badgeBg: '#fce7f3',
    badgeText: '#be185d',
    blurb: v => v >= 70
      ? "Big ideas, baby. Execution… pending."
      : v >= 45
      ? "The vision is there. The calendar is chaos."
      : "Grounded and getting things done. Wild.",
    illustration: () => <DelusionIllustration />,
  },
  overthinkingIndex: {
    label: 'Overthinking Index',
    bg: '#EEF3FF',
    badgeBg: '#dbeafe',
    badgeText: '#1e40af',
    blurb: v => v >= 70
      ? "Your brain has excellent Wi-Fi and zero chill."
      : v >= 45
      ? "Processing at premium speed. Very galaxy brain."
      : "Unusually calm. Are you okay? (Affectionately.)",
    illustration: () => <OverthinkingIllustration />,
  },
};

interface MetricCardProps {
  metric: keyof Metrics;
  value: number;
  index: number;
  fullWidth?: boolean;
}

export default function MetricCard({ metric, value, index, fullWidth }: MetricCardProps) {
  const cfg = METRIC_CONFIG[metric];
  const label = getMetricLabel(metric, value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`rounded-3xl p-5 flex gap-4 items-start relative overflow-hidden card-shadow ${fullWidth ? 'sm:col-span-2' : ''}`}
      style={{ backgroundColor: cfg.bg }}
    >
      {/* Illustration */}
      <div className="flex-shrink-0 -mt-2 -mb-2">
        {cfg.illustration()}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-800 text-gray-900 text-base leading-snug" style={{ fontWeight: 800 }}>
            {cfg.label} <span className="text-[#fbbf24] text-xs">✦</span>
          </h3>
          <span
            className="flex-shrink-0 text-xs font-700 px-2.5 py-0.5 rounded-full border"
            style={{
              backgroundColor: cfg.badgeBg,
              color: cfg.badgeText,
              borderColor: cfg.badgeBg,
              fontWeight: 700,
            }}
          >
            {label}
          </span>
        </div>

        {/* Score */}
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-5xl font-900 text-gray-900" style={{ fontWeight: 900 }}>{value}</span>
          <span className="text-gray-400 font-600">/100</span>
        </div>

        {/* Progress bar (for emotional bandwidth card) */}
        {metric === 'emotionalBandwidth' && (
          <div className="flex gap-1 mb-2">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-2.5 flex-1 rounded-full"
                style={{ backgroundColor: i < Math.round(value / 12.5) ? '#4ade80' : '#e5e7eb' }}
              />
            ))}
          </div>
        )}

        <p className="text-gray-600 text-sm leading-snug" style={{ fontWeight: 600 }}>
          {cfg.blurb(value)}
        </p>
      </div>
    </motion.div>
  );
}
