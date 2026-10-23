"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { ShieldAlert, PhoneCall, Lock, Scale } from "lucide-react";

export default function AntiCorruptionPage() {
  const { lang } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b12] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <div className="bg-[#090e17] dark:bg-[#05080f] text-white py-14 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-xs font-semibold text-emerald-400 mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              {lang === "uz" ? "Bosh sahifa" : "Главная"}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{lang === "uz" ? "Faoliyat" : "Деятельность"}</span>
            <span>/</span>
            <span className="text-emerald-400">{lang === "uz" ? "Korrupsiyaga qarshi kurashish" : "Противодействие коррупции"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "uz" ? "Korrupsiyaga Qarshi Kurashish" : "Противодействие Коррупции"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Boshqarma faoliyatida qonuniylik, halollik va shaffoflik tamoyillari."
              : "Принципы законности, честности и абсолютной прозрачности в деятельности управления."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="p-8 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-wider">
                {lang === "uz" ? "Zero Tolerance Siyosati" : "Политика Нулевой Терпимости"}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {lang === "uz" ? "Komplayens-Nazorat va Halollik Standartlari" : "Комплаенс-Контроль и Стандарты Добропорядочности"}
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === "uz"
              ? "MBFB tizimida korrupsiyaning har qanday ko'rinishiga mutlaqo toqatsiz (zero-tolerance) munosabat o'rnatilgan. Davlat xaridlari, ijara shartnomalari va moliyaviy mablag'lardan foydalanish jarayonlari qat'iy nazorat ostida."
              : "В структуре MBFB установлена политика абсолютной нетерпимости к любым проявлениям коррупции. Государственные закупки, договоры аренды и расходование бюджетных средств находятся под строгим контролем комплаенс-службы."}
          </p>

          <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-amber-950 dark:text-amber-200 space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-amber-800 dark:text-amber-400">
              <ShieldAlert className="w-5 h-5" />
              <span>{lang === "uz" ? "Ishonch Kanali va Maxfiylik Kafolati" : "Канал Доверия и Гарантия Конфиденциальности"}</span>
            </div>
            <p className="text-xs leading-relaxed">
              {lang === "uz"
                ? "Korrupsiya holatlari yoki manfaatlar to'qnashuvi haqida ma'lumotga ega bo'lsangiz, bevosita (71) 200-00-00 ishonch telefoniga yoki maxfiy murojaat shakli orqali xabar berishingiz mumkin. Shaxsingiz sir saqlanishi qonun bilan kafolatlanadi."
                : "Если вам известны факты коррупционных проявлений или конфликта интересов, вы можете обратиться по телефону доверия (71) 200-00-00 или направить обращение. Полная конфиденциальность гарантируется законодательством."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
