"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { lang } = useLanguage();

  const faqs = lang === "uz" ? [
    {
      q: "Boshqarma bilan qanday bog'lanish mumkin?",
      a: "Boshqarma bilan devonxona telefoni ((71) 200-00-00), elektron pochta (info@mbfb.uz) hamda saytdagi “Biz bilan bog'lanish” bo'limidagi onlayn shakl orqali bog'lanishingiz mumkin."
    },
    {
      q: "Qabul jadvalini qayerdan topaman?",
      a: "Direktor va direktor o'rinbosarining qabul kunlari hamda vaqtlari saytning “Qabul qilish jadvali” sahifasida keltirilgan (Direktor: Dushanba va juma, 14:00–16:00; Direktor o'rinbosari: Seshanba va chorshanba, 14:00–17:00)."
    },
    {
      q: "Savolimni qanday yuboraman?",
      a: "Saytdagi maxsus shaklda ismingiz, javob uchun aloqa ma'lumotingiz va savolingizni yozing. Yuborilgan savol Telegram orqali mas'ul xodimlarga uzatiladi. Sayt savollarni o'z serverida saqlamaydi."
    },
    {
      q: "Bo'sh turgan xonalarni ijaraga olish tartibi qanday?",
      a: "Davlat mulkini ijaraga berish amaldagi qonunchilikka binoan “E-ijara” (e-auksion.uz) elektron savdo maydonchasi orqali ochiq tanlov asosida amalga oshiriladi."
    },
    {
      q: "Binoda ta'mirlash yoki nosozlik kuzatilsa, kimga murojaat qilish kerak?",
      a: "24 soatlik avariya-dispetcherlik xizmatiga (71) 200-00-01 telefon raqami orqali murojaat qilishingiz mumkin. Mutaxassislar zudlik bilan texnik ko'rik o'tkazadi."
    }
  ] : [
    {
      q: "Как связаться с управлением?",
      a: "Связаться с управлением можно по телефону канцелярии ((71) 200-00-00), электронной почте (info@mbfb.uz), а также через форму обратной связи на странице «Связаться с нами»."
    },
    {
      q: "Где найти график личного приема?",
      a: "Дни и часы приема директора и его заместителя указаны на странице «График приема граждан» (Директор: понедельник и пятница, 14:00–16:00; Заместитель: вторник и среда, 14:00–17:00)."
    },
    {
      q: "Как отправить обращение или вопрос?",
      a: "Заполните форму на сайте, указав ваше имя, контакты и текст вопроса. Обращение направляется ответственным сотрудникам через рабочий Telegram-канал. Сайт не хранит обращения в базе данных."
    },
    {
      q: "Каков порядок аренды свободных помещений?",
      a: "Сдача государственного имущества в аренду осуществляется на открытых торгах через электронную торговую площадку «E-ijara» (e-auksion.uz) в соответствии с законодательством."
    },
    {
      q: "Куда обращаться при аварии или необходимости ремонта?",
      a: "Следует обратиться в круглосуточную аварийно-диспетчерскую службу по телефону (71) 200-00-01. Специалисты немедленно проведут технический осмотр."
    }
  ];

  return (
    <div>
      <div className="bg-[#0f212f] text-white py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold text-emerald-400 mb-2">
            <Link href="/" className="hover:underline">{lang === "uz" ? "Bosh sahifa" : "Главная страница"}</Link> / <span>{lang === "uz" ? "Biz bilan aloqa" : "Контакты"}</span> / <span>{lang === "uz" ? "Ko'p beriladigan savollar" : "Часто задаваемые вопросы"}</span>
          </div>
          <h1 className="text-3xl font-extrabold">{lang === "uz" ? "Ko'p Beriladigan Savollar" : "Часто задаваемые вопросы"}</h1>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            {lang === "uz" ? "Boshqarma faoliyati, xizmatlar va murojaatlar yuzasidan ommabop savollarga javoblar." : "Ответы на популярные вопросы о деятельности управления и порядке обслуживания."}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center hover:bg-slate-50"
            >
              <span>{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === idx ? "rotate-180" : ""}`} />
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
