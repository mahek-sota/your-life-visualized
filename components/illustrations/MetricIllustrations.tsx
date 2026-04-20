"use client";

export function MainCharacterIllustration() {
  return (
    <svg width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Cloud */}
      <ellipse cx="65" cy="100" rx="45" ry="22" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <ellipse cx="40" cy="95" rx="20" ry="18" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <ellipse cx="90" cy="95" rx="18" ry="16" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <ellipse cx="65" cy="88" rx="28" ry="20" fill="white" stroke="#1a1a1a" strokeWidth="2"/>

      {/* Body on cloud */}
      <path d="M50 95 Q65 85 80 95 L77 110 Q65 115 53 110 Z" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Arms */}
      <path d="M52 98 Q42 100 40 108" stroke="#fde68a" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M78 98 Q88 100 90 108" stroke="#fde68a" strokeWidth="5" strokeLinecap="round" fill="none"/>

      {/* Head */}
      <ellipse cx="65" cy="72" rx="22" ry="20" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Hair */}
      <path d="M43 65 Q44 48 65 46 Q86 48 87 65 Q80 56 65 54 Q50 56 43 65Z" fill="#1a1a1a"/>
      {/* Sunglasses */}
      <rect x="48" y="68" width="14" height="9" rx="4" fill="#1a1a1a"/>
      <rect x="68" y="68" width="14" height="9" rx="4" fill="#1a1a1a"/>
      <rect x="62" y="71" width="6" height="2" rx="1" fill="#374151"/>
      <rect x="44" y="71" width="4" height="1" rx="0.5" fill="#374151"/>
      <rect x="82" y="71" width="4" height="1" rx="0.5" fill="#374151"/>
      {/* Shine on glasses */}
      <rect x="50" y="69.5" width="4" height="2" rx="1" fill="white" opacity="0.5"/>
      <rect x="70" y="69.5" width="4" height="2" rx="1" fill="white" opacity="0.5"/>
      {/* Smile */}
      <path d="M57 82 Q65 87 73 82" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Cheeks */}
      <ellipse cx="50" cy="79" rx="5" ry="3.5" fill="#fca5a5" opacity="0.7"/>
      <ellipse cx="80" cy="79" rx="5" ry="3.5" fill="#fca5a5" opacity="0.7"/>

      {/* Crown */}
      <path d="M47 55 L50 42 L58 52 L65 38 L72 52 L80 42 L83 55 Z" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="50" cy="42" r="3" fill="#f472b6"/>
      <circle cx="65" cy="38" r="3.5" fill="#60a5fa"/>
      <circle cx="80" cy="42" r="3" fill="#4ade80"/>

      {/* Sparkles */}
      <text x="8" y="55" fontSize="16" fill="#fbbf24">✦</text>
      <text x="105" y="45" fontSize="12" fill="#f472b6">✦</text>
      <text x="15" y="110" fontSize="10" fill="#a78bfa">✦</text>
      <text x="108" y="105" fontSize="10" fill="#fbbf24">✦</text>
    </svg>
  );
}

export function AvoidanceIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Desk / surface */}
      <rect x="10" y="82" width="100" height="10" rx="4" fill="#c4b5fd" stroke="#1a1a1a" strokeWidth="2"/>

      {/* Laptop body */}
      <rect x="22" y="52" width="76" height="48" rx="6" fill="#e2e8f0" stroke="#1a1a1a" strokeWidth="2"/>
      <rect x="26" y="56" width="68" height="40" rx="4" fill="#94a3b8"/>
      {/* Screen glow */}
      <rect x="28" y="58" width="64" height="36" rx="3" fill="#bfdbfe"/>
      {/* Screen content */}
      <rect x="32" y="63" width="30" height="3" rx="1.5" fill="#60a5fa"/>
      <rect x="32" y="69" width="50" height="2" rx="1" fill="#93c5fd" opacity="0.7"/>
      <rect x="32" y="74" width="40" height="2" rx="1" fill="#93c5fd" opacity="0.7"/>
      <rect x="32" y="79" width="45" height="2" rx="1" fill="#93c5fd" opacity="0.7"/>
      {/* Laptop keyboard */}
      <rect x="15" y="94" width="90" height="6" rx="3" fill="#cbd5e1" stroke="#1a1a1a" strokeWidth="1.5"/>

      {/* Coffee cup beside laptop */}
      <rect x="88" y="68" width="20" height="22" rx="5" fill="#fb923c" stroke="#1a1a1a" strokeWidth="1.5"/>
      <path d="M108 76 Q115 76 115 82 Q115 87 108 87" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <rect x="91" y="71" width="14" height="3" rx="1.5" fill="#fed7aa"/>
      {/* Steam from coffee */}
      <path d="M93 66 Q95 61 93 56" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M98 66 Q100 60 98 55" stroke="#9ca3af" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Person peeking from behind laptop */}
      {/* Hair peeking */}
      <path d="M28 56 Q60 38 92 56" fill="#7c3aed" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Eyes peeking */}
      <circle cx="48" cy="56" r="5.5" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="72" cy="56" r="5.5" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="49" cy="57" r="3" fill="#1a1a1a"/>
      <circle cx="73" cy="57" r="3" fill="#1a1a1a"/>
      <circle cx="50" cy="56" r="1" fill="white"/>
      <circle cx="74" cy="56" r="1" fill="white"/>
      {/* Hands gripping laptop */}
      <path d="M22 62 Q20 58 25 55 Q28 60 26 65Z" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>
      <path d="M98 62 Q100 58 95 55 Q92 60 94 65Z" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>

      {/* Sparkles */}
      <text x="5" y="45" fontSize="12" fill="#a78bfa">✦</text>
      <text x="100" y="35" fontSize="10" fill="#f472b6">✦</text>
      <text x="8" y="100" fontSize="8" fill="#fbbf24">✦</text>
    </svg>
  );
}

