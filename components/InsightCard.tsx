"use client";
import { motion } from 'framer-motion';
import { CrystalBallIllustration } from './illustrations/MetricIllustrations';

interface InsightCardProps {
  insight: string;
}

export default function InsightCard({ insight }: InsightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="bg-white rounded-3xl p-5 card-shadow flex-1"
    >
      <h3 className="font-800 text-[#7c3aed] text-base mb-3 flex items-center gap-1" style={{ fontWeight: 800 }}>
        Questionable Insight <span className="text-[#fbbf24]">✦</span>
      </h3>
      <div className="flex gap-3 items-center">
        <div className="flex-shrink-0">
          <CrystalBallIllustration />
        </div>
        <p className="text-gray-700 text-sm leading-relaxed flex-1" style={{ fontWeight: 600 }}>
          {insight.split('✦').map((part, i, arr) =>
            i < arr.length - 1
              ? <span key={i}>{part}<span className="text-[#fbbf24]">✦</span></span>
              : <span key={i}>{part}</span>
          )}
        </p>
      </div>
    </motion.div>
  );
}
