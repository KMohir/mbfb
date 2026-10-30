"use client";

import React, { useState, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import {
  ShieldCheck,
  Zap,
  Sparkles,
  Shield,
  Activity,
  CheckCircle2,
  Clock,
  Thermometer,
  Wind,
  Wrench,
  Building,
} from "lucide-react";

interface ServicePillar {
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
  yPercent: number; // Vertical position on building
  hPercent: number; // Height bracket
  tagBadge: string;
  image: string;
}

const pillars: ServicePillar[] = [
  {
    id: 1,
    key: "saqlash",
    badgeUz: "01. Saqlash",
    badgeRu: "01. Сохранение",
    titleUz: "Binoning Texnik Sozligi va Muhandislik Saqlovi",
    titleRu: "Техническая исправность и сохранение здания",
    zoneUz: "Tom qismi va Markaziy HVAC majmuasi",
    zoneRu: "Кровля и климатический комплекс HVAC",
    descUz: "Binoning konstruktiv mustahkamligi, tomi, fasad qoplamalari, markaziy sovitish chillerlari va ventilyatsiya tizimlarini texnik saqlash hamda muddatidan oldin eskirishini oldini olish.",
    descRu: "Конструктивная прочность, кровля, фасады, центральные чиллеры и вентиляция для предотвращения износа и сохранения здания.",
    metric1LabelUz: "Texnik sozlik",
    metric1LabelRu: "Исправность",
    metric1Value: "99.8%",
    metric2LabelUz: "HVAC iqlimi",
    metric2LabelRu: "Климат HVAC",
    metric2Value: "18.0°C / 45 kW",
    metric3LabelUz: "Profilaktika",
    metric3LabelRu: "Профилактика",
    metric3Value: "Reja asosida",
    statusUz: "Bino konstruksiyasi va muhandislik tarmoqlari to'liq soz saqlanmoqda",
    statusRu: "Конструкции и инженерные системы здания полностью исправны",
    yPercent: 14,
    hPercent: 18,
    tagBadge: "Saqlash • Muhandislik",
    image: "/images/mbfb_task_1_building.webp",
  },
  {
    id: 2,
    key: "xizmat",
    badgeUz: "02. Xizmat ko'rsatish",
    badgeRu: "02. Обслуживание",
    titleUz: "24/7 Muhandislik, Elektr va Kommunal Xizmat Ko'rsatish",
    titleRu: "24/7 Инженерно-коммунальное обслуживание",
    zoneUz: "3-Sath: SCADA va Markaziy Dispetcherlik pulti",
    zoneRu: "3-Уровень: SCADA и диспетчерский пункт",
    descUz: "24/7 uzluksiz avariya-dispetcherlik xizmati, elektr tarmoqlari va zaxira generatorlari nazorati, suv-oqova (santehnika) tizimlari hamda nosozliklarni 15 daqiqada bartaraf etish.",
    descRu: "Круглосуточная диспетчерская служба, резервное электропитание (ДГУ+ИБП), водоснабжение и устранение неполадок менее чем за 15 минут.",
    metric1LabelUz: "Dispetcherlik",
    metric1LabelRu: "Диспетчер",
    metric1Value: "24/7 Shay",
    metric2LabelUz: "Elektr ta'minoti",
    metric2LabelRu: "Электросеть",
    metric2Value: "38.5 kW Onlayn",
    metric3LabelUz: "Tezkor reaksiya",
    metric3LabelRu: "Реакция",
    metric3Value: "< 15 daqiqa",
    statusUz: "Dispetcherlik nazorati va avariya brigadasi 24 soat navbatchilikda",
    statusRu: "Диспетчерский контроль и аварийная бригада на дежурстве 24/7",
    yPercent: 34,
    hPercent: 18,
    tagBadge: "Xizmat • 24/7 Dispetcher",
    image: "/images/mbfb_task_3_engineering.webp",
  },
  {
    id: 3,
    key: "gamxorlik",
    badgeUz: "03. Kundalik g'amxo'rlik",
    badgeRu: "03. Ежедневный уход",
    titleUz: "Xonalar Tozaligi, Qulay Ish Sharoiti va Klining",
    titleRu: "Чистота помещений, комфорт и ежедневный клининг",
    zoneUz: "2-Sath: Ma'muriy apparat va Majlislar zali",
    zoneRu: "2-Уровень: Административные кабинеты и залы",
    descUz: "Davlat xizmatchilari uchun ishchi xonalar va zallarni kundalik tozalash (klining), mebellarni tartibga keltirish, mikroiqlim (21.5°C) va gigiyena talablariga qat'iy rioya etish.",
    descRu: "Ежедневный клининг кабинетов и залов заседаний, эргономика мебели, комфортный микроклимат (21.5°C) и гигиенические стандарты.",
    metric1LabelUz: "Ichki harorat",
    metric1LabelRu: "Температура",
    metric1Value: "21.5°C",
    metric2LabelUz: "Tozalik standarti",
    metric2LabelRu: "Чистота",
    metric2Value: "99.4% (A'lo)",
    metric3LabelUz: "Toza havo oqimi",
    metric3LabelRu: "Вент-поток",
    metric3Value: "680 m³/soat",
    statusUz: "Davlat xizmatchilari uchun qulay va toza ish muhiti ta'minlangan",
    statusRu: "Обеспечена чистая и комфортная рабочая среда для госслужащих",
    yPercent: 54,
    hPercent: 18,
    tagBadge: "G'amxo'rlik • Klining",
    image: "/images/mbfb_pillar_care.webp",
  },
  {
    id: 4,
    key: "tartib",
    badgeUz: "04. Tartib",
    badgeRu: "04. Порядок",
    titleUz: "Xavfsizlik, Tartib va Kirish-Chiqish Nazorati",
    titleRu: "Безопасность, порядок и пропускной режим",
    zoneUz: "1-Sath: Markaziy Vestibyul va Xavfsizlik posti",
    zoneRu: "1-Уровень: Центральный вестибюль и пост охраны",
    descUz: "Markaziy vestibyul, elektron turniketlar, biometrik nazorat, videokuzatuv va yong'indan xabardor qilish tizimi. Binoda qat'iy ma'muriy tartib va xavfsizlikni ta'minlash.",
    descRu: "Центральный холл, электронные турникеты, пропускной режим, видеонаблюдение, противопожарная защита и круглосуточная охрана.",
    metric1LabelUz: "Kirish tartibi",
    metric1LabelRu: "Пропускной режим",
    metric1Value: "100% Nazorat",
    metric2LabelUz: "O'tkazuvchanlik",
    metric2LabelRu: "Проходимость",
    metric2Value: "520 kishi/s",
    metric3LabelUz: "Yong'in himoyasi",
    metric3LabelRu: "Пожарная защита",
    metric3Value: "To'liq faol",
    statusUz: "Binoda qat'iy o'tish tartibi va fuqarolar xavfsizligi to'liq ta'minlangan",
    statusRu: "Пропускной режим и безопасность посетителей под постоянным контролем",
    yPercent: 74,
    hPercent: 18,
    tagBadge: "Tartib • Xavfsizlik",
    image: "/images/mbfb_task_4_security.webp",
  },
];

export default function InteractiveBuildingViewer() {
  const [selectedPillar, setSelectedPillar] = useState<number>(3); // Default to Kundalik g'amxo'rlik
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

  const current = pillars.find((p) => p.id === selectedPillar) || pillars[0];

  return (
    <section
      className={`py-16 sm:py-20 transition-colors duration-300 relative overflow-hidden ${
        isDark
          ? "bg-[#07131f]/90 backdrop-blur-md text-white border-t border-b border-white/10"
          : "bg-slate-50/80 backdrop-blur-md text-slate-900 border-t border-b border-slate-200/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Saqlash, Xizmat, Tartib, Kundalik g'amxo'rlik */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border transition-colors shadow-sm ${
              isDark
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                : "bg-emerald-50 border-emerald-300 text-emerald-800"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>
              {lang === "uz"
                ? "3D Operatsion Xizmat Modeli • Saqlash • Xizmat • Tartib"
                : "3D Модель эксплуатации • Сохранение • Сервис • Порядок"}
            </span>
          </div>
          
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {lang === "uz"
              ? "Ma'muriy Binolarga Kundalik G'amxo'rlik va Xizmat Ko'rsatish"
              : "Ежедневное обслуживание и эксплуатация административных зданий"}
          </h2>
          
          <p
            className={`text-sm sm:text-base mt-3 max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {lang === "uz"
              ? "Saqlash, uzluksiz xizmat ko'rsatish va tartib: Davlat ma'muriy binolarining texnik sozligi, tozaligi, xavfsizligi va qulay ish muhiti real vaqt rejimida qanday ta'minlanadi?"
              : "Сохранение, сервис и порядок: Как на практике обеспечивается техническая исправность, чистота и безопасность административных зданий."}
          </p>
        </div>

        {/* 3D Inspector Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Facility Visual (Photorealistic Service or 3D Model) */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`lg:col-span-7 relative h-[400px] sm:h-[460px] rounded-3xl overflow-hidden border transition-all duration-300 shadow-2xl group ${
              isDark
                ? "bg-[#070e17] border-white/10 shadow-black/60"
                : "bg-slate-900 border-slate-200 shadow-slate-300/60"
            }`}
          >
            {/* Top Bar Switcher & Status HUD */}
            <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/15 text-xs shadow-lg">
                <button
                  onClick={() => setViewMode("photo")}
                  className={`px-3 py-1 rounded-full font-bold transition-all ${
                    viewMode === "photo"
                      ? "bg-[#00c988] text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {lang === "uz" ? "Xizmat Jarayoni (Foto)" : "Процесс (Фото)"}
                </button>
                <button
                  onClick={() => setViewMode("3d")}
                  className={`px-3 py-1 rounded-full font-bold transition-all ${
                    viewMode === "3d"
                      ? "bg-[#00c988] text-white shadow-sm"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {lang === "uz" ? "3D Sxema" : "3D Схема"}
                </button>
              </div>

              <div
                className="px-3 py-1 rounded-full text-[11px] font-mono border backdrop-blur-md flex items-center gap-1.5 shadow-sm bg-black/60 border-white/15 text-[#00c988]"
              >
                <Activity className="w-3.5 h-3.5 animate-pulse" />
                <span>MBFB BMS v4.2</span>
              </div>
            </div>

            {/* Main Visual Display */}
            {viewMode === "photo" ? (
              <div className="relative w-full h-full overflow-hidden">
                <img
                  key={current.id}
                  src={current.image}
                  alt={lang === "uz" ? current.titleUz : current.titleRu}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-4 left-4 right-4 z-20 backdrop-blur-md bg-black/65 border border-white/15 p-3.5 rounded-2xl flex items-center justify-between gap-3 text-white">
                  <div className="min-w-0">
                    <span className="text-[11px] font-bold text-[#00c988] uppercase tracking-wider block">
                      📍 {lang === "uz" ? current.zoneUz : current.zoneRu}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate block mt-0.5">
                      {lang === "uz" ? current.statusUz : current.statusRu}
                    </span>
                  </div>
                  <div className="shrink-0 pl-3 border-l border-white/20 text-right">
                    <span className="text-[10px] text-slate-300 block">{lang === "uz" ? current.metric1LabelUz : current.metric1LabelRu}</span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-[#00c988]">{current.metric1Value}</span>
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
                {/* Background CAD Isometric Grid */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-25"
                  style={{
                    backgroundImage: "radial-gradient(circle at center, rgba(16, 185, 129, 0.12) 0%, transparent 70%), linear-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.08) 1px, transparent 1px)",
                    backgroundSize: "100% 100%, 32px 32px, 32px 32px",
                  }}
                />
                <img
                  src="/images/hero_building_transparent.webp"
                  alt="MBFB 3D Digital Twin"
                  className="max-h-[340px] sm:max-h-[370px] w-auto object-contain transition-all duration-500 select-none filter drop-shadow-[0_20px_40px_rgba(16,185,129,0.25)]"
                  draggable={false}
                />
                {/* Holographic Active Floor Highlight Bracket */}
                <div
                  className="absolute left-[18%] right-[18%] transition-all duration-500 pointer-events-none rounded-xl border-2 flex items-center justify-between px-3"
                  style={{
                    top: `${current.yPercent}%`,
                    height: `${current.hPercent}%`,
                    borderColor: "#00c988",
                    backgroundColor: "rgba(0, 201, 136, 0.18)",
                    boxShadow: "0 0 30px rgba(0, 201, 136, 0.4), inset 0 0 20px rgba(0, 201, 136, 0.2)",
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

          {/* Right Column: 4 Core Pillars & Live Operational Diagnostics */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 4 Core Pillars Selector Buttons (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2.5">
              {pillars.map((p) => {
                const isActive = selectedPillar === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedPillar(p.id)}
                    className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-200 flex items-center gap-2.5 ${
                      isActive
                        ? "bg-[#00c988] border-transparent text-white shadow-lg shadow-[#00c988]/30 scale-[1.02]"
                        : isDark
                        ? "bg-[#0e1726]/90 border-white/10 text-slate-300 hover:bg-white/10 hover:border-emerald-500/30"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-emerald-50/60 hover:border-emerald-300 shadow-sm"
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.badgeUz}
                      className="w-10 h-10 rounded-xl object-cover shrink-0 shadow-sm border border-white/20"
                    />
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
                          {lang === "uz" ? p.badgeUz : p.badgeRu}
                        </span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-white animate-ping shrink-0 ml-1"></span>
                        )}
                      </div>
                      <div
                        className={`text-xs font-semibold mt-0.5 truncate ${
                          isActive
                            ? "text-white/90"
                            : isDark
                            ? "text-slate-200"
                            : "text-slate-800"
                        }`}
                      >
                        {lang === "uz" ? p.titleUz.split(":")[1]?.trim() || p.titleUz : p.titleRu.split(":")[1]?.trim() || p.titleRu}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Pillar Detailed Live Diagnostics Card */}
            <div
              className={`p-6 rounded-3xl border backdrop-blur-md space-y-4 transition-all shadow-xl ${
                isDark
                  ? "bg-[#0b1723]/80 border-white/10 text-white shadow-black/40"
                  : "bg-white border-slate-200/90 text-slate-900 shadow-slate-200/50"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  {current.id === 1 && (
                    <Wrench className={`w-4 h-4 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
                  )}
                  {current.id === 2 && (
                    <Zap className={`w-4 h-4 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
                  )}
                  {current.id === 3 && (
                    <Sparkles className={`w-4 h-4 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
                  )}
                  {current.id === 4 && (
                    <Shield className={`w-4 h-4 ${isDark ? "text-emerald-400" : "text-emerald-600"}`} />
                  )}
                  <h3
                    className={`text-base font-bold ${
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
                    className={`text-[11px] mb-1 font-medium ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {lang === "uz" ? current.metric1LabelUz : current.metric1LabelRu}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-bold font-mono ${
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
                    className={`text-[11px] mb-1 font-medium ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {lang === "uz" ? current.metric2LabelUz : current.metric2LabelRu}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-bold font-mono ${
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
                    className={`text-[11px] mb-1 font-medium ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {lang === "uz" ? current.metric3LabelUz : current.metric3LabelRu}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-bold font-mono ${
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

      </div>
    </section>
  );
}