export function BandwidthIllustration() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Brain/cloud body */}
      <ellipse cx="60" cy="65" rx="38" ry="32" fill="#86efac" stroke="#1a1a1a" strokeWidth="2"/>
      <ellipse cx="38" cy="52" rx="18" ry="16" fill="#86efac" stroke="#1a1a1a" strokeWidth="2"/>
      <ellipse cx="82" cy="52" rx="16" ry="14" fill="#86efac" stroke="#1a1a1a" strokeWidth="2"/>
      <ellipse cx="60" cy="42" rx="20" ry="16" fill="#86efac" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Brain lines */}
      <path d="M42 58 Q50 50 58 58 Q66 66 74 58 Q82 50 90 58" stroke="#4ade80" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M48 72 Q56 66 64 72 Q72 78 80 72" stroke="#4ade80" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Headphones */}
      <path d="M28 55 Q30 30 60 28 Q90 30 92 55" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <rect x="20" y="52" width="14" height="20" rx="7" fill="#f472b6" stroke="#1a1a1a" strokeWidth="2"/>
      <rect x="86" y="52" width="14" height="20" rx="7" fill="#f472b6" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Headphone cushions */}
      <ellipse cx="27" cy="62" rx="5" ry="8" fill="#fda4af"/>
      <ellipse cx="93" cy="62" rx="5" ry="8" fill="#fda4af"/>

      {/* Face */}
      <circle cx="50" cy="65" r="5" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="70" cy="65" r="5" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="51" cy="65" r="2.5" fill="#1a1a1a"/>
      <circle cx="71" cy="65" r="2.5" fill="#1a1a1a"/>
      <circle cx="52" cy="64" r="1" fill="white"/>
      <circle cx="72" cy="64" r="1" fill="white"/>
      <path d="M53 76 Q60 81 67 76" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="43" cy="72" rx="5" ry="3.5" fill="#fca5a5" opacity="0.6"/>
      <ellipse cx="77" cy="72" rx="5" ry="3.5" fill="#fca5a5" opacity="0.6"/>

      {/* Battery indicator below */}
      <rect x="30" y="95" width="60" height="16" rx="4" fill="white" stroke="#1a1a1a" strokeWidth="2"/>
      <rect x="90" y="100" width="5" height="6" rx="1.5" fill="#1a1a1a"/>
      <rect x="33" y="98" width="12" height="10" rx="2" fill="#4ade80"/>
      <rect x="47" y="98" width="12" height="10" rx="2" fill="#4ade80"/>
      <rect x="61" y="98" width="12" height="10" rx="2" fill="#fbbf24"/>
      <rect x="75" y="98" width="10" height="10" rx="2" fill="#e5e7eb"/>

      {/* Sparkles */}
      <text x="5" y="30" fontSize="12" fill="#4ade80">✦</text>
      <text x="100" y="25" fontSize="10" fill="#fbbf24">✦</text>
      <text x="108" y="90" fontSize="8" fill="#f472b6">✦</text>
    </svg>
  );
}

