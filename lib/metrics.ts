import { CheckInData, Metrics } from '@/types';

function normalize(value: number, min: number, max: number): number {
  return ((value - min) / (max - min)) * 10;
}

export function calculateMetrics(data: CheckInData): Metrics {
  const sleepNorm = normalize(data.sleep, 0, 12);

  const raw = {
    mainCharacterEnergy:
      0.30 * data.mood +
      0.15 * sleepNorm +
      0.20 * data.dramatic +
      0.10 * data.movement +
      0.25 * data.socialBattery,

    avoidanceRate:
      0.40 * (10 - data.focus) +
      0.25 * data.dramatic +
      0.20 * (10 - data.movement) +
      0.15 * (10 - sleepNorm),

    emotionalBandwidth:
      0.35 * data.mood +
      0.25 * sleepNorm +
      0.20 * data.socialBattery +
      0.20 * data.focus,

    delusionToExecutionRatio:
      0.45 * data.dramatic +
      0.30 * (10 - data.focus) +
      0.25 * (10 - sleepNorm),

    overthinkingIndex:
      0.35 * data.dramatic +
      0.30 * (10 - sleepNorm) +
      0.20 * (10 - data.socialBattery) +
      0.15 * (10 - data.mood),
  };

  const clamp = (v: number) => Math.round(Math.min(100, Math.max(0, v * 10)));

  return {
    mainCharacterEnergy: clamp(raw.mainCharacterEnergy),
    avoidanceRate: clamp(raw.avoidanceRate),
    emotionalBandwidth: clamp(raw.emotionalBandwidth),
    delusionToExecutionRatio: clamp(raw.delusionToExecutionRatio),
    overthinkingIndex: clamp(raw.overthinkingIndex),
  };
}

export function getMetricLabel(metric: keyof Metrics, value: number): string {
  if (metric === 'mainCharacterEnergy') {
    if (value >= 80) return 'Iconic';
    if (value >= 60) return 'Premium';
    if (value >= 40) return 'Bold';
    return 'Cozy';
  }
  if (metric === 'avoidanceRate') {
    if (value >= 80) return 'Chaotic';
    if (value >= 60) return 'High';
    if (value >= 40) return 'Pending';
    return 'On it';
  }
  if (metric === 'emotionalBandwidth') {
    if (value >= 80) return 'Full Signal';
    if (value >= 60) return 'Caffeinated';
    if (value >= 40) return 'Limited';
    return 'Low Signal';
  }
  if (metric === 'delusionToExecutionRatio') {
    if (value >= 80) return 'Visionary';
    if (value >= 60) return 'Bold';
    if (value >= 40) return 'Hopeful';
    return 'Grounded';
  }
  if (metric === 'overthinkingIndex') {
    if (value >= 80) return 'Spiraling';
    if (value >= 60) return 'Premium';
    if (value >= 40) return 'Simmering';
    return 'Calm';
  }
  return 'Cute';
}

const summaries = [
  "Scientifically unverified, emotionally accurate. Your brain has excellent Wi-Fi and zero chill.",
  "Running a few tabs, but Chrome is holding on. You are not lazy — you are on standby for your main plot.",
  "Big ideas, baby. Execution… pending. The vision board is very much alive.",
  "Productive procrastination at its finest. The vibe is immaculate.",
  "Your emotional bandwidth is giving 'browser with 47 tabs open'.",
  "Eating today's drama for breakfast and thriving. Respectfully.",
  "Main character behavior detected. The universe is watching.",
  "Your energy is chaotic good and we respect it entirely.",
  "Today's vibe: soft launch of a very ambitious inner life.",
  "Not a mess. A concept. A very layered, artistic concept.",
  "You showed up. That's already the whole move.",
  "Peak human behavior: overthinking and still somehow manifesting.",
  "The overthinking is just brainstorming at premium speed.",
  "Your social battery is on airplane mode. Iconic boundary.",
  "Napping is self-care. Dramatics are self-expression. You're fine.",
  "You had main character energy with a side of overthinking and a splash of drama. Not bad.",
];

const insights = [
  "Mercury is not in retrograde but your focus sure is.",
  "Your avoidance rate suggests a very creative relationship with your to-do list.",
  "Delusion-to-execution ratio indicates big dreamer energy. Execution is on the way. Maybe.",
  "The stars say rest. You say 'one more scroll.' Balance.",
  "Emotional bandwidth reading: running on vibes and ambient music.",
  "Your overthinking index is just galaxy brain in disguise.",
  "Main character energy confirmed. Side characters are simply not ready.",
  "The vibe check passed. You can go home now.",
  "Today's energy signature: cozy catastrophe with excellent hair.",
  "Your social battery is asking for a spa day. Respectfully.",
  "You wanted clarity, but also ✦ vibes ✦ — we see you.",
  "You have the focus of a golden retriever in a butterfly garden. Beautiful.",
  "Sleep debt is just 'future rest savings.' You'll cash it in eventually.",
  "Drama index elevated. This is normal. You are normal. (Mostly.)",
  "Overthinking detected. Please drink water and log off.",
  "The data suggests you are a limited edition model. One of one.",
];

export function generateSummary(data: CheckInData, metrics: Metrics): string {
  const score = (metrics.mainCharacterEnergy + metrics.emotionalBandwidth) / 2;
  const baseIdx = Math.floor((score / 100) * (summaries.length - 1));
  const jitter = Math.floor(Math.random() * 3) - 1;
  const idx = Math.max(0, Math.min(summaries.length - 1, baseIdx + jitter));
  return summaries[idx];
}

export function generateInsight(_data: CheckInData, _metrics: Metrics): string {
  return insights[Math.floor(Math.random() * insights.length)];
}
