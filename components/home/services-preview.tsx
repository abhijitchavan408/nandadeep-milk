"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { SERVICES } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const GRADIENT_COLORS = [
  "from-green-500/10 to-green-600/5",
  "from-amber-500/10 to-amber-600/5",
  "from-orange-500/10 to-orange-600/5",
  "from-yellow-500/10 to-yellow-600/5",
];

export function ServicesPreview() {
  const { language, t } = useLanguage();
  const s = translations.services;

  return (
    <SectionWrapper>
      <SectionHeader
        badge={t(s.badge.en, s.badge.mr)}
        title={t(s.title.en, s.title.mr)}
        description={t(s.description.en, s.description.mr)}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <Card
            key={service.id}
            className={`group relative overflow-hidden border-0 bg-gradient-to-br ${GRADIENT_COLORS[index]} shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
          >
            {/* Product Image */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={service.image}
                alt={language === "en" ? service.title : service.titleMr}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <CardHeader className="pb-3">
              <CardTitle className="font-heading text-lg">
                {language === "en" ? service.title : service.titleMr}
              </CardTitle>
              <CardDescription className="leading-relaxed">
                {language === "en" ? service.shortDescription : service.shortDescriptionMr}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <Link
                href={`/services#${service.id}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                {t(s.learnMore.en, s.learnMore.mr)}
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button asChild variant="outline" size="lg" className="gap-2 border-primary/30 text-primary hover:bg-primary/5">
          <Link href="/services">
            {t(s.exploreAll.en, s.exploreAll.mr)}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </SectionWrapper>
  );
}