export function DelusionIllustration() {
  return (
    <svg width="120" height="130" viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Balloons */}
      {/* Red balloon */}
      <ellipse cx="30" cy="28" rx="16" ry="18" fill="#f87171" stroke="#1a1a1a" strokeWidth="2"/>
      <path d="M30 46 Q28 55 32 62" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="24" cy="22" rx="5" ry="7" fill="white" opacity="0.3"/>
      {/* Yellow balloon */}
      <ellipse cx="60" cy="22" rx="18" ry="20" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="2"/>
      <path d="M60 42 Q58 52 62 60" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="53" cy="16" rx="6" ry="8" fill="white" opacity="0.3"/>
      {/* Purple balloon */}
      <ellipse cx="90" cy="30" rx="15" ry="17" fill="#a78bfa" stroke="#1a1a1a" strokeWidth="2"/>
      <path d="M90 47 Q88 55 92 63" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="84" cy="24" rx="5" ry="6" fill="white" opacity="0.3"/>

      {/* Balloon strings to hands */}
      <path d="M32 62 Q40 70 44 80" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M62 60 Q62 70 60 80" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M92 63 Q85 72 76 80" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>

      {/* Body floating up */}
      <path d="M43 90 Q60 80 77 90 L73 112 Q60 118 47 112 Z" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Arms up holding strings */}
      <path d="M44 93 Q38 86 43 80" stroke="#fde68a" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M76 93 Q82 86 76 80" stroke="#fde68a" strokeWidth="5" strokeLinecap="round" fill="none"/>
      {/* Legs dangling */}
      <path d="M49 112 Q44 122 48 128" stroke="#fde68a" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M71 112 Q76 122 72 128" stroke="#fde68a" strokeWidth="5" strokeLinecap="round" fill="none"/>
      {/* Sneakers */}
      <ellipse cx="48" cy="128" rx="7" ry="4" fill="#f87171" stroke="#1a1a1a" strokeWidth="1.5"/>
      <ellipse cx="72" cy="128" rx="7" ry="4" fill="#f87171" stroke="#1a1a1a" strokeWidth="1.5"/>

      {/* Head */}
      <ellipse cx="60" cy="76" rx="20" ry="18" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Hair */}
      <path d="M40 70 Q42 55 60 53 Q78 55 80 70 Q74 62 60 60 Q46 62 40 70Z" fill="#1a1a1a"/>
      {/* Eyes - happy/dreamy */}
      <path d="M50 73 Q53 70 56 73" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M64 73 Q67 70 70 73" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M53 82 Q60 87 67 82" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="46" cy="79" rx="4.5" ry="3" fill="#fca5a5" opacity="0.7"/>
      <ellipse cx="74" cy="79" rx="4.5" ry="3" fill="#fca5a5" opacity="0.7"/>

      {/* Stars/sparkles floating */}
      <text x="5" y="55" fontSize="14" fill="#fbbf24">✦</text>
      <text x="105" y="60" fontSize="12" fill="#f472b6">✦</text>
      <text x="8" y="105" fontSize="8" fill="#a78bfa">★</text>
      <text x="108" y="100" fontSize="8" fill="#60a5fa">★</text>
    </svg>
  );
}

export function OverthinkingIllustration() {
  return (
    <svg width="130" height="120" viewBox="0 0 130 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Storm cloud - main body */}
      <ellipse cx="65" cy="72" rx="42" ry="32" fill="#93c5fd" stroke="#1a1a1a" strokeWidth="2"/>
      <ellipse cx="40" cy="58" rx="22" ry="20" fill="#93c5fd" stroke="#1a1a1a" strokeWidth="2"/>
      <ellipse cx="88" cy="55" rx="20" ry="18" fill="#93c5fd" stroke="#1a1a1a" strokeWidth="2"/>
      <ellipse cx="65" cy="48" rx="26" ry="20" fill="#93c5fd" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Dark storm center overlay */}
      <ellipse cx="65" cy="60" rx="30" ry="22" fill="#bfdbfe" stroke="#1a1a1a" strokeWidth="1.5"/>

      {/* Face - worried */}
      <circle cx="52" cy="62" r="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="78" cy="62" r="6" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="53" cy="63" r="3.5" fill="#1a1a1a"/>
      <circle cx="79" cy="63" r="3.5" fill="#1a1a1a"/>
      <circle cx="54" cy="62" r="1.2" fill="white"/>
      <circle cx="80" cy="62" r="1.2" fill="white"/>
      {/* Worried eyebrows */}
      <path d="M47 54 Q52 51 57 54" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M73 54 Q78 51 83 54" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Worried mouth */}
      <path d="M56 75 Q65 70 74 75" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="45" cy="70" rx="5" ry="3.5" fill="#93c5fd"/>
      <ellipse cx="85" cy="70" rx="5" ry="3.5" fill="#93c5fd"/>

      {/* Lightning bolts */}
      <path d="M38 88 L43 100 L38 100 L44 114" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M85 88 L90 100 L85 100 L92 114" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      {/* Scribble/thought lines */}
      <path d="M15 38 Q20 30 28 38 Q36 46 42 36" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      <path d="M90 30 Q95 22 103 30 Q111 38 118 28" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
      {/* Rain drops */}
      <ellipse cx="50" cy="108" rx="3" ry="5" fill="#60a5fa" stroke="#1a1a1a" strokeWidth="1"/>
      <ellipse cx="65" cy="112" rx="3" ry="5" fill="#60a5fa" stroke="#1a1a1a" strokeWidth="1"/>
      <ellipse cx="80" cy="108" rx="3" ry="5" fill="#60a5fa" stroke="#1a1a1a" strokeWidth="1"/>

      {/* Sparkles */}
      <text x="5" y="20" fontSize="12" fill="#60a5fa">✦</text>
      <text x="110" y="18" fontSize="10" fill="#a78bfa">✦</text>
    </svg>
  );
}

