"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import landing from "@/public/images/landing-page-image.jpg";

export function HeroSection() {
  const { t } = useLanguage();
  const h = translations.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-amber-50/30 to-orange-50/20">
      {/* Decorative blobs */}
      <div
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-green-200/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-[400px] w-[400px] rounded-full bg-amber-200/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-green-100/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-7xl flex-col-reverse items-center gap-10 px-4 py-14 lg:flex-row lg:gap-16 lg:px-8 lg:py-24">
        {/* Text Content */}
        <div className="flex flex-1 flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-300/50 bg-green-100/60 px-4 py-1.5 text-sm font-semibold text-green-700 shadow-sm">
            <Leaf className="h-3.5 w-3.5" />
            {t(h.badge.en, h.badge.mr)}
          </div>

          <h1 className="max-w-xl text-balance font-heading text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            {t(h.titlePart1.en, h.titlePart1.mr)}{" "}
            <span className="bg-gradient-to-r from-green-600 to-amber-500 bg-clip-text text-transparent">
              {t(h.titleHighlight.en, h.titleHighlight.mr)}
            </span>{" "}
            {t(h.titlePart2.en, h.titlePart2.mr)}
          </h1>

          <p className="max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {t(h.description.en, h.description.mr)}
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-gradient-to-r from-green-600 to-green-500 shadow-lg shadow-green-600/25 transition-shadow hover:shadow-xl hover:shadow-green-600/30"
            >
              <Link href="/contact">
                {t(h.cta1.en, h.cta1.mr)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2 border-green-200 hover:bg-green-50">
              <Link href="/services">{t(h.cta2.en, h.cta2.mr)}</Link>
            </Button>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
            {[h.points.p1, h.points.p2, h.points.p3].map((point) => (
              <li key={point.en} className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                {t(point.en, point.mr)}
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Image */}
        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative h-[300px] w-[300px] overflow-hidden rounded-3xl shadow-2xl shadow-green-900/10 ring-4 ring-white/60 md:h-[420px] md:w-[420px] lg:h-[480px] lg:w-[480px]">
            <Image
              src={landing}
              alt="Fresh milk being poured"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 300px, (max-width: 1024px) 420px, 480px"
            />
          </div>
          {/* Floating badge - bottom left */}
          <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white/90 px-5 py-3 shadow-lg backdrop-blur-sm md:-bottom-6 md:-left-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                <span className="text-xl">🥛</span>
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">7000+ L</p>
                <p className="text-xs text-muted-foreground">{t("Daily Fresh Milk", "दररोज ताजे दूध")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
