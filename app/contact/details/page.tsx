"use client";

import Link from "next/link";
import QuestionForm from "@/components/QuestionForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function DetailsPage() {
  const { lang } = useLanguage();

  return (
    <div>
      <div className="bg-[#0f212f] text-white py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold text-emerald-400 mb-2">
            <Link href="/" className="hover:underline">{lang === "uz" ? "Bosh sahifa" : "Главная страница"}</Link> / <span>{lang === "uz" ? "Biz bilan aloqa" : "Контакты"}</span> / <span>{lang === "uz" ? "Biz bilan bog'lanish" : "Связаться с нами"}</span>
          </div>
          <h1 className="text-3xl font-extrabold">{lang === "uz" ? "Biz Bilan Bog'lanish" : "Связаться с нами"}</h1>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            {lang === "uz" ? "Boshqarmaga savol, taklif yoki texnik murojaat yuborish shakli." : "Форма для отправки вопросов, предложений и обращений руководству управления."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-lg font-bold text-slate-900">{lang === "uz" ? "Aloqa ma'lumotlari" : "Контактная информация"}</h3>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0f766e] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">{lang === "uz" ? "Manzil:" : "Адрес:"}</span>
                  <span className="text-slate-600">
                    {lang === "uz"
                      ? "O'zbekiston Respublikasi, Toshkent shahri, Ma'muriy binolar majmuasi"
                      : "Республика Узбекистан, г. Ташкент, Административный комплекс"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0f766e] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">{lang === "uz" ? "Telefon:" : "Телефон:"}</span>
                  <span className="text-slate-600">(71) 200-00-00, (71) 200-00-01 {lang === "uz" ? "(Dispetcherlik)" : "(Диспетчерская)"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#0f766e] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className="font-bold text-slate-900 block">{lang === "uz" ? "Elektron pochta:" : "Электронная почта:"}</span>
                  <span className="text-slate-600">info@mbfb.uz, devonxona@mbfb.uz</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 text-xs text-slate-600 space-y-2">
              <h4 className="font-bold text-slate-900">{lang === "uz" ? "Qabul kunlari:" : "Дни приема:"}</h4>
              <p>• <strong>{lang === "uz" ? "Direktor:" : "Директор:"}</strong> {lang === "uz" ? "Dushanba va juma, 14:00–16:00" : "Понедельник и пятница, 14:00–16:00"}</p>
              <p>• <strong>{lang === "uz" ? "Direktor o'rinbosari:" : "Заместитель директора:"}</strong> {lang === "uz" ? "Seshanba va chorshanba, 14:00–17:00" : "Вторник и среда, 14:00–17:00"}</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <QuestionForm />
          </div>

        </div>
      </div>
    </div>
  );
}
