"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteTranslation } from "@/data/content";

interface HeroProps {
  t: SiteTranslation;
  onOpenModal: () => void;
}

export default function Hero({ t, onOpenModal }: HeroProps) {
  return (
    <section className="office-hero" aria-labelledby="office-hero-title">
      <div className="office-hero__main">
        <div className="office-hero__scene" aria-hidden="true">
          <Image
            src="/images/office-hero-v2.png"
            alt=""
            width={1672}
            height={941}
            sizes="100vw"
            priority
            className="office-hero__image"
          />
        </div>

        <div className="office-shell office-hero__content">
          <div className="office-hero__copy">
            <p className="office-hero__eyebrow">{t.hero.eyebrow}</p>

            <h1 id="office-hero-title" className="office-hero__title">
              <span>{t.hero.titleLine1}</span>
              <span>{t.hero.titleLine2}</span>
              <span className="office-hero__accent">{t.hero.accent}</span>
            </h1>

            <p className="office-hero__description">{t.hero.description}</p>

            <button
              type="button"
              onClick={onOpenModal}
              className="office-button office-hero__action"
            >
              <span>{t.hero.cta}</span>
              <ArrowRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="sf-trust" aria-label={t.trustAria}>
        <div className="office-shell sf-trust__grid">
          {t.trustBadges.map(({ metric, title, subtitle }, idx) => (
            <div className="sf-trust__item" key={idx}>
              <span className="sf-trust__metric">{metric}</span>
              <div className="sf-trust__copy">
                <strong>{title}</strong>
                <span>{subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
