"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { Users2, ShieldCheck, FileCheck } from "lucide-react";

export default function PurchasingCommissionPage() {
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
            <span className="text-emerald-400">{lang === "uz" ? "Xarid komissiyasi" : "Закупочная комиссия"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "uz" ? "Xarid Komissiyasi" : "Закупочная Комиссия"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Davlat xaridlarini ochiq, shaffof va raqobat tamoyillari asosida amalga oshirish komissiyasi."
              : "Комиссия по организации открытых, прозрачных и конкурентных государственных закупок."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <div className="p-8 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Users2 className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                {lang === "uz" ? "Komissiya Tartibi" : "Регламент Комиссии"}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {lang === "uz" ? "Xarid Komissiyasi Reglamenti va Nizomi" : "Регламент Закупочной Комиссии"}
              </h3>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
            {lang === "uz"
              ? "Boshqarma tomonidan amalga oshiriladigan barcha tovar va xizmatlar xaridi O'zbekiston Respublikasining “Davlat xaridlari to'g'risida”gi Qonuniga qat'iy muvofiq ravishda maxsus davlat axborot portali orqali amalga oshiriladi."
              : "Все закупки товаров и услуг управления осуществляются в строгом соответствии с Законом Республики Узбекистан «О государственных закупках» через единый информационный портал."}
          </p>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/40 text-xs sm:text-sm text-slate-600 dark:text-slate-400 flex items-center gap-3 border border-slate-100 dark:border-white/5">
            <FileCheck className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>
              {lang === "uz"
                ? "Komissiya tarkibi buyruq asosida tasdiqlangan bo'lib, xaridlar bo'yicha bayonnomalar maxsus portalda e'lon qilinadi."
                : "Состав комиссии утвержден приказом руководства, итоговые протоколы открыто публикуются на портале."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
