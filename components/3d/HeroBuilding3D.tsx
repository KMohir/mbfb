"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";
import {
  Sun,
  Moon,
  Compass,
  RefreshCw,
  Cpu,
  ShieldCheck,
  Zap,
  Activity,
  Layers,
  Thermometer,
  Wind,
  CheckCircle2,
  X,
} from "lucide-react";

interface Hotspot {
  id: string;
  top: string;
  left: string;
  titleUz: string;
  titleRu: string;
  systemUz: string;
  systemRu: string;
  stat1: string;
  stat2: string;
  stat3: string;
}

const hotspots: Hotspot[] = [
  {
    id: "hvac",
    top: "22%",
    left: "64%",
    titleUz: "Markaziy Chiller va HVAC Tizimi",
    titleRu: "Центральный чиллер и система HVAC",
    systemUz: "Iqlim va shamollatish agregati",
    systemRu: "Климатическая установка",
    stat1: "Harorat: 22.0°C",
    stat2: "Havo tozaligi: 98%",
    stat3: "Bosim: 3.2 bar",
  },
  {
    id: "server",
    top: "38%",
    left: "68%",
    titleUz: "SCADA & Telemetriya Server Markazi",
    titleRu: "Серверный узел SCADA и телеметрии",
    systemUz: "Avtomatlashtirilgan boshqaruv",
    systemRu: "Автоматизированное управление",
    stat1: "Server quvvati: 38.5 kW",
    stat2: "UPS zaxirasi: 100%",
    stat3: "Harorat: 19.5°C",
  },
  {
    id: "terrace",
    top: "54%",
    left: "48%",
    titleUz: "Yashil Eko-Terrasalar va Bog'",
    titleRu: "Зеленые эко-террасы и сады",
    systemUz: "Energiya tejamkor arxitektura",
    systemRu: "Энергоэффективная архитектура",
    stat1: "Yashil maydon: 850 m²",
    stat2: "Avto-sug'orish: Faol",
    stat3: "O₂ balansi: Yuqori",
  },
  {
    id: "lobby",
    top: "76%",
    left: "55%",
    titleUz: "Markaziy Vestibyul va Qabulxona",
    titleRu: "Центральный холл и приемная",
    systemUz: "Kirish-chiqish va dispetcherlik",
    systemRu: "Контроль доступа и диспетчеризация",
    stat1: "Elektron turniket: 24/7",
    stat2: "Xavfsizlik: 1-darajali",
    stat3: "Kamera nazorati: 100%",
  },
];

