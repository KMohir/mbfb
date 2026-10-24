"use client";

import Link from "next/link";
import QuestionForm from "@/components/QuestionForm";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

export default function DetailsPage() {
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? "bg-[#0b1120] text-slate-100" : "bg-slate-50 text-slate-900"}`}>
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
            <div className={`p-6 rounded-2xl border transition-all ${
              isDark ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white shadow-xl shadow-black/30" : "bg-white border-slate-200 text-slate-900 shadow-sm"
            } space-y-4`}>
              <h3 className={`text-lg font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{lang === "uz" ? "Aloqa ma'lumotlari" : "Контактная информация"}</h3>
              
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg ${isDark ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-50 text-[#0f766e]"} flex items-center justify-center shrink-0 mt-0.5`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className={`font-bold block ${isDark ? "text-white" : "text-slate-900"}`}>{lang === "uz" ? "Manzil:" : "Адрес:"}</span>
                  <span className={isDark ? "text-slate-400" : "text-slate-600"}>
                    {lang === "uz"
                      ? "O'zbekiston Respublikasi, Toshkent shahri, Ma'muriy binolar majmuasi"
                      : "Республика Узбекистан, г. Ташкент, Административный комплекс"}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg ${isDark ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-50 text-[#0f766e]"} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className={`font-bold block ${isDark ? "text-white" : "text-slate-900"}`}>{lang === "uz" ? "Telefon:" : "Телефон:"}</span>
                  <span className={isDark ? "text-slate-400" : "text-slate-600"}>(71) 200-00-00, (71) 200-00-01 {lang === "uz" ? "(Dispetcherlik)" : "(Диспетчерская)"}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-lg ${isDark ? "bg-emerald-500/20 text-emerald-400" : "bg-emerald-50 text-[#0f766e]"} flex items-center justify-center shrink-0 mt-0.5`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <span className={`font-bold block ${isDark ? "text-white" : "text-slate-900"}`}>{lang === "uz" ? "Elektron pochta:" : "Электронная почта:"}</span>
                  <span className={isDark ? "text-slate-400" : "text-slate-600"}>info@mbfb.uz, devonxona@mbfb.uz</span>
                </div>
              </div>
            </div>

            <div className={`p-6 rounded-2xl border text-xs space-y-2 ${
              isDark ? "bg-[#0e1726]/70 border-white/10 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-600"
            }`}>
              <h4 className={`font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{lang === "uz" ? "Qabul kunlari:" : "Дни приема:"}</h4>
              <p>• <strong className={isDark ? "text-slate-200" : "text-slate-800"}>{lang === "uz" ? "Direktor:" : "Директор:"}</strong> {lang === "uz" ? "Dushanba va juma, 14:00–16:00" : "Понедельник и пятница, 14:00–16:00"}</p>
              <p>• <strong className={isDark ? "text-slate-200" : "text-slate-800"}>{lang === "uz" ? "Direktor o'rinbosari:" : "Заместитель директора:"}</strong> {lang === "uz" ? "Seshanba va chorshanba, 14:00–17:00" : "Вторник и среда, 14:00–17:00"}</p>
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
