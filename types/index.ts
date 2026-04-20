export type ThemeName = 'pastel' | 'sunshine' | 'ocean' | 'candy' | 'neon' | 'galaxy';

export interface CheckInData {
  mood: number;
  sleep: number;
  socialBattery: number;
  focus: number;
  movement: number;
  dramatic: number;
}

export interface Metrics {
  mainCharacterEnergy: number;
  avoidanceRate: number;
  emotionalBandwidth: number;
  delusionToExecutionRatio: number;
  overthinkingIndex: number;
}

export interface DashboardEntry {
  id: string;
  date: string;
  mood: number;
  sleep: number;
  socialBattery: number;
  focus: number;
  movement: number;
  dramatic: number;
  metrics: Metrics;
  summary: string;
  insight: string;
  theme?: ThemeName;
}

export interface Theme {
  name: ThemeName;
  label: string;
  emoji: string;
  bg: string;
  bgGradient: string;
  card: string;
  cardBorder: string;
  accent: string;
  accentText: string;
  accentBg: string;
  text: string;
  subtext: string;
  highlight: string;
  pattern: string;
  nav: string;
}
