"use client";
import { motion } from 'framer-motion';

export default function EmptyDashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center h-full min-h-[400px] text-center px-8"
    >
      {/* Illustration */}
      <div className="float mb-6">
        <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Big star */}
          <path d="M80 20 L88 58 L126 58 L96 80 L108 118 L80 96 L52 118 L64 80 L34 58 L72 58 Z" fill="#fef9c3" stroke="#fbbf24" strokeWidth="2.5"/>
          <path d="M80 35 L86 57 L108 57 L91 70 L98 92 L80 78 L62 92 L69 70 L52 57 L74 57 Z" fill="#fde68a"/>
          {/* Face on star */}
          <circle cx="72" cy="62" r="4" fill="#1a1a1a"/>
          <circle cx="88" cy="62" r="4" fill="#1a1a1a"/>
          <circle cx="73" cy="61" r="1.5" fill="white"/>
          <circle cx="89" cy="61" r="1.5" fill="white"/>
          <path d="M72 74 Q80 80 88 74" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <ellipse cx="66" cy="70" rx="5" ry="3" fill="#fca5a5" opacity="0.6"/>
          <ellipse cx="94" cy="70" rx="5" ry="3" fill="#fca5a5" opacity="0.6"/>
          {/* Floating sparkles */}
          <text x="10" y="40" fontSize="18" fill="#fbbf24">✦</text>
          <text x="130" y="35" fontSize="14" fill="#f472b6">✦</text>
          <text x="18" y="120" fontSize="12" fill="#a78bfa">✦</text>
          <text x="130" y="115" fontSize="16" fill="#60a5fa">✦</text>
          <text x="60" y="148" fontSize="12" fill="#4ade80">✦</text>
          {/* Hearts */}
          <text x="5" y="80" fontSize="14" fill="#f472b6">♥</text>
          <text x="140" y="85" fontSize="12" fill="#fbbf24">♥</text>
        </svg>
      </div>

      <h2 className="font-900 text-2xl text-gray-900 mb-2" style={{ fontWeight: 900 }}>
        Here&apos;s your life, visualized.
      </h2>
      <p className="text-gray-500 text-sm leading-relaxed max-w-xs" style={{ fontWeight: 600 }}>
        Scientifically unverified, emotionally accurate.<br/>
        Fill in your check-in and hit <strong>Generate</strong> to see your dashboard.
      </p>

      {/* Decorative tags */}
      <div className="flex flex-wrap gap-2 justify-center mt-6">
        {['Iconic', 'Premium', 'Caffeinated', 'Chaotic', 'Cute', 'Bold'].map(tag => (
          <span key={tag} className="text-xs font-700 px-3 py-1.5 bg-white rounded-full border border-gray-100 text-gray-600 card-shadow" style={{ fontWeight: 700 }}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
