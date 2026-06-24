"use client";

import Image from "next/image";
import { Heart, Leaf, Truck, Shield } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { Card, CardContent } from "@/components/ui/card";
import { TeamCard } from "@/components/about/team-card";
import { StatsSection } from "@/components/home/stats-section";
import { CTASection } from "@/components/home/cta-section";
import { TEAM_MEMBERS } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import farm from "@/public/images/farm.jpg";
import owner from "@/public/images/owner.jpg";

export default function AboutPage() {
  const { language, t } = useLanguage();
  const a = translations.about;

  const VALUES = [
    {
      icon: Heart,
      title: { en: "Pure & Natural", mr: "शुद्ध आणि नैसर्गिक" },
      description: {
        en: "We believe in delivering 100% pure and natural dairy products with no preservatives or artificial additives.",
        mr: "आम्ही कोणतेही प्रिझर्व्हेटिव्ह किंवा कृत्रिम पदार्थ न वापरता १००% शुद्ध आणि नैसर्गिक दुग्ध उत्पादने देण्यावर विश्वास ठेवतो.",
      },
    },
    {
      icon: Leaf,
      title: { en: "Grass-Fed Cattle", mr: "गवत खाणारे गुरे" },
      description: {
        en: "Our cows and buffaloes are raised on natural pastures, ensuring the richest and most nutritious milk.",
        mr: "आमच्या गायी आणि म्हशी नैसर्गिक कुरणावर वाढवल्या जातात, ज्यामुळे सर्वात समृद्ध आणि पौष्टिक दूध मिळते.",
      },
    },
    {
      icon: Truck,
      title: { en: "Daily Delivery", mr: "दररोज डिलिव्हरी" },
      description: {
        en: "Fresh milk and products are delivered to your doorstep every morning, rain or shine.",
        mr: "पाऊस असो वा ऊन, दररोज सकाळी ताजे दूध आणि उत्पादने तुमच्या दारापर्यंत पोहोचवली जातात.",
      },
    },
    {
      icon: Shield,
      title: { en: "Quality Tested", mr: "गुणवत्ता तपासलेले" },
      description: {
        en: "Every batch undergoes rigorous quality testing to ensure you get only the best dairy products.",
        mr: "तुम्हाला फक्त सर्वोत्तम दुग्ध उत्पादने मिळतील याची खात्री करण्यासाठी प्रत्येक बॅचची कडक गुणवत्ता तपासणी केली जाते.",
      },
    },
  ];

  return (
    <>
      <PageHeader
        badge={t(a.badge.en, a.badge.mr)}
        title={t(a.title.en, a.title.mr)}
        description={t(a.description.en, a.description.mr)}
      />

      {/* Story Section */}
      <SectionWrapper>
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center gap-4">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground">
              {t(a.storyTitle.en, a.storyTitle.mr)}
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              {t(a.storyP1.en, a.storyP1.mr)}
            </p>
            <p className="leading-relaxed text-muted-foreground">
              {t(a.storyP2.en, a.storyP2.mr)}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={farm}
              alt={t("Our dairy farm", "आमचे डेअरी फार्म")}
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="flex flex-col items-center gap-2 text-center">
                <span className="font-heading text-6xl font-bold text-white">
                  15+
                </span>
                <span className="text-lg font-medium text-white/90">
                  {t(a.yearsText.en, a.yearsText.mr)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-green-50/50">
        <SectionHeader
          badge={t(a.valuesTitle.en, a.valuesTitle.mr)}
          title={t(a.valuesSubtitle.en, a.valuesSubtitle.mr)}
          description={t(a.valuesDescription.en, a.valuesDescription.mr)}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value) => (
            <Card key={value.title.en} className="text-center">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground">
                  {t(value.title.en, value.title.mr)}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {t(value.description.en, value.description.mr)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionWrapper>

      <StatsSection />

      {/* Owner */}
      <SectionWrapper>
        <SectionHeader
          badge={t(a.teamBadge.en, a.teamBadge.mr)}
          title={t(a.teamTitle.en, a.teamTitle.mr)}
          description={t(a.teamDescription.en, a.teamDescription.mr)}
        />
        <div className="mt-12 flex justify-center">
          <TeamCard
            name={TEAM_MEMBERS[0].name}
            nameMr={TEAM_MEMBERS[0].nameMr}
            role={TEAM_MEMBERS[0].role}
            roleMr={TEAM_MEMBERS[0].roleMr}
            bio={TEAM_MEMBERS[0].bio}
            bioMr={TEAM_MEMBERS[0].bioMr}
            image={owner.src}
          />
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
