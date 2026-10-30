"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import {
  ShieldCheck,
  Zap,
  Activity,
  CheckCircle2,
  Clock,
  Thermometer,
  Wind,
  Wrench,
  Building,
  Radio,
  SlidersHorizontal,
  PhoneCall,
  Flame,
  Check,
} from "lucide-react";

interface CommandSystem {
  id: number;
  key: string;
  badgeUz: string;
  badgeRu: string;
  titleUz: string;
  titleRu: string;
  zoneUz: string;
  zoneRu: string;
  descUz: string;
  descRu: string;
  metric1LabelUz: string;
  metric1LabelRu: string;
  metric1Value: string;
  metric2LabelUz: string;
  metric2LabelRu: string;
  metric2Value: string;
  metric3LabelUz: string;
  metric3LabelRu: string;
  metric3Value: string;
  statusUz: string;
  statusRu: string;
  yPercent: number; // Vertical position on 3D building
  hPercent: number; // Height bracket
  tagBadge: string;
  image: string;
  iconType: "power" | "climate" | "security" | "structural";
}

const systems: CommandSystem[] = [
  {
    id: 1,
    key: "power",
    badgeUz: "01. Elektr & SCADA",
    badgeRu: "01. Энергетика & SCADA",
    titleUz: "Uzluksiz Elektr Ta'minoti va SCADA Telemetriyasi",
    titleRu: "Бесперебойное электроснабжение и телеметрия SCADA",
    zoneUz: "Markaziy transformator, UPS va DGU generatorlar tarmog'i",
    zoneRu: "Трансформаторная подстанция, ИБП и резервные ДГУ",
    descUz: "Boshqarma tasarrufidagi ma'muriy binolarda elektr ta'minoti 24/7 kafolatlanadi. Kuchlanish o'zgarganda yoki uzilish xavfi tug'ilganda SCADA avtomatlashtirilgan tizimi zaxira quvvat manbalarini soniyalar ichida ishga tushiradi.",
    descRu: "Электроснабжение административных зданий гарантируется 24/7. При перепадах напряжения или сбоях автоматика SCADA подключает резервные генераторы за считанные секунды.",
    metric1LabelUz: "Elektr barqarorligi",
    metric1LabelRu: "Электросеть",
    metric1Value: "100% Onlayn (380V)",
    metric2LabelUz: "Zaxira DGU/UPS",
    metric2LabelRu: "Резерв ДГУ/ИБП",
    metric2Value: "Avto-start < 10s",
    metric3LabelUz: "Dispetcherlik",
    metric3LabelRu: "Диспетчеризация",
    metric3Value: "24/7 Monitoring",
    statusUz: "Elektr ta'minoti va telemetriya to'liq barqaror avtomatik rejimda",
    statusRu: "Электросеть и телеметрия работают в полностью стабильном режиме",
    yPercent: 34,
    hPercent: 18,
    tagBadge: "Elektr • SCADA Telemetriya",
    image: "/images/mbfb_task_3_engineering.webp",
    iconType: "power",
  },
  {
    id: 2,
    key: "climate",
    badgeUz: "02. Mikroiqlim & HVAC",
    badgeRu: "02. Микроклимат & HVAC",
    titleUz: "Aqlli Iqlim, Ventilyatsiya va Toza Havo Aylanishi",
    titleRu: "Климат-контроль, вентиляция и рециркуляция воздуха",
    zoneUz: "Tom chiller majmuasi, HEPA filtrlash va ishchi zallar",
    zoneRu: "Крышный чиллерный комплекс, HEPA-фильтрация и залы",
    descUz: "Davlat organlari xodimlari va mehmonlar uchun barcha xona va majlislar zallarida optimal harorat (22°C), namlik balansi hamda muntazam toza kislorod oqimi avtomatik tartibga solinadi.",
    descRu: "Для сотрудников и посетителей поддерживается идеальная температура (22°C), баланс влажности и непрерывный приток чистого отфильтрованного воздуха.",
    metric1LabelUz: "Ichki harorat",
    metric1LabelRu: "Температура",
    metric1Value: "21.8°C (Optimal)",
    metric2LabelUz: "Havo tozaligi",
    metric2LabelRu: "Чистота воздуха",
    metric2Value: "AQI 12 (A'lo)",
    metric3LabelUz: "Toza havo oqimi",
    metric3LabelRu: "Вент-поток",
    metric3Value: "1,450 m³/soat",
    statusUz: "Barcha ma'muriy xonalarda sog'lom mikroiqlim va toza havo ta'minlangan",
    statusRu: "Во всех помещениях обеспечен здоровый микроклимат и чистый воздух",
    yPercent: 14,
    hPercent: 18,
    tagBadge: "Iqlim • Toza Havo",
    image: "/images/mbfb_pillar_care.webp",
    iconType: "climate",
  },
  {
    id: 3,
    key: "security",
    badgeUz: "03. Xavfsizlik & Tartib",
    badgeRu: "03. Безопасность & Порядок",
    titleUz: "Biometrik Nazorat, Optik Perimetr va Yong'in Xavfsizligi",
    titleRu: "Биометрический контроль, оптический периметр и пожарная безопасность",
    zoneUz: "Markaziy vestibyul, turniketlar va xavfsizlik boshqaruv punkti",
    zoneRu: "Центральный холл, турникеты и диспетчерский пункт охраны",
    descUz: "Face-ID biometrik turniketlar orqali qat'iy ma'muriy tartib, 24/7 optik videokuzatuv va favqulodda vaziyatlarni erta aniqlovchi aqlli yong'in datchiklari tizimi.",
    descRu: "Биометрические турникеты с Face-ID, круглосуточное оптическое видеонаблюдение и противопожарные датчики раннего оповещения.",
    metric1LabelUz: "Kirish nazorati",
    metric1LabelRu: "Пропускной режим",
    metric1Value: "100% Biometrik",
    metric2LabelUz: "Yong'in datchiklari",
    metric2LabelRu: "Пожарная защита",
    metric2Value: "Avto-himoya shay",
    metric3LabelUz: "Kamera qamrovi",
    metric3LabelRu: "Видеонаблюдение",
    metric3Value: "360° Optik nazorat",
    statusUz: "Binoda qat'iy xavfsizlik va o'tish tartibi to'liq nazorat ostida",
    statusRu: "Безопасность и пропускной режим под постоянным контролем",
    yPercent: 74,
    hPercent: 18,
    tagBadge: "Xavfsizlik • Biometriya",
    image: "/images/mbfb_task_4_security.webp",
    iconType: "security",
  },
  {
    id: 4,
    key: "structural",
    badgeUz: "04. Konstruktiv Saqlov",
    badgeRu: "04. Конструктивный надзор",
    titleUz: "Bino Konstruksiyasi, Liftlar va Rejali Profilaktika",
    titleRu: "Конструкции здания, лифтовое хозяйство и регламентный сервис",
    zoneUz: "Bino fasadi, poydevor, tom va tezyurar liftlar tarmog'i",
    zoneRu: "Фасад, фундамент, кровля и скоростные лифты",
    descUz: "Davlat mulkini asrash, fasad va tom qoplamalari mustahkamligi, lift xo'jaligi va suv-oqova tarmoqlarini ISO 41001 xalqaro standartiga asosan rejali profilaktika qilish.",
    descRu: "Сохранение государственного имущества, прочность фасадов и кровли, лифтовое хозяйство и инженерные сети по регламенту ISO 41001.",
    metric1LabelUz: "Bino sozligi",
    metric1LabelRu: "Исправность здания",
    metric1Value: "99.9% Texnik soz",
    metric2LabelUz: "Tezkor reaksiya",
    metric2LabelRu: "Время реакции",
    metric2Value: "< 15 daqiqa",
    metric3LabelUz: "Servis standarti",
    metric3LabelRu: "Стандарт сервиса",
    metric3Value: "ISO 41001",
    statusUz: "Bino konstruksiyasi va muhandislik tarmoqlari rejali profilaktik nazoratda",
    statusRu: "Конструкции здания и инженерные сети на регламентном контроле",
    yPercent: 54,
    hPercent: 18,
    tagBadge: "Bino • Texnik Saqlov",
    image: "/images/mbfb_navoiy30_headquarters.webp",
    iconType: "structural",
  },
];

