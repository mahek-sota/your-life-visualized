"use client";
import { motion } from 'framer-motion';
import { FlowerIllustration } from './illustrations/MetricIllustrations';

interface SummaryCardProps {
  summary: string;
}

export default function SummaryCard({ summary }: SummaryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className="bg-white rounded-3xl p-5 card-shadow flex-1"
    >
      <h3 className="font-800 text-gray-900 text-base mb-3 flex items-center gap-1" style={{ fontWeight: 800 }}>
        Today, in a Nutshell <span className="text-[#fbbf24]">✦</span>
      </h3>
      <div className="flex gap-4 items-center">
        <div className="flex-shrink-0">
          <FlowerIllustration />
        </div>
        <div className="flex-1">
          <p className="text-gray-700 text-sm leading-relaxed mb-4" style={{ fontWeight: 600 }}>
            {summary}
          </p>
          <button className="bg-gray-900 text-white text-sm font-700 px-5 py-2.5 rounded-full hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5" style={{ fontWeight: 700 }}>
            Tell me more ✨
          </button>
        </div>
      </div>
    </motion.div>
  );
}
