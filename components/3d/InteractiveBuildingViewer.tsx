"use client";

import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import { Layers, Thermometer, Wind, Zap, Shield, CheckCircle2, Building2, Activity, Cpu } from "lucide-react";

interface FloorData {
  id: number;
  badgeUz: string;
  badgeRu: string;
  titleUz: string;
  titleRu: string;
  descUz: string;
  descRu: string;
  temp: string;
  power: string;
  air: string;
  statusUz: string;
  statusRu: string;
  yPercent: number; // Vertical position percentage for highlight bracket
  hPercent: number; // Height percentage of this floor zone
}

const floors: FloorData[] = [
  {
    id: 1,
    badgeUz: "1-Qavat",
    badgeRu: "1-Этаж",
    titleUz: "1-Qavat: Qabulxona va Tashrif markazi",
    titleRu: "1-Этаж: Вестибюль и зона приема граждан",
    descUz: "Markaziy vestibyul, elektron turniketlar, fuqarolarni qabul qilish xizmati va doimiy qo'riqlash posti.",
    descRu: "Центральный холл, турникеты, служба приема граждан и круглосуточный пост охраны.",
    temp: "22.0°C",
    power: "14.2 kW",
    air: "520 m³/soat",
    statusUz: "Xavfsizlik nazorati faol (100%)",
    statusRu: "Контроль безопасности активен (100%)",
    yPercent: 74,
    hPercent: 18,
  },
  {
    id: 2,
    badgeUz: "2-Qavat",
    badgeRu: "2-Этаж",
    titleUz: "2-Qavat: Ma'muriy apparat va Majlislar zali",
    titleRu: "2-Этаж: Административный аппарат и конференц-зал",
    descUz: "Boshqarma rahbariyati, ishchi xonalar, yig'ilish va audio-video media konferentsiya zallari.",
    descRu: "Руководство управления, рабочие кабинеты, конференц-залы и медиа-студии.",
    temp: "21.5°C",
    power: "22.8 kW",
    air: "680 m³/soat",
    statusUz: "Iqlim nazorati me'yorda (Optimal)",
    statusRu: "Климат-контроль в норме (Оптимально)",
    yPercent: 54,
    hPercent: 18,
  },
  {
    id: 3,
    badgeUz: "3-Qavat",
    badgeRu: "3-Этаж",
    titleUz: "3-Qavat: Markaziy Dispetcherlik va Server markazi",
    titleRu: "3-Этаж: Диспетчерский пункт и серверный узел",
    descUz: "24/7 avariya dispetcherlik pulti, SCADA nazorati, telekommunikatsiya serverlari va uzluksiz elektr taqsimlagichlar.",
    descRu: "Круглосуточный диспетчерский пункт, SCADA, серверные стойки и резервное электропитание.",
    temp: "19.5°C",
    power: "38.5 kW",
    air: "920 m³/soat",
    statusUz: "Serverlar harorati optimal (24/7 online)",
    statusRu: "Температура серверов оптимальна (24/7 онлайн)",
    yPercent: 34,
    hPercent: 18,
  },
  {
    id: 4,
    badgeUz: "Tom qismi",
    badgeRu: "Кровля",
    titleUz: "Tom qismi: Markaziy HVAC va Muhandislik bloki",
    titleRu: "Кровля: Центральная климатическая система HVAC",
    descUz: "Markaziy sovitish chillerlari, ventilyatsiya quvurlari, havo filtrlari va quyosh fotoelektr panellari.",
    descRu: "Чиллеры, вытяжные воздуховоды, вентиляционные фильтры и солнечные панели.",
    temp: "18.0°C",
    power: "45.0 kW",
    air: "1450 m³/soat",
    statusUz: "Filtrlar holati: 98% toza",
    statusRu: "Состояние фильтров: 98% чистые",
    yPercent: 14,
    hPercent: 18,
  },
];

