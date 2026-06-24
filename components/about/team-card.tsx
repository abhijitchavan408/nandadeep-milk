"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

interface TeamCardProps {
  name: string;
  nameMr: string;
  role: string;
  roleMr: string;
  bio: string;
  bioMr: string;
  image: string;
}

export function TeamCard({ name, nameMr, role, roleMr, bio, bioMr, image }: TeamCardProps) {
  const { language } = useLanguage();

  return (
    <Card className="mx-auto max-w-md overflow-hidden transition-all duration-300 hover:border-green-300/50 hover:shadow-xl">
      <CardContent className="flex flex-col items-center gap-5 p-8 text-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-green-200 shadow-lg">
          <Image
            src={image}
            alt={language === "en" ? name : nameMr}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-heading text-xl font-bold text-foreground">
            {language === "en" ? name : nameMr}
          </h3>
          <p className="text-sm font-semibold text-green-600">
            {language === "en" ? role : roleMr}
          </p>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {language === "en" ? bio : bioMr}
        </p>
      </CardContent>
    </Card>
  );
}
