"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { Globe2, Award, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function InternationalPage() {
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
            <span className="text-emerald-400">{lang === "uz" ? "Xalqaro hamkorlik" : "Международное сотрудничество"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "uz" ? "Xalqaro Hamkorlik" : "Международное Сотрудничество"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Bino infratuzilmasini boshqarishda jahon standartlari va xalqaro tajriba almashinuvi."
              : "Мировые стандарты и международный обмен опытом в сфере управления инфраструктурой административных зданий."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="p-8 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-emerald-500 uppercase tracking-wider">
                {lang === "uz" ? "Xalqaro Sertifikatsiya" : "Международная Сертификация"}
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                ISO 41001 (Facility Management)
              </h3>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {lang === "uz"
              ? "Boshqarma o'z faoliyatida ma'muriy binolarni boshqarish bo'yicha ilg'or xalqaro standartlarni tatbiq etish ustida ishlamoqda. Bu xizmat ko'rsatish sifatini oshirish, muhandislik xavflarini minimallashtirish va resurslarni tejamkor boshqarishga xizmat qiladi."
              : "Управление внедряет передовые международные стандарты эксплуатации административных комплексов (ISO 41001). Это повышает качество сервиса, снижает аварийные риски и оптимизирует затраты на содержание."}
          </p>
          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-white/10">
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">{lang === "uz" ? "Standart" : "Стандарт"}</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">ISO 41001:2018</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">{lang === "uz" ? "Yo'nalish" : "Направление"}</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">Facility Management</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
              <span className="text-xs text-slate-500 dark:text-slate-400 block">{lang === "uz" ? "Maqsad" : "Цель"}</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{lang === "uz" ? "Energiya tejamkorlik" : "Энергоэффективность"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
