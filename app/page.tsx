"use client";

import Link from "next/link";
import Image from "next/image";
import QuestionForm from "@/components/QuestionForm";
import HeroBuilding3D from "@/components/3d/HeroBuilding3D";
import InteractiveBuildingViewer from "@/components/3d/InteractiveBuildingViewer";
import Card3DTilt from "@/components/3d/Card3DTilt";
import { ArrowRight, Phone, ShieldCheck, Cpu, Zap, Activity, CheckCircle2, Building2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

export default function Home() {
  const { lang, t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="relative">
      
      {/* HERO SECTION WITH 3D DIGITAL TWIN ARCHITECTURE */}
      <section className={`relative overflow-hidden py-16 lg:py-24 border-b transition-colors duration-300 ${
        isDark ? "bg-transparent text-white border-white/10" : "bg-transparent text-slate-900 border-slate-200"
      }`}>
        
        {/* Soft, calm volumetric 3D light glow */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-emerald-500/15 dark:bg-emerald-500/20 blur-[140px]" />
          <div className="absolute top-10 -right-20 w-[550px] h-[550px] rounded-full bg-sky-500/15 dark:bg-sky-500/20 blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Mission, Title & Telemetry */}
            <div className="lg:col-span-6 space-y-6">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md text-xs font-semibold shadow-sm border ${
                isDark ? "bg-white/10 border-white/15 text-slate-200" : "bg-white/80 border-slate-300 text-slate-800"
              }`}>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>{t("hero_pill")}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] pb-2 overflow-visible">
                <span className={`block pb-1 ${isDark ? "text-slate-100" : "text-slate-900"}`}>{t("hero_title_1")}</span>
                <span className={`block mt-1 pb-3 text-transparent bg-clip-text bg-gradient-to-r leading-[1.25] overflow-visible ${
                  isDark ? "from-white via-slate-200 to-emerald-400" : "from-slate-900 via-[#0f766e] to-[#0284c7]"
                }`}>
                  {t("hero_title_2")}
                </span>
              </h1>

              <p className={`text-base sm:text-lg leading-relaxed max-w-xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {t("hero_desc")}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/contact/details"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#0f766e] to-[#0d9488] hover:from-[#115e59] hover:to-[#0f766e] text-white font-bold text-sm shadow-lg shadow-teal-900/20 transition-all flex items-center gap-2"
                >
                  <span>{t("hero_btn_contact")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className={`px-6 py-3 rounded-xl font-bold text-sm transition-all border ${
                    isDark
                      ? "bg-white/5 hover:bg-white/10 text-white border-white/15"
                      : "bg-white/90 hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm"
                  }`}
                >
                  {t("hero_btn_about")}
                </Link>
              </div>

              {/* Live Facilities Telemetry Strip */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-slate-200/60 dark:border-white/10">
                <div className="p-3 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-slate-200/80 dark:border-white/5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <Activity className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{lang === "uz" ? "Boshqaruv" : "Площадь"}</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">36,000 m²</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{t("metric_1")}</div>
                </div>

                <div className="p-3 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-slate-200/80 dark:border-white/5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <Zap className="w-3.5 h-3.5 text-sky-500" />
                    <span>{lang === "uz" ? "Dispetcherlik" : "Диспетчер"}</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">24/7</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{t("metric_2")}</div>
                </div>

                <div className="p-3 rounded-xl bg-white/70 dark:bg-white/5 backdrop-blur-md border border-slate-200/80 dark:border-white/5 shadow-xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{lang === "uz" ? "Xavfsizlik" : "Надежность"}</span>
                  </div>
                  <div className="text-base sm:text-lg font-black text-slate-900 dark:text-white">100%</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">{t("metric_3")}</div>
                </div>
              </div>

            </div>

            {/* Right Column: 3D WebGL Digital Twin Building */}
            <div className="lg:col-span-6">
              <HeroBuilding3D />
            </div>

          </div>
        </div>
      </section>

      {/* 01 / BOSHQARMA HAQIDA (Seamless Background + Adaptive 3D Facility Card) */}
      <section className={`py-16 border-b transition-colors duration-300 ${
        isDark ? "bg-transparent border-white/10 text-white" : "bg-transparent border-slate-200 text-slate-900"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Adaptive 3D Architectural Complex Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Card3DTilt>
                <div className={`p-4 rounded-3xl border transition-all duration-300 shadow-xl ${
                  isDark
                    ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white"
                    : "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900"
                }`}>
                  <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-900 p-2 flex items-center justify-center">
                    <Image
                      src={isDark ? "/images/hero_building_night.webp" : "/images/hero_building_day.webp"}
                      alt="MBFB Bosh Binosi"
                      fill
                      className="object-contain"
                    />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold bg-slate-900/80 text-white backdrop-blur-md border border-white/15">
                      {lang === "uz" ? "Toshkent, Navoiy 30" : "Ташкент, Навои 30"}
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-500">
                      {t("about_tag_org")}
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                      {t("about_tag_text")}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-200/60 dark:border-white/10 text-xs">
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                        <span className="text-[10px] text-slate-400 block">{lang === "uz" ? "Standart" : "Стандарт"}</span>
                        <span className="font-bold text-slate-800 dark:text-white">ISO 41001</span>
                      </div>
                      <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/40">
                        <span className="text-[10px] text-slate-400 block">{lang === "uz" ? "Holat" : "Статус"}</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">● 100% Onlayn</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card3DTilt>
            </div>

            {/* Right: Description */}
            <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="text-xs font-black tracking-widest text-[#0f766e] uppercase">{t("sec1_badge")}</div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold ${isDark ? "text-white" : "text-slate-900"}`}>{t("sec1_title")}</h2>
              <div className={`space-y-4 text-sm sm:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                <p>{t("sec1_p1")}</p>
                <p>{t("sec1_p2")}</p>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href="/about" className="inline-flex items-center gap-2 text-[#0f766e] font-bold text-sm hover:underline">
                  <span>{t("sec1_link_more")}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="opacity-30">•</span>
                <Link href="/about/structure" className={`font-bold text-sm hover:text-[#0f766e] ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {t("sec1_link_struct")}
                </Link>
                <span className="opacity-30">•</span>
                <Link href="/about/management" className={`font-bold text-sm hover:text-[#0f766e] ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {t("sec1_link_mgmt")}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 02 / ASOSIY VAZIFALAR (Seamless Background + 6 Matching 3D Cards) */}
      <section className={`py-16 border-b transition-colors duration-300 ${
        isDark ? "bg-transparent border-white/10 text-white" : "bg-transparent border-slate-200 text-slate-900"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="text-xs font-black tracking-widest text-[#0f766e] uppercase">{t("sec2_badge")}</div>
              <h2 className={`text-2xl sm:text-3xl font-extrabold mt-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t("sec2_title")}</h2>
              <p className={`text-sm mt-2 max-w-xl ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {t("sec2_sub")}
              </p>
            </div>
            <Link href="/about/directions" className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-xs font-bold text-[#0f766e] hover:underline">
              <span>{t("sec2_all_dir")}</span> →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Card 1: Binolarni saqlash */}
            <Card3DTilt>
              <div className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full ${
                isDark ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white shadow-xl hover:border-emerald-500/40" : "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 shadow-sm hover:border-emerald-500/40"
              }`}>
                <div className={`aspect-[16/11] overflow-hidden relative flex items-center justify-center ${isDark ? "bg-slate-900/60" : "bg-slate-100/60"}`}>
                  <img src="/images/3d_smart_building.webp" alt="Binolarni saqlash" className="img-hover w-full h-full object-contain p-4 transition-transform duration-500 drop-shadow-lg" />
                  <span className="absolute top-3 left-3 bg-[#0f766e] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">01</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t("task1_title")}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{t("task1_desc")}</p>
                  </div>
                  <div className={`mt-4 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    isDark ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-500"
                  }`}>
                    <span>{t("task1_scope")}</span>
                    <span className="text-[#0f766e] font-bold">MBFB</span>
                  </div>
                </div>
              </div>
            </Card3DTilt>

            {/* Card 2: Ta'mirlash ishlari */}
            <Card3DTilt>
              <div className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full ${
                isDark ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white shadow-xl hover:border-emerald-500/40" : "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 shadow-sm hover:border-emerald-500/40"
              }`}>
                <div className={`aspect-[16/11] overflow-hidden relative flex items-center justify-center ${isDark ? "bg-slate-900/60" : "bg-slate-100/60"}`}>
                  <img src="/images/3d_renovation_tools.webp" alt="Ta'mirlash ishlari" className="img-hover w-full h-full object-contain p-4 transition-transform duration-500 drop-shadow-lg" />
                  <span className="absolute top-3 left-3 bg-[#0f766e] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">02</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t("task2_title")}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{t("task2_desc")}</p>
                  </div>
                  <div className={`mt-4 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    isDark ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-500"
                  }`}>
                    <span>{t("task2_scope")}</span>
                    <span className="text-[#0f766e] font-bold">MBFB</span>
                  </div>
                </div>
              </div>
            </Card3DTilt>

            {/* Card 3: Muhandislik tarmoqlari */}
            <Card3DTilt>
              <div className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full ${
                isDark ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white shadow-xl hover:border-emerald-500/40" : "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 shadow-sm hover:border-emerald-500/40"
              }`}>
                <div className={`aspect-[16/11] overflow-hidden relative flex items-center justify-center ${isDark ? "bg-slate-900/60" : "bg-slate-100/60"}`}>
                  <img src="/images/3d_hvac_turbine.webp" alt="Muhandislik tarmoqlari" className="img-hover w-full h-full object-contain p-4 transition-transform duration-500 drop-shadow-lg" />
                  <span className="absolute top-3 left-3 bg-[#0f766e] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">03</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t("task3_title")}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{t("task3_desc")}</p>
                  </div>
                  <div className={`mt-4 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    isDark ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-500"
                  }`}>
                    <span>{t("task3_scope")}</span>
                    <span className="text-[#0f766e] font-bold">MBFB</span>
                  </div>
                </div>
              </div>
            </Card3DTilt>

            {/* Card 4: Kommunal xizmatlar va xavfsizlik */}
            <Card3DTilt>
              <div className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full ${
                isDark ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white shadow-xl hover:border-emerald-500/40" : "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 shadow-sm hover:border-emerald-500/40"
              }`}>
                <div className={`aspect-[16/11] overflow-hidden relative flex items-center justify-center ${isDark ? "bg-slate-900/60" : "bg-slate-100/60"}`}>
                  <img src="/images/3d_security_shield.webp" alt="Kommunal xizmatlar va xavfsizlik" className="img-hover w-full h-full object-contain p-4 transition-transform duration-500 drop-shadow-lg" />
                  <span className="absolute top-3 left-3 bg-[#0f766e] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">04</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t("task4_title")}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{t("task4_desc")}</p>
                  </div>
                  <div className={`mt-4 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    isDark ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-500"
                  }`}>
                    <span>{t("task4_scope")}</span>
                    <span className="text-[#0f766e] font-bold">MBFB</span>
                  </div>
                </div>
              </div>
            </Card3DTilt>

            {/* Card 5: Xonalarni ijaraga berish */}
            <Card3DTilt>
              <div className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full ${
                isDark ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white shadow-xl hover:border-emerald-500/40" : "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 shadow-sm hover:border-emerald-500/40"
              }`}>
                <div className={`aspect-[16/11] overflow-hidden relative flex items-center justify-center ${isDark ? "bg-slate-900/60" : "bg-slate-100/60"}`}>
                  <img src="/images/3d_executive_chair.webp" alt="Xonalarni ijaraga berish" className="img-hover w-full h-full object-contain p-4 transition-transform duration-500 drop-shadow-lg" />
                  <span className="absolute top-3 left-3 bg-[#0f766e] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">05</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t("task5_title")}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{t("task5_desc")}</p>
                  </div>
                  <div className={`mt-4 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    isDark ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-500"
                  }`}>
                    <span>{t("task5_scope")}</span>
                    <span className="text-[#0f766e] font-bold">MBFB</span>
                  </div>
                </div>
              </div>
            </Card3DTilt>

            {/* Card 6: Davlat mulkidan foydalanish */}
            <Card3DTilt>
              <div className={`rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col h-full ${
                isDark ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white shadow-xl hover:border-emerald-500/40" : "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 shadow-sm hover:border-emerald-500/40"
              }`}>
                <div className={`aspect-[16/11] overflow-hidden relative flex items-center justify-center ${isDark ? "bg-slate-900/60" : "bg-slate-100/60"}`}>
                  <img src="/images/3d_vault_cube.webp" alt="Davlat mulkidan foydalanish" className="img-hover w-full h-full object-contain p-4 transition-transform duration-500 drop-shadow-lg" />
                  <span className="absolute top-3 left-3 bg-[#0f766e] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow-sm">06</span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className={`font-bold text-lg mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t("task6_title")}</h3>
                    <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>{t("task6_desc")}</p>
                  </div>
                  <div className={`mt-4 pt-4 border-t flex items-center justify-between text-xs font-semibold ${
                    isDark ? "border-white/10 text-slate-400" : "border-slate-100 text-slate-500"
                  }`}>
                    <span>{t("task6_scope")}</span>
                    <span className="text-[#0f766e] font-bold">MBFB</span>
                  </div>
                </div>
              </div>
            </Card3DTilt>

          </div>
        </div>
      </section>

      {/* DEDICATED 3D FACILITY FLOOR & SYSTEM INSPECTOR */}
      <InteractiveBuildingViewer />

      {/* 03 / BOG'LANISH & QABUL VAQTI (Seamless Background) */}
      <section className={`py-16 transition-colors duration-300 ${
        isDark ? "bg-transparent text-white border-t border-white/10" : "bg-transparent text-slate-900 border-t border-slate-200"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-black tracking-widest text-[#0f766e] uppercase mb-2">{t("sec3_badge")}</div>
          <h2 className={`text-2xl sm:text-3xl font-extrabold mb-8 ${isDark ? "text-white" : "text-slate-900"}`}>{t("sec3_title")}</h2>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            
            {/* Left: Leadership Reception */}
            <div className="space-y-4">
              {/* Director */}
              <Card3DTilt>
                <div className={`p-6 rounded-2xl border transition-all ${
                  isDark ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white" : "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 shadow-sm"
                } flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#0f766e]/10 text-[#0f766e] text-xs font-bold mb-1">{t("role_director")}</span>
                    <h4 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t("dir_name")}</h4>
                    <p className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{t("rec_director_time")}</p>
                  </div>
                  <Link
                    href="/contact/reception"
                    className="shrink-0 px-4 py-2 bg-[#0f766e] hover:bg-[#115e59] text-white text-xs font-bold rounded-lg transition-colors text-center shadow-sm"
                  >
                    {t("btn_book_reception")}
                  </Link>
                </div>
              </Card3DTilt>

              {/* Deputy */}
              <Card3DTilt>
                <div className={`p-6 rounded-2xl border transition-all ${
                  isDark ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white" : "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 shadow-sm"
                } flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded bg-blue-500/10 text-blue-500 text-xs font-bold mb-1">{t("role_deputy")}</span>
                    <h4 className={`text-base font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t("dep_name")}</h4>
                    <p className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>{t("rec_deputy_time")}</p>
                  </div>
                  <Link
                    href="/contact/reception"
                    className="shrink-0 px-4 py-2 bg-[#0f766e] hover:bg-[#115e59] text-white text-xs font-bold rounded-lg transition-colors text-center shadow-sm"
                  >
                    {t("btn_book_reception")}
                  </Link>
                </div>
              </Card3DTilt>

              {/* Hotline banner */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/90 to-slate-900/90 backdrop-blur-md text-white border border-emerald-500/30 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold">{t("hotline_card_title")}</h5>
                    <p className="text-xs text-slate-300 mt-0.5">{t("hotline_card_num")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Question Form */}
            <div>
              <QuestionForm />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