export default function HeroBuilding3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();
  const { theme } = useTheme();

  const [timeMode, setTimeMode] = useState<"day" | "night">(theme === "dark" ? "night" : "day");
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isRotating, setIsRotating] = useState<boolean>(true);

  // Synchronize timeMode with global theme
  useEffect(() => {
    setTimeMode(theme === "dark" ? "night" : "day");
  }, [theme]);

  // 3D Tilt State
  const [tiltStyle, setTiltStyle] = useState<React.CSSProperties>({});
  const [glareStyle, setGlareStyle] = useState<React.CSSProperties>({ opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -9;
    const rotateY = ((x - centerX) / centerX) * 9;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: "transform 0.08s ease-out",
    });

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlareStyle({
      opacity: theme === "dark" ? 0.12 : 0.2,
      background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.7), transparent 60%)`,
      transition: "opacity 0.2s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
      transition: "transform 0.6s ease-out",
    });
    setGlareStyle({
      opacity: 0,
      transition: "opacity 0.6s ease-out",
    });
  };

  const isNight = timeMode === "night";
  const isDark = theme === "dark";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tiltStyle}
      className={`relative w-full h-[440px] sm:h-[490px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 group select-none border will-change-transform ${
        isNight
          ? "bg-[#09121b] border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
          : "bg-gradient-to-b from-[#e2e8f0] via-[#f1f5f9] to-[#ffffff] border-slate-300 shadow-[0_20px_50px_rgba(0,0,0,0.12)]"
      }`}
    >
      {/* Dynamic 3D Glare Sheen */}
      <div
        className="pointer-events-none absolute inset-0 z-30 rounded-3xl overflow-hidden"
        style={glareStyle}
      />

      {/* 3D Photorealistic Architectural Render Container */}
      <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 z-10 transition-opacity duration-700">
        {/* Night Model */}
        <div
          className={`absolute inset-0 flex items-center justify-center p-2 transition-opacity duration-700 ${
            isNight ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <img
            src="/images/hero_building_night.webp"
            alt="MBFB 3D Digital Twin Night"
            className="w-full h-full object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.8)] select-none"
            draggable={false}
          />
        </div>

        {/* Day Model */}
        <div
          className={`absolute inset-0 flex items-center justify-center p-2 transition-opacity duration-700 ${
            !isNight ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          <img
            src="/images/hero_building_day.webp"
            alt="MBFB 3D Digital Twin Day"
            className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.15)] select-none"
            draggable={false}
          />
        </div>
      </div>

      {/* Subtle Ambient Radial Light behind building */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 transition-opacity duration-700 ${
          isNight
            ? "bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.12),transparent_70%)]"
            : "bg-[radial-gradient(circle_at_50%_50%,rgba(2,132,199,0.1),transparent_70%)]"
        }`}
      />

      {/* Interactive 3D SCADA Telemetry Hotspot Pins */}
      {hotspots.map((hs) => {
        const isActive = activeHotspot?.id === hs.id;
        return (
          <div
            key={hs.id}
            style={{ top: hs.top, left: hs.left }}
            className="absolute z-25 -translate-x-1/2 -translate-y-1/2"
          >
            <button
              onClick={() => setActiveHotspot(isActive ? null : hs)}
              className="relative flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400 text-emerald-300 hover:scale-125 transition-transform duration-200 cursor-pointer shadow-[0_0_15px_rgba(16,185,129,0.5)] group/pin"
              title={lang === "uz" ? hs.titleUz : hs.titleRu}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping absolute" />
              <span className="w-2 h-2 rounded-full bg-emerald-300 relative z-10" />
            </button>
          </div>
        );
      })}

      {/* Active Hotspot Info Card Modal */}
      {activeHotspot && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 w-[88%] sm:w-[360px] p-5 rounded-2xl bg-slate-900/95 backdrop-blur-xl border border-emerald-500/40 text-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {lang === "uz" ? activeHotspot.systemUz : activeHotspot.systemRu}
              </span>
              <h4 className="text-sm font-bold text-white mt-1">
                {lang === "uz" ? activeHotspot.titleUz : activeHotspot.titleRu}
              </h4>
            </div>
            <button
              onClick={() => setActiveHotspot(null)}
              className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-1.5 pt-2 border-t border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>{activeHotspot.stat1}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>{activeHotspot.stat2}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{activeHotspot.stat3}</span>
            </div>
          </div>
        </div>
      )}

      {/* Top Floating Telemetry Status (Apple-style frosted glass) */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2 pointer-events-none">
        <div
          className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md text-xs font-semibold shadow-lg border ${
            isNight
              ? "bg-slate-900/80 border-white/15 text-slate-200"
              : "bg-white/90 border-slate-300 text-slate-800"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{lang === "uz" ? "MBFB Bosh Binosi • 3D Raqamli Egizak" : "Главное здание MBFB • 3D Модель"}</span>
        </div>
        <div
          className={`px-3 py-1 rounded-lg backdrop-blur-md text-[11px] max-w-xs border ${
            isNight
              ? "bg-slate-950/70 border-white/10 text-slate-300"
              : "bg-white/85 border-slate-200 text-slate-700"
          }`}
        >
          <span className="text-emerald-500 font-bold">● SCADA:</span>{" "}
          {lang === "uz" ? "Barcha muhandislik tarmoqlari barqaror" : "Все инженерные сети стабильны"}
        </div>
      </div>

      {/* Top Right Live Engineering Badges */}
      <div className="absolute top-4 right-4 z-20 space-y-2 pointer-events-none hidden sm:block">
        <div
          className={`px-3 py-1.5 rounded-xl backdrop-blur-md text-xs font-medium shadow-md flex items-center gap-2 border ${
            isNight
              ? "bg-slate-900/80 border-white/15 text-slate-200"
              : "bg-white/90 border-slate-300 text-slate-800"
          }`}
        >
          <Cpu className="w-3.5 h-3.5 text-sky-400" />
          <span>HVAC: 22.0°C | Havo: 98%</span>
        </div>
        <div
          className={`px-3 py-1.5 rounded-xl backdrop-blur-md text-xs font-medium shadow-md flex items-center gap-2 border ${
            isNight
              ? "bg-slate-900/80 border-white/15 text-slate-200"
              : "bg-white/90 border-slate-300 text-slate-800"
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>{lang === "uz" ? "Elektr: 100% Onlayn" : "Электросеть: 100% Онлайн"}</span>
        </div>
      </div>

      {/* Bottom Interactive Controls Bar */}
      <div
        className={`absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 p-2 rounded-2xl backdrop-blur-xl border text-xs shadow-xl transition-colors ${
          isNight
            ? "bg-slate-900/80 border-white/15 text-slate-200"
            : "bg-white/90 border-slate-300 text-slate-800"
        }`}
      >
        <div className="flex items-center gap-2">
          {/* Day / Night Toggle */}
          <button
            onClick={() => setTimeMode(timeMode === "day" ? "night" : "day")}
            className={`px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
              isNight
                ? "bg-white/10 hover:bg-white/20 text-white"
                : "bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200"
            }`}
          >
            {timeMode === "day" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                <span>{lang === "uz" ? "Kunduzgi rejim" : "Дневной режим"}</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                <span>{lang === "uz" ? "Oqshom / Tungi" : "Ночной режим"}</span>
              </>
            )}
          </button>

          {/* Hotspot Toggle Hint */}
          <span className="hidden md:inline-flex items-center gap-1 text-[11px] opacity-70">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{lang === "uz" ? "Datchiklarni bosing" : "Кликайте по датчикам"}</span>
          </span>
        </div>

        <div className={`text-[11px] hidden sm:flex items-center gap-1.5 ${isNight ? "text-slate-400" : "text-slate-500"}`}>
          <Compass className="w-3.5 h-3.5 opacity-60" />
          <span>{lang === "uz" ? "Sichqoncha bilan 3D burchakda ko'ring" : "Наклоняйте курсором в 3D"}</span>
        </div>
      </div>
    </div>
  );
}
