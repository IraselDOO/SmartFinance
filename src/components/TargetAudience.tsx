import Image from "next/image";
import { SiteTranslation } from "@/data/content";

interface TargetAudienceProps {
  t: SiteTranslation;
}

export default function TargetAudience({ t }: TargetAudienceProps) {
  return (
    <section id="industries" className="sf-section sf-industries" aria-labelledby="industries-title">
      <div className="office-shell">
        <h2 id="industries-title" className="sf-heading sf-industries__heading">
          {t.industriesSection.heading}
        </h2>
        <div className="sf-industries__grid">
          {t.industriesSection.items.map((industry, index) => (
            <article className={`sf-industry sf-industry--${index + 1}`} key={industry.title}>
              <div className="sf-industry__image">
                <Image
                  src={industry.image}
                  alt=""
                  fill
                  sizes={
                    index === 4
                      ? "(max-width: 1050px) 100vw, 50vw"
                      : index === 3
                        ? "(max-width: 760px) 100vw, 50vw"
                        : "(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 33vw"
                  }
                />
                <h3>{industry.title}</h3>
              </div>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
