"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { ExternalLink, CheckCircle2, ShoppingBag } from "lucide-react";

export default function TendersPage() {
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
            <span className="text-emerald-400">{lang === "uz" ? "Tenderlar" : "Тендеры"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "uz" ? "Tenderlar va Davlat Xaridlari" : "Тендеры и Госзакупки"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Boshqarma e'lon qilgan ochiq tanlovlar, auksionlar va davlat xaridlari shartlari."
              : "Открытые конкурсы, аукционы и условия государственных закупок управления."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <div className="p-8 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                  {lang === "uz" ? "Elektron Savdolar" : "Электронные Торги"}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
                  {lang === "uz" ? "Ochiq Savdolar Portali (etender.uzex.uz)" : "Портал Открытых Торгов (etender.uzex.uz)"}
                </h3>
              </div>
            </div>

            <a
              href="https://etender.uzex.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 shadow-md"
            >
              <span>{lang === "uz" ? "Portalga o'tish" : "Перейти на портал"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
            {lang === "uz"
              ? "MBFB tomonidan e'lon qilinadigan barcha tender va tanlovlar O'zbekiston respublika tovar-xom ashyo birjasi tizimidagi maxsus davlat portalida e'lon qilinadi. Ishtirokchilar takliflarini elektron raqamli imzo (ERI) orqali topshirishlari mumkin."
              : "Все тендеры и конкурсы MBFB размещаются на специализированном государственном портале Узбекской республиканской товарно-сырьевой биржи (etender.uzex.uz). Подача предложений осуществляется с использованием ЭЦП."}
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-xs text-slate-600 dark:text-slate-400 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>
              {lang === "uz"
                ? "Shartnomalar to'liq elektron va shaffof tarzda amalga oshiriladi."
                : "Все договоры заключаются исключительно в электронном и прозрачном формате."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
