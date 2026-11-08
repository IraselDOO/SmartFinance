export type Locale = "me" | "sq" | "en" | "ru";

export const LOCALES: { code: Locale; label: string; name: string }[] = [
  { code: "me", label: "ME", name: "Crnogorski" },
  { code: "sq", label: "SQ", name: "Shqip" },
  { code: "en", label: "EN", name: "English" },
  { code: "ru", label: "RU", name: "Русский" },
];

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  items: string[];
}

export interface IndustryItem {
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface SiteTranslation {
  companyName: string;
  nav: {
    services: string;
    workflow: string;
    about: string;
    industries: string;
    contacts: string;
    cta: string;
    openMenu: string;
    closeMenu: string;
    homeAria: string;
    mainNavAria: string;
    mobileNavAria: string;
    langAria: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    accent: string;
    description: string;
    cta: string;
  };
  trustAria: string;
  trustBadges: {
    metric: string;
    title: string;
    subtitle: string;
  }[];
  servicesSection: {
    heading: string;
    mainCta: string;
    mainImageAlt: string;
    cardAriaSuffix: string;
    items: ServiceItem[];
  };
  workflowSection: {
    heading: string;
    steps: WorkflowStep[];
  };
  about: {
    title: string;
    photoAlt: string;
    paragraphs: string[];
  };
  industriesSection: {
    heading: string;
    items: IndustryItem[];
  };
  contactSection: {
    heading: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successText: string;
    resetButton: string;
    defaultError: string;
    messengersAria: string;
    inlineServiceLabel: string;
  };
  modal: {
    costInquiryKey: string;
    costTitle: string;
    mainServiceTitle: string;
    serviceTitlePrefix: string;
    costSubtitle: string;
    serviceSubtitle: string;
    costSubmit: string;
    serviceSubmit: string;
    submitting: string;
    closeAria: string;
    closeButton: string;
    nameLabel: string;
    namePlaceholder: string;
    contactLabel: string;
    contactPlaceholder: string;
    serviceLabel: string;
    generalConsultation: string;
    messageLabel: string;
    messagePlaceholder: string;
    successTitle: string;
    successText: string;
    defaultError: string;
  };
  footer: {
    location: string;
    rights: string;
  };
  contacts: {
    address: string;
    city: string;
    phone: string;
    phoneClean: string;
    email: string;
    workingHours: string;
    weekend: string;
    whatsappUrl: string;
    telegramUrl: string;
    viberUrl: string;
  };
}

const SHARED_CONTACTS = {
  address: "Bulevar Majke Tereze BB, Ulcinj",
  city: "Ulcinj - Ulqin, Montenegro",
  phone: "+382 69 925 899",
  phoneClean: "38269925899",
  email: "smartfinance-ul@outlook.com",
  telegramUrl: "https://t.me/+38269925899",
  viberUrl: "viber://chat?number=%2B38269925899",
};

export const TRANSLATIONS: Record<Locale, SiteTranslation> = {
  ru: {
    companyName: "Smart Finance Doo",
    nav: {
      services: "Услуги",
      workflow: "Как мы работаем",
      about: "О компании",
      industries: "Сферы бизнеса",
      contacts: "Контакты",
      cta: "Узнать стоимость",
      openMenu: "Открыть меню",
      closeMenu: "Закрыть меню",
      homeAria: "Smart Finance - главная",
      mainNavAria: "Основная навигация",
      mobileNavAria: "Мобильная навигация",
      langAria: "Выбор языка",
    },
    hero: {
      eyebrow: "Бухгалтерские услуги в Ульцине",
      titleLine1: "Занимайтесь",
      titleLine2: "бизнесом.",
      accent: "Бухгалтерию доверьте нам.",
      description:
        "Прозрачный учёт, налоги и отчётность - берём на себя полное бухгалтерское сопровождение вашего бизнеса в Черногории.",
      cta: "Узнать стоимость",
    },
    trustAria: "Ключевые показатели",
    trustBadges: [
      {
        metric: "7",
        title: "лет успешной работы",
        subtitle: "на рынке Черногории",
      },
      {
        metric: "7",
        title: "сертифицированных бухгалтеров",
        subtitle: "в штате компании",
      },
      {
        metric: "100+",
        title: "постоянных клиентов",
        subtitle: "на сопровождении",
      },
      {
        metric: "3",
        title: "рабочих языка",
        subtitle: "черногорский, албанский, английский",
      },
    ],
    servicesSection: {
      heading: "Наши услуги",
      mainCta: "Обсудить сопровождение",
      mainImageAlt: "Рабочее место бухгалтера с системой учёта Черногории и документами",
      cardAriaSuffix: "обсудить услугу",
      items: [
        {
          id: "accounting",
          title: "Бухгалтерское обслуживание",
          description:
            "Полное ведение учёта DOO и Preduzetnik: ежемесячные декларации PDV, расчёт зарплат и налогов (IOPPD), кадровый учёт в CROO, электронная фискализация и сдача годового баланса (Završni račun).",
          icon: "FileSpreadsheet",
        },
        {
          id: "registration",
          title: "Регистрация бизнеса",
          description:
            "Открытие компании (DOO) или ИП (Preduzetnik) под ключ: уставные документы, регистрация в CRPS, постановка на PDV, подключение eFiskalizacija и сопровождение при открытии счёта в банке.",
          icon: "Briefcase",
        },
        {
          id: "consulting",
          title: "Налоговые консультации",
          description:
            "Расчёт налоговой нагрузки до старта проекта, разбор ставок PDV (21% / 7% / 0%), налога на прибыль и дивиденды, проверка договоров и законная оптимизация платежей.",
          icon: "Percent",
        },
        {
          id: "recovery",
          title: "Восстановление учёта",
          description:
            "Сверка расчётов с Poreska uprava, аудит прошлых периодов, исправление ошибок в декларациях IOPPD и PDV, восстановление первичной документации и сдача просроченной отчётности.",
          icon: "FileText",
        },
        {
          id: "additional",
          title: "Сопровождение и разрешения",
          description:
            "Подготовка документов для ВНЖ (Boravak) по бизнесу, регистрация объектов в муниципалитете и туристической организации, получение лицензий и представление интересов в госорганах.",
          icon: "MessageSquareMore",
        },
      ],
    },
    workflowSection: {
      heading: "Как мы работаем",
      steps: [
        {
          number: "01",
          title: "Вы передаёте первичку",
          items: [
            "Входящие и исходящие инвойсы",
            "Банковские выписки",
            "Фискальные чеки и договоры",
            "Данные по сотрудникам и зарплатам",
            "Лично в офисе или онлайн в мессенджере",
          ],
        },
        {
          number: "02",
          title: "Мы ведём учёт и налоги",
          items: [
            "Проводим операции в главной книге",
            "Формируем и сдаём отчёты PDV и IOPPD",
            "Контролируем электронную фискализацию",
            "Отвечаем на запросы Poreska uprava",
            "Заранее напоминаем о сроках уплаты налогов",
          ],
        },
        {
          number: "03",
          title: "Вы работаете спокойно",
          items: [
            "Отчётность сдана вовремя без пеней и штрафов",
            "Заранее понятны точные суммы всех налогов",
            "Готов годовой баланс (Završni račun)",
            "Порядок в кадровых документах и договорах",
            "Прямая связь с вашим бухгалтером в рабочее время",
          ],
        },
      ],
    },
    about: {
      title: "Ваш надёжный партнёр в Черногории",
      photoAlt: "Интерьер офиса Smart Finance в Ульцине",
      paragraphs: [
        "SMART FINANCE - профессиональная бухгалтерская компания со стационарным офисом в центре Ульциня (Bulevar Majke Tereze). Мы сопровождаем как новые, так и действующие компании (DOO) и предпринимателей (Preduzetnik), работаем с местным бизнесом и иностранными учредителями по всему побережью и территории Черногории.",
        "За каждой компанией закрепляется профильный сертифицированный бухгалтер, который знает специфику вашей отрасли - от сезонного туризма и HoReCa до строительства и IT. Мы берём на себя все коммуникации с налоговой инспекцией (Poreska uprava), муниципалитетом и банками, гарантируя точность расчётов и полную конфиденциальность.",
      ],
    },
    industriesSection: {
      heading: "Для кого мы работаем",
      items: [
        {
          title: "Рестораны и кафе",
          description:
            "Бухгалтерский учёт в HoReCa, калькуляции и техкарты, фискализация касс, учёт сезонного персонала и зарплат.",
          image: "/images/industry-restaurant-v2.jpg",
          tag: "HoReCa",
        },
        {
          title: "Апартаменты и туризм",
          description:
            "Учёт краткосрочной и долгосрочной аренды, туристические сборы (Boravišna taksa), сезонная отчётность и кассы.",
          image: "/images/industry-tourism-v3.png",
          tag: "Туризм & Аренда",
        },
        {
          title: "Строительство",
          description:
            "Учёт строительных объектов и смет, возврат и зачёт НДС (PDV), договоры генподряда и субподряда, материальный учёт.",
          image: "/images/industry-construction-v2.png",
          tag: "Девелопмент",
        },
        {
          title: "Торговля",
          description:
            "Оптовая и розничная торговля, импорт и таможенные декларации, складской товарный учёт (Kalkulacije) и PDV.",
          image: "/images/industry-retail-v3.png",
          tag: "Ритейл",
        },
        {
          title: "Малый и средний бизнес",
          description:
            "Сопровождение IT-компаний, консалтинговых и сервисных агентств, валютные инвойсы и работа с международными контрагентами.",
          image: "/images/industry-business-v2.jpg",
          tag: "IT & Услуги",
        },
      ],
    },
    contactSection: {
      heading: "Оставьте заявку",
      description:
        "Расскажите нам о вашем бизнесе. Мы свяжемся с вами, рассчитаем стоимость сопровождения и ответим на вопросы.",
      nameLabel: "Ваше имя",
      namePlaceholder: "Константин",
      contactLabel: "Телефон / WhatsApp / Telegram",
      contactPlaceholder: "+382 ... или @username",
      submitButton: "Отправить заявку",
      submitting: "Отправка...",
      successTitle: "Заявка отправлена",
      successText: "Спасибо! Мы свяжемся с вами в ближайшее время.",
      resetButton: "Отправить ещё одну заявку",
      defaultError: "Ошибка отправки. Пожалуйста, напишите нам в мессенджер.",
      messengersAria: "Мессенджеры",
      inlineServiceLabel: "Консультация (форма в контактах)",
    },
    modal: {
      costInquiryKey: "Расчет стоимости",
      costTitle: "Узнать стоимость обслуживания",
      mainServiceTitle: "Обсудить бухгалтерское сопровождение",
      serviceTitlePrefix: "Заявка:",
      costSubtitle:
        "Стоимость зависит от формы (DOO / Preduzetnik), статуса PDV и числа сотрудников. Оставьте контакт - мы подготовим точный расчёт.",
      serviceSubtitle:
        "Оставьте контакты - мы свяжемся с вами, ответим на вопросы и предложим решение под вашу задачу.",
      costSubmit: "Получить расчёт стоимости",
      serviceSubmit: "Отправить заявку",
      submitting: "Отправка...",
      closeAria: "Закрыть окно",
      closeButton: "Закрыть окно",
      nameLabel: "Ваше имя *",
      namePlaceholder: "Константин",
      contactLabel: "Телефон / WhatsApp / Telegram *",
      contactPlaceholder: "+382 ... или @username",
      serviceLabel: "Интересующая услуга",
      generalConsultation: "Общая консультация",
      messageLabel: "Параметры бизнеса (опционально)",
      messagePlaceholder: "DOO или Preduzetnik, плательщик PDV да/нет, количество сотрудников...",
      successTitle: "Заявка успешно отправлена",
      successText:
        "Мы свяжемся с вами в ближайшее время. Вы также можете написать нам напрямую в мессенджер:",
      defaultError: "Ошибка отправки. Пожалуйста, напишите нам в WhatsApp.",
    },
    footer: {
      location: "Bulevar Majke Tereze BB, Ulcinj, Montenegro",
      rights: "Все права защищены.",
    },
    contacts: {
      ...SHARED_CONTACTS,
      workingHours: "Пн - Пт: 08:00 - 16:00",
      weekend: "Сб - Вс: Выходной",
      whatsappUrl:
        "https://wa.me/38269925899?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D1%8E%D1%82%20%D0%B1%D1%83%D1%85%D0%B3%D0%B0%D0%BB%D1%82%D0%B5%D1%80%D1%81%D0%BA%D0%B8%D0%B5%20%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8%20%D0%B2%20Smart%20Finance",
    },
  },

  me: {
    companyName: "Smart Finance Doo",
    nav: {
      services: "Usluge",
      workflow: "Kako radimo",
      about: "O nama",
      industries: "Djelatnosti",
      contacts: "Kontakt",
      cta: "Saznajte cijenu",
      openMenu: "Otvori meni",
      closeMenu: "Zatvori meni",
      homeAria: "Smart Finance - početna",
      mainNavAria: "Glavna navigacija",
      mobileNavAria: "Mobilna navigacija",
      langAria: "Izbor jezika",
    },
    hero: {
      eyebrow: "Računovodstvene usluge u Ulcinju",
      titleLine1: "Posvetite se",
      titleLine2: "biznisu.",
      accent: "Računovodstvo prepustite nama.",
      description:
        "Transparentna evidencija, porezi i izvještavanje - preuzimamo kompletno računovodstvo vašeg biznisa u Crnoj Gori.",
      cta: "Saznajte cijenu",
    },
    trustAria: "Ključni pokazatelji",
    trustBadges: [
      {
        metric: "7",
        title: "godina iskustva",
        subtitle: "na tržištu Crne Gore",
      },
      {
        metric: "7",
        title: "sertifikovanih računovođa",
        subtitle: "u našem stručnom timu",
      },
      {
        metric: "100+",
        title: "stalnih klijenata",
        subtitle: "na redovnom praćenju",
      },
      {
        metric: "3",
        title: "radna jezika",
        subtitle: "crnogorski, albanski, engleski",
      },
    ],
    servicesSection: {
      heading: "Naše usluge",
      mainCta: "Zakažite konsultaciju",
      mainImageAlt: "Radni sto računovođe sa računovodstvenim programom i dokumentacijom",
      cardAriaSuffix: "zatražite ponudu",
      items: [
        {
          id: "accounting",
          title: "Računovodstvene usluge",
          description:
            "Kompletno vođenje poslovnih knjiga za DOO i preduzetnike: mjesečne PDV prijave, obračun zarada (IOPPD), prijava radnika u CROO, eFiskalizacija i izrada završnog računa.",
          icon: "FileSpreadsheet",
        },
        {
          id: "registration",
          title: "Registracija firme",
          description:
            "Priprema kompletne dokumentacije za osnivanje društva (DOO) ili preduzetnika u CRPS-u, PDV registracija, povezivanje na eFiskalizaciju i podrška pri otvaranju računa u banci.",
          icon: "Briefcase",
        },
        {
          id: "consulting",
          title: "Poresko savjetovanje",
          description:
            "Procjena poreskog opterećenja prije pokretanja posla, primjena stopa PDV-a (21% / 7% / 0%), porez na dobit i dividendu, analiza ugovora i zakonska optimizacija poreza.",
          icon: "Percent",
        },
        {
          id: "recovery",
          title: "Sređivanje knjigovodstva",
          description:
            "Usaglašavanje kartica sa Poreskom upravom, kontrola prethodnih perioda, ispravka grešaka u IOPPD i PDV prijavama i kompletna rekonstrukcija poslovnih knjiga.",
          icon: "FileText",
        },
        {
          id: "additional",
          title: "Poslovna podrška i dozvole",
          description:
            "Priprema dokumentacije za radne i boravišne dozvole, prijava objekata u opštini i turističkoj organizaciji, pribavljanje rješenja za rad i zastupanje pred organima.",
          icon: "MessageSquareMore",
        },
      ],
    },
    workflowSection: {
      heading: "Kako radimo",
      steps: [
        {
          number: "01",
          title: "Dostavljate dokumentaciju",
          items: [
            "Ulazne i izlazne fakture",
            "Bankovni izvodi",
            "Fiskalni računi i ugovori",
            "Podaci o zaposlenima i zaradama",
            "Lično u kancelariji ili elektronski",
          ],
        },
        {
          number: "02",
          title: "Mi vodimo računovodstvo",
          items: [
            "Knjižimo sve promjene u glavnoj knjizi",
            "Podnosimo mjesečne PDV i IOPPD prijave",
            "Pratimo ispravnost eFiskalizacije",
            "Komuniciramo sa Poreskom upravom",
            "Na vrijeme vas obavještavamo o obavezama",
          ],
        },
        {
          number: "03",
          title: "Poslujete bez brige",
          items: [
            "Sve prijave predate u zakonskom roku",
            "Potpuna jasnoća o iznosima poreza i PDV-a",
            "Uredno pripremljen završni račun",
            "Usklađena kadrovska evidencija i ugovori",
            "Stalna podrška vašeg računovođe",
          ],
        },
      ],
    },
    about: {
      title: "Vaš pouzdan partner u Crnoj Gori",
      photoAlt: "Enterijer kancelarije Smart Finance u Ulcinju",
      paragraphs: [
        "SMART FINANCE je profesionalna računovodstvena agencija sa kancelarijom u centru Ulcinja (Bulevar Majke Tereze BB). Pružamo podršku novim i postojećim kompanijama (DOO) i preduzetnicima, sarađujući sa domaćim privrednicima i stranim osnivačima širom crnogorskog primorja i Crne Gore.",
        "Svakom klijentu je dodijeljen sertifikovani računovođa koji poznaje specifičnosti vaše djelatnosti - od ugostiteljstva i turizma do građevinarstva, trgovine i IT sektora. Preuzimamo kompletnu komunikaciju sa Poreskom upravom, opštinskim organima i bankama, uz garantovanu tačnost i povjerljivost podataka.",
      ],
    },
    industriesSection: {
      heading: "Za koga radimo",
      items: [
        {
          title: "Restorani i kafići",
          description:
            "Računovodstvo u ugostiteljstvu (HoReCa), normativi i kalkulacije, fiskalizacija kasa, sezonski radnici i obračun zarada.",
          image: "/images/industry-restaurant-v2.jpg",
          tag: "HoReCa",
        },
        {
          title: "Apartmani i turizam",
          description:
            "Evidencija izdavanja smještaja, boravišne i turističke takse, sezonsko poslovanje i fiskalna evidencija.",
          image: "/images/industry-tourism-v3.png",
          tag: "Turizam",
        },
        {
          title: "Građevinarstvo",
          description:
            "Praćenje građevinskih projekata i situacija, povraćaj i odbitak PDV-a, ugovori sa podizvođačima i materijalno knjigovodstvo.",
          image: "/images/industry-construction-v2.png",
          tag: "Građevina",
        },
        {
          title: "Trgovina",
          description:
            "Maloprodaja i veleprodaja, uvoz i carinske deklaracije, robno-materijalno knjigovodstvo (kalkulacije) i PDV obaveze.",
          image: "/images/industry-retail-v3.png",
          tag: "Maloprodaja",
        },
        {
          title: "Mali i srednji biznis",
          description:
            "Kompletna podrška za IT kompanije, konsultantske i uslužne agencije, devizno fakturisanje i međunarodno poslovanje.",
          image: "/images/industry-business-v2.jpg",
          tag: "IT & Usluge",
        },
      ],
    },
    contactSection: {
      heading: "Pošaljite upit",
      description:
        "Recite nam više o svom biznisu. Kontaktiraćemo vas, pripremiti ponudu i odgovoriti na sva pitanja.",
      nameLabel: "Vaše ime",
      namePlaceholder: "Marko",
      contactLabel: "Telefon / WhatsApp / Telegram",
      contactPlaceholder: "+382 ... ili @username",
      submitButton: "Pošaljite upit",
      submitting: "Slanje...",
      successTitle: "Upit je poslat",
      successText: "Hvala! Kontaktiraćemo vas u najkraćem roku.",
      resetButton: "Pošaljite novi upit",
      defaultError: "Greška pri slanju. Molimo pišite nam direktno putem WhatsApp-a.",
      messengersAria: "Mesindžeri",
      inlineServiceLabel: "Konsultacija (kontakt forma)",
    },
    modal: {
      costInquiryKey: "Procjena cijene",
      costTitle: "Saznajte cijenu usluga",
      mainServiceTitle: "Računovodstveno praćenje",
      serviceTitlePrefix: "Upit:",
      costSubtitle:
        "Cijena zavisi od oblika poslovanja (DOO / Preduzetnik), PDV statusa i broja zaposlenih. Ostavite kontakt - pripremićemo tačnu ponudu.",
      serviceSubtitle:
        "Ostavite kontakt podatke - javićemo vam se, odgovoriti na pitanja i predložiti optimalno rješenje.",
      costSubmit: "Zatražite ponudu",
      serviceSubmit: "Pošaljite upit",
      submitting: "Slanje...",
      closeAria: "Zatvori prozor",
      closeButton: "Zatvori prozor",
      nameLabel: "Vaše ime *",
      namePlaceholder: "Marko",
      contactLabel: "Telefon / WhatsApp / Telegram *",
      contactPlaceholder: "+382 ... ili @username",
      serviceLabel: "Izaberite uslugu",
      generalConsultation: "Opšta konsultacija",
      messageLabel: "Podaci o biznisu (opciono)",
      messagePlaceholder: "DOO ili Preduzetnik, PDV obveznik da/ne, djelatnost, broj zaposlenih...",
      successTitle: "Upit je uspješno poslat",
      successText:
        "Kontaktiraćemo vas uskoro. Možete nam pisati i direktno putem aplikacija:",
      defaultError: "Greška pri slanju. Molimo pišite nam putem WhatsApp-a.",
    },
    footer: {
      location: "Bulevar Majke Tereze BB, Ulcinj, Crna Gora",
      rights: "Sva prava zadržana.",
    },
    contacts: {
      ...SHARED_CONTACTS,
      workingHours: "Pon - Pet: 08:00 - 16:00",
      weekend: "Sub - Ned: Neradni dani",
      whatsappUrl:
        "https://wa.me/38269925899?text=Dobar%20dan!%20Zanimaju%20me%20ra%C4%8Dunovodstvene%20usluge%20u%20Smart%20Finance.",
    },
  },

  sq: {
    companyName: "Smart Finance Doo",
    nav: {
      services: "Shërbimet",
      workflow: "Si punojmë",
      about: "Rreth nesh",
      industries: "Sektorët",
      contacts: "Kontakti",
      cta: "Mësoni çmimin",
      openMenu: "Hap menynë",
      closeMenu: "Mbyll menynë",
      homeAria: "Smart Finance - ballina",
      mainNavAria: "Navigimi kryesor",
      mobileNavAria: "Navigimi mobil",
      langAria: "Zgjedhja e gjuhës",
    },
    hero: {
      eyebrow: "Shërbime kontabiliteti në Ulqin",
      titleLine1: "Fokusohuni te",
      titleLine2: "biznesi juaj.",
      accent: "Kontabilitetin na e besoni neve.",
      description:
        "Evidencë transparente, tatime dhe raportim i saktë - marrim përsipër kontabilitetin e plotë të biznesit tuaj në Mal të Zi.",
      cta: "Mësoni çmimin",
    },
    trustAria: "Treguesit kryesorë",
    trustBadges: [
      {
        metric: "7",
        title: "vite përvojë pune",
        subtitle: "në tregun e Malit të Zi",
      },
      {
        metric: "7",
        title: "kontabilistë të certifikuar",
        subtitle: "në ekipin tonë profesional",
      },
      {
        metric: "100+",
        title: "klientë të rregullt",
        subtitle: "në mbështetje të vazhdueshme",
      },
      {
        metric: "3",
        title: "gjuhë pune",
        subtitle: "shqip, malazezisht, anglisht",
      },
    ],
    servicesSection: {
      heading: "Shërbimet tona",
      mainCta: "Diskutoni bashkëpunimin",
      mainImageAlt: "Tavolina e punës me programin e kontabilitetit dhe dokumentet",
      cardAriaSuffix: "diskutoni shërbimin",
      items: [
        {
          id: "accounting",
          title: "Shërbime kontabiliteti",
          description:
            "Mbajtja e plotë e librave për DOO dhe afaristë (Preduzetnik): deklaratat mujore të TVSH-së (PDV), llogaritja e pagave (IOPPD), regjistrimi i punëtorëve në CROO, eFiskalizimi dhe bilanci vjetor (Završni račun).",
          icon: "FileSpreadsheet",
        },
        {
          id: "registration",
          title: "Regjistrimi i biznesit",
          description:
            "Përgatitja e dokumentacionit për hapjen e kompanisë (DOO) ose afaristit individual në CRPS, regjistrimi në TVSH (PDV), lidhja me eFiskalizimin dhe asistenca për hapjen e llogarisë bankare.",
          icon: "Briefcase",
        },
        {
          id: "consulting",
          title: "Këshillim tatimor",
          description:
            "Analiza e ngarkesës tatimore para fillimit të aktivitetit, normat e TVSH-së (21% / 7% / 0%), tatimi në fitim dhe dividendë, shqyrtimi i kontratave dhe optimizimi ligjor.",
          icon: "Percent",
        },
        {
          id: "recovery",
          title: "Rikthimi dhe rregullimi i evidencës",
          description:
            "Rakordimi i kartelave me Administratën Tatimore (Poreska uprava), kontrolli i periudhave të kaluara, korrigjimi i deklaratave IOPPD dhe PDV dhe rikonstruksioni i librave.",
          icon: "FileText",
        },
        {
          id: "additional",
          title: "Mbështetje biznesi dhe leje",
          description:
            "Përgatitja e dokumenteve për leje qëndrimi dhe pune (Boravak), regjistrimi i objekteve në komunë dhe organizatën turistike, pajisja me licenca dhe përfaqësimi para institucioneve.",
          icon: "MessageSquareMore",
        },
      ],
    },
    workflowSection: {
      heading: "Si punojmë",
      steps: [
        {
          number: "01",
          title: "Ju dorëzoni dokumentet",
          items: [
            "Faturat hyrëse dhe dalëse",
            "Pasqyrat bankare",
            "Kuponët fiskalë dhe kontratat",
            "Të dhënat për punonjësit dhe pagat",
            "Fizikisht në zyrë ose online",
          ],
        },
        {
          number: "02",
          title: "Ne mbajmë kontabilitetin",
          items: [
            "Regjistrojmë çdo transaksion në librin kryesor",
            "Dorëzojmë deklaratat mujore PDV dhe IOPPD",
            "Monitorojmë funksionimin e eFiskalizimit",
            "Komunikojmë me Administratën Tatimore",
            "Ju njoftojmë me kohë për afatet e pagesave",
          ],
        },
        {
          number: "03",
          title: "Ju punoni të qetë",
          items: [
            "Deklarim i saktë dhe në kohë pa gjoba",
            "Qartësi e plotë mbi detyrimet e TVSH-së dhe tatimeve",
            "Bilanci vjetor (Završni račun) i përgatitur me rregull",
            "Dokumentacion i rregullt për punonjësit",
            "Mbështetje e drejtpërdrejtë nga kontabilisti juaj",
          ],
        },
      ],
    },
    about: {
      title: "Partneri juaj i besueshëm në Mal të Zi",
      photoAlt: "Ambienti i zyrës Smart Finance në Ulqin",
      paragraphs: [
        "SMART FINANCE është kompani profesionale kontabiliteti me zyrë në qendër të Ulqinit (Bulevar Majke Tereze BB). Ne mbështesim kompani të reja dhe ekzistuese (DOO) si dhe afaristë individualë (Preduzetnik), duke bashkëpunuar me biznese vendase dhe investitorë të huaj në Ulqin dhe në të gjithë Malin e Zi.",
        "Çdo klienti i caktohet një kontabilist i certifikuar që njeh specifikat e sektorit tuaj - nga hotileria dhe turizmi sezonal deri te ndërtimtaria, tregtia dhe IT. Ne marrim përsipër të gjithë komunikimin me Administratën Tatimore (Poreska uprava), komunën dhe bankat, me saktësi dhe konfidencialitet të plotë.",
      ],
    },
    industriesSection: {
      heading: "Për kë punojmë",
      items: [
        {
          title: "Restorante dhe kafene",
          description:
            "Kontabilitet në sektorin HoReCa, kalkulime dhe normativa, fiskalizimi i arkave, stafi sezonal dhe llogaritja e pagave.",
          image: "/images/industry-restaurant-v2.jpg",
          tag: "HoReCa",
        },
        {
          title: "Apartamente dhe turizëm",
          description:
            "Evidenca e qiradhënies turistike, taksa e qëndrimit (Boravišna taksa), specifikat sezonale dhe raportimi fiskal.",
          image: "/images/industry-tourism-v3.png",
          tag: "Turizëm",
        },
        {
          title: "Ndërtimtari",
          description:
            "Evidenca e projekteve të ndërtimit, rimbursimi dhe kreditimi i TVSH-së (PDV), kontratat e nënkontraktorëve dhe kontabiliteti material.",
          image: "/images/industry-construction-v2.png",
          tag: "Ndërtim",
        },
        {
          title: "Tregti",
          description:
            "Tregti me pakicë dhe shumicë, import dhe deklarata doganore, evidenca e magazinës (Kalkulacije) dhe detyrimet e TVSH-së.",
          image: "/images/industry-retail-v3.png",
          tag: "Tregti",
        },
        {
          title: "Biznesi i vogël dhe i mesëm",
          description:
            "Mbështetje e plotë për kompani të IT-së, agjenci konsulence dhe shërbimesh, faturim ndërkombëtar dhe sipërmarrës të huaj.",
          image: "/images/industry-business-v2.jpg",
          tag: "IT & Shërbime",
        },
      ],
    },
    contactSection: {
      heading: "Dërgoni kërkesë",
      description:
        "Na tregoni për biznesin tuaj. Do t'ju kontaktojmë, do të përgatisim ofertën dhe do t'ju përgjigjemi çdo pyetjeje.",
      nameLabel: "Emri juaj",
      namePlaceholder: "Arben",
      contactLabel: "Telefoni / WhatsApp / Telegram",
      contactPlaceholder: "+382 ... ose @username",
      submitButton: "Dërgoni kërkesën",
      submitting: "Duke dërguar...",
      successTitle: "Kërkesa u dërgua",
      successText: "Faleminderit! Do t'ju kontaktojmë së shpejti.",
      resetButton: "Dërgo një kërkesë tjetër",
      defaultError: "Gabim gjatë dërgimit. Ju lutemi na shkruani direkt në WhatsApp.",
      messengersAria: "Mesazherët",
      inlineServiceLabel: "Konsultim (forma e kontaktit)",
    },
    modal: {
      costInquiryKey: "Llogaritja e çmimit",
      costTitle: "Mësoni çmimin e shërbimit",
      mainServiceTitle: "Diskutoni shërbimin e kontabilitetit",
      serviceTitlePrefix: "Kërkesë:",
      costSubtitle:
        "Çmimi varet nga forma ligjore (DOO / Preduzetnik), statusi i TVSH-së (PDV) dhe numri i punonjësve. Lini kontaktin për ofertë të saktë.",
      serviceSubtitle:
        "Lini kontaktet tuaja - do t'ju kontaktojmë, do t'ju përgjigjemi pyetjeve dhe do të ofrojmë zgjidhje.",
      costSubmit: "Merrni ofertën e çmimit",
      serviceSubmit: "Dërgoni kërkesën",
      submitting: "Duke dërguar...",
      closeAria: "Mbyll dritaren",
      closeButton: "Mbyll dritaren",
      nameLabel: "Emri juaj *",
      namePlaceholder: "Arben",
      contactLabel: "Telefoni / WhatsApp / Telegram *",
      contactPlaceholder: "+382 ... ose @username",
      serviceLabel: "Shërbimi që ju intereson",
      generalConsultation: "Konsultim i përgjithshëm",
      messageLabel: "Të dhënat e biznesit (opsionale)",
      messagePlaceholder: "DOO ose Preduzetnik, me TVSH (PDV) po/jo, sektori, numri i punonjësve...",
      successTitle: "Kërkesa u dërgua me sukses",
      successText:
        "Do t'ju kontaktojmë së shpejti. Gjithashtu mund të na shkruani direkt në:",
      defaultError: "Gabim gjatë dërgimit. Ju lutemi na shkruani në WhatsApp.",
    },
    footer: {
      location: "Bulevar Majke Tereze BB, Ulcinj - Ulqin, Mali i Zi",
      rights: "Të gjitha të drejtat e rezervuara.",
    },
    contacts: {
      ...SHARED_CONTACTS,
      workingHours: "Hën - Pre: 08:00 - 16:00",
      weekend: "Sht - Die: Pushim",
      whatsappUrl:
        "https://wa.me/38269925899?text=P%C3%ABrsh%C3%ABndetje!%20Jam%20i%20interesuar%20p%C3%ABr%20sh%C3%ABrbimet%20e%20kontabilitetit%20n%C3%AB%20Smart%20Finance.",
    },
  },

  en: {
    companyName: "Smart Finance Doo",
    nav: {
      services: "Services",
      workflow: "How We Work",
      about: "About Us",
      industries: "Industries",
      contacts: "Contacts",
      cta: "Get a Quote",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      homeAria: "Smart Finance - Home",
      mainNavAria: "Main navigation",
      mobileNavAria: "Mobile navigation",
      langAria: "Language switcher",
    },
    hero: {
      eyebrow: "Accounting Services in Ulcinj",
      titleLine1: "Focus on",
      titleLine2: "your business.",
      accent: "Leave the accounting to us.",
      description:
        "Transparent bookkeeping, tax compliance, and timely reporting - we handle the complete accounting for your business in Montenegro.",
      cta: "Get a Quote",
    },
    trustAria: "Key figures",
    trustBadges: [
      {
        metric: "7",
        title: "years of experience",
        subtitle: "operating in Montenegro",
      },
      {
        metric: "7",
        title: "certified accountants",
        subtitle: "on our in-house team",
      },
      {
        metric: "100+",
        title: "active clients",
        subtitle: "on ongoing support",
      },
      {
        metric: "3",
        title: "working languages",
        subtitle: "Montenegrin, Albanian, English",
      },
    ],
    servicesSection: {
      heading: "Our Services",
      mainCta: "Discuss Accounting Support",
      mainImageAlt: "Accountant workstation with Montenegrin accounting ERP system and folders",
      cardAriaSuffix: "inquire about service",
      items: [
        {
          id: "accounting",
          title: "Accounting & Bookkeeping",
          description:
            "Full-cycle bookkeeping for LLCs (DOO) and entrepreneurs (Preduzetnik): monthly VAT (PDV) returns, payroll & IOPPD filings, CROO employee registration, e-fiscalization, and annual financial statements (Završni račun).",
          icon: "FileSpreadsheet",
        },
        {
          id: "registration",
          title: "Company Formation",
          description:
            "Turnkey setup for DOO or Sole Proprietorship in CRPS: articles of incorporation, VAT (PDV) registration, eFiskalizacija setup, and corporate bank account assistance in Montenegro.",
          icon: "Briefcase",
        },
        {
          id: "consulting",
          title: "Tax Advisory",
          description:
            "Pre-launch tax modeling, guidance on Montenegrin VAT rates (21% / 7% / 0%), corporate profit & dividend tax, contract review, and compliant tax optimization.",
          icon: "Percent",
        },
        {
          id: "recovery",
          title: "Accounting Recovery",
          description:
            "Tax card reconciliation with Poreska uprava, prior-period audits, correction of IOPPD and VAT returns, ledger reconstruction, and overdue statutory filings.",
          icon: "FileText",
        },
        {
          id: "additional",
          title: "Business & Residency Support",
          description:
            "Document preparation for residence & work permits (Boravak), municipal and tourist board registrations, business licensing, and representation before tax authorities.",
          icon: "MessageSquareMore",
        },
      ],
    },
    workflowSection: {
      heading: "How We Work",
      steps: [
        {
          number: "01",
          title: "You Provide Source Docs",
          items: [
            "Incoming and outgoing invoices",
            "Monthly bank statements",
            "Fiscal receipts and contracts",
            "Employee & payroll records",
            "In person at our office or digitally",
          ],
        },
        {
          number: "02",
          title: "We Handle Books & Taxes",
          items: [
            "Post all transactions to the general ledger",
            "Prepare and file monthly VAT (PDV) & IOPPD returns",
            "Monitor eFiskalizacija compliance",
            "Represent you before the Tax Administration",
            "Notify you ahead of every tax payment deadline",
          ],
        },
        {
          number: "03",
          title: "You Operate with Confidence",
          items: [
            "Statutory filings submitted on time with zero penalties",
            "Complete clarity on upcoming VAT and tax amounts",
            "Accurate annual balance sheet (Završni račun)",
            "Compliant employment contracts and HR records",
            "Direct access to your dedicated accountant",
          ],
        },
      ],
    },
    about: {
      title: "Your Trusted Partner in Montenegro",
      photoAlt: "Smart Finance consultation office interior in Ulcinj",
      paragraphs: [
        "SMART FINANCE is an established accounting firm with a permanent office in central Ulcinj (Bulevar Majke Tereze BB). We support both newly formed and operating companies (DOO) as well as sole proprietors (Preduzetnik), serving local enterprises and international founders across the Montenegrin coast and nationwide.",
        "Every client works with a dedicated certified accountant experienced in your specific sector - from hospitality and seasonal tourism to construction, retail, and IT. We handle all communications with the Tax Administration (Poreska uprava), municipal bodies, and banks with strict accuracy and confidentiality.",
      ],
    },
    industriesSection: {
      heading: "Who We Work With",
      items: [
        {
          title: "Restaurants & Cafés",
          description:
            "HoReCa cost accounting, F&B recipes and inventory norms, POS fiscalization, seasonal staff registration, and payroll.",
          image: "/images/industry-restaurant-v2.jpg",
          tag: "HoReCa",
        },
        {
          title: "Apartments & Tourism",
          description:
            "Short- and long-term rental accounting, tourist tax compliance (Boravišna taksa), seasonal operations, and fiscal reporting.",
          image: "/images/industry-tourism-v3.png",
          tag: "Tourism & Hospitality",
        },
        {
          title: "Construction",
          description:
            "Construction project accounting, VAT (PDV) credit and recovery, subcontractor agreements, and material ledger tracking.",
          image: "/images/industry-construction-v2.png",
          tag: "Development",
        },
        {
          title: "Retail & Wholesale",
          description:
            "Retail and wholesale bookkeeping, import & customs documentation, warehouse price calculations (Kalkulacije), and VAT.",
          image: "/images/industry-retail-v3.png",
          tag: "Retail",
        },
        {
          title: "Small & Medium Business",
          description:
            "Comprehensive accounting for IT companies, consulting and service agencies, cross-border invoicing, and international founders.",
          image: "/images/industry-business-v2.jpg",
          tag: "IT & Services",
        },
      ],
    },
    contactSection: {
      heading: "Request a Consultation",
      description:
        "Tell us about your business. We will get in touch, calculate your monthly support cost, and answer your questions.",
      nameLabel: "Your Name",
      namePlaceholder: "Alexander",
      contactLabel: "Phone / WhatsApp / Telegram",
      contactPlaceholder: "+382 ... or @username",
      submitButton: "Send Inquiry",
      submitting: "Sending...",
      successTitle: "Inquiry Sent",
      successText: "Thank you! We will contact you shortly.",
      resetButton: "Send another inquiry",
      defaultError: "Submission error. Please message us directly via WhatsApp.",
      messengersAria: "Messengers",
      inlineServiceLabel: "Consultation (Contact Form)",
    },
    modal: {
      costInquiryKey: "Get a Quote",
      costTitle: "Calculate Accounting Cost",
      mainServiceTitle: "Discuss Accounting Support",
      serviceTitlePrefix: "Inquiry:",
      costSubtitle:
        "Pricing depends on your legal form (DOO / Sole Proprietor), VAT status, and headcount. Leave your contact details for an exact quote.",
      serviceSubtitle:
        "Leave your contact details - we will get back to you, answer your questions, and offer a tailored solution.",
      costSubmit: "Request a Quote",
      serviceSubmit: "Send Inquiry",
      submitting: "Sending...",
      closeAria: "Close modal",
      closeButton: "Close window",
      nameLabel: "Your Name *",
      namePlaceholder: "Alexander",
      contactLabel: "Phone / WhatsApp / Telegram *",
      contactPlaceholder: "+382 ... or @username",
      serviceLabel: "Service of Interest",
      generalConsultation: "General Consultation",
      messageLabel: "Business Details (Optional)",
      messagePlaceholder: "DOO or Preduzetnik, VAT registered yes/no, industry, number of employees...",
      successTitle: "Inquiry Sent Successfully",
      successText:
        "We will get back to you shortly. You can also reach us directly via messenger:",
      defaultError: "Submission error. Please message us on WhatsApp.",
    },
    footer: {
      location: "Bulevar Majke Tereze BB, Ulcinj, Montenegro",
      rights: "All rights reserved.",
    },
    contacts: {
      ...SHARED_CONTACTS,
      workingHours: "Mon - Fri: 08:00 - 16:00",
      weekend: "Sat - Sun: Closed",
      whatsappUrl:
        "https://wa.me/38269925899?text=Hello!%20I%20am%20interested%20in%20accounting%20services%20at%20Smart%20Finance.",
    },
  },
};

export const SITE_CONFIG = TRANSLATIONS.ru;
