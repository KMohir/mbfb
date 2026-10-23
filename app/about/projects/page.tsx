"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowUpRight, CheckCircle2, Building, Cpu, Zap } from "lucide-react";

export default function ProjectsPage() {
  const { lang } = useLanguage();

  const projects = [
    {
      titleUz: "Bosh Bino va Smart Campus Kompleksi",
      titleRu: "Главный Комплекс и Smart-Кампус",
      statusUz: "Joriy loyiha",
      statusRu: "Текущий проект",
      statusColor: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      descUz: "Boshqaruv markaziy binosini 3D raqamli egizak (Digital Twin) texnologiyasi, avtomatlashtirilgan kirish-chiqish va yashil arxitektura tamoyillari asosida to'liq modernizatsiya qilish.",
      descRu: "Полная модернизация главного административного здания на базе технологии 3D цифрового двойника (Digital Twin), автоматизированного контроля доступа и принципов эко-архитектуры.",
      img: "/images/hero_isometric_3d.jpg",
      icon: Building,
      metricsUz: ["24 Qavat", "36,000 m²", "99.9% Barqarorlik"],
      metricsRu: ["24 Этажа", "36,000 м²", "99.9% Надежность"],
    },
    {
      titleUz: "Energiya Tejamkor HVAC Iqlim Nazorati",
      titleRu: "Энергоэффективный Климат-Контроль HVAC",
      statusUz: "Yakunlangan",
      statusRu: "Завершено",
      statusColor: "bg-sky-500/10 text-sky-500 border-sky-500/20",
      descUz: "Binoning barcha zallari va xonalarida aqlli datchiklar yordamida harorat hamda havoni boshqarish orqali elektr va issiqlik energiyasini 25% gacha tejash tizimi.",
      descRu: "Автоматизированное регулирование температуры и циркуляции воздуха во всех залах с помощью умных датчиков со снижением энергопотребления до 25%.",
      img: "/images/3d_hvac_turbine.jpg",
      icon: Cpu,
      metricsUz: ["-25% Energiya", "22.0°C Rejim", "100% Avtomatika"],
      metricsRu: ["-25% Энергия", "22.0°C Режим", "100% Автоматика"],
    },
    {
      titleUz: "Aqlli Elektr Taqsimlash va Zaxira Quvvati",
      titleRu: "Интеллектуальное Электроснабжение",
      statusUz: "Faol ekspluatatsiya",
      statusRu: "В эксплуатации",
      statusColor: "bg-amber-500/10 text-amber-500 border-amber-500/20",
      descUz: "Elektr ta'minotidagi uzilishlarning oldini oluvchi avtomatlashtirilgan generatorlar va server infratuzilmasining 99.9% uzluksizligini ta'minlovchi tizim.",
      descRu: "Автоматизированные генераторы и резервные мощности бесперебойного электропитания, гарантирующие непрерывность серверной и инженерной инфраструктуры.",
      img: "/images/3d_smart_building.png",
      icon: Zap,
      metricsUz: ["0 ms Uzilish", "UPS Zaxira", "24/7 Monitoring"],
      metricsRu: ["0 мс Сбой", "Резерв UPS", "24/7 Мониторинг"],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b12] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Header */}
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
            <span className="text-emerald-400">{lang === "uz" ? "Loyihalar" : "Проекты"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "uz" ? "Infratuzilma Loyihalari" : "Инфраструктурные Проекты"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Bino samaradorligini oshirish, muhandislik modernizatsiyasi, energiya tejamkorlik va 3D raqamlashtirish loyihalari."
              : "Проекты повышения энергоэффективности зданий, инженерной модернизации и цифровизации инфраструктуры."}
          </p>
        </div>
      </div>

      {/* Projects List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {projects.map((proj, idx) => {
          const Icon = proj.icon;
          return (
            <div
              key={idx}
              className="bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden grid lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-5 relative aspect-[16/11] bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-[#070b12] p-4 flex items-center justify-center">
                <Image
                  src={proj.img}
                  alt={lang === "uz" ? proj.titleUz : proj.titleRu}
                  width={500}
                  height={350}
                  className="w-full h-full object-contain rounded-2xl"
                />
              </div>

              <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${proj.statusColor}`}>
                    {lang === "uz" ? proj.statusUz : proj.statusRu}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                  <Icon className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span>{lang === "uz" ? proj.titleUz : proj.titleRu}</span>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {lang === "uz" ? proj.descUz : proj.descRu}
                </p>

                {/* Metrics Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {(lang === "uz" ? proj.metricsUz : proj.metricsRu).map((m, mIdx) => (
                    <span
                      key={mIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold"
                    >
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
