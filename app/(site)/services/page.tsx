"use client";

import { PageHeader } from "@/components/shared/page-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { ServiceDetailCard } from "@/components/services/service-detail-card";
import { CTASection } from "@/components/home/cta-section";
import { SERVICES } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function ServicesPage() {
  const { t } = useLanguage();
  const s = translations.services;

  return (
    <>
      <PageHeader
        badge={t(s.badge.en, s.badge.mr)}
        title={t(s.pageTitle.en, s.pageTitle.mr)}
        description={t(s.pageDescription.en, s.pageDescription.mr)}
      />

      <SectionWrapper>
        <div className="flex flex-col gap-8">
          {SERVICES.map((service, index) => (
            <ServiceDetailCard
              key={service.id}
              id={service.id}
              title={service.title}
              titleMr={service.titleMr}
              fullDescription={service.fullDescription}
              fullDescriptionMr={service.fullDescriptionMr}
              features={service.features}
              featuresMr={service.featuresMr}
              icon={service.icon}
              image={service.image}
              index={index}
            />
          ))}
        </div>
      </SectionWrapper>

      <CTASection />
    </>
  );
}
