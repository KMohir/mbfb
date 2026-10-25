"use client";

import Link from "next/link";
import { Phone, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

export default function TopBar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <aside
      className={`text-xs border-b w-full select-none transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#070b12] text-slate-300 border-white/10"
          : "bg-slate-50 text-slate-700 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between gap-2">
        
        {/* Left: Live status */}
        <div className="flex items-center gap-2 text-[11px] sm:text-xs min-w-0">
          <span
            className={`inline-flex items-center gap-1.5 px-2 sm:px-2.5 py-0.5 rounded-full font-bold border shrink-0 ${
              theme === "dark"
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                : "bg-emerald-50 text-emerald-700 border-emerald-300"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="hidden sm:inline">{t("top_status")}</span>
            <span className="sm:hidden">{lang === "uz" ? "24/7 Monitoring" : "24/7 Мониторинг"}</span>
          </span>
          <span className="hidden md:inline opacity-30">|</span>
          <span className={`hidden lg:inline truncate ${theme === "dark" ? "text-slate-300" : "text-slate-600 font-medium"}`}>
            {t("top_org")}
          </span>
        </div>

        {/* Right: Phone, Theme toggle, Language */}
        <div className="flex items-center gap-2 sm:gap-3.5 text-xs shrink-0">
          <a
            href="tel:+998712000000"
            className={`transition-colors flex items-center gap-1 font-semibold ${
              theme === "dark" ? "text-white hover:text-emerald-300" : "text-slate-900 hover:text-[#0f766e]"
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span className="hidden md:inline">{t("hotline_prefix")}</span>
            <span className="font-mono text-[11px] sm:text-xs whitespace-nowrap">(71) 200-00-00</span>
          </a>

          <span className="opacity-30">|</span>

          {/* Theme Switcher Toggle (Svetliy / Temniy) */}
          <button
            onClick={toggleTheme}
            className={`px-2 py-0.5 rounded-md flex items-center gap-1 font-bold transition-all cursor-pointer border ${
              theme === "dark"
                ? "bg-white/10 text-amber-300 border-white/15 hover:bg-white/15"
                : "bg-white text-slate-800 border-slate-300 hover:bg-slate-50 shadow-xs"
            }`}
            title={theme === "dark" ? "Kunduzgi (yorug') rejimga o'tish" : "Tungi (qorong'i) rejimga o'tish"}
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline text-[11px]">Kunduzgi</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-indigo-600" />
                <span className="hidden sm:inline text-[11px]">Oqshom</span>
              </>
            )}
          </button>

          <span className="opacity-30">|</span>

          {/* Language Switcher UZ / RU */}
          <div className="flex items-center gap-1 font-bold text-xs">
            <button
              onClick={() => setLang("uz")}
              className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                lang === "uz"
                  ? theme === "dark"
                    ? "text-emerald-400 bg-emerald-950/60 border border-emerald-500/40"
                    : "text-emerald-700 bg-emerald-100 border border-emerald-400"
                  : theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              UZ
            </button>
            <span className="opacity-40">/</span>
            <button
              onClick={() => setLang("ru")}
              className={`px-1.5 py-0.5 rounded transition-all cursor-pointer ${
                lang === "ru"
                  ? theme === "dark"
                    ? "text-emerald-400 bg-emerald-950/60 border border-emerald-500/40"
                    : "text-emerald-700 bg-emerald-100 border border-emerald-400"
                  : theme === "dark"
                  ? "text-slate-400 hover:text-white"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              RU
            </button>
          </div>
        </div>

      </div>
    </aside>
  );
}
