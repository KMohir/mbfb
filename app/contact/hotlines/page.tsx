"use client";

import Link from "next/link";
import { Phone, Mail, Zap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function HotlinesPage() {
  const { lang } = useLanguage();

  return (
    <div>
      <div className="bg-[#0f212f] text-white py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold text-emerald-400 mb-2">
            <Link href="/" className="hover:underline">{lang === "uz" ? "Bosh sahifa" : "Главная страница"}</Link> / <span>{lang === "uz" ? "Biz bilan aloqa" : "Контакты"}</span> / <span>{lang === "uz" ? "Ishonch telefonlari" : "Телефоны доверия"}</span>
          </div>
          <h1 className="text-3xl font-extrabold">{lang === "uz" ? "Ishonch Telefonlari" : "Телефоны доверия"}</h1>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            {lang === "uz" ? "Boshqarma bilan tezkor aloqa va kechayu kunduz texnik dispetcherlik xizmati." : "Оперативная связь с управлением и круглосуточная диспетчерская служба."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0f766e] flex items-center justify-center mx-auto mb-3">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">{lang === "uz" ? "Boshqarma devonxonasi" : "Канцелярия управления"}</h3>
            <p className="text-xs text-slate-500 mb-4">{lang === "uz" ? "Rasmiy xatlar va murojaatlar uchun" : "Для официальных писем и обращений"}</p>
            <div className="text-lg font-black text-slate-900">(71) 200-00-00</div>
            <div className="text-xs text-slate-400 mt-1">{lang === "uz" ? "Dush - Juma: 09:00 - 18:00" : "Пн - Пт: 09:00 - 18:00"}</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">{lang === "uz" ? "Avariya-dispetcherlik" : "Аварийно-диспетчерская"}</h3>
            <p className="text-xs text-slate-500 mb-4">{lang === "uz" ? "Texnik nosozliklar va avariya holatlari" : "Технические неисправности и аварийные ситуации"}</p>
            <div className="text-lg font-black text-blue-700">(71) 200-00-01</div>
            <div className="text-xs text-emerald-600 font-bold mt-1">{lang === "uz" ? "24 soat / 7 kun uzluksiz" : "24 часа / 7 дней непрерывно"}</div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-3">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 text-base mb-1">{lang === "uz" ? "Elektron pochta" : "Электронная почта"}</h3>
            <p className="text-xs text-slate-500 mb-4">{lang === "uz" ? "Elektron murojaatlar uchun" : "Для электронных обращений"}</p>
            <div className="text-base font-bold text-slate-900">info@mbfb.uz</div>
            <div className="text-xs text-slate-400 mt-1">devonxona@mbfb.uz</div>
          </div>
        </div>
      </div>
    </div>
  );
}
