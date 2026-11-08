import { NextResponse } from "next/server";

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, service, message, locale } = body;

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Пожалуйста, укажите имя и контакты для связи" },
        { status: 400 }
      );
    }

    const langLabels: Record<string, string> = {
      me: "Crnogorski (ME)",
      sq: "Shqip (SQ)",
      en: "English (EN)",
      ru: "Русский (RU)",
    };

    const leadInfo = {
      name: String(name).trim(),
      contact: String(contact).trim(),
      service: service ? String(service).trim() : "Общая консультация",
      message: message ? String(message).trim() : "-",
      lang: locale && langLabels[locale] ? langLabels[locale] : "Не указан",
      date: new Date().toLocaleString("ru-RU", { timeZone: "Europe/Podgorica" }),
    };

    const tgToken = process.env.TELEGRAM_BOT_TOKEN;
    const tgChatId = process.env.TELEGRAM_CHAT_ID;

    if (tgToken && tgChatId) {
      const tgText =
        `🔔 <b>Новая заявка с сайта Smart Finance</b>\n\n` +
        `👤 <b>Имя:</b> ${escapeHtml(leadInfo.name)}\n` +
        `📱 <b>Контакт:</b> ${escapeHtml(leadInfo.contact)}\n` +
        `💼 <b>Услуга:</b> ${escapeHtml(leadInfo.service)}\n` +
        `🌐 <b>Язык сайта:</b> ${escapeHtml(leadInfo.lang)}\n` +
        `💬 <b>Сообщение:</b> ${escapeHtml(leadInfo.message)}\n` +
        `🕒 <b>Время (Черногория):</b> ${escapeHtml(leadInfo.date)}`;

      try {
        await fetch(`https://api.telegram.org/bot${tgToken}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: tgChatId,
            text: tgText,
            parse_mode: "HTML",
          }),
        });
      } catch (tgError) {
        console.error("Ошибка отправки в Telegram:", tgError);
      }
    } else {
      console.log("ℹ️ [Lead Received - Telegram not configured]:", leadInfo);
    }

    console.log("✅ Успешно получена заявка от:", leadInfo.name, leadInfo.contact);

    return NextResponse.json({
      success: true,
      message: "Заявка успешно принята! Мы свяжемся с вами в ближайшее время.",
    });
  } catch (err: any) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Внутренняя ошибка сервера. Пожалуйста, напишите нам напрямую в мессенджер." },
      { status: 500 }
    );
  }
}