export default function InteractiveBuildingViewer() {
  const [selectedId, setSelectedId] = useState<number>(1); // Default to Power / SCADA
  const [viewMode, setViewMode] = useState<"photo" | "3d">("photo");
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // 3D Parallax tilt effect on mouse movement
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const current = systems.find((s) => s.id === selectedId) || systems[0];

  return (
    <section
      className={`py-16 sm:py-20 transition-colors duration-300 relative overflow-hidden ${
        isDark
          ? "bg-[#07131f]/90 backdrop-blur-md text-white border-t border-b border-white/10"
          : "bg-gradient-to-b from-slate-50 via-slate-100/60 to-slate-50 text-slate-900 border-t border-b border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Creative 24/7 Smart Command Center */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-3 border transition-colors shadow-sm ${
              isDark
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                : "bg-emerald-50 border-emerald-300 text-emerald-800"
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>
              {lang === "uz"
                ? "⚡ RAQAMLI BOSHQARUV EKOTIZIMI • SCADA & BMS 24/7"
                : "⚡ ЦИФРОВАЯ ЭКОСИСТЕМА УПРАВЛЕНИЯ • SCADA & BMS 24/7"}
            </span>
          </div>
          
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {lang === "uz"
              ? "24/7 Aqlli Boshqaruv va Muhandislik Dispetcherlik Markazi"
              : "Круглосуточный центр интеллектуального управления и диспетчеризации"}
          </h2>
          
          <p
            className={`text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {lang === "uz"
              ? "Ma'muriy binolarning texnik sozligi, mikroiqlimi, uzluksiz elektr ta'minoti va xavfsizligi real vaqt rejimida avtomatlashtirilgan SCADA va BMS tizimlari orqali boshqariladi."
              : "Техническая исправность, микроклимат, энергобезопасность и защищенность административных зданий под круглосуточным контролем SCADA и BMS."}
          </p>
        </div>

        {/* Command Center Interactive Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Real-Time Visual Display Screen (Console Monitor) */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`lg:col-span-7 relative h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border transition-all duration-300 shadow-2xl group ${
              isDark
                ? "bg-[#050b12] border-white/15 shadow-black/80"
                : "bg-slate-900 border-slate-300 shadow-slate-300/80"
            }`}
          >
            {/* Top Command Bar & Mode Switcher */}
            <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1 bg-black/75 backdrop-blur-md p-1 rounded-full border border-white/20 text-xs shadow-lg">
                <button
                  onClick={() => setViewMode("photo")}
                  className={`px-3 py-1 rounded-full font-bold transition-all ${
                    viewMode === "photo"
                      ? "bg-[#00c988] text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {lang === "uz" ? "📸 Jonli Tasvir" : "📸 Живое фото"}
                </button>
                <button
                  onClick={() => setViewMode("3d")}
                  className={`px-3 py-1 rounded-full font-bold transition-all ${
                    viewMode === "3d"
                      ? "bg-[#00c988] text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {lang === "uz" ? "🏢 3D Sxema" : "🏢 3D Схема"}
                </button>
              </div>

              <div className="flex items-center gap-2">
                <div className="px-3 py-1 rounded-full text-[11px] font-mono border backdrop-blur-md flex items-center gap-1.5 shadow-sm bg-black/75 border-white/20 text-[#00c988]">
                  <Activity className="w-3.5 h-3.5 animate-pulse text-[#00c988]" />
                  <span>SCADA v4.2 ONLAYN</span>
                </div>
              </div>
            </div>

            {/* Visual Screen Container */}
            {viewMode === "photo" ? (
              <div className="relative w-full h-full overflow-hidden">
                <img
                  key={current.id}
                  src={current.image}
                  alt={lang === "uz" ? current.titleUz : current.titleRu}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/40 pointer-events-none" />

                {/* Floating Telemetry HUD on Image */}
                <div className="absolute bottom-4 left-4 right-4 z-20 backdrop-blur-xl bg-black/75 border border-white/20 p-4 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-white shadow-2xl">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] font-bold text-[#00c988] uppercase tracking-wider block">
                        {lang === "uz" ? current.zoneUz : current.zoneRu}
                      </span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate block mt-1">
                      {lang === "uz" ? current.statusUz : current.statusRu}
                    </span>
                  </div>

                  <div className="shrink-0 sm:pl-4 sm:border-l sm:border-white/20 flex sm:flex-col justify-between items-end gap-1">
                    <span className="text-[10px] text-slate-300 block">
                      {lang === "uz" ? current.metric1LabelUz : current.metric1LabelRu}
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#00c988] px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/30">
                      {current.metric1Value}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
                style={{
                  transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                  transformStyle: "preserve-3d",
                }}
              >
                {/* High-tech CAD Matrix Grid */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at center, rgba(16, 185, 129, 0.15) 0%, transparent 70%), linear-gradient(rgba(56, 189, 248, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px)",
                    backgroundSize: "100% 100%, 32px 32px, 32px 32px",
                  }}
                />
                <img
                  src="/images/hero_building_transparent.webp"
                  alt="MBFB 3D Digital Twin"
                  className="max-h-[350px] sm:max-h-[390px] w-auto object-contain transition-all duration-500 select-none filter drop-shadow-[0_20px_40px_rgba(16,185,129,0.3)]"
                  draggable={false}
                />
                
                {/* Active Layer Highlight Bracket */}
                <div
                  className="absolute left-[16%] right-[16%] transition-all duration-500 pointer-events-none rounded-2xl border-2 flex items-center justify-between px-3"
                  style={{
                    top: `${current.yPercent}%`,
                    height: `${current.hPercent}%`,
                    borderColor: "#00c988",
                    backgroundColor: "rgba(0, 201, 136, 0.22)",
                    boxShadow: "0 0 35px rgba(0, 201, 136, 0.45), inset 0 0 20px rgba(0, 201, 136, 0.25)",
                  }}
                >
                  <div className="px-2.5 py-0.5 rounded-md text-[10px] font-bold font-mono shadow-md border bg-[#00c988] text-slate-950 border-emerald-300">
                    {current.tagBadge}
                  </div>
                  <div className="px-2 py-0.5 rounded-md text-[10px] font-mono shadow-md border hidden sm:block bg-[#09121b] text-emerald-300 border-emerald-500/40">
                    {current.metric1Value} | {current.metric2Value}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: 4 Core Systems Switcher & Live Diagnostics */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 4 Systems Quick Switcher Deck (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2.5">
              {systems.map((s) => {
                const isActive = selectedId === s.id;
                return (
                  <button
                    key={s.id}
                    onClick={() => setSelectedId(s.id)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-200 flex items-center gap-2.5 cursor-pointer ${
                      isActive
                        ? "bg-[#00c988] border-transparent text-white shadow-lg shadow-[#00c988]/30 scale-[1.02]"
                        : isDark
                        ? "bg-[#0e1726]/90 border-white/10 text-slate-300 hover:bg-white/10 hover:border-emerald-500/30"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-emerald-50/60 hover:border-emerald-300 shadow-sm"
                    }`}
                  >
                    <div className="relative shrink-0">
                      <img
                        src={s.image}
                        alt={s.badgeUz}
                        className="w-10 h-10 rounded-xl object-cover shadow-sm border border-white/20"
                      />
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-white animate-pulse" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span
                          className={`text-[11px] font-bold uppercase tracking-wider truncate ${
                            isActive
                              ? "text-white"
                              : isDark
                              ? "text-[#00c988]"
                              : "text-emerald-700"
                          }`}
                        >
                          {lang === "uz" ? s.badgeUz : s.badgeRu}
                        </span>
                      </div>
                      <div
                        className={`text-xs font-semibold mt-0.5 truncate ${
                          isActive
                            ? "text-white/95"
                            : isDark
                            ? "text-slate-200"
                            : "text-slate-800"
                        }`}
                      >
                        {lang === "uz" ? s.titleUz.split(":")[0]?.trim() || s.titleUz : s.titleRu.split(":")[0]?.trim() || s.titleRu}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected System Live Telemetry Diagnostic Console */}
            <div
              className={`p-6 rounded-3xl border backdrop-blur-md space-y-4 transition-all shadow-xl ${
                isDark
                  ? "bg-[#0b1723]/90 border-white/10 text-white shadow-black/50"
                  : "bg-white border-slate-200/90 text-slate-900 shadow-slate-200/60"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  {current.iconType === "power" && (
                    <Zap className={`w-5 h-5 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
                  )}
                  {current.iconType === "climate" && (
                    <Wind className={`w-5 h-5 ${isDark ? "text-sky-400" : "text-sky-600"}`} />
                  )}
                  {current.iconType === "security" && (
                    <ShieldCheck className={`w-5 h-5 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
                  )}
                  {current.iconType === "structural" && (
                    <Building className={`w-5 h-5 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
                  )}
                  <h3
                    className={`text-base font-bold leading-snug ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {lang === "uz" ? current.titleUz : current.titleRu}
                  </h3>
                </div>
                
                <div className="text-[11px] font-mono text-emerald-600 dark:text-emerald-400 mb-2">
                  📍 {lang === "uz" ? current.zoneUz : current.zoneRu}
                </div>

                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {lang === "uz" ? current.descUz : current.descRu}
                </p>
              </div>

              {/* Real-Time Operational Sensor Metrics Grid (3 columns) */}
              <div
                className={`grid grid-cols-3 gap-3 pt-3 border-t ${
                  isDark ? "border-white/10" : "border-slate-100"
                }`}
              >
                {/* Metric 1 */}
                <div
                  className={`p-3 rounded-2xl border transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/5"
                      : "bg-slate-50 border-slate-200/70"
                  }`}
                >
                  <div
                    className={`text-[11px] mb-1 font-medium truncate ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {lang === "uz" ? current.metric1LabelUz : current.metric1LabelRu}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-bold font-mono truncate ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {current.metric1Value}
                  </div>
                </div>

                {/* Metric 2 */}
                <div
                  className={`p-3 rounded-2xl border transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/5"
                      : "bg-slate-50 border-slate-200/70"
                  }`}
                >
                  <div
                    className={`text-[11px] mb-1 font-medium truncate ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {lang === "uz" ? current.metric2LabelUz : current.metric2LabelRu}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-bold font-mono truncate ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {current.metric2Value}
                  </div>
                </div>

                {/* Metric 3 */}
                <div
                  className={`p-3 rounded-2xl border transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/5"
                      : "bg-slate-50 border-slate-200/70"
                  }`}
                >
                  <div
                    className={`text-[11px] mb-1 font-medium truncate ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {lang === "uz" ? current.metric3LabelUz : current.metric3LabelRu}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-bold font-mono truncate ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {current.metric3Value}
                  </div>
                </div>
              </div>

              {/* Status Verification Pill */}
              <div
                className={`flex items-center gap-2 pt-1 text-xs font-semibold ${
                  isDark ? "text-emerald-300" : "text-emerald-700"
                }`}
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span>
                  {lang === "uz" ? current.statusUz : current.statusRu}
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* 24/7 Command Center Telemetry Guarantee Strip */}
        <div className={`mt-10 p-5 rounded-3xl border transition-all ${
          isDark
            ? "bg-[#0b1723]/60 border-white/10 text-white"
            : "bg-white border-slate-200/80 text-slate-800 shadow-sm"
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-2">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {lang === "uz" ? "Dispetcherlik Rejimi" : "Режим диспетчерской"}
              </div>
              <div className="text-base sm:text-lg font-black text-emerald-600 dark:text-emerald-400">
                24/7 Shay
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500">
                {lang === "uz" ? "Uzluksiz navbatchilik" : "Круглосуточно"}
              </div>
            </div>

            <div className="p-2 border-l border-slate-200/60 dark:border-white/10">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {lang === "uz" ? "Tezkor Reaksiya" : "Время реакции"}
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                &lt; 15 Daqiqa
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500">
                {lang === "uz" ? "Mobil avariya brigadasi" : "Аварийная бригада"}
              </div>
            </div>

            <div className="p-2 border-l border-slate-200/60 dark:border-white/10">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {lang === "uz" ? "Boshqaruv Maydoni" : "Площадь объектов"}
              </div>
              <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                36,000 m²
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500">
                {lang === "uz" ? "Davlat ma'muriy majmualari" : "Гос. комплексы"}
              </div>
            </div>

            <div className="p-2 border-l border-slate-200/60 dark:border-white/10">
              <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">
                {lang === "uz" ? "Xalqaro Standart" : "Стандарт качества"}
              </div>
              <div className="text-base sm:text-lg font-black text-sky-600 dark:text-sky-400">
                ISO 41001
              </div>
              <div className="text-[10px] text-slate-400 dark:text-slate-500">
                {lang === "uz" ? "Facility Management" : "Управление объектами"}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
