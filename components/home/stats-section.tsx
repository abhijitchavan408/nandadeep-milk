"use client";

import { STATS } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";

const STAT_ICONS = ["👨‍👩‍👧‍👦", "🥛", "⏳", "🧀"];

export function StatsSection() {
  const { language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-amber-600 py-12 lg:py-16">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.08)_0%,transparent_50%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <div
              key={stat.labelEn}
              className="flex flex-col items-center gap-2 rounded-xl bg-white/10 px-4 py-6 text-center backdrop-blur-sm transition-transform hover:scale-105"
            >
              <span className="text-2xl">{STAT_ICONS[index]}</span>
              <span className="font-heading text-3xl font-bold text-white lg:text-4xl">
                {stat.value}
              </span>
              <span className="text-sm font-medium text-white/80">
                {language === "en" ? stat.labelEn : stat.labelMr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
