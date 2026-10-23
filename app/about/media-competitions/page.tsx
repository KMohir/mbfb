"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { Newspaper } from "lucide-react";

export default function MediaPage() {
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
            <span className="text-emerald-400">{lang === "uz" ? "Media tanlovlar" : "Медиа-конкурсы"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "uz" ? "Media Tanlovlar" : "Медиа-Конкурсы"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Ommaviy axborot vositalari uchun materiallar, ijodiy tanlovlar va ochiq matbuot xabarlari."
              : "Материалы для СМИ, творческие конкурсы и официальные пресс-релизы."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-[#0f172a] p-10 rounded-3xl border border-slate-200 dark:border-white/10 text-center max-w-2xl mx-auto shadow-sm">
          <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <Newspaper className="w-8 h-8" />
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
            {lang === "uz"
              ? "Hozirda yangi media tanlovlar e'lon qilinmagan"
              : "В настоящее время активных медиа-конкурсов нет"}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
            {lang === "uz"
              ? "Rejalashtirilgan media tanlovlar, matbuot anjumanlari va ochiq tadbirlar tasdiqlanishi bilan ushbu bo'limda to'liq nizomi bilan e'lon qilinadi."
              : "Запланированные медиа-конкурсы и официальные пресс-мероприятия будут опубликованы в данном разделе с полным регламентом участия."}
          </p>
        </div>
      </div>
    </div>
  );
}
