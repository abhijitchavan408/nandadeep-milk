"use client";

import Image from "next/image";
import { HeroSection } from "@/components/home/hero-section";
import { ServicesPreview } from "@/components/home/services-preview";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { CTASection } from "@/components/home/cta-section";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { SectionHeader } from "@/components/shared/section-header";
import { TeamCard } from "@/components/about/team-card";
import { TEAM_MEMBERS } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";
import owner from "@/public/images/owner.jpg";

export default function HomePage() {
  const { language, t } = useLanguage();
  const a = translations.about;

  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <TestimonialsSection />
      
      {/* Owner Section */}
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
    </main>
  );
}