export function FlowerIllustration() {
  return (
    <svg width="100" height="110" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Stem */}
      <path d="M50 95 Q48 80 50 65" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" fill="none"/>
      {/* Leaves */}
      <path d="M50 85 Q35 80 32 70 Q42 72 50 82" fill="#86efac" stroke="#1a1a1a" strokeWidth="1.5"/>
      <path d="M50 80 Q65 75 68 65 Q58 67 50 77" fill="#86efac" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <ellipse key={i}
          cx={50 + 22 * Math.cos((angle - 90) * Math.PI / 180)}
          cy={38 + 22 * Math.sin((angle - 90) * Math.PI / 180)}
          rx="10" ry="14"
          fill={i % 2 === 0 ? "#fbbf24" : "#fb923c"}
          stroke="#1a1a1a" strokeWidth="1.5"
          transform={`rotate(${angle}, ${50 + 22 * Math.cos((angle - 90) * Math.PI / 180)}, ${38 + 22 * Math.sin((angle - 90) * Math.PI / 180)})`}
        />
      ))}
      {/* Center */}
      <circle cx="50" cy="38" r="16" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2"/>
      <circle cx="50" cy="38" r="12" fill="#fbbf24"/>
      {/* Face */}
      <circle cx="44" cy="35" r="3" fill="#1a1a1a"/>
      <circle cx="56" cy="35" r="3" fill="#1a1a1a"/>
      <circle cx="45" cy="34" r="1" fill="white"/>
      <circle cx="57" cy="34" r="1" fill="white"/>
      <path d="M44 43 Q50 48 56 43" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="40" cy="40" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
      <ellipse cx="60" cy="40" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
    </svg>
  );
}

export function CrystalBallIllustration() {
  return (
    <svg width="100" height="110" viewBox="0 0 100 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Base */}
      <ellipse cx="50" cy="100" rx="30" ry="8" fill="#c4b5fd" stroke="#1a1a1a" strokeWidth="2"/>
      <path d="M28 92 Q50 85 72 92 L68 100 Q50 104 32 100 Z" fill="#a78bfa" stroke="#1a1a1a" strokeWidth="2"/>
      <rect x="36" y="88" width="28" height="8" rx="4" fill="#c4b5fd" stroke="#1a1a1a" strokeWidth="1.5"/>

      {/* Ball */}
      <circle cx="50" cy="52" r="40" fill="#ddd6fe" stroke="#1a1a1a" strokeWidth="2"/>
      <circle cx="50" cy="52" r="40" fill="url(#ballGrad)"/>
      <defs>
        <radialGradient id="ballGrad" cx="35%" cy="35%">
          <stop offset="0%" stopColor="white" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#c4b5fd" stopOpacity="0.2"/>
        </radialGradient>
      </defs>

      {/* Mystic content inside ball */}
      <circle cx="50" cy="52" r="30" fill="#ede9fe" opacity="0.7"/>
      {/* Stars inside */}
      <text x="36" y="48" fontSize="14" fill="#7c3aed" opacity="0.8">★</text>
      <text x="50" y="62" fontSize="10" fill="#a78bfa" opacity="0.8">✦</text>
      <text x="56" y="44" fontSize="8" fill="#7c3aed" opacity="0.8">✦</text>
      {/* Swirls */}
      <path d="M32 55 Q40 48 48 55 Q56 62 64 55" stroke="#7c3aed" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round"/>
      <path d="M36 65 Q44 58 52 65" stroke="#a78bfa" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round"/>

      {/* Highlight */}
      <ellipse cx="36" cy="36" rx="10" ry="8" fill="white" opacity="0.4"/>

      {/* Sparkles around */}
      <text x="5" y="25" fontSize="12" fill="#a78bfa">✦</text>
      <text x="82" y="22" fontSize="10" fill="#fbbf24">✦</text>
      <text x="88" y="70" fontSize="8" fill="#f472b6">✦</text>
      <text x="5" y="75" fontSize="8" fill="#60a5fa">✦</text>
    </svg>
  );
}
