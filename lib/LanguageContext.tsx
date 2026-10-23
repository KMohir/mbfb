"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "uz" | "ru";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  uz: {
    // TopBar
    top_status: "24/7 Bino monitoringi faol",
    top_org: "O'zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Kontent tayyorlash markazi tizim tashkiloti",
    hotline_prefix: "Ishonch telefoni:",
    
    // Marquee
    ticker_text: "Sayt test rejimida ishlamoqda.",
    ticker_sub: "Barcha xizmatlar va tizimlar uzluksiz faoliyat ko'rsatmoqda.",
    
    // Header & Brand
    site_title: "MBFB",
    site_subheading: "Ma'muriy binolardan foydalanish boshqarmasi",
    nav_home: "Bosh sahifa",
    nav_about: "Boshqarma haqida",
    sub_about_general: "Umumiy ma'lumotlar",
    sub_about_structure: "Tuzilma",
    sub_about_management: "Rahbariyat",
    sub_about_central: "Markaziy apparat",
    nav_directions: "Yo'nalishlar",
    sub_dir_all: "Faoliyat yo'nalishlari",
    sub_dir_projects: "Loyihalar",
    sub_dir_media: "Media tanlovlar",
    sub_dir_intl: "Xalqaro hamkorlik",
    sub_dir_anticorrupt: "Korrupsiyaga qarshi kurashish",
    sub_dir_purchasing: "Xarid komissiyasi",
    sub_dir_tenders: "Tenderlar",
    sub_dir_attestation: "Attestatsiya savollari",
    nav_documents: "Me'yoriy hujjatlar",
    sub_doc_laws: "O'zbekiston Respublikasi Qonunlari",
    sub_doc_president: "Prezident Farmonlari va qarorlari",
    sub_doc_cabinet: "Vazirlar Mahkamasi qarorlari",
    sub_doc_center: "Markazga doir normativ hujjatlar",
    nav_contact: "Biz bilan aloqa",
    sub_contact_hotlines: "Ishonch telefonlari",
    sub_contact_reception: "Qabul qilish jadvali",
    sub_contact_faq: "Ko'p beriladigan savollar",
    sub_contact_details: "Biz bilan bog'lanish",
    btn_send_request: "Murojaat yuborish",

    // Home Hero
    hero_pill: "Davlat muassasasi • MBFB",
    hero_title_1: "Saqlash. Xizmat ko'rsatish. Tartib.",
    hero_title_2: "Ma'muriy binolarga kundalik g'amxo'rlik.",
    hero_desc: "Binoning texnik sozligi, uzluksiz faoliyati va davlat mulkidan oqilona foydalanishni ta'minlaymiz.",
    hero_btn_contact: "Biz bilan bog'lanish",
    hero_btn_about: "Boshqarma haqida",
    metric_1: "Boshqaruvdagi maydon",
    metric_2: "Dispetcherlik nazorati",
    metric_3: "Muhandislik xavfsizligi",
    hero_card_badge: "Toshkent shahri, Ma'muriy majmua",
    hero_card_title: "Binolar sozligi va qulay ish muhiti",
    hero_card_desc: "Muhandislik tarmoqlari, iqlim nazorati, yong'in xavfsizligi va elektr ta'minoti 24 soatlik avtomatlashtirilgan nazorat ostida.",
    hero_card_link: "Qabul jadvali →",

    // Section 1: About
    sec1_badge: "01 / Boshqarma haqida",
    sec1_title: "Vazifamiz — binolarni asrash.",
    sec1_p1: "“Ma'muriy binolardan foydalanish boshqarmasi” davlat muassasasi — O'zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Ommaviy axborot vositalari uchun kontent tayyorlash markazining tizim tashkiloti hisoblanadi.",
    sec1_p2: "Boshqarma bino faoliyatini samarali tashkil etish uchun zarur ma'muriy, texnik va infratuzilmaviy sharoitlarni ta'minlaydi hamda davlat mulkini asrash, uning texnik sozligi va uzluksiz ishlashiga xizmat qiladi.",
    sec1_link_more: "Batafsil ma'lumotlar",
    sec1_link_struct: "Tashkiliy tuzilma",
    sec1_link_mgmt: "Rahbariyat",
    about_tag_org: "Tizim tashkiloti",
    about_tag_text: "Prezident Administratsiyasi huzuridagi Kontent tayyorlash markazi",

    // Section 2: Tasks
    sec2_badge: "02 / Asosiy vazifalar",
    sec2_title: "Nimalar bilan shug'ullanamiz",
    sec2_sub: "Ma'muriy infratuzilmaning xavfsiz va uzluksiz faoliyatini ta'minlovchi asosiy yo'nalishlar.",
    sec2_all_dir: "Barcha yo'nalishlarni ko'rish",
    task1_title: "Binolarni saqlash",
    task1_desc: "Binoning texnik sozligi, saqlanishi va uzluksiz faoliyatini ta'minlash.",
    task1_scope: "24/7 Monitoring",
    task2_title: "Ta'mirlash ishlari",
    task2_desc: "Binoni saqlash va undan foydalanish uchun zarur ta'mirlash ishlarini tashkil etish.",
    task2_scope: "Rejali profilaktika",
    task3_title: "Muhandislik tarmoqlari",
    task3_desc: "Muhandislik-kommunikatsiya tizimlarining barqaror ishlashini ta'minlash.",
    task3_scope: "HVAC va Ventilyatsiya",
    task4_title: "Kommunal xizmatlar",
    task4_desc: "Elektr energiyasi, suv, isitish va boshqa kommunal xizmatlarni muvofiqlashtirish.",
    task4_scope: "Energiya balansi",
    task5_title: "Xonalarni ijaraga berish",
    task5_desc: "Bo'sh turgan xonalarni belgilangan tartibda ijaraga berishni tashkil etish.",
    task5_scope: "Davlat reyestri",
    task6_title: "Davlat mulkidan foydalanish",
    task6_desc: "Mulkiy resurslardan oqilona va maqsadli foydalanish, ularning iqtisodiy samaradorligini oshirish.",
    task6_scope: "Iqtisodiy samaradorlik",

    // Section 3: Contact & Reception
    sec3_badge: "03 / Bog'lanish",
    sec3_title: "Boshqarma bilan bog'lanish va qabul vaqti",
    role_director: "Direktor",
    role_deputy: "Direktor o'rinbosari",
    role_accountant: "Bosh hisobchi",
    dir_name: "Sulaymanov Suxrob Sarsenbekovich",
    dep_name: "Xalilov Rustam Xamidovich",
    acc_name: "Sheraliyev Jamshidbek Farxodjon o'g'li",
    rec_director_time: "Qabul vaqti: Dushanba va juma, 14:00–16:00",
    rec_deputy_time: "Qabul vaqti: Seshanba va chorshanba, 14:00–17:00",
    btn_book_reception: "Qabulga yozilish",
    hotline_card_title: "Ishonch telefoni va dispetcherlik xizmati",
    hotline_card_num: "(71) 200-00-00 • (71) 200-00-01 (24/7)",

    // Question / Feedback Form
    form_title: "Bizga savol yoki murojaat yuborish",
    form_sub: "Savol saytda ommaga e'lon qilinmaydi. Sayt savollarni o'z bazasida saqlamaydi; ular Telegram orqali mas'ul xodimlarga uzatiladi.",
    form_name_label: "Ism-sharif *",
    form_name_placeholder: "Masalan: Abdulla Qodiriy",
    form_contact_label: "Telefon yoki elektron pochta *",
    form_contact_placeholder: "+998 90 123 45 67",
    form_type_label: "Murojaat yo'nalishi",
    form_opt_1: "Umumiy savol",
    form_opt_2: "Bino xizmati va ta'mirlash",
    form_opt_3: "Xonalarni ijaraga olish",
    form_opt_4: "Davlat xaridlari va tender",
    form_opt_5: "Korrupsiyaga qarshi ishonch signali",
    form_text_label: "Savolingiz *",
    form_text_placeholder: "Murojaatingizni batafsil yozing (10–1800 belgi)...",
    form_char_warning: "10–1800 belgi. Parol, pasport yoki boshqa maxfiy ma'lumotlarni kiritmang.",
    form_consent: "Ismim, aloqa ma'lumotim va savolim mas'ul xodimlarning Telegram kanaliga yuborilishiga roziman.",
    form_submit: "Savolni yuborish (Telegram orqali)",
    form_success_title: "Murojaatingiz qabul qilindi!",
    form_success_desc: "Sizning savolingiz mas'ul xodimlarning Telegram kanaliga muvaffaqiyatli uzatildi.",
    form_success_ref: "Murojaat raqami:",
    form_new_btn: "Yangi savol yuborish",

    // Footer
    footer_desc: "O'zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Ommaviy axborot vositalari uchun kontent tayyorlash markazining tizim tashkiloti.",
    footer_rights: "© 2026 MBFB. Barcha huquqlar himoyalangan.",
    footer_privacy_label: "Maxfiylik:",
    footer_privacy_text: "Savol yuborilganda ism, aloqa ma'lumoti va savol Telegram orqali mas'ul xodimlarga uzatiladi. Sayt savollarni o'z bazasida saqlamaydi. Tahliliy kuzatuv vositalari yo'q; maxsus imkoniyatlar sozlamalari faqat brauzeringizda saqlanadi."
  },
  ru: {
    // TopBar
    top_status: "24/7 Мониторинг зданий активен",
    top_org: "Подведомственная организация Центра подготовки контента при Администрации Президента РУз",
    hotline_prefix: "Телефон доверия:",
    
    // Marquee
    ticker_text: "Сайт работает в тестовом режиме.",
    ticker_sub: "Все службы и инженерные системы функционируют бесперебойно.",
    
    // Header & Brand
    site_title: "MBFB",
    site_subheading: "Управление по эксплуатации административных зданий",
    nav_home: "Главная страница",
    nav_about: "Об управлении",
    sub_about_general: "Общие сведения",
    sub_about_structure: "Структура",
    sub_about_management: "Руководство",
    sub_about_central: "Центральный аппарат",
    nav_directions: "Направления",
    sub_dir_all: "Направления деятельности",
    sub_dir_projects: "Проекты",
    sub_dir_media: "Медиа-конкурсы",
    sub_dir_intl: "Международное сотрудничество",
    sub_dir_anticorrupt: "Противодействие коррупции",
    sub_dir_purchasing: "Закупочная комиссия",
    sub_dir_tenders: "Тендеры",
    sub_dir_attestation: "Вопросы аттестации",
    nav_documents: "Нормативные акты",
    sub_doc_laws: "Законы Республики Узбекистан",
    sub_doc_president: "Указы и постановления Президента",
    sub_doc_cabinet: "Постановления Кабинета Министров",
    sub_doc_center: "Нормативные документы Центра",
    nav_contact: "Контакты",
    sub_contact_hotlines: "Телефоны доверия",
    sub_contact_reception: "График приема граждан",
    sub_contact_faq: "Часто задаваемые вопросы",
    sub_contact_details: "Связаться с нами",
    btn_send_request: "Отправить обращение",

    // Home Hero
    hero_pill: "Государственное учреждение • MBFB",
    hero_title_1: "Сохранность. Сервис. Порядок.",
    hero_title_2: "Ежедневная забота об административных зданиях.",
    hero_desc: "Обеспечиваем техническую исправность зданий, бесперебойную эксплуатацию и рациональное использование госимущества.",
    hero_btn_contact: "Связаться с нами",
    hero_btn_about: "Об управлении",
    metric_1: "Площадь в управлении",
    metric_2: "Диспетчерский контроль",
    metric_3: "Инженерная безопасность",
    hero_card_badge: "г. Ташкент, Административный комплекс",
    hero_card_title: "Исправность зданий и комфортная рабочая среда",
    hero_card_desc: "Инженерные сети, климат-контроль, пожарная безопасность и энергоснабжение под круглосуточным автоматизированным контролем.",
    hero_card_link: "График приема →",

    // Section 1: About
    sec1_badge: "01 / Об управлении",
    sec1_title: "Наша миссия — сохранение зданий.",
    sec1_p1: "Государственное учреждение «Управление по эксплуатации административных зданий» является подведомственной организацией Центра подготовки контента для СМИ при Администрации Президента Республики Узбекистан.",
    sec1_p2: "Управление обеспечивает необходимые административные, технические и инфраструктурные условия для эффективного функционирования здания и сохранения государственного имущества.",
    sec1_link_more: "Подробные сведения",
    sec1_link_struct: "Организационная структура",
    sec1_link_mgmt: "Руководство",
    about_tag_org: "Подведомственная организация",
    about_tag_text: "Центр подготовки контента при Администрации Президента РУз",

    // Section 2: Tasks
    sec2_badge: "02 / Основные задачи",
    sec2_title: "Чем мы занимаемся",
    sec2_sub: "Ключевые направления обеспечения безопасного и бесперебойного функционирования административной инфраструктуры.",
    sec2_all_dir: "Смотреть все направления",
    task1_title: "Содержание зданий",
    task1_desc: "Обеспечение технической исправности, сохранности и непрерывной работы зданий.",
    task1_scope: "24/7 Мониторинг",
    task2_title: "Ремонтные работы",
    task2_desc: "Организация и проведение необходимых текущих и плановых ремонтных работ.",
    task2_scope: "Плановая профилактика",
    task3_title: "Инженерные сети",
    task3_desc: "Обеспечение стабильного и бесперебойного функционирования инженерно-коммуникационных систем.",
    task3_scope: "HVAC и вентиляция",
    task4_title: "Коммунальные услуги",
    task4_desc: "Координация электроснабжения, водоснабжения, отопления и других коммунальных ресурсов.",
    task4_scope: "Энергобаланс",
    task5_title: "Аренда помещений",
    task5_desc: "Организация сдачи свободных помещений в аренду в установленном законодательством порядке.",
    task5_scope: "Госреестр",
    task6_title: "Использование госимущества",
    task6_desc: "Рациональное и целевое использование имущественных ресурсов, повышение экономической эффективности.",
    task6_scope: "Экономическая отдача",

    // Section 3: Contact & Reception
    sec3_badge: "03 / Контакты",
    sec3_title: "Связь с управлением и график приема",
    role_director: "Директор",
    role_deputy: "Заместитель директора",
    role_accountant: "Главный бухгалтер",
    dir_name: "Сулайманов Сухроб Сарсенбекович",
    dep_name: "Халилов Рустам Хамидович",
    acc_name: "Шералиев Жамшидбек Фарходжон угли",
    rec_director_time: "Время приема: Понедельник и пятница, 14:00–16:00",
    rec_deputy_time: "Время приема: Вторник и среда, 14:00–17:00",
    btn_book_reception: "Записаться на прием",
    hotline_card_title: "Телефон доверия и диспетчерская служба",
    hotline_card_num: "(71) 200-00-00 • (71) 200-00-01 (24/7)",

    // Question / Feedback Form
    form_title: "Задайте вопрос или отправьте обращение",
    form_sub: "Вопрос не публикуется в открытом доступе на сайте. Сайт не хранит обращения в базе данных; они направляются ответственным сотрудникам через Telegram.",
    form_name_label: "Ваше имя и фамилия *",
    form_name_placeholder: "Например: Абдулла Кадыри",
    form_contact_label: "Телефон или эл. почта для связи *",
    form_contact_placeholder: "+998 90 123 45 67",
    form_type_label: "Тематика обращения",
    form_opt_1: "Общий вопрос",
    form_opt_2: "Эксплуатация и ремонт",
    form_opt_3: "Аренда помещений",
    form_opt_4: "Госзакупки и тендеры",
    form_opt_5: "Противодействие коррупции",
    form_text_label: "Текст обращения *",
    form_text_placeholder: "Подробно опишите ваш вопрос (10–1800 символов)...",
    form_char_warning: "От 10 до 1800 символов. Не вводите пароли, паспортные или конфиденциальные данные.",
    form_consent: "Я согласен на передачу моих данных и текста обращения в рабочий Telegram-канал ответственных сотрудников.",
    form_submit: "Отправить обращение (в Telegram)",
    form_success_title: "Ваше обращение принято!",
    form_success_desc: "Ваш вопрос успешно передан в рабочий Telegram-канал ответственных специалистов.",
    form_success_ref: "Номер обращения:",
    form_new_btn: "Отправить новый вопрос",

    // Footer
    footer_desc: "Подведомственная организация Центра подготовки контента для СМИ при Администрации Президента Республики Узбекистан.",
    footer_rights: "© 2026 MBFB. Все права защищены.",
    footer_privacy_label: "Конфиденциальность:",
    footer_privacy_text: "При отправке обращения имя, контактные данные и текст передаются ответственным сотрудникам через Telegram. Сайт не хранит обращения в базе данных. Аналитических трекеров нет; настройки сохраняются только в браузере."
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "uz",
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("uz");

  useEffect(() => {
    const saved = localStorage.getItem("mbfb_lang") as Language;
    if (saved && (saved === "uz" || saved === "ru")) {
      setLangState(saved);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("mbfb_lang", newLang);
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations["uz"]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
