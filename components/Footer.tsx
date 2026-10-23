"use client";

import Link from "next/link";
import { Building2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#0b1723] text-white pt-16 pb-8 border-t border-white/10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10 text-xs">
          
          {/* Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center p-2 text-white">
                <Building2 className="w-full h-full" />
              </div>
              <div>
                <span className="block font-black text-lg tracking-tight">{t("site_title")}</span>
                <span className="block text-[11px] text-slate-400">{t("hero_pill")}</span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-sm">
              {t("footer_desc")}
            </p>
            <div className="text-[11px] text-slate-400">
              {t("footer_rights")}
            </div>
          </div>

          {/* Boshqarma haqida */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">{t("nav_about")}</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/about" className="hover:text-emerald-400 transition-colors">{t("sub_about_general")}</Link></li>
              <li><Link href="/about/structure" className="hover:text-emerald-400 transition-colors">{t("sub_about_structure")}</Link></li>
              <li><Link href="/about/management" className="hover:text-emerald-400 transition-colors">{t("sub_about_management")}</Link></li>
              <li><Link href="/about/central-office" className="hover:text-emerald-400 transition-colors">{t("sub_about_central")}</Link></li>
            </ul>
          </div>

          {/* Yo'nalishlar */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">{t("nav_directions")}</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/about/directions" className="hover:text-emerald-400 transition-colors">{t("sec2_title")}</Link></li>
              <li><Link href="/about/projects" className="hover:text-emerald-400 transition-colors">{t("sub_dir_projects")}</Link></li>
              <li><Link href="/about/tenders" className="hover:text-emerald-400 transition-colors">{t("sub_dir_tenders")}</Link></li>
              <li><Link href="/about/anti-corruption" className="hover:text-emerald-400 transition-colors">{t("sub_dir_anticorrupt")}</Link></li>
            </ul>
          </div>

          {/* Biz bilan aloqa */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-xs">{t("nav_contact")}</h4>
            <ul className="space-y-2 text-slate-300">
              <li><Link href="/contact/hotlines" className="hover:text-emerald-400 transition-colors">{t("sub_contact_hotlines")}</Link></li>
              <li><Link href="/contact/reception" className="hover:text-emerald-400 transition-colors">{t("sub_contact_reception")}</Link></li>
              <li><Link href="/contact/faq" className="hover:text-emerald-400 transition-colors">{t("sub_contact_faq")}</Link></li>
              <li><Link href="/contact/details" className="hover:text-emerald-400 transition-colors">{t("sub_contact_details")}</Link></li>
            </ul>
          </div>

        </div>

        {/* Privacy Note from mbfb.uz */}
        <div className="pt-6 text-[11px] text-slate-400 leading-relaxed max-w-4xl">
          <strong className="text-slate-200">{t("footer_privacy_label")}</strong> {t("footer_privacy_text")}
        </div>
      </div>
    </footer>
  );
}
