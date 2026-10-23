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
      className={`text-xs py-2 px-3 sm:px-4 border-b w-full select-none transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#070b12]/90 backdrop-blur-md text-slate-300 border-white/10"
          : "bg-slate-100/90 backdrop-blur-md text-slate-700 border-slate-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
        <div className="flex items-center gap-2 text-[11px] sm:text-xs">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-bold border ${
              theme === "dark"
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                : "bg-emerald-50 text-emerald-700 border-emerald-300"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            {t("top_status")}
          </span>
          <span className="hidden md:inline opacity-30">|</span>
          <span className={`hidden lg:inline ${theme === "dark" ? "text-slate-300" : "text-slate-600 font-medium"}`}>
            {t("top_org")}
          </span>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 text-xs">
          <a
            href="tel:+998712000000"
            className={`transition-colors flex items-center gap-1 font-semibold ${
              theme === "dark" ? "text-white hover:text-emerald-300" : "text-slate-900 hover:text-[#0f766e]"
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-500" />
            <span className="hidden sm:inline">{t("hotline_prefix")}</span> (71) 200-00-00
          </a>

          <span className="opacity-30">|</span>

          {/* Theme Switcher Toggle (Svetliy / Temniy) */}
          <button
            onClick={toggleTheme}
            className={`px-2 py-0.5 rounded-md flex items-center gap-1.5 font-bold transition-all cursor-pointer border ${
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
          <div className="flex items-center gap-1.5 font-bold text-xs">
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
