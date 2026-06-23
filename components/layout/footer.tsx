"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];

export function Footer() {
  const { language, t } = useLanguage();
  const f = translations.footer;

  return (
    <footer className="border-t bg-gradient-to-b from-green-50/50 to-background">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-500">
                <span className="text-lg">🥛</span>
              </div>
              <span className="font-heading text-lg font-bold text-foreground">
                {language === "en" ? SITE_CONFIG.name : SITE_CONFIG.nameMarathi}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {language === "en" ? SITE_CONFIG.description : SITE_CONFIG.descriptionMarathi}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              {t(f.quickLinks.en, f.quickLinks.mr)}
            </h3>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {language === "en" ? link.label : link.labelMr}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              {t(f.contact.en, f.contact.mr)}
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {SITE_CONFIG.phone}
              </a>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                {language === "en" ? SITE_CONFIG.address : SITE_CONFIG.addressMarathi}
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              {t(f.followUs.en, f.followUs.mr)}
            </h3>
            <div className="flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} ${language === "en" ? SITE_CONFIG.name : SITE_CONFIG.nameMarathi}. ${t(f.rights.en, f.rights.mr)}`}
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(f.privacy.en, f.privacy.mr)}
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(f.terms.en, f.terms.mr)}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
