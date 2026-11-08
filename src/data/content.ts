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
        "Прозрачный учёт, налоги и отчётность - берём на себя бухгалтерию вашего бизнеса в Черногории.",
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
      mainImageAlt: "Бухгалтерские документы и рабочие инструменты на тёмном фоне",
      cardAriaSuffix: "обсудить услугу",
      items: [
        {
          id: "accounting",
          title: "Бухгалтерское обслуживание",
          description:
            "Ведение учёта, расчёт налогов и зарплат, сдача отчётности и постоянное бухгалтерское сопровождение.",
          icon: "FileSpreadsheet",
        },
        {
          id: "registration",
          title: "Регистрация бизнеса",
          description:
            "Подготовка полного пакета документов для открытия компании (DOO) или предпринимателя (Preduzetnik) в Черногории.",
          icon: "Briefcase",
        },
        {
          id: "consulting",
          title: "Налоговые консультации",
          description:
            "Разъяснение налоговых требований, анализ договоров и оптимальные законные решения по налоговой нагрузке.",
          icon: "Percent",
        },
        {
          id: "recovery",
          title: "Восстановление учёта",
          description:
            "Аудит, исправление ошибок и полное восстановление бухгалтерских данных за предыдущие отчётные периоды.",
          icon: "FileText",
        },
        {
          id: "additional",
          title: "Дополнительные услуги",
          description:
            "Консультации по вопросам ведения бизнеса, взаимодействие с госорганами, банками и получение разрешений.",
          icon: "MessageSquareMore",
        },
      ],
    },
    workflowSection: {
      heading: "Как мы работаем",
      steps: [
        {
          number: "01",
          title: "Вы передаёте документы",
          items: [
            "Счета и договоры",
            "Банковские выписки",
            "Чеки и инвойсы",
            "Данные по зарплатам",
            "Другие документы по запросу",
          ],
        },
        {
          number: "02",
          title: "Мы ведём бухгалтерию",
          items: [
            "Учитываем финансовые операции",
            "Рассчитываем налоги и зарплаты сотрудников",
            "Сдаём регламентированную отчётность",
            "Взаимодействуем с налоговыми органами",
            "Оперативно консультируем по текущим вопросам",
          ],
        },
        {
          number: "03",
          title: "Вы получаете результат",
          items: [
            "Своевременная отчётность без задержек",
            "Полная ясность по суммам налогов",
            "Понятные и прозрачные отчёты",
            "Рекомендации по оптимизации расходов",
            "Поддержка и спокойствие в любых ситуациях",
          ],
        },
      ],
    },
    about: {
      title: "Ваш надёжный партнёр в Черногории",
      photoAlt: "Интерьер офиса Smart Finance в Ульцине",
      paragraphs: [
        "SMART FINANCE - бухгалтерская компания в Ульцине с 7-летним опытом работы и командой из 7 сертифицированных бухгалтеров. Мы сопровождаем как новые, так и действующие компании (DOO) и индивидуальных предпринимателей (Preduzetnik), работаем с местным бизнесом и иностранными основателями в Черногории.",
        "Берём на себя фискализацию, электронную отчётность, расчёт налогов, зарплат и взносов в пенсионный фонд. Объясняем требования законодательства Черногории на понятном языке, ведём документацию и консультируем на черногорском, албанском и английском языках и гарантируем полную конфиденциальность коммерческих данных.",
      ],
    },
    industriesSection: {
      heading: "Для кого мы работаем",
      items: [
        {
          title: "Рестораны и кафе",
          description:
            "Бухгалтерский учёт в HoReCa, фискализация касс, налоги, расчёт смен и зарплат персонала.",
          image: "/images/industry-restaurant-v2.jpg",
          tag: "HoReCa",
        },
        {
          title: "Апартаменты и туризм",
          description:
            "Ведение учёта аренды, сезонные особенности туризма, туристические сборы и отчётность.",
          image: "/images/industry-tourism-v3.png",
          tag: "Туризм & Аренда",
        },
        {
          title: "Строительство",
          description:
            "Учёт строительных проектов, НДС (PDV), договоры субподряда и материальный учёт.",
          image: "/images/industry-construction-v2.png",
          tag: "Девелопмент",
        },
        {
          title: "Торговля",
          description:
            "Бухгалтерский учёт розничных и оптовых магазинов, складской учёт и налоговые обязательства.",
          image: "/images/industry-retail-v3.png",
          tag: "Ритейл",
        },
        {
          title: "Малый и средний бизнес",
          description:
            "Комплексная поддержка IT-специалистов, сервисных компаний и международных предпринимателей.",
          image: "/images/industry-business-v2.jpg",
          tag: "IT & Услуги",
        },
      ],
    },
    contactSection: {
      heading: "Оставьте заявку",
      description:
        "Расскажите нам о вашем бизнесе. Мы свяжемся с вами, ответим на вопросы и предложим решение.",
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
        "Укажите сферу бизнеса и контакты - мы подготовим расчёт под вашу задачу.",
      serviceSubtitle:
        "Оставьте контакты - мы свяжемся с вами, ответим на вопросы и предложим решение.",
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
      messageLabel: "Комментарий или вопрос (опционально)",
      messagePlaceholder: "Форма бизнеса (DOO / Preduzetnik), сфера деятельности...",
      successTitle: "Заявка успешно отправлена",
      successText:
        "Мы свяжемся с вами в ближайшее время. Вы также можете написать нам напрямую в мессенджер:",
      defaultError: "Ошибка отправки. Пожалуйста, напишите нам в WhatsApp.",
    },
    footer: {
      location: "Ulcinj - Ulqin, Montenegro",
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
      mainImageAlt: "Računovodstvena dokumentacija i poslovni alati na tamnoj podlozi",
      cardAriaSuffix: "zatražite ponudu",
      items: [
        {
          id: "accounting",
          title: "Računovodstvene usluge",
          description:
            "Vođenje poslovnih knjiga, obračun poreza i zarada, predaja izvještaja i stalna računovodstvena podrška.",
          icon: "FileSpreadsheet",
        },
        {
          id: "registration",
          title: "Registracija firme",
          description:
            "Priprema kompletne dokumentacije za osnivanje društva (DOO) ili preduzetnika u Crnoj Gori.",
          icon: "Briefcase",
        },
        {
          id: "consulting",
          title: "Poresko savjetovanje",
          description:
            "Tumačenje poreskih propisa, analiza ugovora i optimalna zakonska rješenja za poresko opterećenje.",
          icon: "Percent",
        },
        {
          id: "recovery",
          title: "Sređivanje knjigovodstva",
          description:
            "Kontrola, ispravka grešaka i kompletna rekonstrukcija računovodstvenih podataka za prethodne periode.",
          icon: "FileText",
        },
        {
          id: "additional",
          title: "Dodatne poslovne usluge",
          description:
            "Savjetovanje u poslovanju, komunikacija sa državnim organima, bankama i pribavljanje dozvola.",
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
            "Računi i ugovori",
            "Bankovni izvodi",
            "Fiskalni računi i fakture",
            "Podaci o zaradama",
            "Ostala dokumenta po potrebi",
          ],
        },
        {
          number: "02",
          title: "Mi vodimo računovodstvo",
          items: [
            "Knjižimo sve poslovne promjene",
            "Obračunavamo poreze i zarade zaposlenih",
            "Predajemo zakonom propisane prijave i izvještaje",
            "Komuniciramo sa Poreskom upravom",
            "Brzo vas savjetujemo o svim tekućim pitanjima",
          ],
        },
        {
          number: "03",
          title: "Dobijate siguran rezultat",
          items: [
            "Uredni izvještaji bez kašnjenja",
            "Potpuna jasnoća o iznosima poreza",
            "Pregledni i razumljivi finansijski izvještaji",
            "Preporuke za optimizaciju troškova",
            "Podrška i sigurnost u svakoj situaciji",
          ],
        },
      ],
    },
    about: {
      title: "Vaš pouzdan partner u Crnoj Gori",
      photoAlt: "Enterijer kancelarije Smart Finance u Ulcinju",
      paragraphs: [
        "SMART FINANCE je računovodstvena agencija u Ulcinju sa 7 godina iskustva i timom od 7 sertifikovanih računovođa. Pružamo podršku novim i postojećim kompanijama (DOO) i preduzetnicima, sarađujući sa domaćim privrednicima i stranim osnivačima u Crnoj Gori.",
        "Preuzimamo fiskalizaciju, elektronsko izvještavanje, obračun PDV-a, poreza, zarada i doprinosa. Propise objašnjavamo jasno i razumljivo na crnogorskom, albanskom i engleskom jeziku, uz potpunu povjerljivost poslovnih podataka.",
      ],
    },
    industriesSection: {
      heading: "Za koga radimo",
      items: [
        {
          title: "Restorani i kafići",
          description:
            "Računovodstvo u ugostiteljstvu (HoReCa), fiskalizacija kasa, porezi, obračun smjena i zarada osoblja.",
          image: "/images/industry-restaurant-v2.jpg",
          tag: "HoReCa",
        },
        {
          title: "Apartmani i turizam",
          description:
            "Evidencija izdavanja smještaja, sezonsko poslovanje, boravišne takse i turističko izvještavanje.",
          image: "/images/industry-tourism-v3.png",
          tag: "Turizam",
        },
        {
          title: "Građevinarstvo",
          description:
            "Praćenje građevinskih projekata, PDV evidencija, ugovori sa podizvođačima i materijalno knjigovodstvo.",
          image: "/images/industry-construction-v2.png",
          tag: "Građevina",
        },
        {
          title: "Trgovina",
          description:
            "Računovodstvo za maloprodaju i veleprodaju, robno-materijalno knjigovodstvo i poreske obaveze.",
          image: "/images/industry-retail-v3.png",
          tag: "Maloprodaja",
        },
        {
          title: "Mali i srednji biznis",
          description:
            "Kompletna podrška za IT stručnjake, uslužne djelatnosti i međunarodne preduzetnike.",
          image: "/images/industry-business-v2.jpg",
          tag: "IT & Usluge",
        },
      ],
    },
    contactSection: {
      heading: "Pošaljite upit",
      description:
        "Recite nam više o svom biznisu. Kontaktiraćemo vas, odgovoriti na pitanja i predložiti optimalno rješenje.",
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
        "Navedite djelatnost i kontakt podatke - pripremićemo ponudu prilagođenu vašem biznisu.",
      serviceSubtitle:
        "Ostavite kontakt podatke - javićemo vam se, odgovoriti na pitanja i predložiti rješenje.",
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
      messageLabel: "Komentar ili pitanje (opciono)",
      messagePlaceholder: "Oblik poslovanja (DOO / Preduzetnik), djelatnost, broj zaposlenih...",
      successTitle: "Upit je uspješno poslat",
      successText:
        "Kontaktiraćemo vas uskoro. Možete nam pisati i direktno putem aplikacija:",
      defaultError: "Greška pri slanju. Molimo pišite nam putem WhatsApp-a.",
    },
    footer: {
      location: "Ulcinj - Ulqin, Crna Gora",
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
      mainImageAlt: "Dokumente kontabiliteti dhe mjete pune në sfond të errët",
      cardAriaSuffix: "diskutoni shërbimin",
      items: [
        {
          id: "accounting",
          title: "Shërbime kontabiliteti",
          description:
            "Mbajtja e librave kontabël, llogaritja e tatimeve dhe pagave, dorëzimi i pasqyrave dhe mbështetje e vazhdueshme.",
          icon: "FileSpreadsheet",
        },
        {
          id: "registration",
          title: "Regjistrimi i biznesit",
          description:
            "Përgatitja e dokumentacionit të plotë për hapjen e kompanisë (DOO) ose afaristit individual (Preduzetnik) në Mal të Zi.",
          icon: "Briefcase",
        },
        {
          id: "consulting",
          title: "Këshillim tatimor",
          description:
            "Sqarimi i kërkesave tatimore, analiza e kontratave dhe zgjidhje optimale ligjore për ngarkesën tatimore.",
          icon: "Percent",
        },
        {
          id: "recovery",
          title: "Rikthimi dhe rregullimi i evidencës",
          description:
            "Kontroll, korrigjim i gabimeve dhe rikonstruksion i plotë i të dhënave kontabël për periudhat e kaluara.",
          icon: "FileText",
        },
        {
          id: "additional",
          title: "Shërbime shtesë biznesi",
          description:
            "Konsulencë për zhvillimin e biznesit, komunikim me institucionet shtetërore, bankat dhe pajisja me leje pune.",
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
            "Faturat dhe kontratat",
            "Pasqyrat bankare",
            "Kuponët fiskalë dhe faturat",
            "Të dhënat për pagat",
            "Dokumente të tjera sipas kërkesës",
          ],
        },
        {
          number: "02",
          title: "Ne mbajmë kontabilitetin",
          items: [
            "Regjistrojmë të gjitha transaksionet financiare",
            "Llogarisim tatimet dhe pagat e punonjësve",
            "Dorëzojmë deklaratat dhe raportet ligjore",
            "Komunikojmë me Administratën Tatimore",
            "Ju këshillojmë shpejt për çdo çështje ditore",
          ],
        },
        {
          number: "03",
          title: "Ju merrni rezultatin",
          items: [
            "Raportim i rregullt dhe pa vonesa",
            "Qartësi e plotë mbi detyrimet tatimore",
            "Raporte financiare të qarta dhe të kuptueshme",
            "Rekomandime për optimizimin e shpenzimeve",
            "Mbështetje dhe siguri në çdo situatë",
          ],
        },
      ],
    },
    about: {
      title: "Partneri juaj i besueshëm në Mal të Zi",
      photoAlt: "Ambienti i zyrës Smart Finance në Ulqin",
      paragraphs: [
        "SMART FINANCE është kompani kontabiliteti në Ulqin me 7 vite përvojë dhe një ekip prej 7 kontabilistësh të certifikuar. Ne mbështesim kompani të reja dhe ekzistuese (DOO) si dhe afaristë individualë (Preduzetnik), duke punuar me sipërmarrës vendas dhe investitorë të huaj në Mal të Zi.",
        "Marrim përsipër fiskalizimin, raportimin elektronik, llogaritjen e TVSH-së (PDV), tatimeve, pagave dhe kontributeve. I shpjegojmë rregullat ligjore qartë në gjuhën shqipe, malazeze dhe angleze, duke garantuar konfidencialitet të plotë të të dhënave.",
      ],
    },
    industriesSection: {
      heading: "Për kë punojmë",
      items: [
        {
          title: "Restorante dhe kafene",
          description:
            "Kontabilitet në sektorin HoReCa, fiskalizimi i arkave, tatimet, llogaritja e turneve dhe pagave të stafit.",
          image: "/images/industry-restaurant-v2.jpg",
          tag: "HoReCa",
        },
        {
          title: "Apartamente dhe turizëm",
          description:
            "Evidenca e qiradhënies, specifikat sezonale të turizmit, taksat e qëndrimit dhe raportimi turistik.",
          image: "/images/industry-tourism-v3.png",
          tag: "Turizëm",
        },
        {
          title: "Ndërtimtari",
          description:
            "Evidenca e projekteve të ndërtimit, TVSH (PDV), kontratat e nënkontraktorëve dhe kontabiliteti material.",
          image: "/images/industry-construction-v2.png",
          tag: "Ndërtim",
        },
        {
          title: "Tregti",
          description:
            "Kontabiliteti për dyqane me pakicë dhe shumicë, evidenca e magazinës dhe detyrimet tatimore.",
          image: "/images/industry-retail-v3.png",
          tag: "Tregti",
        },
        {
          title: "Biznesi i vogël dhe i mesëm",
          description:
            "Mbështetje gjithëpërfshirëse për profesionistë të IT-së, kompani shërbimesh dhe sipërmarrës ndërkombëtarë.",
          image: "/images/industry-business-v2.jpg",
          tag: "IT & Shërbime",
        },
      ],
    },
    contactSection: {
      heading: "Dërgoni kërkesë",
      description:
        "Na tregoni për biznesin tuaj. Do t'ju kontaktojmë, do t'ju përgjigjemi pyetjeve dhe do t'ju ofrojmë zgjidhjen e duhur.",
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
        "Tregoni sektorin e biznesit dhe kontaktin - ne do të përgatisim ofertën për ju.",
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
      messageLabel: "Koment ose pyetje (opsionale)",
      messagePlaceholder: "Forma e biznesit (DOO / Preduzetnik), sektori i aktivitetit...",
      successTitle: "Kërkesa u dërgua me sukses",
      successText:
        "Do t'ju kontaktojmë së shpejti. Gjithashtu mund të na shkruani direkt në:",
      defaultError: "Gabim gjatë dërgimit. Ju lutemi na shkruani në WhatsApp.",
    },
    footer: {
      location: "Ulcinj - Ulqin, Mali i Zi",
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
      mainImageAlt: "Accounting documents and executive desk tools on a dark surface",
      cardAriaSuffix: "inquire about service",
      items: [
        {
          id: "accounting",
          title: "Accounting & Bookkeeping",
          description:
            "Ongoing bookkeeping, tax and payroll calculation, statutory filings, and dedicated accounting support.",
          icon: "FileSpreadsheet",
        },
        {
          id: "registration",
          title: "Company Formation",
          description:
            "Complete document preparation for registering an LLC (DOO) or sole proprietorship (Preduzetnik) in Montenegro.",
          icon: "Briefcase",
        },
        {
          id: "consulting",
          title: "Tax Advisory",
          description:
            "Clear guidance on Montenegrin tax regulations, contract review, and compliant tax optimization strategies.",
          icon: "Percent",
        },
        {
          id: "recovery",
          title: "Accounting Recovery",
          description:
            "Audit, error correction, and full reconstruction of accounting records for prior reporting periods.",
          icon: "FileText",
        },
        {
          id: "additional",
          title: "Business Support Services",
          description:
            "Ongoing business consulting, representation before tax authorities, banking assistance, and licensing.",
          icon: "MessageSquareMore",
        },
      ],
    },
    workflowSection: {
      heading: "How We Work",
      steps: [
        {
          number: "01",
          title: "You Provide Documents",
          items: [
            "Invoices and contracts",
            "Bank statements",
            "Fiscal receipts and bills",
            "Payroll records",
            "Additional documents on request",
          ],
        },
        {
          number: "02",
          title: "We Handle the Books",
          items: [
            "Record all financial transactions",
            "Calculate taxes and employee payroll",
            "Submit statutory tax and financial filings",
            "Communicate with the Tax Administration",
            "Provide prompt day-to-day advisory",
          ],
        },
        {
          number: "03",
          title: "You Get Peace of Mind",
          items: [
            "Timely filings with zero delays",
            "Full clarity on upcoming tax obligations",
            "Clean, transparent financial statements",
            "Actionable cost-optimization insights",
            "Reliable support in every situation",
          ],
        },
      ],
    },
    about: {
      title: "Your Trusted Partner in Montenegro",
      photoAlt: "Smart Finance consultation office interior in Ulcinj",
      paragraphs: [
        "SMART FINANCE is a professional accounting firm based in Ulcinj with 7 years of experience and a team of 7 certified accountants. We support both newly established and operating companies (DOO) as well as sole proprietors (Preduzetnik), working with local businesses and international founders across Montenegro.",
        "We take care of fiscalization, e-reporting, VAT (PDV), corporate tax, payroll, and pension fund contributions. We explain Montenegrin regulations in plain language across Montenegrin, Albanian, and English while guaranteeing strict confidentiality.",
      ],
    },
    industriesSection: {
      heading: "Who We Work With",
      items: [
        {
          title: "Restaurants & Cafés",
          description:
            "HoReCa accounting, POS fiscalization, hospitality taxes, shift scheduling, and staff payroll.",
          image: "/images/industry-restaurant-v2.jpg",
          tag: "HoReCa",
        },
        {
          title: "Apartments & Tourism",
          description:
            "Rental bookkeeping, seasonal tourism accounting, tourist taxes, and statutory compliance.",
          image: "/images/industry-tourism-v3.png",
          tag: "Tourism & Hospitality",
        },
        {
          title: "Construction",
          description:
            "Project cost accounting, VAT (PDV) recovery, subcontractor agreements, and inventory tracking.",
          image: "/images/industry-construction-v2.png",
          tag: "Development",
        },
        {
          title: "Retail & Wholesale",
          description:
            "Bookkeeping for retail stores and wholesale distributors, inventory accounting, and tax filings.",
          image: "/images/industry-retail-v3.png",
          tag: "Retail",
        },
        {
          title: "Small & Medium Business",
          description:
            "End-to-end accounting support for IT professionals, service agencies, and international entrepreneurs.",
          image: "/images/industry-business-v2.jpg",
          tag: "IT & Services",
        },
      ],
    },
    contactSection: {
      heading: "Request a Consultation",
      description:
        "Tell us about your business. We will get in touch, answer your questions, and propose the right solution.",
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
        "Share your business type and contact details - we will prepare a tailored quote.",
      serviceSubtitle:
        "Leave your contact details - we will get back to you, answer your questions, and offer a solution.",
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
      messageLabel: "Comment or Question (Optional)",
      messagePlaceholder: "Legal form (DOO / Sole Proprietor), industry, number of employees...",
      successTitle: "Inquiry Sent Successfully",
      successText:
        "We will get back to you shortly. You can also reach us directly via messenger:",
      defaultError: "Submission error. Please message us on WhatsApp.",
    },
    footer: {
      location: "Ulcinj - Ulqin, Montenegro",
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
