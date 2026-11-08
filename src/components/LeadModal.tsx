"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight, ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { SiteTranslation } from "@/data/content";

interface LeadModalProps {
  t: SiteTranslation;
  locale: string;
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function LeadModal({
  t,
  locale,
  isOpen,
  onClose,
  defaultService,
}: LeadModalProps) {
  const { modal, servicesSection, contacts } = t;
  const firstServiceTitle = servicesSection.items[0].title;
  const isCostInquiry = !defaultService || defaultService === modal.costInquiryKey;

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    service: isCostInquiry ? firstServiceTitle : defaultService,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const nextService =
      !defaultService || defaultService === modal.costInquiryKey
        ? firstServiceTitle
        : defaultService;
    setFormData((prev) => ({ ...prev, service: nextService }));
  }, [defaultService, modal.costInquiryKey, firstServiceTitle]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalTitle = isCostInquiry
    ? modal.costTitle
    : defaultService === firstServiceTitle
      ? modal.mainServiceTitle
      : `${modal.serviceTitlePrefix} ${defaultService}`;

  const modalSubtitle = isCostInquiry ? modal.costSubtitle : modal.serviceSubtitle;
  const submitLabel = isCostInquiry ? modal.costSubmit : modal.serviceSubmit;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, locale }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || modal.defaultError);
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMessage(err.message || modal.defaultError);
    }
  };

  const handleResetAndClose = () => {
    setStatus("idle");
    setFormData({
      name: "",
      contact: "",
      service: isCostInquiry ? firstServiceTitle : defaultService || firstServiceTitle,
      message: "",
    });
    onClose();
  };

  return (
    <div
      className="sf-modal-backdrop"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="sf-modal-title"
    >
      <div className="sf-modal" onClick={(e) => e.stopPropagation()}>
        <div className="sf-modal__header">
          <div>
            <h3 id="sf-modal-title" className="sf-modal__title">
              {modalTitle}
            </h3>
            <p className="sf-modal__subtitle">{modalSubtitle}</p>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="sf-modal__close"
            aria-label={modal.closeAria}
          >
            <X aria-hidden="true" />
          </button>
        </div>

        <div className="sf-modal__body">
          {status === "success" ? (
            <div className="sf-modal__success">
              <CheckCircle className="sf-modal__success-icon" aria-hidden="true" />
              <h4>{modal.successTitle}</h4>
              <p>{modal.successText}</p>
              <div className="sf-modal__messengers">
                <a
                  href={contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp <ArrowUpRight aria-hidden="true" />
                </a>
                <a
                  href={contacts.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram <ArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <button
                type="button"
                onClick={handleResetAndClose}
                className="sf-button sf-button--red sf-modal__submit"
              >
                <span>{modal.closeButton}</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="sf-modal__form">
              <label className="sf-modal__field">
                <span>{modal.nameLabel}</span>
                <input
                  type="text"
                  required
                  placeholder={modal.namePlaceholder}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </label>

              <label className="sf-modal__field">
                <span>{modal.contactLabel}</span>
                <input
                  type="text"
                  required
                  placeholder={modal.contactPlaceholder}
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </label>

              <label className="sf-modal__field">
                <span>{modal.serviceLabel}</span>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  {servicesSection.items.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value={modal.generalConsultation}>{modal.generalConsultation}</option>
                </select>
              </label>

              <label className="sf-modal__field">
                <span>{modal.messageLabel}</span>
                <textarea
                  rows={2}
                  placeholder={modal.messagePlaceholder}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </label>

              {status === "error" && (
                <div className="sf-modal__error" role="alert">
                  <AlertCircle aria-hidden="true" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="sf-button sf-button--red sf-modal__submit"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="animate-spin" aria-hidden="true" />
                    <span>{modal.submitting}</span>
                  </>
                ) : (
                  <>
                    <span>{submitLabel}</span>
                    <ArrowRight aria-hidden="true" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
