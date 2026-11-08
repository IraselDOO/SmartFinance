import { SiteTranslation } from "@/data/content";

interface FooterProps {
  t: SiteTranslation;
}

export default function Footer({ t }: FooterProps) {
  return (
    <footer className="sf-footer">
      <div className="office-shell sf-footer__inner">
        <div>
          <strong className="sf-brand-mark sf-brand-mark--footer">{t.companyName}</strong>
          <span>{t.footer.location}</span>
        </div>
        <p>
          © {new Date().getFullYear()} {t.companyName}. {t.footer.rights}
        </p>
      </div>
    </footer>
  );
}
