"use client";

import Link from "next/link";
import { User } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ManagementPage() {
  const { lang } = useLanguage();

  return (
    <div>
      <div className="bg-[#0f212f] text-white py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold text-emerald-400 mb-2">
            <Link href="/" className="hover:underline">{lang === "uz" ? "Bosh sahifa" : "Главная страница"}</Link> / <span>{lang === "uz" ? "Boshqarma haqida" : "Об управлении"}</span> / <span>{lang === "uz" ? "Rahbariyat" : "Руководство"}</span>
          </div>
          <h1 className="text-3xl font-extrabold">{lang === "uz" ? "Boshqarma Rahbariyati" : "Руководство управления"}</h1>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            {lang === "uz" ? "Boshqarma rahbariyati va fuqarolarni qabul qilish bo'yicha ma'lumotlar." : "Сведения о руководстве управления и графике приема граждан."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        {/* Director */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3 flex justify-center">
            <div className="w-32 h-32 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
              <User className="w-16 h-16" />
            </div>
          </div>
          <div className="md:col-span-9 space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#0f766e]/10 text-[#0f766e] text-xs font-bold">
              {lang === "uz" ? "Direktor" : "Директор"}
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              {lang === "uz" ? "Sulaymanov Suxrob Sarsenbekovich" : "Сулайманов Сухроб Сарсенбекович"}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === "uz"
                ? "O'zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Ommaviy axborot vositalari uchun kontent tayyorlash markazining turli bo'limlarida bo'lim boshlig'i lavozimida faoliyat yuritgan. Boshqaruv, jamoani muvofiqlashtirish, ish jarayonlarini samarali tashkil etish hamda belgilangan vazifalarni o'z vaqtida va sifatli bajarish bo'yicha katta amaliy tajribaga ega."
                : "Работал начальником отделов в Центре подготовки контента для СМИ при Администрации Президента Республики Узбекистан. Обладает богатым практическим опытом в сфере управления, координации коллектива и качественного выполнения поставленных задач."}
            </p>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <strong>{lang === "uz" ? "Qabul vaqti:" : "Время приема:"}</strong> {lang === "uz" ? "Dushanba va juma, 14:00–16:00" : "Понедельник и пятница, 14:00–16:00"}
              </div>
              <Link
                href="/contact/reception"
                className="px-4 py-2 bg-[#0f766e] hover:bg-[#115e59] text-white text-xs font-bold rounded-lg transition-colors"
              >
                {lang === "uz" ? "Qabulga yozilish" : "Записаться на прием"}
              </Link>
            </div>
          </div>
        </div>

        {/* Deputy Director */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3 flex justify-center">
            <div className="w-32 h-32 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
              <User className="w-16 h-16" />
            </div>
          </div>
          <div className="md:col-span-9 space-y-3">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-700 text-xs font-bold">
              {lang === "uz" ? "Direktor o'rinbosari" : "Заместитель директора"}
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              {lang === "uz" ? "Xalilov Rustam Xamidovich" : "Халилов Рустам Хамидович"}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === "uz"
                ? "Davlat xizmati va biznes boshqaruvida ko'p yillik tajribaga ega. Ma'muriy binolarning texnik sozligi, infratuzilmani saqlash va ekspluatatsiya jarayonlarini boshqarishda yuqori mas'uliyat bilan xizmat ko'rsatadi."
                : "Имеет многолетний опыт работы на государственной службе и в управлении бизнес-процессами. Отвечает за надежную техническую эксплуатацию и поддержание инфраструктуры административных комплексов."}
            </p>
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <strong>{lang === "uz" ? "Qabul vaqti:" : "Время приема:"}</strong> {lang === "uz" ? "Seshanba va chorshanba, 14:00–17:00" : "Вторник и среда, 14:00–17:00"}
              </div>
              <Link
                href="/contact/reception"
                className="px-4 py-2 bg-slate-900 hover:bg-[#0f766e] text-white text-xs font-bold rounded-lg transition-colors"
              >
                {lang === "uz" ? "Qabulga yozilish" : "Записаться на прием"}
              </Link>
            </div>
          </div>
        </div>

        {/* Chief Accountant */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3 flex justify-center">
            <div className="w-32 h-32 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-400">
              <User className="w-16 h-16" />
            </div>
          </div>
          <div className="md:col-span-9 space-y-3">
            <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-800 text-xs font-bold">
              {lang === "uz" ? "Bosh hisobchi" : "Главный бухгалтер"}
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              {lang === "uz" ? "Sheraliyev Jamshidbek Farxodjon o'g'li" : "Шералиев Жамшидбек Фарходжон угли"}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === "uz"
                ? "Moliya va buxgalteriya sohasida ko'p yillik amaliy tajribaga ega. Aniq hisob-kitob va moliyaviy intizomni ustuvor qadriyat deb biladi. Faoliyatida moliyaviy barqarorlik, shaffof hisob-kitob, mablag'lardan oqilona foydalanish va mas'uliyatli boshqaruv tamoyillariga tayanadi."
                : "Обладает многолетним опытом в области финансов и бухучета. В своей работе опирается на принципы прозрачности расчетов, строгой финансовой дисциплины и рационального расходования бюджетных средств."}
            </p>
            <div className="pt-3 border-t border-slate-100 text-xs text-slate-500">
              <strong>{lang === "uz" ? "Aloqa:" : "Связь:"}</strong> {lang === "uz" ? "Boshqarma moliya bo'limi orqali bog'laniladi" : "Через финансовый отдел управления"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
