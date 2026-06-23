"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function CTASection() {
  const { t } = useLanguage();
  const c = translations.cta;

  return (
    <SectionWrapper className="pb-16 pt-8 lg:pb-24 lg:pt-12">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-700 via-green-600 to-amber-600 px-6 py-14 text-center lg:px-12 lg:py-18">
        {/* Decorative patterns */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
          aria-hidden="true"
        />

        <div className="relative flex flex-col items-center gap-5">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <span className="text-3xl">🥛</span>
          </div>
          <h2 className="max-w-2xl text-balance font-heading text-3xl font-bold text-white lg:text-4xl">
            {t(c.title.en, c.title.mr)}
          </h2>
          <p className="max-w-xl text-pretty text-base text-white/85 lg:text-lg">
            {t(c.description.en, c.description.mr)}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="gap-2 bg-white text-green-700 font-semibold shadow-lg hover:bg-white/90"
            >
              <Link href="/contact">
                {t(c.cta1.en, c.cta1.mr)}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/about">{t(c.cta2.en, c.cta2.mr)}</Link>
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
