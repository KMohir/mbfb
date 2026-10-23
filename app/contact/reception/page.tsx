"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function ReceptionPage() {
  const { lang } = useLanguage();

  return (
    <div>
      <div className="bg-[#0f212f] text-white py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold text-emerald-400 mb-2">
            <Link href="/" className="hover:underline">{lang === "uz" ? "Bosh sahifa" : "Главная страница"}</Link> / <span>{lang === "uz" ? "Biz bilan aloqa" : "Контакты"}</span> / <span>{lang === "uz" ? "Qabul qilish jadvali" : "График приема"}</span>
          </div>
          <h1 className="text-3xl font-extrabold">{lang === "uz" ? "Qabul Qilish Jadvali" : "График приема граждан"}</h1>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            {lang === "uz" ? "Boshqarma rahbariyati tomonidan fuqarolar va yuridik shaxslarni qabul qilish kunlari." : "Дни приема граждан и представителей юридических лиц руководством управления."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-4 sm:p-5">{lang === "uz" ? "Lavozim" : "Должность"}</th>
                  <th className="p-4 sm:p-5">{lang === "uz" ? "F.I.O" : "Ф.И.О."}</th>
                  <th className="p-4 sm:p-5">{lang === "uz" ? "Qabul kunlari" : "Дни приема"}</th>
                  <th className="p-4 sm:p-5">{lang === "uz" ? "Qabul vaqti" : "Время приема"}</th>
                  <th className="p-4 sm:p-5 text-right">{lang === "uz" ? "Amal" : "Действие"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">{lang === "uz" ? "Direktor" : "Директор"}</td>
                  <td className="p-4 sm:p-5">{lang === "uz" ? "Sulaymanov Suxrob Sarsenbekovich" : "Сулайманов Сухроб Сарсенбекович"}</td>
                  <td className="p-4 sm:p-5">{lang === "uz" ? "Dushanba va juma" : "Понедельник и пятница"}</td>
                  <td className="p-4 sm:p-5">14:00–16:00</td>
                  <td className="p-4 sm:p-5 text-right">
                    <Link
                      href="/contact/details"
                      className="px-3.5 py-1.5 bg-[#0f766e] text-white font-bold text-xs rounded-lg hover:bg-[#115e59] inline-block"
                    >
                      {lang === "uz" ? "Yozilish" : "Записаться"}
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-4 sm:p-5 font-bold text-slate-900">{lang === "uz" ? "Direktor o'rinbosari" : "Заместитель директора"}</td>
                  <td className="p-4 sm:p-5">{lang === "uz" ? "Xalilov Rustam Xamidovich" : "Халилов Рустам Хамидович"}</td>
                  <td className="p-4 sm:p-5">{lang === "uz" ? "Seshanba va chorshanba" : "Вторник и среда"}</td>
                  <td className="p-4 sm:p-5">14:00–17:00</td>
                  <td className="p-4 sm:p-5 text-right">
                    <Link
                      href="/contact/details"
                      className="px-3.5 py-1.5 bg-slate-900 text-white font-bold text-xs rounded-lg hover:bg-[#0f766e] inline-block"
                    >
                      {lang === "uz" ? "Yozilish" : "Записаться"}
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
          {lang === "uz"
            ? "* Fuqarolar qabuliga shaxsni tasdiqlovchi hujjat (pasport yoki ID-karta) bilan kelishlari so'raladi."
            : "* При обращении на личный прием необходимо иметь документ, удостоверяющий личность (паспорт или ID-карту)."}
        </div>
      </div>
    </div>
  );
}
