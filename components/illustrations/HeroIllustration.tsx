export default function HeroIllustration() {
  return (
    <svg width="220" height="180" viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Plant pot */}
      <rect x="12" y="110" width="28" height="22" rx="4" fill="#a7f3d0" stroke="#1a1a1a" strokeWidth="2"/>
      <rect x="8" y="128" width="36" height="8" rx="3" fill="#6ee7b7" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Plant leaves */}
      <ellipse cx="26" cy="95" rx="12" ry="18" fill="#4ade80" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-20 26 95)"/>
      <ellipse cx="40" cy="90" rx="10" ry="16" fill="#86efac" stroke="#1a1a1a" strokeWidth="2" transform="rotate(15 40 90)"/>
      <ellipse cx="18" cy="92" rx="8" ry="14" fill="#4ade80" stroke="#1a1a1a" strokeWidth="2" transform="rotate(-35 18 92)"/>

      {/* Couch/cushion */}
      <rect x="55" y="120" width="140" height="45" rx="16" fill="#c4b5fd" stroke="#1a1a1a" strokeWidth="2.5"/>
      <rect x="60" y="108" width="40" height="55" rx="12" fill="#a78bfa" stroke="#1a1a1a" strokeWidth="2.5"/>
      <rect x="155" y="108" width="40" height="55" rx="12" fill="#a78bfa" stroke="#1a1a1a" strokeWidth="2.5"/>
      <rect x="65" y="124" width="125" height="35" rx="12" fill="#ddd6fe" stroke="#1a1a1a" strokeWidth="2"/>

      {/* Body */}
      <ellipse cx="127" cy="118" rx="30" ry="22" fill="#fef3c7" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Shirt */}
      <path d="M100 120 Q127 108 154 120 L150 145 Q127 155 104 145 Z" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Legs crossed */}
      <path d="M104 140 Q90 152 85 158 Q95 165 110 155 Q118 148 127 145" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M150 140 Q164 152 168 158 Q158 165 143 155 Q135 148 127 145" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>

      {/* Mug */}
      <rect x="113" y="130" width="24" height="22" rx="5" fill="#fb923c" stroke="#1a1a1a" strokeWidth="2"/>
      <path d="M137 138 Q145 138 145 144 Q145 150 137 150" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <rect x="116" y="133" width="18" height="4" rx="2" fill="#fed7aa"/>
      {/* Steam */}
      <path d="M119 128 Q121 123 119 118" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M125 128 Q127 122 125 116" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M131 128 Q133 123 131 118" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Arms */}
      <path d="M100 122 Q88 128 90 136 Q102 136 108 132" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
      <path d="M154 122 Q162 128 158 136 Q148 136 140 132" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>

      {/* Head */}
      <ellipse cx="127" cy="88" rx="28" ry="26" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2.5"/>
      {/* Hair */}
      <path d="M99 80 Q100 55 127 52 Q154 55 155 80 Q148 70 127 68 Q106 70 99 80Z" fill="#1a1a1a"/>
      {/* Hair bun */}
      <circle cx="127" cy="55" r="12" fill="#1a1a1a"/>
      <circle cx="127" cy="55" r="8" fill="#374151"/>
      {/* Face */}
      <circle cx="118" cy="89" r="3.5" fill="#1a1a1a"/>
      <circle cx="136" cy="89" r="3.5" fill="#1a1a1a"/>
      <circle cx="119" cy="88" r="1" fill="white"/>
      <circle cx="137" cy="88" r="1" fill="white"/>
      {/* Smile */}
      <path d="M119 97 Q127 103 135 97" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Rosy cheeks */}
      <ellipse cx="111" cy="95" rx="6" ry="4" fill="#fca5a5" opacity="0.6"/>
      <ellipse cx="143" cy="95" rx="6" ry="4" fill="#fca5a5" opacity="0.6"/>

      {/* Sun */}
      <circle cx="190" cy="30" r="16" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2"/>
      <circle cx="190" cy="30" r="10" fill="#fbbf24"/>
      {/* Sun rays */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => (
        <line key={i}
          x1={190 + 18 * Math.cos(angle * Math.PI/180)}
          y1={30 + 18 * Math.sin(angle * Math.PI/180)}
          x2={190 + 24 * Math.cos(angle * Math.PI/180)}
          y2={30 + 24 * Math.sin(angle * Math.PI/180)}
          stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"
        />
      ))}
      {/* Sun face */}
      <circle cx="186" cy="28" r="2" fill="#1a1a1a"/>
      <circle cx="194" cy="28" r="2" fill="#1a1a1a"/>
      <path d="M186 33 Q190 36 194 33" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Sparkles */}
      <text x="70" y="40" fontSize="14" fill="#fbbf24">✦</text>
      <text x="175" y="75" fontSize="10" fill="#f472b6">✦</text>
      <text x="48" y="75" fontSize="10" fill="#a78bfa">✦</text>
      {/* Hearts */}
      <text x="160" y="95" fontSize="14" fill="#f472b6">♥</text>
      <text x="55" y="55" fontSize="10" fill="#fb923c">♥</text>
    </svg>
  );
}
