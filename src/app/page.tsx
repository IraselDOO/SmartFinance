"use client";

import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import About from "@/components/About";
import TargetAudience from "@/components/TargetAudience";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import LeadModal from "@/components/LeadModal";
import { Locale, TRANSLATIONS } from "@/data/content";

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return "en";

  const langs =
    window.navigator.languages && window.navigator.languages.length > 0
      ? window.navigator.languages
      : [window.navigator.language || "en"];

  for (const raw of langs) {
    const code = raw.toLowerCase();
    if (
      code.startsWith("me") ||
      code.startsWith("cnr") ||
      code.startsWith("sr") ||
      code.startsWith("hr") ||
      code.startsWith("bs")
    ) {
      return "me";
    }
    if (code.startsWith("sq") || code.startsWith("al")) {
      return "sq";
    }
    if (code.startsWith("ru") || code.startsWith("uk") || code.startsWith("be")) {
      return "ru";
    }
    if (code.startsWith("en")) {
      return "en";
    }
  }

  return "en";
}

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const t = TRANSLATIONS[locale];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>(t.modal.costInquiryKey);

  useEffect(() => {
    const saved = window.localStorage.getItem("sf_locale_v2") as Locale | null;
    if (saved && saved in TRANSLATIONS) {
      setLocale(saved);
    } else {
      setLocale(detectBrowserLocale());
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale === "me" ? "sr-Latn-ME" : locale;
  }, [locale]);

  const handleSelectLocale = (nextLocale: Locale) => {
    setLocale(nextLocale);
    window.localStorage.setItem("sf_locale_v2", nextLocale);
  };

  const handleOpenModal = (serviceTitle?: string) => {
    setSelectedService(serviceTitle || t.modal.costInquiryKey);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Header
        t={t}
        locale={locale}
        onChangeLocale={handleSelectLocale}
        onOpenModal={(title) => handleOpenModal(title)}
      />

      <Hero t={t} onOpenModal={() => handleOpenModal(t.modal.costInquiryKey)} />

      <Services t={t} onSelectService={(title) => handleOpenModal(title)} />

      <Workflow t={t} />

      <About t={t} />

      <TargetAudience t={t} />

      <ContactSection t={t} locale={locale} />

      <Footer t={t} />

      <LeadModal
        t={t}
        locale={locale}
        isOpen={modalOpen}
        onClose={handleCloseModal}
        defaultService={selectedService}
      />
    </main>
  );
}
