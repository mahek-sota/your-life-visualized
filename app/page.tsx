"use client";
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import CheckInPanel from '@/components/CheckInPanel';
import DashboardView from '@/components/DashboardView';
import EmptyDashboard from '@/components/EmptyDashboard';
import DayInIllustrations from '@/components/DayInIllustrations';
import Footer from '@/components/Footer';
import { CheckInData, DashboardEntry } from '@/types';
import { calculateMetrics, generateSummary, generateInsight } from '@/lib/metrics';
import { saveEntry, getEntries } from '@/lib/storage';

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export default function HomePage() {
  const [entry, setEntry] = useState<DashboardEntry | null>(null);
  const [loading, setLoading] = useState(false);
  const [showIllustrations, setShowIllustrations] = useState(false);

  useEffect(() => {
    const entries = getEntries();
    const today = new Date().toISOString().split('T')[0];
    const todayEntry = entries.find(e => e.date.startsWith(today));
    if (todayEntry) {
      setEntry(todayEntry);
      setShowIllustrations(true);
    }
  }, []);

  const handleSubmit = async (data: CheckInData) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 600));

    const metrics = calculateMetrics(data);
    const summary = generateSummary(data, metrics);
    const insight = generateInsight(data, metrics);

    const newEntry: DashboardEntry = {
      id: generateId(),
      date: new Date().toISOString(),
      ...data,
      metrics,
      summary,
      insight,
    };

    saveEntry(newEntry);
    setEntry(newEntry);
    setShowIllustrations(true);
    setLoading(false);
  };

  const handleNewDay = () => {
    setEntry(null);
    setShowIllustrations(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#FFFBEE' }}>
      <Navbar onNewDay={handleNewDay} />

      <main className="max-w-[1200px] mx-auto px-6 py-6 flex-1">
        <div className="flex gap-6 items-start">
          {/* Left: check-in form */}
          <div className="w-[280px] flex-shrink-0">
            <CheckInPanel onSubmit={handleSubmit} loading={loading} />
          </div>

          {/* Right: dashboard */}
          <div className="flex-1 min-w-0" id="dashboard">
            {entry ? (
              <DashboardView entry={entry} />
            ) : (
              <div className="bg-white rounded-3xl card-shadow min-h-[500px]">
                <EmptyDashboard />
              </div>
            )}
          </div>
        </div>
      </main>

      {showIllustrations && <DayInIllustrations />}

      <Footer />
    </div>
  );
}
