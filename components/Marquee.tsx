"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Marquee() {
  const { t } = useLanguage();

  return (
    <div className="bg-amber-500/10 border-b border-amber-500/20 text-amber-900 text-xs py-1.5 overflow-hidden flex items-center select-none">
      <div className="marquee-track flex gap-8 items-center font-medium">
        <span className="flex items-center gap-2">⚠️ <strong>{t("ticker_text")}</strong> • {t("ticker_sub")}</span>
        <span className="text-amber-400">•</span>
        <span className="flex items-center gap-2">⚠️ <strong>{t("ticker_text")}</strong> • {t("ticker_sub")}</span>
        <span className="text-amber-400">•</span>
        <span className="flex items-center gap-2">⚠️ <strong>{t("ticker_text")}</strong> • {t("ticker_sub")}</span>
        <span className="text-amber-400">•</span>
        <span className="flex items-center gap-2">⚠️ <strong>{t("ticker_text")}</strong> • {t("ticker_sub")}</span>
      </div>
    </div>
  );
}
