import { DashboardEntry } from '@/types';

const KEY = 'life-dashboard-entries';
const MAX_ENTRIES = 7;

export function saveEntry(entry: DashboardEntry): void {
  const entries = getEntries();
  const filtered = entries.filter(e => e.date !== entry.date);
  const updated = [entry, ...filtered].slice(0, MAX_ENTRIES);
  localStorage.setItem(KEY, JSON.stringify(updated));
}

export function getEntries(): DashboardEntry[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function clearEntries(): void {
  localStorage.removeItem(KEY);
}
