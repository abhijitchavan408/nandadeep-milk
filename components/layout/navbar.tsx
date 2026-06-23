"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { translations } from "@/lib/translations";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-500">
            <span className="text-lg">🥛</span>
          </div>
          <span className="font-heading text-lg font-bold text-foreground">
            {language === "en" ? SITE_CONFIG.name : SITE_CONFIG.nameMarathi}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-green-50 hover:text-foreground",
                  pathname === link.href
                    ? "bg-green-50 text-foreground"
                    : "text-muted-foreground",
                )}
              >
                {language === "en" ? link.label : link.labelMr}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop: Language Switcher + CTA */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "mr" : "en")}
            className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <Globe className="h-3.5 w-3.5" />
            {language === "en" ? "मराठी" : "English"}
          </button>
          <Button asChild className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600">
            <Link href="/contact">{t(translations.nav.orderNow.en, translations.nav.orderNow.mr)}</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setLanguage(language === "en" ? "mr" : "en")}
            className="flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-xs font-semibold text-muted-foreground"
          >
            <Globe className="h-3 w-3" />
            {language === "en" ? "मरा" : "EN"}
          </button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6 pt-6">
                <Link
                  href="/"
                  className="flex items-center gap-2"
                  onClick={() => setOpen(false)}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-green-600 to-green-500">
                    <span className="text-lg">🥛</span>
                  </div>
                  <span className="font-heading text-lg font-bold text-foreground">
                    {language === "en" ? SITE_CONFIG.name : SITE_CONFIG.nameMarathi}
                  </span>
                </Link>
                <nav className="flex flex-col gap-1">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-green-50",
                        pathname === link.href
                          ? "bg-green-50 text-foreground"
                          : "text-muted-foreground",
                      )}
                      onClick={() => setOpen(false)}
                    >
                      {language === "en" ? link.label : link.labelMr}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-2 bg-gradient-to-r from-green-600 to-green-500">
                  <Link href="/contact" onClick={() => setOpen(false)}>
                    {t(translations.nav.orderNow.en, translations.nav.orderNow.mr)}
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
