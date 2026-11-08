"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { LOCALES, Locale, SiteTranslation } from "@/data/content";

interface HeaderProps {
  t: SiteTranslation;
  locale: Locale;
  onChangeLocale: (locale: Locale) => void;
  onOpenModal: (serviceTitle?: string) => void;
}

function FlagIcon({ code }: { code: Locale }) {
  switch (code) {
    case "me":
      return (
        <svg className="office-lang-switcher__flag" viewBox="0 0 18 12" aria-hidden="true">
          <rect width="18" height="12" fill="#C40308" />
          <rect x="0.75" y="0.75" width="16.5" height="10.5" fill="none" stroke="#D4AF37" strokeWidth="1.2" />
          <circle cx="9" cy="6" r="2.2" fill="#D4AF37" />
          <rect x="8.2" y="5.1" width="1.6" height="1.9" fill="#1F4E79" />
        </svg>
      );
    case "sq":
      return (
        <svg className="office-lang-switcher__flag" viewBox="0 0 18 12" aria-hidden="true">
          <rect width="18" height="12" fill="#E41E20" />
          <path
            d="M9 3.2L7.3 4.3L8 6.2L6.2 6.8L7.6 8.1L7.2 9.4L9 8.5L10.8 9.4L10.4 8.1L11.8 6.8L10 6.2L10.7 4.3Z"
            fill="#07111A"
          />
        </svg>
      );
    case "en":
      return (
        <svg className="office-lang-switcher__flag" viewBox="0 0 18 12" aria-hidden="true">
          <rect width="18" height="12" fill="#012169" />
          <path d="M0 0L18 12M18 0L0 12" stroke="#FFFFFF" strokeWidth="2.2" />
          <path d="M0 0L18 12M18 0L0 12" stroke="#C8102E" strokeWidth="1.1" />
          <path d="M9 0V12M0 6H18" stroke="#FFFFFF" strokeWidth="3.6" />
          <path d="M9 0V12M0 6H18" stroke="#C8102E" strokeWidth="2" />
        </svg>
      );
    case "ru":
      return (
        <svg className="office-lang-switcher__flag" viewBox="0 0 18 12" aria-hidden="true">
          <rect width="18" height="4" y="0" fill="#FFFFFF" />
          <rect width="18" height="4" y="4" fill="#0039A6" />
          <rect width="18" height="4" y="8" fill="#D52B1E" />
        </svg>
      );
  }
}

export default function Header({
  t,
  locale,
  onChangeLocale,
  onOpenModal,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > window.innerHeight * 0.65);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openInquiry = () => {
    setMobileMenuOpen(false);
    onOpenModal(t.modal.costInquiryKey);
  };

  return (
    <header className="office-header">
      <div className="office-shell office-header__inner">
        <Link
          href="/"
          className="office-brand"
          aria-label={t.nav.homeAria}
          onClick={() => setMobileMenuOpen(false)}
        >
          <Image
            src="/images/logo-icon.png"
            alt=""
            width={1200}
            height={900}
            sizes="(max-width: 767px) 56px, 84px"
            className="office-brand__symbol"
            priority
          />
          <Image
            src="/images/logo-text.png"
            alt="Smart Finance"
            width={1850}
            height={350}
            sizes="(max-width: 767px) 172px, (max-width: 1199px) 200px, 260px"
            className="office-brand__wordmark"
            priority
          />
        </Link>

        <nav className="office-nav" aria-label={t.nav.mainNavAria}>
          <a href="#services">{t.nav.services}</a>
          <a href="#workflow">{t.nav.workflow}</a>
          <a href="#about">{t.nav.about}</a>
          <a href="#industries">{t.nav.industries}</a>
          <a href="#contacts">{t.nav.contacts}</a>
        </nav>

        <div className="office-header__right">
          <div className="office-lang-switcher" role="group" aria-label={t.nav.langAria}>
            {LOCALES.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => onChangeLocale(item.code)}
                className={`office-lang-switcher__btn ${
                  locale === item.code ? "office-lang-switcher__btn--active" : ""
                }`}
                title={item.name}
                aria-pressed={locale === item.code}
              >
                <FlagIcon code={item.code} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="office-header__cta-slot">
            {scrolledPastHero ? (
              <button
                type="button"
                onClick={openInquiry}
                className="office-button office-header__action"
              >
                <span>{t.nav.cta}</span>
                <ArrowRight aria-hidden="true" />
              </button>
            ) : (
              <a
                href={`tel:+${t.contacts.phoneClean}`}
                className="office-header__phone"
              >
                <Phone aria-hidden="true" />
                <span>{t.contacts.phone}</span>
              </a>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="office-menu-toggle"
          aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.openMenu}
          aria-expanded={mobileMenuOpen}
          aria-controls="office-mobile-menu"
        >
          {mobileMenuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav
          id="office-mobile-menu"
          className="office-mobile-menu office-shell"
          aria-label={t.nav.mobileNavAria}
        >
          <div className="office-mobile-menu__langs" role="group" aria-label={t.nav.langAria}>
            {LOCALES.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  onChangeLocale(item.code);
                  setMobileMenuOpen(false);
                }}
                className={`office-lang-switcher__btn ${
                  locale === item.code ? "office-lang-switcher__btn--active" : ""
                }`}
                aria-pressed={locale === item.code}
              >
                <FlagIcon code={item.code} />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t.nav.services}</a>
          <a href="#workflow" onClick={() => setMobileMenuOpen(false)}>{t.nav.workflow}</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav.about}</a>
          <a href="#industries" onClick={() => setMobileMenuOpen(false)}>{t.nav.industries}</a>
          <a href="#contacts" onClick={() => setMobileMenuOpen(false)}>{t.nav.contacts}</a>
          <a
            href={`tel:+${t.contacts.phoneClean}`}
            className="office-mobile-menu__phone"
          >
            <Phone aria-hidden="true" />
            <span>{t.contacts.phone}</span>
          </a>
          <button type="button" onClick={openInquiry} className="office-button">
            <span>{t.nav.cta}</span>
            <ArrowRight aria-hidden="true" />
          </button>
        </nav>
      )}
    </header>
  );
}
