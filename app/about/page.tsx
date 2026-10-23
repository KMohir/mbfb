"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutPage() {
  const { lang } = useLanguage();

  return (
    <div>
      <div className="bg-[#0f212f] text-white py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold text-emerald-400 mb-2">
            <Link href="/" className="hover:underline">{lang === "uz" ? "Bosh sahifa" : "Главная страница"}</Link> / <span>{lang === "uz" ? "Boshqarma haqida" : "Об управлении"}</span> / <span>{lang === "uz" ? "Umumiy ma'lumotlar" : "Общие сведения"}</span>
          </div>
          <h1 className="text-3xl font-extrabold">{lang === "uz" ? "Umumiy ma'lumotlar" : "Общие сведения"}</h1>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl">
            {lang === "uz" ? "Boshqarma faoliyati va asosiy vazifalari haqida." : "О деятельности управления и ключевых задачах."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8 space-y-6 text-slate-700 leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">
              {lang === "uz" ? "Vazifamiz — binolarni asrash." : "Наша миссия — сохранение зданий."}
            </h2>
            {lang === "uz" ? (
              <>
                <p>
                  “Ma'muriy binolardan foydalanish boshqarmasi” davlat muassasasi — O'zbekiston Respublikasi Prezidenti Administratsiyasi huzuridagi Ommaviy axborot vositalari uchun kontent tayyorlash markazining tizim tashkiloti. Boshqarma bino faoliyatini samarali tashkil etish uchun zarur ma'muriy, texnik va infratuzilmaviy sharoitlarni ta'minlaydi.
                </p>
                <p>
                  Boshqarmaning asosiy faoliyati davlat tasarrufidagi binodan samarali, oqilona va maqsadli foydalanishni tashkil etish, uning texnik sozligi, saqlanishi va uzluksiz faoliyatini ta'minlashga qaratilgan.
                </p>
                <p>
                  Muassasa binoni saqlash va undan foydalanish, ta'mirlash ishlarini tashkil etish, muhandislik-kommunikatsiya tizimlarining barqaror ishlashini ta'minlash, elektr energiyasi, suv, isitish va boshqa kommunal xizmatlarni muvofiqlashtirish bo'yicha ishlarni amalga oshiradi.
                </p>
                <p>
                  Boshqarma davlat mulkidan samarali foydalanish, bo'sh turgan xonalarni belgilangan tartibda ijaraga berish, mavjud mulkiy resurslardan oqilona foydalanish va ularning iqtisodiy samaradorligini oshirish yo'nalishida ham faoliyat olib boradi.
                </p>
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <h4 className="font-bold mb-2">Asosiy maqsadimiz:</h4>
                  <p className="text-sm">
                    Zamonaviy, xavfsiz, qulay va samarali boshqariladigan ma'muriy infratuzilmani yaratish hamda davlat mulkining saqlanishi va undan oqilona foydalanilishini ta'minlash.
                  </p>
                </div>
                <p>
                  Boshqarma o'z faoliyatida samaradorlik, mas'uliyat, tejamkorlik, qonuniylik va davlat mulkiga ehtiyotkorona munosabat tamoyillariga tayanadi.
                </p>
              </>
            ) : (
              <>
                <p>
                  Государственное учреждение «Управление по эксплуатации административных зданий» является подведомственной организацией Центра подготовки контента для СМИ при Администрации Президента Республики Узбекистан. Управление обеспечивает необходимые административные, технические и инфраструктурные условия для эффективного функционирования здания.
                </p>
                <p>
                  Основная деятельность управления направлена на обеспечение эффективного, рационального и целевого использования находящихся в государственной собственности зданий, поддержание их технической исправности, сохранности и бесперебойной работы.
                </p>
                <p>
                  Организация осуществляет мероприятия по содержанию и эксплуатации помещений, проведению ремонтных работ, обеспечению надежной работы инженерно-коммуникационных сетей, а также координации снабжения электроэнергией, водой, теплом и другими ресурсами.
                </p>
                <p>
                  Управление проводит работу по сдаче свободных площадей в аренду в установленном порядке и повышению отдачи от использования государственных имущественных активов.
                </p>
                <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900">
                  <h4 className="font-bold mb-2">Наша ключевая цель:</h4>
                  <p className="text-sm">
                    Создание современной, безопасной и комфортной административной среды, а также надежная сохранность и бережное использование государственного имущества.
                  </p>
                </div>
                <p>
                  В своей работе управление руководствуется принципами эффективности, высокой ответственности, экономичности, строгого соблюдения законодательства и бережного отношения к доверенному имуществу.
                </p>
              </>
            )}
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <img src="/images/reception_admin.jpg" alt="Boshqarma atriumi" className="w-full aspect-[16/10] object-cover rounded-xl mb-4" />
              <h4 className="font-bold text-slate-900 text-sm mb-1">{lang === "uz" ? "Bino va uning atrofidagi muhit" : "Здание и окружающая среда"}</h4>
              <p className="text-xs text-slate-500">{lang === "uz" ? "Toshkent ma'muriy markazidagi zamonaviy infratuzilma binosi." : "Современный административный комплекс в центре Ташкента."}</p>
            </div>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm space-y-2">
              <h4 className="font-bold text-slate-900 text-sm mb-3">{lang === "uz" ? "Bo'limlar" : "Разделы"}</h4>
              <Link href="/about/structure" className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100">→ {lang === "uz" ? "Tuzilma" : "Структура"}</Link>
              <Link href="/about/management" className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100">→ {lang === "uz" ? "Rahbariyat" : "Руководство"}</Link>
              <Link href="/about/central-office" className="block px-3 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-100">→ {lang === "uz" ? "Markaziy apparat" : "Центральный аппарат"}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
