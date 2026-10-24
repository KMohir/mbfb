"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function DirectionsPage() {
  const { lang } = useLanguage();

  const directions = [
    {
      num: "01",
      titleUz: "Bino va Ob'ektlarni Saqlash",
      titleRu: "Техническая Эксплуатация Зданий",
      descUz: "Binoning texnik sozligi, konstruktiv mustahkamligi va uzluksiz faoliyatini ta'minlash bo'yicha profilaktik tadbirlar kompleksi.",
      descRu: "Комплекс превентивных мер по обеспечению технической исправности, конструктивной надежности и непрерывного функционирования здания.",
      img: "/images/3d_smart_building.webp",
      tagUz: "Smart Texnik Nazorat",
      tagRu: "Smart Технадзор",
    },
    {
      num: "02",
      titleUz: "Ta'mirlash va Qayta Tiklash",
      titleRu: "Ремонтно-Строительные Работы",
      descUz: "Binoni saqlash va undan foydalanish uchun zarur rejali, avariya-tiklash va kapital ta'mirlash ishlarini sifatli tashkil etish.",
      descRu: "Организация планового, аварийно-восстановительного и капитального ремонта с применением современных стандартов и материалов.",
      img: "/images/3d_renovation_tools.webp",
      tagUz: "Arxitektura va Ta'mir",
      tagRu: "Архитектура и Ремонт",
    },
    {
      num: "03",
      titleUz: "Muhandislik va Iqlim Tizimlari",
      titleRu: "Инженерные и Климатические Сети",
      descUz: "Markaziy HVAC sovutish, isitish, shamollatish va suv-energiya tizimlarining uzluksiz, energiya tejamkor ishlashini ta'minlash.",
      descRu: "Бесперебойная и энергоэффективная работа систем кондиционирования (HVAC), вентиляции, отопления и энергоснабжения.",
      img: "/images/3d_hvac_turbine.webp",
      tagUz: "HVAC & Energiya",
      tagRu: "HVAC & Энергия",
    },
    {
      num: "04",
      titleUz: "Mehnat Muhofazasi va Xavfsizlik",
      titleRu: "Охрана Труда и Безопасность",
      descUz: "Yong'in xavfsizligi, datchiklar monitoringi, evakuatsiya yo'llari va xodimlar hayoti xavfsizligini ta'minlash choralari.",
      descRu: "Противопожарная защита, мониторинг датчиков, эвакуационные системы и строгий контроль техники безопасности персонала.",
      img: "/images/3d_security_shield.webp",
      tagUz: "Xavfsizlik & Standart",
      tagRu: "Безопасность и Стандарт",
    },
    {
      num: "05",
      titleUz: "Xizmat Ko'rsatish va Ergonomika",
      titleRu: "Офисный Комфорт и Сервис",
      descUz: "Ishchi muhit qulayligi, moddiy-texnik ta'minot, zamonaviy mebel va ofis ergonomikasini eng yuqori darajada ta'minlash.",
      descRu: "Создание премиального офисного комфорта, материально-техническое снабжение и эргономика рабочих мест высшего класса.",
      img: "/images/3d_executive_chair.webp",
      tagUz: "Ofis Ergonomikasi",
      tagRu: "Офисная Эргономика",
    },
    {
      num: "06",
      titleUz: "Davlat Mulkidan Samarali Foydalanish",
      titleRu: "Управление Госсобственностью",
      descUz: "Davlat tasarrufidagi bo'sh maydonlarni belgilangan tartibda ijaraga berish, ijara shartnomalari monitoringi va mulk hisobini yuritish.",
      descRu: "Учет государственного имущества, мониторинг арендных отношений и повышение экономической эффективности использования площадей.",
      img: "/images/3d_vault_cube.webp",
      tagUz: "Mulk & Nazorat",
      tagRu: "Имущество и Учет",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b12] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Page Header */}
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
            <span className="text-emerald-400">{lang === "uz" ? "Yo'nalishlar" : "Направления"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "uz" ? "Faoliyat Yo'nalishlari" : "Направления Деятельности"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Boshqarma tomonidan amalga oshiriladigan asosiy faoliyat yo'nalishlari, muhandislik xizmatlari va mulkiy resurslar boshqaruvi."
              : "Основные направления деятельности Управления по эксплуатации административных зданий, инжиниринговые услуги и управление активами."}
          </p>
        </div>
      </div>

      {/* 3D Direction Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directions.map((d, idx) => (
            <div
              key={idx}
              className="group bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-[#090e17] overflow-hidden p-3 flex items-center justify-center">
                  <Image
                    src={d.img}
                    alt={lang === "uz" ? d.titleUz : d.titleRu}
                    width={400}
                    height={260}
                    className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-slate-900/80 text-white backdrop-blur-md border border-white/10">
                    {lang === "uz" ? d.tagUz : d.tagRu}
                  </div>
                  <div className="absolute top-3 right-3 text-xs font-black text-slate-400 dark:text-slate-500 font-mono">
                    {d.num}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-slate-900 dark:text-white text-lg mb-2 group-hover:text-emerald-500 transition-colors">
                    {lang === "uz" ? d.titleUz : d.titleRu}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {lang === "uz" ? d.descUz : d.descRu}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  {lang === "uz" ? "Davlat standarti" : "Госстандарт"}
                </span>
                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  {lang === "uz" ? "Batafsil" : "Подробнее"} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
