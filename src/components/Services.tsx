"use client";

import { BriefcaseBusiness, FileClock, FileText, MessagesSquare, Percent, ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { SiteTranslation } from "@/data/content";

interface ServicesProps {
  t: SiteTranslation;
  onSelectService: (title: string) => void;
}

const icons = [FileText, BriefcaseBusiness, Percent, FileClock, MessagesSquare];

export default function Services({ t, onSelectService }: ServicesProps) {
  const [main, ...services] = t.servicesSection.items;

  return (
    <section id="services" className="sf-section sf-services" aria-labelledby="services-title">
      <div className="office-shell">
        <h2 id="services-title" className="sf-heading sf-services__heading">
          {t.servicesSection.heading}
        </h2>
        <div className="sf-services__layout">
          <article className="sf-service-main">
            <div className="sf-service-main__copy">
              <FileText aria-hidden="true" className="sf-service-main__icon" />
              <h3>{main.title}</h3>
              <p>{main.description}</p>
              <button
                type="button"
                className="sf-button sf-button--red"
                onClick={() => onSelectService(main.title)}
              >
                <span>{t.servicesSection.mainCta}</span>
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
            <div
              className="sf-service-main__image"
              role="img"
              aria-label={t.servicesSection.mainImageAlt}
            >
              <Image src="/images/services-accounting-v4-clean.jpg" alt="" fill sizes="(max-width: 1050px) 100vw, 45vw" />
            </div>
          </article>

          <div className="sf-services__secondary">
            {services.map((service, index) => {
              const Icon = icons[index + 1];
              return (
                <article
                  key={service.id}
                  className="sf-service sf-service--interactive"
                  onClick={() => onSelectService(service.title)}
                  role="button"
                  tabIndex={0}
                  aria-label={`${service.title} - ${t.servicesSection.cardAriaSuffix}`}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      onSelectService(service.title);
                    }
                  }}
                >
                  <div className="sf-service__top">
                    <Icon aria-hidden="true" className="sf-service__icon" />
                    <ArrowUpRight aria-hidden="true" className="sf-service__arrow" />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
