"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

interface ServiceDetailCardProps {
  id: string;
  title: string;
  titleMr: string;
  fullDescription: string;
  fullDescriptionMr: string;
  features: readonly string[];
  featuresMr: readonly string[];
  icon: string;
  image: string;
  index: number;
}

export function ServiceDetailCard({
  id,
  title,
  titleMr,
  fullDescription,
  fullDescriptionMr,
  features,
  featuresMr,
  image,
  index,
}: ServiceDetailCardProps) {
  const { language, t } = useLanguage();
  const isEven = index % 2 === 0;
  const s = translations.services;

  return (
    <Card id={id} className="overflow-hidden scroll-mt-24">
      <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
        {/* Image Side */}
        <div className="relative h-64 w-full lg:h-auto lg:w-2/5">
          <Image
            src={image}
            alt={language === "en" ? title : titleMr}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </div>

        {/* Content Side */}
        <div className="flex flex-col p-6 lg:w-3/5 lg:p-8">
          <CardHeader className="p-0 pb-4">
            <CardTitle className="font-heading text-2xl">
              {language === "en" ? title : titleMr}
            </CardTitle>
            <CardDescription className="text-base leading-relaxed">
              {language === "en" ? fullDescription : fullDescriptionMr}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
              {t(s.whatWeOffer.en, s.whatWeOffer.mr)}
            </h4>
            <ul className="grid gap-2 sm:grid-cols-2">
              {(language === "en" ? features : featuresMr).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
