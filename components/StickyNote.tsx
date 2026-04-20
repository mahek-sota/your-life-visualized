"use client";
import { motion } from 'framer-motion';

const reminders = [
  "You're doing better than your overthinking is telling you.",
  "Your energy today is a vibe. Not every vibe has to be explained.",
  "Resting is still doing something. It's called recovering.",
  "You don't have to have it all figured out. Most people don't.",
  "Today happened. That's enough.",
  "You are not a project to be optimized. You're a person.",
  "Feeling behind is a feeling, not a fact.",
  "Small wins are still wins. Count them.",
];

export default function StickyNote() {
  const reminder = reminders[Math.floor(Math.random() * reminders.length)];

  return (
    <motion.div
      initial={{ opacity: 0, rotate: -2, scale: 0.95 }}
      animate={{ opacity: 1, rotate: -1.5, scale: 1 }}
      transition={{ duration: 0.4, delay: 0.4 }}
      className="relative w-48 flex-shrink-0"
      style={{ transform: 'rotate(-1.5deg)' }}
    >
      {/* Tape strip at top */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-12 h-4 bg-yellow-200/80 rounded-sm opacity-80 z-10" />

      {/* Note body */}
      <div
        className="bg-[#FFF9A0] rounded-2xl p-4 relative"
        style={{ boxShadow: '3px 4px 12px rgba(0,0,0,0.10)' }}
      >
        {/* Lines */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-b border-gray-400" style={{ height: '24px' }} />
          ))}
        </div>

        <p className="font-700 text-sm text-gray-800 leading-snug relative z-10" style={{ fontWeight: 700 }}>
          <span className="font-800 block mb-1 text-gray-900" style={{ fontWeight: 800 }}>Reminder:</span>
          {reminder}
        </p>

        {/* Smiley sticker */}
        <div className="flex justify-end mt-3">
          <div className="w-9 h-9 rounded-full bg-[#f472b6] flex items-center justify-center text-white text-base shadow-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" fill="#f472b6"/>
              <circle cx="8.5" cy="10" r="1.5" fill="white"/>
              <circle cx="15.5" cy="10" r="1.5" fill="white"/>
              <path d="M8 15 Q12 18 16 15" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
