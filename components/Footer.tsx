"use client";
import { motion } from 'framer-motion';

function FooterGirlIllustration() {
  return (
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Legs */}
      <path d="M50 68 Q44 82 40 94" stroke="#fde68a" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <path d="M68 68 Q72 80 74 90" stroke="#fde68a" strokeWidth="7" strokeLinecap="round" fill="none"/>
      <ellipse cx="40" cy="94" rx="8" ry="4" fill="#f472b6" stroke="#1a1a1a" strokeWidth="1.2"/>
      <ellipse cx="74" cy="90" rx="7" ry="4" fill="#f472b6" stroke="#1a1a1a" strokeWidth="1.2"/>
      {/* Body */}
      <path d="M40 48 Q59 38 78 48 L74 70 Q59 76 44 70 Z" fill="#86efac" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Arm with flower */}
      <path d="M42 52 Q30 50 24 60" stroke="#fde68a" strokeWidth="6" strokeLinecap="round" fill="none"/>
      <circle cx="20" cy="58" r="8" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="1.5"/>
      {[0,60,120,180,240,300].map((a,i) => (
        <ellipse key={i}
          cx={20 + 10 * Math.cos(a * Math.PI/180)}
          cy={58 + 10 * Math.sin(a * Math.PI/180)}
          rx="5" ry="7"
          fill={i%2===0?"#fbbf24":"#fb923c"}
          stroke="#1a1a1a" strokeWidth="1.2"
          transform={`rotate(${a}, ${20 + 10*Math.cos(a*Math.PI/180)}, ${58 + 10*Math.sin(a*Math.PI/180)})`}
        />
      ))}
      <circle cx="20" cy="58" r="6" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.2"/>
      {/* Other arm */}
      <path d="M76 52 Q88 50 92 60" stroke="#fde68a" strokeWidth="6" strokeLinecap="round" fill="none"/>
      {/* Head */}
      <circle cx="59" cy="34" r="20" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2"/>
      <path d="M39 28 Q41 14 59 12 Q77 14 79 28 Q73 20 59 18 Q45 20 39 28Z" fill="#1a1a1a"/>
      <circle cx="52" cy="32" r="3" fill="#1a1a1a"/>
      <circle cx="66" cy="32" r="3" fill="#1a1a1a"/>
      <circle cx="53" cy="31" r="1" fill="white"/>
      <circle cx="67" cy="31" r="1" fill="white"/>
      <path d="M52 41 Q59 46 66 41" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="46" cy="38" rx="4" ry="3" fill="#fca5a5" opacity="0.7"/>
      <ellipse cx="72" cy="38" rx="4" ry="3" fill="#fca5a5" opacity="0.7"/>
    </svg>
  );
}

function RainbowIllustration() {
  return (
    <svg width="90" height="70" viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 65 Q45 5 85 65" stroke="#f87171" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M12 65 Q45 14 78 65" stroke="#fb923c" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M19 65 Q45 23 71 65" stroke="#fbbf24" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M26 65 Q45 32 64 65" stroke="#4ade80" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M33 65 Q45 41 57 65" stroke="#60a5fa" strokeWidth="5" fill="none" strokeLinecap="round"/>
      <path d="M40 65 Q45 50 50 65" stroke="#a78bfa" strokeWidth="5" fill="none" strokeLinecap="round"/>
      {/* Clouds at ends */}
      <ellipse cx="10" cy="65" rx="10" ry="8" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
      <ellipse cx="4" cy="62" rx="7" ry="6" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
      <ellipse cx="80" cy="65" rx="10" ry="8" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
      <ellipse cx="86" cy="62" rx="7" ry="6" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
    </svg>
  );
}

function CloudIllustration() {
  return (
    <svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="35" cy="35" rx="28" ry="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
      <ellipse cx="20" cy="30" rx="14" ry="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
      <ellipse cx="50" cy="28" rx="16" ry="13" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
      <ellipse cx="35" cy="24" rx="18" ry="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="mt-4"
      style={{ backgroundColor: '#E4DAFF' }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: girl + text */}
        <div className="flex items-center gap-4">
          <FooterGirlIllustration />
          <div>
            <p className="font-900 text-gray-900 text-xl leading-tight" style={{ fontWeight: 900 }}>
              Tomorrow is a new vibe.
            </p>
            <p className="text-gray-700 text-sm mt-1 flex items-center gap-1" style={{ fontWeight: 600 }}>
              But for now, take a bow. <span>🎀</span>
            </p>
          </div>
        </div>

        {/* Middle: credits */}
        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-gray-700 text-sm" style={{ fontWeight: 700 }}>Created by Mahek Sota</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/mahek-sota/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/60 hover:bg-white/90 text-gray-800 text-xs px-3 py-1.5 rounded-full transition-all hover:scale-105 border border-white/50 shadow-sm"
              style={{ fontWeight: 700 }}
            >
              LinkedIn
            </a>
            <a
              href="https://impact-doc.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-white/60 hover:bg-white/90 text-gray-800 text-xs px-3 py-1.5 rounded-full transition-all hover:scale-105 border border-white/50 shadow-sm"
              style={{ fontWeight: 700 }}
            >
              Portfolio Website
            </a>
          </div>
        </div>

        {/* Right: rainbow + cloud */}
        <div className="flex items-end gap-2 flex-shrink-0">
          <CloudIllustration />
          <RainbowIllustration />
        </div>
      </div>
    </motion.footer>
  );
}
