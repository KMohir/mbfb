"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTheme } from "@/lib/ThemeContext";

export default function QuestionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [refNum, setRefNum] = useState("");
  const { t } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const random = Math.floor(1000 + Math.random() * 9000);
    setRefNum(`#MBFB-2026-${random}`);
    setSubmitted(true);
  };

  const inputClass = `w-full text-sm px-4 py-2.5 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#0f766e] ${
    isDark
      ? "bg-white/5 border-white/15 text-white placeholder-slate-400 focus:bg-white/10"
      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400"
  }`;

  return (
    <div
      className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-xl ${
        isDark
          ? "bg-[#0e1726]/90 backdrop-blur-md border-white/10 text-white shadow-black/40"
          : "bg-white/95 backdrop-blur-md border-slate-200 text-slate-900 shadow-slate-200/50"
      }`}
    >
      <h3 className={`text-xl font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>
        {t("form_title")}
      </h3>
      <p className={`text-xs mb-6 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
        {t("form_sub")}
      </p>

      {submitted ? (
        <div
          className={`p-6 rounded-xl border text-center space-y-3 ${
            isDark
              ? "bg-emerald-950/40 border-emerald-500/30 text-white"
              : "bg-emerald-50 border-emerald-200 text-slate-900"
          }`}
        >
          <CheckCircle2
            className={`w-12 h-12 mx-auto ${
              isDark ? "text-emerald-400" : "text-[#0f766e]"
            }`}
          />
          <h4 className={`font-bold text-base ${isDark ? "text-white" : "text-slate-900"}`}>
            {t("form_success_title")}
          </h4>
          <p className={`text-xs ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            {t("form_success_desc")}
          </p>
          <div
            className={`text-xs font-mono font-bold ${
              isDark ? "text-emerald-300" : "text-slate-500"
            }`}
          >
            {t("form_success_ref")} {refNum}
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 px-4 py-2 bg-[#0f766e] hover:bg-[#115e59] text-white text-xs font-bold rounded-lg transition-colors"
          >
            {t("form_new_btn")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              className={`block text-xs font-bold mb-1.5 ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
            >
              {t("form_name_label")}
            </label>
            <input
              type="text"
              required
              placeholder={t("form_name_placeholder")}
              className={inputClass}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                className={`block text-xs font-bold mb-1.5 ${
                  isDark ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {t("form_contact_label")}
              </label>
              <input
                type="text"
                required
                placeholder={t("form_contact_placeholder")}
                className={inputClass}
              />
            </div>
            <div>
              <label
                className={`block text-xs font-bold mb-1.5 ${
                  isDark ? "text-slate-200" : "text-slate-700"
                }`}
              >
                {t("form_type_label")}
              </label>
              <select className={`${inputClass} cursor-pointer`}>
                <option className={isDark ? "bg-[#0e1726] text-white" : "bg-white text-slate-900"}>
                  {t("form_opt_1")}
                </option>
                <option className={isDark ? "bg-[#0e1726] text-white" : "bg-white text-slate-900"}>
                  {t("form_opt_2")}
                </option>
                <option className={isDark ? "bg-[#0e1726] text-white" : "bg-white text-slate-900"}>
                  {t("form_opt_3")}
                </option>
                <option className={isDark ? "bg-[#0e1726] text-white" : "bg-white text-slate-900"}>
                  {t("form_opt_4")}
                </option>
                <option className={isDark ? "bg-[#0e1726] text-white" : "bg-white text-slate-900"}>
                  {t("form_opt_5")}
                </option>
              </select>
            </div>
          </div>

          <div>
            <label
              className={`block text-xs font-bold mb-1.5 ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
            >
              {t("form_text_label")}
            </label>
            <textarea
              rows={4}
              required
              placeholder={t("form_text_placeholder")}
              className={inputClass}
            ></textarea>
            <div className={`text-[11px] mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              {t("form_char_warning")}
            </div>
          </div>

          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              id="consent"
              required
              className={`mt-0.5 rounded cursor-pointer ${
                isDark
                  ? "bg-white/10 border-white/20 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900"
                  : "text-[#0f766e] focus:ring-[#0f766e]"
              }`}
            />
            <label
              htmlFor="consent"
              className={`text-xs cursor-pointer ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {t("form_consent")}
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm rounded-lg shadow-lg shadow-emerald-900/30 transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{t("form_submit")}</span>
          </button>
        </form>
      )}
    </div>
  );
}
