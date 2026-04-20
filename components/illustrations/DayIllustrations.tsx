export function CoffeeCupScene() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Legs */}
      <ellipse cx="38" cy="96" rx="8" ry="4" fill="#1a1a1a"/>
      <ellipse cx="62" cy="96" rx="8" ry="4" fill="#1a1a1a"/>
      <rect x="32" y="70" width="12" height="28" rx="6" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="1.5"/>
      <rect x="56" y="70" width="12" height="28" rx="6" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Body */}
      <rect x="28" y="42" width="44" height="32" rx="14" fill="#fb923c" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Arms */}
      <path d="M28 52 Q16 52 14 62 Q16 68 28 66" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>
      <path d="M72 52 Q84 52 86 62 Q84 68 72 66" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Hands holding cup */}
      <rect x="55" y="60" width="22" height="18" rx="5" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Coffee in hands */}
      <rect x="58" y="58" width="16" height="16" rx="4" fill="#fb923c" stroke="#1a1a1a" strokeWidth="1.5"/>
      <path d="M74 64 Q79 64 79 68 Q79 72 74 72" stroke="#1a1a1a" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Steam */}
      <path d="M63 56 Q65 51 63 46" stroke="#9ca3af" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <path d="M68 56 Q70 50 68 45" stroke="#9ca3af" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* Head */}
      <circle cx="50" cy="30" r="20" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Hair */}
      <path d="M30 24 Q32 10 50 8 Q68 10 70 24 Q64 15 50 14 Q36 15 30 24Z" fill="#1a1a1a"/>
      {/* Eyes */}
      <circle cx="43" cy="28" r="3.5" fill="#1a1a1a"/>
      <circle cx="57" cy="28" r="3.5" fill="#1a1a1a"/>
      <circle cx="44" cy="27" r="1.2" fill="white"/>
      <circle cx="58" cy="27" r="1.2" fill="white"/>
      {/* Smile */}
      <path d="M43 36 Q50 41 57 36" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="37" cy="33" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
      <ellipse cx="63" cy="33" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
    </svg>
  );
}

export function LaptopScene() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Desk */}
      <rect x="5" y="72" width="90" height="6" rx="3" fill="#d1d5db" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Laptop */}
      <rect x="20" y="48" width="60" height="28" rx="4" fill="#e2e8f0" stroke="#1a1a1a" strokeWidth="1.5"/>
      <rect x="24" y="52" width="52" height="22" rx="3" fill="#bfdbfe"/>
      <rect x="12" y="74" width="76" height="4" rx="2" fill="#cbd5e1" stroke="#1a1a1a" strokeWidth="1"/>
      {/* Screen lines */}
      <rect x="28" y="56" width="20" height="2" rx="1" fill="#60a5fa" opacity="0.8"/>
      <rect x="28" y="61" width="36" height="1.5" rx="0.75" fill="#93c5fd" opacity="0.6"/>
      <rect x="28" y="65" width="28" height="1.5" rx="0.75" fill="#93c5fd" opacity="0.6"/>
      {/* Thought bubble */}
      <circle cx="75" cy="30" r="12" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="70" cy="42" r="5" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <circle cx="65" cy="50" r="3" fill="white" stroke="#1a1a1a" strokeWidth="1.5"/>
      <text x="70" y="34" fontSize="10" fill="#fbbf24" textAnchor="middle">✦</text>
      {/* Person */}
      <circle cx="50" cy="36" r="16" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>
      <path d="M34 30 Q35 18 50 16 Q65 18 66 30 Q60 22 50 20 Q40 22 34 30Z" fill="#1a1a1a"/>
      <circle cx="44" cy="35" r="3" fill="#1a1a1a"/>
      <circle cx="56" cy="35" r="3" fill="#1a1a1a"/>
      <circle cx="45" cy="34" r="1" fill="white"/>
      <circle cx="57" cy="34" r="1" fill="white"/>
      <path d="M44 43 Q50 47 56 43" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="38" cy="40" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
      <ellipse cx="62" cy="40" rx="4" ry="2.5" fill="#fca5a5" opacity="0.7"/>
    </svg>
  );
}

export function EnergyDipScene() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Pillow */}
      <ellipse cx="50" cy="88" rx="42" ry="12" fill="#c4b5fd" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Blanket */}
      <path d="M8 75 Q50 65 92 75 L92 90 Q50 95 8 90 Z" fill="#ddd6fe" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Body under blanket */}
      <path d="M15 70 Q50 58 85 70 L85 82 Q50 88 15 82 Z" fill="#ede9fe" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Phone in hands */}
      <rect x="40" y="55" width="22" height="32" rx="4" fill="#1e293b" stroke="#1a1a1a" strokeWidth="1.5"/>
      <rect x="42" y="58" width="18" height="26" rx="3" fill="#60a5fa"/>
      {/* Phone screen content */}
      <rect x="44" y="60" width="14" height="3" rx="1.5" fill="#bfdbfe"/>
      <rect x="44" y="66" width="10" height="2" rx="1" fill="#93c5fd"/>
      <rect x="44" y="71" width="12" height="2" rx="1" fill="#93c5fd"/>
      <rect x="44" y="76" width="8" height="2" rx="1" fill="#93c5fd"/>
      {/* Hands */}
      <path d="M38 65 Q34 60 38 55 Q42 55 44 60" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.2"/>
      <path d="M62 65 Q66 60 62 55 Q58 55 56 60" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.2"/>
      {/* Head on pillow */}
      <circle cx="50" cy="58" r="18" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>
      <path d="M32 52 Q34 38 50 36 Q66 38 68 52 Q62 44 50 42 Q38 44 32 52Z" fill="#1a1a1a"/>
      {/* Sleepy eyes */}
      <path d="M40 57 Q44 54 48 57" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M52 57 Q56 54 60 57" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Little smile */}
      <path d="M43 65 Q50 69 57 65" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="37" cy="62" rx="4" ry="3" fill="#fca5a5" opacity="0.7"/>
      <ellipse cx="63" cy="62" rx="4" ry="3" fill="#fca5a5" opacity="0.7"/>
      {/* Z Z Z */}
      <text x="70" y="48" fontSize="10" fill="#a78bfa" fontWeight="bold">z</text>
      <text x="78" y="38" fontSize="12" fill="#a78bfa" fontWeight="bold">z</text>
      <text x="88" y="26" fontSize="14" fill="#a78bfa" fontWeight="bold">z</text>
    </svg>
  );
}

