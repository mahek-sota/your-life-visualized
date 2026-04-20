"use client";
import { motion } from 'framer-motion';
import { CoffeeCupScene, LaptopScene, EnergyDipScene, MotivationScene, RestScene } from './illustrations/DayIllustrations';

const scenes = [
  { illustration: CoffeeCupScene, caption: 'Started the day\nwith good intentions' },
  { illustration: LaptopScene, caption: 'Did some things\n(ish)' },
  { illustration: EnergyDipScene, caption: 'Energy dip\n(very normal)' },
  { illustration: MotivationScene, caption: 'Hit a random burst\nof motivation' },
  { illustration: RestScene, caption: 'Now you. Rest.\nYou earned it.' },
];

export default function DayInIllustrations() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 py-8">
      <h2 className="font-900 text-gray-900 text-xl mb-6" style={{ fontWeight: 900 }}>
        Your Day in Illustrations ✦
      </h2>
      <div className="grid grid-cols-5 gap-4">
        {scenes.map(({ illustration: Illustration, caption }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 + i * 0.08 }}
            className="bg-white rounded-2xl p-4 flex flex-col items-center gap-3 card-shadow hover:scale-105 transition-transform cursor-default"
          >
            <Illustration />
            <p className="text-center text-xs text-gray-600 leading-snug whitespace-pre-line" style={{ fontWeight: 600 }}>
              {caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
