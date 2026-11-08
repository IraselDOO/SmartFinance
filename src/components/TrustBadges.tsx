import { SiteTranslation } from "@/data/content";

interface TrustBadgesProps {
  t: SiteTranslation;
}

export default function TrustBadges({ t }: TrustBadgesProps) {
  return (
    <section className="sf-trust" aria-label={t.trustAria}>
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
    </section>
  );
}
