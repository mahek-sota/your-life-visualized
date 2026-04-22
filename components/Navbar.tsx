"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Today', icon: '◎' },
  { href: '/history', label: 'History', icon: '⊕' },
  { href: '/insights', label: 'Insights', icon: '↑↓' },
  { href: '/playground', label: 'Playground', icon: '◈' },
];

interface NavbarProps {
  onNewDay?: () => void;
}

export default function Navbar({ onNewDay }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 group">
          <span className="text-[#fbbf24] text-lg sparkle-anim">✦</span>
          <div className="leading-tight">
            <div className="font-black text-[17px] text-gray-900 leading-none">life, but</div>
            <div className="font-black text-[17px] text-gray-900 leading-none flex items-center gap-1">
              make it fun
              <span className="text-base">☺</span>
            </div>
          </div>
          <span className="text-[#fbbf24] text-sm sparkle-anim" style={{ animationDelay: '0.5s' }}>✦</span>
        </Link>

        {/* Nav links — desktop only */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-700 transition-all ${
                  active
                    ? 'text-gray-900 font-800'
                    : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                <span className="text-xs opacity-60">{link.icon}</span>
                <span style={{ fontWeight: active ? 800 : 700 }}>{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right side — desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onNewDay}
            className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-800 text-sm px-5 py-2.5 rounded-full transition-all hover:scale-105 active:scale-95"
            style={{ fontWeight: 800 }}
          >
            New Day ✨
          </button>
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center text-sm border-2 border-white shadow-sm overflow-hidden">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <circle cx="18" cy="18" r="18" fill="#f9a8d4"/>
              <circle cx="18" cy="15" r="8" fill="#fde68a" stroke="#1a1a1a" strokeWidth="1.5"/>
              <path d="M10 14 Q10 6 18 5 Q26 6 26 14 Q22 9 18 9 Q14 9 10 14Z" fill="#1a1a1a"/>
              <ellipse cx="15" cy="16" rx="2" ry="2" fill="#1a1a1a"/>
              <ellipse cx="21" cy="16" rx="2" ry="2" fill="#1a1a1a"/>
              <path d="M15 20 Q18 23 21 20" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              <path d="M5 32 Q18 24 31 32" fill="#c4b5fd" stroke="none"/>
            </svg>
          </div>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-9 h-9 items-center"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-800 rounded transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Active tab underline — desktop only */}
      <div className="hidden md:flex max-w-[1200px] mx-auto px-6 gap-1 relative">
        {navLinks.map(link => (
          <div key={link.href} className={`px-4 py-0 flex-shrink-0 ${pathname === link.href ? 'border-b-[3px] border-[#fb923c]' : ''}`} style={{ minWidth: 80 }} />
        ))}
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-md px-4 py-3 flex flex-col gap-1">
          {navLinks.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl text-sm transition-all ${
                  active
                    ? 'bg-gray-50 text-gray-900 border-l-[3px] border-[#fb923c]'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={{ fontWeight: active ? 800 : 700 }}
              >
                <span className="text-xs opacity-60">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
          {onNewDay && (
            <button
              onClick={() => { onNewDay(); setMenuOpen(false); }}
              className="mt-2 w-full bg-gray-900 text-white text-sm py-3 rounded-xl font-800 flex items-center justify-center gap-2"
              style={{ fontWeight: 800 }}
            >
              New Day ✨
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
