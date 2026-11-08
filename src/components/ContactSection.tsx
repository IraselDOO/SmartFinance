"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, CheckCircle, AlertCircle, Clock3, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { SiteTranslation } from "@/data/content";

interface ContactSectionProps {
  t: SiteTranslation;
  locale: string;
}

export default function ContactSection({ t, locale }: ContactSectionProps) {
  const { contacts, contactSection } = t;
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contact,
          service: contactSection.inlineServiceLabel,
          message: "",
          locale,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || contactSection.defaultError);
      }

      setStatus("success");
      setName("");
      setContact("");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || contactSection.defaultError);
    }
  };

  return (
    <section id="contacts" className="sf-contact" aria-labelledby="contacts-title">
      <div className="sf-contact__background">
        <Image src="/images/contact-office-bg.jpg" alt="" fill sizes="100vw" />
      </div>
      <div className="sf-contact__shade" />
      <div className="office-shell sf-contact__content">
        <div className="sf-contact__intro">
          <h2 id="contacts-title">{contactSection.heading}</h2>
          <p>{contactSection.description}</p>

          {status === "success" ? (
            <div className="sf-inline-form__success" role="status">
              <CheckCircle aria-hidden="true" />
              <div>
                <strong>{contactSection.successTitle}</strong>
                <p>{contactSection.successText}</p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="sf-inline-form__reset"
                >
                  {contactSection.resetButton}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="sf-inline-form">
              <div className="sf-inline-form__fields">
                <label className="sf-inline-form__field">
                  <span>{contactSection.nameLabel}</span>
                  <input
                    type="text"
                    required
                    placeholder={contactSection.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="sf-inline-form__field">
                  <span>{contactSection.contactLabel}</span>
                  <input
                    type="text"
                    required
                    placeholder={contactSection.contactPlaceholder}
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                  />
                </label>
              </div>

              {status === "error" && (
                <div className="sf-inline-form__error" role="alert">
                  <AlertCircle aria-hidden="true" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="sf-button sf-button--red sf-inline-form__submit"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" aria-hidden="true" />
                    <span>{contactSection.submitting}</span>
                  </>
                ) : (
                  <>
                    <span>{contactSection.submitButton}</span>
                    <ArrowRight aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <div className="sf-contact__details">
          <a className="sf-contact__phone" href={`tel:+${contacts.phoneClean}`}>
            <Phone aria-hidden="true" />
            {contacts.phone}
          </a>
          <nav className="sf-contact__messengers" aria-label={contactSection.messengersAria}>
            <a href={contacts.whatsappUrl} target="_blank" rel="noopener noreferrer">
              WhatsApp <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={contacts.telegramUrl} target="_blank" rel="noopener noreferrer">
              Telegram <ArrowUpRight aria-hidden="true" />
            </a>
            <a href={contacts.viberUrl}>
              Viber <ArrowUpRight aria-hidden="true" />
            </a>
          </nav>
          <a className="sf-contact__item" href={`mailto:${contacts.email}`}>
            <Mail aria-hidden="true" />
            <span>{contacts.email}</span>
          </a>
          <p className="sf-contact__item">
            <MapPin aria-hidden="true" />
            <span>{contacts.address}</span>
          </p>
          <p className="sf-contact__item">
            <Clock3 aria-hidden="true" />
            <span>
              {contacts.workingHours}
              <br />
              {contacts.weekend}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