export default function InteractiveBuildingViewer() {
  const [selectedFloor, setSelectedFloor] = useState<number>(2);
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

  const currentFloor = floors.find((f) => f.id === selectedFloor) || floors[0];

  return (
    <section
      className={`py-16 transition-colors duration-300 relative overflow-hidden ${
        isDark
          ? "bg-[#07131f]/90 backdrop-blur-md text-white border-t border-b border-white/10"
          : "bg-slate-50/80 backdrop-blur-md text-slate-900 border-t border-b border-slate-200/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold mb-3 border transition-colors ${
              isDark
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                : "bg-emerald-50 border-emerald-300 text-emerald-800"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>
              {lang === "uz"
                ? "3D Raqamli Egizak va Telemetriya"
                : "3D Цифровой двойник и телеметрия"}
            </span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {lang === "uz"
              ? "Bino Qavatlarini Interaktiv 3D Ko'zdan Kechirish"
              : "Интерактивный 3D-осмотр этажей здания"}
          </h2>
          <p
            className={`text-sm mt-2 max-w-xl mx-auto ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {lang === "uz"
              ? "Qavatlar va muhandislik bloklarini tanlab, real vaqtdagi texnik holat va sensor telemetriyasini tekshiring."
              : "Выберите этаж или инженерный блок для контроля параметров микроклимата и SCADA в реальном времени."}
          </p>
        </div>

        {/* 3D Inspector Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive 3D Digital Twin with Floor Cutaway Brackets */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`lg:col-span-7 relative h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border p-6 flex items-center justify-center transition-all duration-300 shadow-2xl group ${
              isDark
                ? "bg-gradient-to-b from-[#0a1420] via-[#070e17] to-[#040810] border-emerald-500/25 shadow-emerald-950/40"
                : "bg-gradient-to-b from-white via-slate-50 to-slate-100/90 border-slate-200/90 shadow-slate-200/60"
            }`}
            style={{
              perspective: "1000px",
            }}
          >
            {/* Background CAD Isometric Grid & Crosshairs */}
            <div
              className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                isDark ? "opacity-25" : "opacity-40"
              }`}
              style={{
                backgroundImage: isDark
                  ? "radial-gradient(circle at center, rgba(16, 185, 129, 0.12) 0%, transparent 70%), linear-gradient(rgba(56, 189, 248, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56, 189, 248, 0.08) 1px, transparent 1px)"
                  : "radial-gradient(circle at center, rgba(16, 185, 129, 0.10) 0%, transparent 70%), linear-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.05) 1px, transparent 1px)",
                backgroundSize: "100% 100%, 32px 32px, 32px 32px",
              }}
            />

            {/* Top Bar HUD */}
            <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
              <div
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xl backdrop-blur-md text-xs font-mono border shadow-sm ${
                  isDark
                    ? "bg-[#0b1723]/80 border-emerald-500/30 text-emerald-300"
                    : "bg-white/90 border-slate-200 text-emerald-800"
                }`}
              >
                <Activity className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                <span>
                  {lang === "uz" ? "FAOL QAVAT:" : "АКТИВНЫЙ ЭТАЖ:"} #{selectedFloor}
                </span>
              </div>

              <div
                className={`px-3 py-1 rounded-xl text-[11px] font-mono border backdrop-blur-md ${
                  isDark
                    ? "bg-black/40 border-white/10 text-slate-400"
                    : "bg-slate-100/90 border-slate-200 text-slate-600"
                }`}
              >
                BMS SCADA v4.2
              </div>
            </div>

            {/* 3D Model Layer with Smooth Mouse Parallax */}
            <div
              className="relative w-full h-full max-h-[380px] flex items-center justify-center transition-transform duration-200 ease-out"
              style={{
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transformStyle: "preserve-3d",
              }}
            >
              {/* Seamless Building Graphic (Transparent PNG - Zero White Rectangle) */}
              <img
                src="/images/hero_building_transparent.png"
                alt="MBFB Digital Twin 3D Building"
                className={`max-h-[340px] sm:max-h-[370px] w-auto object-contain transition-all duration-500 select-none ${
                  isDark
                    ? "filter drop-shadow-[0_20px_40px_rgba(16,185,129,0.25)] brightness-105"
                    : "filter drop-shadow-[0_20px_35px_rgba(15,23,42,0.18)]"
                }`}
                draggable={false}
              />

              {/* Holographic Active Floor Slice Highlight Bracket */}
              <div
                className="absolute left-[18%] right-[18%] transition-all duration-500 pointer-events-none rounded-xl border-2 flex items-center justify-between px-3"
                style={{
                  top: `${currentFloor.yPercent}%`,
                  height: `${currentFloor.hPercent}%`,
                  borderColor: isDark ? "#10b981" : "#0d9488",
                  backgroundColor: isDark
                    ? "rgba(16, 185, 129, 0.16)"
                    : "rgba(13, 148, 136, 0.14)",
                  boxShadow: isDark
                    ? "0 0 30px rgba(16, 185, 129, 0.4), inset 0 0 20px rgba(16, 185, 129, 0.2)"
                    : "0 0 25px rgba(13, 148, 136, 0.25), inset 0 0 15px rgba(13, 148, 136, 0.1)",
                }}
              >
                {/* Left Floor Identifier Pin */}
                <div
                  className={`-ml-5 px-2 py-0.5 rounded-md text-[10px] font-bold font-mono shadow-md border ${
                    isDark
                      ? "bg-emerald-500 text-slate-950 border-emerald-300"
                      : "bg-emerald-600 text-white border-emerald-500"
                  }`}
                >
                  {currentFloor.badgeUz}
                </div>

                {/* Right Status Badge */}
                <div
                  className={`-mr-5 px-2 py-0.5 rounded-md text-[10px] font-mono shadow-md border hidden sm:block ${
                    isDark
                      ? "bg-[#09121b] text-emerald-300 border-emerald-500/40"
                      : "bg-white text-emerald-800 border-emerald-300"
                  }`}
                >
                  {currentFloor.temp} | {currentFloor.power}
                </div>
              </div>

              {/* Interactive Floor Click Zones over the 3D model */}
              {floors.map((fl) => (
                <button
                  key={fl.id}
                  onClick={() => setSelectedFloor(fl.id)}
                  aria-label={fl.titleUz}
                  className="absolute left-[15%] right-[15%] cursor-pointer z-10 transition-colors rounded-lg group/zone hover:bg-emerald-500/10 focus:outline-none"
                  style={{
                    top: `${fl.yPercent}%`,
                    height: `${fl.hPercent}%`,
                  }}
                >
                  <span className="sr-only">{fl.titleUz}</span>
                </button>
              ))}
            </div>

            {/* Bottom Platform Label */}
            <div className="absolute bottom-3 text-center w-full pointer-events-none">
              <span
                className={`text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border ${
                  isDark
                    ? "bg-[#060d15]/80 text-slate-400 border-white/10"
                    : "bg-white/80 text-slate-500 border-slate-200"
                }`}
              >
                Navoiy ko&apos;chasi, 30 | MBFB Markaziy Majmuasi
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Floor Buttons & Live Sensor Telemetry */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Floor Selection Buttons (2x2 Grid) */}
            <div className="grid grid-cols-2 gap-2.5">
              {floors.map((floor) => {
                const isActive = selectedFloor === floor.id;
                return (
                  <button
                    key={floor.id}
                    onClick={() => setSelectedFloor(floor.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-200 ${
                      isActive
                        ? isDark
                          ? "bg-gradient-to-r from-[#0f766e] to-[#115e59] border-emerald-400 text-white shadow-lg shadow-emerald-950/60 scale-[1.02]"
                          : "bg-gradient-to-r from-emerald-600 to-teal-700 border-transparent text-white shadow-lg shadow-emerald-700/25 scale-[1.02]"
                        : isDark
                        ? "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-emerald-500/30"
                        : "bg-white border-slate-200 text-slate-700 hover:bg-emerald-50/60 hover:border-emerald-300 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${
                          isActive
                            ? "text-emerald-100"
                            : isDark
                            ? "text-emerald-400"
                            : "text-emerald-700"
                        }`}
                      >
                        {lang === "uz" ? floor.badgeUz : floor.badgeRu}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                      )}
                    </div>
                    <div
                      className={`text-xs font-semibold mt-1 line-clamp-1 ${
                        isActive
                          ? "text-white"
                          : isDark
                          ? "text-slate-200"
                          : "text-slate-800"
                      }`}
                    >
                      {lang === "uz"
                        ? floor.titleUz.split(":")[1]?.trim() || floor.titleUz
                        : floor.titleRu.split(":")[1]?.trim() || floor.titleRu}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Floor Live SCADA Telemetry Card */}
            <div
              className={`p-6 rounded-3xl border backdrop-blur-md space-y-4 transition-all shadow-xl ${
                isDark
                  ? "bg-[#0b1723]/80 border-white/10 text-white shadow-black/40"
                  : "bg-white border-slate-200/90 text-slate-900 shadow-slate-200/50"
              }`}
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Building2
                    className={`w-4 h-4 ${
                      isDark ? "text-emerald-400" : "text-emerald-600"
                    }`}
                  />
                  <h3
                    className={`text-base font-bold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {lang === "uz" ? currentFloor.titleUz : currentFloor.titleRu}
                  </h3>
                </div>
                <p
                  className={`text-xs leading-relaxed ${
                    isDark ? "text-slate-300" : "text-slate-600"
                  }`}
                >
                  {lang === "uz" ? currentFloor.descUz : currentFloor.descRu}
                </p>
              </div>

              {/* Real-Time Sensor Grid (3 columns) */}
              <div
                className={`grid grid-cols-3 gap-3 pt-3 border-t ${
                  isDark ? "border-white/10" : "border-slate-100"
                }`}
              >
                {/* Temperature */}
                <div
                  className={`p-3 rounded-2xl border transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/5"
                      : "bg-slate-50 border-slate-200/70"
                  }`}
                >
                  <div
                    className={`flex items-center gap-1.5 text-[11px] mb-1 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <Thermometer className="w-3.5 h-3.5 text-amber-500" />
                    <span>{lang === "uz" ? "Harorat" : "Температура"}</span>
                  </div>
                  <div
                    className={`text-sm font-bold font-mono ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {currentFloor.temp}
                  </div>
                </div>

                {/* Power */}
                <div
                  className={`p-3 rounded-2xl border transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/5"
                      : "bg-slate-50 border-slate-200/70"
                  }`}
                >
                  <div
                    className={`flex items-center gap-1.5 text-[11px] mb-1 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{lang === "uz" ? "Quvvat" : "Мощность"}</span>
                  </div>
                  <div
                    className={`text-sm font-bold font-mono ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {currentFloor.power}
                  </div>
                </div>

                {/* Air / Ventilation */}
                <div
                  className={`p-3 rounded-2xl border transition-colors ${
                    isDark
                      ? "bg-white/5 border-white/5"
                      : "bg-slate-50 border-slate-200/70"
                  }`}
                >
                  <div
                    className={`flex items-center gap-1.5 text-[11px] mb-1 ${
                      isDark ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    <Wind className="w-3.5 h-3.5 text-sky-500" />
                    <span>{lang === "uz" ? "Havo oqimi" : "Вент-поток"}</span>
                  </div>
                  <div
                    className={`text-sm font-bold font-mono ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {currentFloor.air}
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
                  {lang === "uz" ? currentFloor.statusUz : currentFloor.statusRu}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
