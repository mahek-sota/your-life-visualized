"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import SliderInput from './SliderInput';
import { CheckInData } from '@/types';

interface CheckInPanelProps {
  onSubmit: (data: CheckInData) => void;
  loading?: boolean;
}

const defaultData: CheckInData = {
  mood: 7,
  sleep: 7,
  socialBattery: 5,
  focus: 6,
  movement: 5,
  dramatic: 6,
};

const sliderConfig = [
  { key: 'mood' as keyof CheckInData, label: 'Mood', icon: '😊', color: '#fbbf24', min: 1, max: 10 },
  { key: 'sleep' as keyof CheckInData, label: 'Sleep', icon: '🌙', color: '#a78bfa', min: 0, max: 12, unit: '/12' },
  { key: 'socialBattery' as keyof CheckInData, label: 'Social Battery', icon: '🔋', color: '#4ade80', min: 1, max: 10 },
  { key: 'focus' as keyof CheckInData, label: 'Focus', icon: '🎯', color: '#60a5fa', min: 1, max: 10 },
  { key: 'movement' as keyof CheckInData, label: 'Movement', icon: '👟', color: '#f472b6', min: 1, max: 10 },
];

export default function CheckInPanel({ onSubmit, loading }: CheckInPanelProps) {
  const [data, setData] = useState<CheckInData>(defaultData);

  const update = (key: keyof CheckInData) => (v: number) =>
    setData(prev => ({ ...prev, [key]: v }));

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl p-6 card-shadow h-fit md:sticky md:top-24"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="font-900 text-[22px] text-gray-900 leading-tight" style={{ fontWeight: 900 }}>
          How&apos;s your<br />today looking?
        </h2>
        <p className="text-gray-500 text-sm mt-1 flex items-center gap-1" style={{ fontWeight: 600 }}>
          Rate your day so far <span>🩷</span>
        </p>
      </div>

      {/* Sliders */}
      <div>
        {sliderConfig.map(cfg => (
          <SliderInput
            key={cfg.key}
            label={cfg.label}
            icon={cfg.icon}
            value={data[cfg.key]}
            min={cfg.min}
            max={cfg.max}
            onChange={update(cfg.key)}
            color={cfg.color}
            unit={cfg.unit}
          />
        ))}
      </div>

      {/* Dramatic section */}
      <div className="mt-2 pt-4 border-t border-gray-100">
        <h3 className="font-800 text-gray-800 mb-1 text-sm flex items-center gap-1" style={{ fontWeight: 800 }}>
          🎭 How dramatic did today feel?
          <span className="text-[#fbbf24] text-xs">✦</span>
        </h3>
        <SliderInput
          label=""
          icon=""
          value={data.dramatic}
          min={1}
          max={10}
          onChange={update('dramatic')}
          color="#f87171"
        />
      </div>

      {/* Submit */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        onClick={() => onSubmit(data)}
        disabled={loading}
        className="w-full mt-4 bg-gray-900 hover:bg-gray-800 text-white font-800 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all disabled:opacity-70"
        style={{ fontWeight: 800 }}
      >
        {loading ? (
          <>
            <span className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            Generating…
          </>
        ) : (
          <>Generate My Dashboard ✨</>
        )}
      </motion.button>
    </motion.div>
  );
}
