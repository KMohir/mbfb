"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function StructurePage() {
  const { lang } = useLanguage();

  return (
    <div>
      <div className="bg-[#0f212f] text-white py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold text-emerald-400 mb-2">
            <Link href="/" className="hover:underline">{lang === "uz" ? "Bosh sahifa" : "Главная страница"}</Link> / <span>{lang === "uz" ? "Boshqarma haqida" : "Об управлении"}</span> / <span>{lang === "uz" ? "Tuzilma" : "Структура"}</span>
          </div>
          <h1 className="text-3xl font-extrabold">{lang === "uz" ? "Boshqarma Tuzilmasi" : "Организационная структура"}</h1>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            {lang === "uz" ? "Boshqarmaning tasdiqlangan tashkiliy tuzilmasi haqida ma'lumot." : "Сведения об утвержденной организационной структуре управления."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
          <div className="text-center max-w-md mx-auto mb-10">
            <div className="p-4 rounded-xl bg-slate-900 text-white font-bold shadow-md">
              <div className="text-xs text-emerald-400 uppercase tracking-widest font-bold">
                {lang === "uz" ? "Yuqori turuvchi organ" : "Вышестоящий орган"}
              </div>
              <div className="text-sm sm:text-base mt-1">
                {lang === "uz" ? "Prezident Administratsiyasi huzuridagi Kontent tayyorlash markazi" : "Центр подготовки контента при Администрации Президента РУз"}
              </div>
            </div>
            <div className="w-0.5 h-8 bg-slate-300 mx-auto"></div>
            <div className="p-4 rounded-xl bg-[#0f766e] text-white font-bold shadow-md">
              <div className="text-xs text-emerald-200 uppercase tracking-widest font-bold">
                {lang === "uz" ? "Muassasa rahbari" : "Руководитель учреждения"}
              </div>
              <div className="text-base mt-1">{lang === "uz" ? "Direktor" : "Директор"}</div>
              <div className="text-xs font-normal text-emerald-100">
                {lang === "uz" ? "Sulaymanov Suxrob Sarsenbekovich" : "Сулайманов Сухроб Сарсенбекович"}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 text-center">
              <div className="text-xs font-bold text-slate-500 uppercase">{lang === "uz" ? "Boshqaruv" : "Управление"}</div>
              <div className="font-bold text-slate-900 mt-1">{lang === "uz" ? "Direktor o'rinbosari" : "Заместитель директора"}</div>
              <div className="text-xs text-slate-600">{lang === "uz" ? "Xalilov Rustam Xamidovich" : "Халилов Рустам Хамидович"}</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-300 text-center">
              <div className="text-xs font-bold text-slate-500 uppercase">{lang === "uz" ? "Moliya va hisob" : "Финансы и учет"}</div>
              <div className="font-bold text-slate-900 mt-1">{lang === "uz" ? "Bosh hisobchi" : "Главный бухгалтер"}</div>
              <div className="text-xs text-slate-600">{lang === "uz" ? "Sheraliyev Jamshidbek Farxodjon o'g'li" : "Шералиев Жамшидбек Фарходжон угли"}</div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                {lang === "uz" ? "Muhandislik-kommunikatsiya bo'limi" : "Отдел инженерных сетей"}
              </div>
              <p className="text-xs text-slate-500">
                {lang === "uz" ? "HVAC, elektr ta'minoti, suv, gaz va texnik nazorat." : "HVAC, электроснабжение, водоснабжение и технадзор."}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                {lang === "uz" ? "Xo'jalik va ta'mirlash xizmati" : "Хозяйственная служба и ремонт"}
              </div>
              <p className="text-xs text-slate-500">
                {lang === "uz" ? "Bino ichki-tashqi sozligi, tozalik va kapital-joriy ta'mir." : "Исправность здания, уборка и текущий ремонт."}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                {lang === "uz" ? "Ijara va davlat mulki sektori" : "Сектор аренды и госимущества"}
              </div>
              <p className="text-xs text-slate-500">
                {lang === "uz" ? "Bo'sh xonalarni ijaraga berish va davlat mulkidan oqilona foydalanish." : "Сдача помещений в аренду и учет госимущества."}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="font-bold text-slate-900 text-xs sm:text-sm mb-1">
                {lang === "uz" ? "Dispetcherlik va xavfsizlik" : "Диспетчерская служба и безопасность"}
              </div>
              <p className="text-xs text-slate-500">
                {lang === "uz" ? "24/7 avariya dispetcherlik xizmati va monitoring." : "Круглосуточный диспетчерский контроль и мониторинг."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
