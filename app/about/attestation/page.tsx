"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export default function AttestationPage() {
  const { lang } = useLanguage();

  const blocks = [
    {
      uz: "Ma'muriy binolarda mehnat muhofazasi va texnika xavfsizligi qoidalari.",
      ru: "Правила охраны труда и техники безопасности в административных комплексах.",
    },
    {
      uz: "Yong'in xavfsizligi choralari va favqulodda vaziyatlarda harakatlanish reglamenti.",
      ru: "Меры пожарной безопасности и регламент действий при нештатных и аварийных ситуациях.",
    },
    {
      uz: "Muhandislik tarmoqlari (elektr, santexnika, HVAC) ekspluatatsiyasi normalari.",
      ru: "Нормы технической эксплуатации инженерных систем (электрика, сантехника, вентиляция).",
    },
    {
      uz: "Davlat mulkidan oqilona foydalanish va moddiy javobgarlik asoslari.",
      ru: "Основы материальной ответственности и рационального использования государственной собственности.",
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
            <span className="text-slate-300">{lang === "uz" ? "Faoliyat" : "Деятельность"}</span>
            <span>/</span>
            <span className="text-emerald-400">{lang === "uz" ? "Attestatsiya savollari" : "Вопросы аттестации"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "uz" ? "Attestatsiya Savollari" : "Вопросы Аттестации"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Xodimlar malakasini oshirish, bilimlarini baholash va attestatsiyadan o'tkazish yo'riqnomalari."
              : "Руководства по повышению квалификации персонала и проведению профессиональной аттестации."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        <div className="p-8 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                {lang === "uz" ? "Malaka Standarti" : "Стандарт Квалификации"}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                {lang === "uz" ? "Xodimlar uchun asosiy attestatsiya yo'nalishlari" : "Ключевые направления аттестации сотрудников"}
              </h3>
            </div>
          </div>

          <div className="grid gap-3 pt-2">
            {blocks.map((b, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/40 flex items-start gap-3 border border-slate-100 dark:border-white/5"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {lang === "uz" ? b.uz : b.ru}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
