"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { ExternalLink, FileText, Scale } from "lucide-react";

export default function LawsPage() {
  const { lang } = useLanguage();

  const laws = [
    {
      code: "O'RQ-821",
      titleUz: "“Davlat mulkini boshqarish to'g'risida”gi O'zbekiston Respublikasi Qonuni",
      titleRu: "Закон Республики Узбекистан «Об управлении государственным имуществом»",
      descUz: "Davlat mulkidan oqilona, maqsadli va samarali foydalanish, uni hisobga olish hamda boshqarish mezonlari.",
      descRu: "Критерии целевого, рационального и эффективного использования, учета и распоряжения государственным имуществом.",
      url: "https://lex.uz/docs/6408253",
    },
    {
      code: "O'RQ-684",
      titleUz: "“Davlat xaridlari to'g'risida”gi O'zbekiston Respublikasi Qonuni",
      titleRu: "Закон Республики Узбекистан «О государственных закупках»",
      descUz: "Davlat xaridlarida ochiqlik, shaffoflik, raqobat tamoyillari va korrupsiyaning oldini olish kafolatlari.",
      descRu: "Принципы открытости, прозрачности, добросовестной конкуренции и противодействия коррупции в госзакупках.",
      url: "https://lex.uz/docs/5382975",
    },
  ];

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
            <span className="text-slate-300">{lang === "uz" ? "Me'yoriy hujjatlar" : "Нормативные акты"}</span>
            <span>/</span>
            <span className="text-emerald-400">{lang === "uz" ? "Qonunlar" : "Законы"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "uz" ? "O'zbekiston Respublikasi Qonunlari" : "Законы Республики Узбекистан"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Boshqarma faoliyatining qonuniy asoslarini belgilovchi O'zbekiston Respublikasi Qonunlari."
              : "Законы Республики Узбекистан, регулирующие деятельность и правовую основу управления."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        {laws.map((law, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-[#0f172a] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-mono">
                {law.code}
              </span>
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg">
                {lang === "uz" ? law.titleUz : law.titleRu}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
                {lang === "uz" ? law.descUz : law.descRu}
              </p>
            </div>
            <a
              href={law.url}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 border border-slate-200 dark:border-white/10"
            >
              <span>{lang === "uz" ? "Lex.uz orqali ko'rish" : "Открыть на Lex.uz"}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
