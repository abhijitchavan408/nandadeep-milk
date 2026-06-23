"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "@/components/contact/contact-form";
import { SITE_CONFIG } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export default function ContactPage() {
  const { language, t } = useLanguage();
  const c = translations.contact;

  const CONTACT_INFO = [
    {
      icon: Mail,
      label: t(c.emailUs.en, c.emailUs.mr),
      value: SITE_CONFIG.email,
      href: `mailto:${SITE_CONFIG.email}`,
    },
    {
      icon: Phone,
      label: t(c.callUs.en, c.callUs.mr),
      value: SITE_CONFIG.phone,
      href: `tel:${SITE_CONFIG.phone}`,
    },
    {
      icon: MapPin,
      label: t(c.visitUs.en, c.visitUs.mr),
      value: language === "en" ? SITE_CONFIG.address : SITE_CONFIG.addressMarathi,
      href: null,
    },
    {
      icon: Clock,
      label: t(c.hours.en, c.hours.mr),
      value: t(c.hoursValue.en, c.hoursValue.mr),
      href: null,
    },
  ];

  return (
    <>
      <PageHeader
        badge={t(c.badge.en, c.badge.mr)}
        title={t(c.title.en, c.title.mr)}
        description={t(c.description.en, c.description.mr)}
      />

      <SectionWrapper>
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="flex flex-col gap-6 lg:col-span-2">
            <div className="flex flex-col gap-2">
              <h2 className="font-heading text-2xl font-bold text-foreground">
                {t(c.getInTouch.en, c.getInTouch.mr)}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {t(c.getInTouchDescription.en, c.getInTouchDescription.mr)}
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {CONTACT_INFO.map((item) => (
                <Card key={item.label}>
                  <CardContent className="flex items-start gap-4 p-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-600">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-sm font-semibold text-foreground">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-sm text-muted-foreground transition-colors hover:text-primary"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-sm text-muted-foreground">
                          {item.value}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
