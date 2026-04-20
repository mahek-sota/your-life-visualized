# life, but make it fun ☺

Your daily life dashboard — scientifically unverified, emotionally accurate.

## What it is

A one-session daily check-in app that turns simple mood and energy inputs into a fun, visually rich "life dashboard." Not a health tracker. Not a productivity app. Just a cheerful, illustrated mirror for your day.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and start your check-in.

## Pages

| Route | What it does |
|-------|-------------|
| `/` | Today's check-in form + generated dashboard |
| `/history` | Last 7 saved entries |
| `/insights` | Mood trends + metric averages |
| `/playground` | Coming-soon feature wishlist |

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — card animations, floating effects
- **localStorage** — all data stays local, no backend

## Metrics (0–100)

| Metric | Formula |
|--------|---------|
| Main Character Energy | 0.30×mood + 0.15×sleep + 0.20×dramatic + 0.10×movement + 0.25×social |
| Avoidance Rate | 0.40×(10−focus) + 0.25×dramatic + 0.20×(10−movement) + 0.15×(10−sleep) |
| Emotional Bandwidth | 0.35×mood + 0.25×sleep + 0.20×social + 0.20×focus |
| Delusion-to-Execution Ratio | 0.45×dramatic + 0.30×(10−focus) + 0.25×(10−sleep) |
| Overthinking Index | 0.35×dramatic + 0.30×(10−sleep) + 0.20×(10−social) + 0.15×(10−mood) |

Sleep is normalized to a 0–10 scale before use.

## Deploy to Vercel

```bash
vercel deploy
```

No environment variables. No database. No auth. Just vibes.

---

*"You are not lazy. You are on standby for your main plot."*