export function MotivationScene() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ground shadow */}
      <ellipse cx="50" cy="97" rx="20" ry="4" fill="#e5e7eb"/>
      {/* Legs jumping */}
      <path d="M40 70 Q34 82 30 92" stroke="#fde68a" strokeWidth="8" strokeLinecap="round" fill="none"/>
      <path d="M60 70 Q66 82 70 92" stroke="#fde68a" strokeWidth="8" strokeLinecap="round" fill="none"/>
      {/* Sneakers */}
      <ellipse cx="30" cy="92" rx="9" ry="5" fill="#f87171" stroke="#1a1a1a" strokeWidth="1.5"/>
      <ellipse cx="70" cy="92" rx="9" ry="5" fill="#f87171" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Body */}
      <rect x="32" y="42" width="36" height="32" rx="14" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Arms up */}
      <path d="M32 50 Q18 40 16 28 Q22 26 28 36 L32 50" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>
      <path d="M68 50 Q82 40 84 28 Q78 26 72 36 L68 50" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Stars in raised hands */}
      <text x="10" y="22" fontSize="14" fill="#fbbf24">★</text>
      <text x="80" y="22" fontSize="14" fill="#fbbf24">★</text>
      {/* Head */}
      <circle cx="50" cy="28" r="20" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Crown */}
      <path d="M34 18 L37 8 L42 16 L50 6 L58 16 L63 8 L66 18 Z" fill="#fbbf24" stroke="#1a1a1a" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="37" cy="8" r="2.5" fill="#f472b6"/>
      <circle cx="50" cy="6" r="3" fill="#60a5fa"/>
      <circle cx="63" cy="8" r="2.5" fill="#4ade80"/>
      {/* Sunglasses */}
      <rect x="34" y="23" width="13" height="9" rx="4" fill="#1a1a1a"/>
      <rect x="53" y="23" width="13" height="9" rx="4" fill="#1a1a1a"/>
      <rect x="47" y="26" width="6" height="2" rx="1" fill="#374151"/>
      <rect x="36" y="24.5" width="5" height="2.5" rx="1" fill="white" opacity="0.4"/>
      <rect x="55" y="24.5" width="5" height="2.5" rx="1" fill="white" opacity="0.4"/>
      {/* Big smile */}
      <path d="M38 36 Q50 44 62 36" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <ellipse cx="33" cy="34" rx="4" ry="3" fill="#fca5a5" opacity="0.7"/>
      <ellipse cx="67" cy="34" rx="4" ry="3" fill="#fca5a5" opacity="0.7"/>
      {/* Motion lines */}
      <path d="M10 60 L18 60" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 68 L16 68" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
      <path d="M82 60 L90 60" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
      <path d="M84 68 L92 68" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function RestScene() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Bed */}
      <rect x="5" y="65" width="90" height="30" rx="8" fill="#f9a8d4" stroke="#1a1a1a" strokeWidth="2"/>
      <rect x="5" y="58" width="25" height="22" rx="6" fill="#fda4af" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Blanket */}
      <path d="M10 62 Q50 54 90 62 L90 90 Q50 94 10 90 Z" fill="#fce7f3" stroke="#1a1a1a" strokeWidth="1.5"/>
      {/* Pattern on blanket */}
      <text x="30" y="78" fontSize="10" fill="#f472b6" opacity="0.5">♥</text>
      <text x="50" y="82" fontSize="8" fill="#f472b6" opacity="0.5">♥</text>
      <text x="65" y="76" fontSize="10" fill="#f472b6" opacity="0.5">♥</text>
      {/* Person in bed */}
      <circle cx="50" cy="56" r="20" fill="#fde68a" stroke="#1a1a1a" strokeWidth="2"/>
      {/* Hair spread on pillow */}
      <path d="M30 50 Q32 34 50 32 Q68 34 70 50 Q64 42 50 40 Q36 42 30 50Z" fill="#1a1a1a"/>
      {/* Hair loose */}
      <path d="M30 50 Q22 55 20 62 Q30 62 35 55" fill="#1a1a1a"/>
      {/* Eyes closed - sleeping */}
      <path d="M40 53 Q44 50 48 53" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M52 53 Q56 50 60 53" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Smile */}
      <path d="M43 62 Q50 67 57 62" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <ellipse cx="37" cy="59" rx="4.5" ry="3" fill="#fca5a5" opacity="0.7"/>
      <ellipse cx="63" cy="59" rx="4.5" ry="3" fill="#fca5a5" opacity="0.7"/>
      {/* Moon and stars */}
      <text x="72" y="30" fontSize="16" fill="#fbbf24">🌙</text>
      <text x="10" y="28" fontSize="10" fill="#a78bfa">✦</text>
      <text x="82" y="48" fontSize="8" fill="#fbbf24">✦</text>
      <text x="5" y="48" fontSize="8" fill="#60a5fa">✦</text>
    </svg>
  );
}
