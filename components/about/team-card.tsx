"use client";

import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";

interface TeamCardProps {
  name: string;
  nameMr: string;
  role: string;
  roleMr: string;
  bio: string;
  bioMr: string;
}

export function TeamCard({ name, nameMr, role, roleMr, bio, bioMr }: TeamCardProps) {
  const { language } = useLanguage();

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:border-green-300/50 hover:shadow-lg">
      <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <User className="h-10 w-10 text-green-600" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {language === "en" ? name : nameMr}
          </h3>
          <p className="text-sm font-medium text-green-600">
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
