import Image from "next/image";
import { SiteTranslation } from "@/data/content";

interface AboutProps {
  t: SiteTranslation;
}

function renderWithBrandHighlight(text: string) {
  const parts = text.split(/(SMART FINANCE)/g);
  return parts.map((part, i) =>
    part === "SMART FINANCE" ? (
      <mark key={i} className="sf-brand-mark">
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function About({ t }: AboutProps) {
  return (
    <section id="about" className="sf-section sf-about" aria-labelledby="about-title">
      <div className="office-shell">
        <h2 id="about-title" className="sf-heading sf-about__title">
          {t.about.title}
        </h2>
        <div className="sf-about__layout">
          <div className="sf-about__photo">
            <Image
              src="/images/about-office-v2.png"
              alt={t.about.photoAlt}
              fill
              sizes="(max-width: 760px) 100vw, 58vw"
            />
          </div>
          <div className="sf-about__copy">
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index}>{renderWithBrandHighlight(paragraph)}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
