"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function QuestionForm() {
  const [submitted, setSubmitted] = useState(false);
  const [refNum, setRefNum] = useState("");
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const random = Math.floor(1000 + Math.random() * 9000);
    setRefNum(`#MBFB-2026-${random}`);
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
      <h3 className="text-xl font-bold text-slate-900 mb-1">{t("form_title")}</h3>
      <p className="text-xs text-slate-500 mb-6">
        {t("form_sub")}
      </p>

      {submitted ? (
        <div className="p-6 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-3">
          <CheckCircle2 className="w-12 h-12 text-[#0f766e] mx-auto" />
          <h4 className="font-bold text-slate-900 text-base">{t("form_success_title")}</h4>
          <p className="text-xs text-slate-600">
            {t("form_success_desc")}
          </p>
          <div className="text-xs font-mono text-slate-500 font-bold">
            {t("form_success_ref")} {refNum}
          </div>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-2 px-4 py-2 bg-[#0f766e] text-white text-xs font-bold rounded-lg"
          >
            {t("form_new_btn")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">{t("form_name_label")}</label>
            <input
              type="text"
              required
              placeholder={t("form_name_placeholder")}
              className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">{t("form_contact_label")}</label>
              <input
                type="text"
                required
                placeholder={t("form_contact_placeholder")}
                className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">{t("form_type_label")}</label>
              <select className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f766e]">
                <option>{t("form_opt_1")}</option>
                <option>{t("form_opt_2")}</option>
                <option>{t("form_opt_3")}</option>
                <option>{t("form_opt_4")}</option>
                <option>{t("form_opt_5")}</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">{t("form_text_label")}</label>
            <textarea
              rows={4}
              required
              placeholder={t("form_text_placeholder")}
              className="w-full text-sm px-4 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0f766e]"
            ></textarea>
            <div className="text-[11px] text-slate-400 mt-1">
              {t("form_char_warning")}
            </div>
          </div>

          <div className="flex items-start gap-2 pt-2">
            <input
              type="checkbox"
              id="consent"
              required
              className="mt-0.5 rounded text-[#0f766e] focus:ring-[#0f766e]"
            />
            <label htmlFor="consent" className="text-xs text-slate-600 cursor-pointer">
              {t("form_consent")}
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#0f766e] hover:bg-[#115e59] text-white font-bold text-sm rounded-lg shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>{t("form_submit")}</span>
          </button>
        </form>
      )}
    </div>
  );
}
