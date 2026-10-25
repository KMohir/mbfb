"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, ChevronDown, Menu, X, Send } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();
  const { theme } = useTheme();

  const isDark = theme === "dark";

  return (
    <header
      className={`sticky top-0 z-40 backdrop-blur-2xl border-b transition-colors duration-300 w-full ${
        isDark
          ? "bg-[#070b12]/80 border-white/10 text-white shadow-xl"
          : "bg-white/80 border-slate-200/80 text-slate-800 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center p-2.5 border shadow-sm transition-all shrink-0 ${
              isDark
                ? "bg-white/10 text-white border-white/15 group-hover:bg-[#0f766e] group-hover:border-emerald-400/40"
                : "bg-slate-900 text-white border-slate-900 group-hover:bg-[#0f766e]"
            }`}
          >
            <Building2 className={`w-full h-full ${isDark ? "text-emerald-400 group-hover:text-white" : "text-emerald-400"}`} />
          </div>
          <div>
            <span
              className={`block font-black text-lg tracking-tight leading-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              {t("site_title")}
            </span>
            <span
              className={`block text-[11px] font-medium leading-tight max-w-[240px] ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              {t("site_subheading")}
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav
          className={`hidden xl:flex items-center gap-1 text-[13px] font-semibold ${
            isDark ? "text-slate-200" : "text-slate-700"
          }`}
        >
          <Link
            href="/"
            className={`px-3 py-2 rounded-lg transition-colors ${
              isDark ? "hover:text-white hover:bg-white/10" : "hover:text-[#0f766e] hover:bg-slate-100"
            }`}
          >
            {t("nav_home")}
          </Link>

          {/* Boshqarma haqida */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isDark ? "hover:text-white hover:bg-white/10" : "hover:text-[#0f766e] hover:bg-slate-100"
              }`}
            >
              <span>{t("nav_about")}</span>
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute left-0 top-full hidden group-hover:block w-56 backdrop-blur-xl rounded-xl shadow-2xl border py-2 z-50 ${
                isDark ? "bg-[#0e1726]/95 border-white/10" : "bg-white border-slate-200"
              }`}
            >
              <Link
                href="/about"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_about_general")}
              </Link>
              <Link
                href="/about/structure"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_about_structure")}
              </Link>
              <Link
                href="/about/management"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_about_management")}
              </Link>
              <Link
                href="/about/central-office"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_about_central")}
              </Link>
            </div>
          </div>

          {/* Yo'nalishlar */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isDark ? "hover:text-white hover:bg-white/10" : "hover:text-[#0f766e] hover:bg-slate-100"
              }`}
            >
              <span>{t("nav_directions")}</span>
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute left-0 top-full hidden group-hover:block w-64 backdrop-blur-xl rounded-xl shadow-2xl border py-2 z-50 ${
                isDark ? "bg-[#0e1726]/95 border-white/10" : "bg-white border-slate-200"
              }`}
            >
              <Link
                href="/about/directions"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_dir_all")}
              </Link>
              <Link
                href="/about/projects"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_dir_projects")}
              </Link>
              <Link
                href="/about/media-competitions"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_dir_media")}
              </Link>
              <Link
                href="/about/international-cooperation"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_dir_intl")}
              </Link>
              <Link
                href="/about/anti-corruption"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_dir_anticorrupt")}
              </Link>
              <Link
                href="/about/purchasing-commission"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_dir_purchasing")}
              </Link>
              <Link
                href="/about/tenders"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_dir_tenders")}
              </Link>
              <Link
                href="/about/attestation"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_dir_attestation")}
              </Link>
            </div>
          </div>

          {/* Me'yoriy hujjatlar */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isDark ? "hover:text-white hover:bg-white/10" : "hover:text-[#0f766e] hover:bg-slate-100"
              }`}
            >
              <span>{t("nav_documents")}</span>
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute left-0 top-full hidden group-hover:block w-72 backdrop-blur-xl rounded-xl shadow-2xl border py-2 z-50 ${
                isDark ? "bg-[#0e1726]/95 border-white/10" : "bg-white border-slate-200"
              }`}
            >
              <Link
                href="/documents/laws"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_doc_laws")}
              </Link>
              <Link
                href="/documents/presidential-acts"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_doc_president")}
              </Link>
              <Link
                href="/documents/cabinet-resolutions"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_doc_cabinet")}
              </Link>
              <Link
                href="/documents/center-regulations"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_doc_center")}
              </Link>
            </div>
          </div>

          {/* Biz bilan aloqa */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${
                isDark ? "hover:text-white hover:bg-white/10" : "hover:text-[#0f766e] hover:bg-slate-100"
              }`}
            >
              <span>{t("nav_contact")}</span>
              <ChevronDown className="w-4 h-4 opacity-50 group-hover:rotate-180 transition-transform" />
            </button>
            <div
              className={`absolute right-0 top-full hidden group-hover:block w-60 backdrop-blur-xl rounded-xl shadow-2xl border py-2 z-50 ${
                isDark ? "bg-[#0e1726]/95 border-white/10" : "bg-white border-slate-200"
              }`}
            >
              <Link
                href="/contact/hotlines"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_contact_hotlines")}
              </Link>
              <Link
                href="/contact/reception"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_contact_reception")}
              </Link>
              <Link
                href="/contact/faq"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_contact_faq")}
              </Link>
              <Link
                href="/contact/details"
                className={`block px-4 py-2 text-xs font-semibold transition-colors ${
                  isDark ? "text-slate-300 hover:bg-white/10 hover:text-emerald-300" : "text-slate-700 hover:bg-emerald-50 hover:text-[#0f766e]"
                }`}
              >
                {t("sub_contact_details")}
              </Link>
            </div>
          </div>
        </nav>

        {/* CTA BUTTON & MOBILE MENU TOGGLE */}
        <div className="flex items-center gap-2.5">
          <Link
            href="/contact/details"
            className="inline-flex items-center gap-2 bg-[#0f766e] hover:bg-[#115e59] text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md hover:shadow-emerald-900/50 transition-all hover:scale-[1.02]"
          >
            <Send className="w-4 h-4" />
            <span>{t("btn_send_request")}</span>
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`xl:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-colors border ${
              isDark
                ? "bg-white/10 hover:bg-white/20 text-white border-white/15"
                : "bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200"
            }`}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div
          className={`xl:hidden border-b px-4 pt-2 pb-6 space-y-3 ${
            isDark ? "bg-[#090d16] border-white/10 text-slate-200" : "bg-white border-slate-200 text-slate-800"
          }`}
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className={`block py-1 font-bold ${isDark ? "text-white hover:text-emerald-400" : "text-slate-900 hover:text-[#0f766e]"}`}
          >
            {t("nav_home")}
          </Link>
          <div className={`border-t pt-2 ${isDark ? "border-white/10" : "border-slate-100"}`}>
            <span className="text-xs uppercase font-bold opacity-50 block mb-1">{t("nav_about")}</span>
            <div className="pl-3 space-y-1 text-sm font-medium">
              <Link href="/about" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_about_general")}</Link>
              <Link href="/about/structure" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_about_structure")}</Link>
              <Link href="/about/management" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_about_management")}</Link>
              <Link href="/about/central-office" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_about_central")}</Link>
            </div>
          </div>
          <div className={`border-t pt-2 ${isDark ? "border-white/10" : "border-slate-100"}`}>
            <span className="text-xs uppercase font-bold opacity-50 block mb-1">{t("nav_directions")}</span>
            <div className="pl-3 space-y-1 text-sm font-medium">
              <Link href="/about/directions" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_dir_all")}</Link>
              <Link href="/about/projects" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_dir_projects")}</Link>
              <Link href="/about/tenders" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_dir_tenders")}</Link>
              <Link href="/about/anti-corruption" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_dir_anticorrupt")}</Link>
            </div>
          </div>
          <div className={`border-t pt-2 ${isDark ? "border-white/10" : "border-slate-100"}`}>
            <span className="text-xs uppercase font-bold opacity-50 block mb-1">{t("nav_contact")}</span>
            <div className="pl-3 space-y-1 text-sm font-medium">
              <Link href="/contact/hotlines" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_contact_hotlines")}</Link>
              <Link href="/contact/reception" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_contact_reception")}</Link>
              <Link href="/contact/faq" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_contact_faq")}</Link>
              <Link href="/contact/details" onClick={() => setMobileOpen(false)} className="block py-1 opacity-80 hover:opacity-100">{t("sub_contact_details")}</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
