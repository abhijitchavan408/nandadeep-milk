"use client";

import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { TESTIMONIALS } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const CARD_ACCENTS = [
  "hover:border-green-400/40",
  "hover:border-amber-400/40",
  "hover:border-orange-400/40",
];

export function TestimonialsSection() {
  const { language, t } = useLanguage();
  const tr = translations.testimonials;

  return (
    <SectionWrapper className="bg-gradient-to-b from-green-50/50 to-background">
      <SectionHeader
        badge={t(tr.badge.en, tr.badge.mr)}
        title={t(tr.title.en, tr.title.mr)}
        description={t(tr.description.en, tr.description.mr)}
      />

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <Card
            key={testimonial.author}
            className={`relative overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${CARD_ACCENTS[index]}`}
          >
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <Quote className="h-7 w-7 text-green-600/30" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <blockquote className="text-sm leading-relaxed text-muted-foreground">
                &ldquo;{language === "en" ? testimonial.quote : testimonial.quoteMr}&rdquo;
              </blockquote>
              <div className="mt-auto flex items-center gap-3 border-t pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-green-600 to-amber-500 text-sm font-bold text-white">
                  {(language === "en" ? testimonial.author : testimonial.authorMr).split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {language === "en" ? testimonial.author : testimonial.authorMr}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {language === "en" ? testimonial.role : testimonial.roleMr}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
