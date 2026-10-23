"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";
import { Building2, Wrench, Calculator, ShieldCheck } from "lucide-react";

export default function CentralOfficePage() {
  const { lang } = useLanguage();

  const departments = [
    {
      num: "01",
      icon: Building2,
      titleUz: "Bino ekspluatatsiyasi va muhandislik-kommunikatsiya bo'limi",
      titleRu: "Отдел эксплуатации зданий и инженерных коммуникаций",
      descUz: "Binodagi elektr energiyasi, suv, isitish, sovutish (HVAC), yong'in o'chirish va lift tizimlarining uzluksiz texnik ishlashini ta'minlaydi.",
      descRu: "Обеспечивает бесперебойную эксплуатацию систем электроснабжения, водоснабжения, отопления, кондиционирования (HVAC), пожаротушения и лифтов.",
    },
    {
      num: "02",
      icon: Calculator,
      titleUz: "Buxgalteriya hisobi va rejalashtirish bo'limi",
      titleRu: "Отдел бухгалтерского учета и планирования",
      descUz: "Boshqarmaning moliyaviy-iqtisodiy rejalarini tuzish, smetalarni bajarish, moliyaviy hisobot va hisob-kitob intizomini ta'minlaydi.",
      descRu: "Формирует финансово-экономические планы, сметы расходов, обеспечивает строгую финансовую дисциплину и отчетность.",
    },
    {
      num: "03",
      icon: Wrench,
      titleUz: "Xo'jalik va ta'mirlash xizmati",
      titleRu: "Хозяйственно-ремонтная служба",
      descUz: "Xonalar va umumiy foydalanish hududlarini toza saqlash, moddiy-texnik ta'minot va joriy ta'mirlash ishlarini amalga oshiradi.",
      descRu: "Осуществляет поддержание санитарно-гигиенического состояния, материально-техническое снабжение и текущий ремонт помещений.",
    },
    {
      num: "04",
      icon: ShieldCheck,
      titleUz: "Ijara munosabatlari va davlat mulkini boshqarish",
      titleRu: "Управление арендой и государственным имуществом",
      descUz: "Davlat tasarrufidagi bo'sh maydonlarni belgilangan tartibda ijaraga berish, ijara shartnomalari monitoringi va mulk hisobini yuritadi.",
      descRu: "Ведет реестр свободных площадей, организует предоставление в аренду в установленном порядке и мониторинг договоров аренды.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#070b12] text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Header */}
      <div className="bg-[#090e17] dark:bg-[#05080f] text-white py-14 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-xs font-semibold text-emerald-400 mb-2 flex items-center gap-2">
            <Link href="/" className="hover:underline opacity-80 hover:opacity-100">
              {lang === "uz" ? "Bosh sahifa" : "Главная"}
            </Link>
            <span>/</span>
            <span className="text-slate-300">{lang === "uz" ? "Boshqarma haqida" : "Об управлении"}</span>
            <span>/</span>
            <span className="text-emerald-400">{lang === "uz" ? "Markaziy apparat" : "Центральный аппарат"}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            {lang === "uz" ? "Markaziy Apparat" : "Центральный Аппарат"}
          </h1>
          <p className="text-sm sm:text-base text-slate-300 mt-2 max-w-2xl leading-relaxed">
            {lang === "uz"
              ? "Boshqarma tarkibiy bo'linmalari, ularning asosiy funksiyalari va vazifalari."
              : "Структурные подразделения управления, их ключевые функции и зоны ответственности."}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Banner with 3D model */}
        <div className="mb-12 bg-white dark:bg-[#0f172a] rounded-3xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 flex flex-col lg:flex-row items-center gap-8 shadow-sm">
          <div className="w-full lg:w-1/3 aspect-[16/11] bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-900 dark:to-[#070b12] rounded-2xl p-4 flex items-center justify-center">
            <Image
              src="/images/hero_isometric_3d.jpg"
              alt="MBFB Central Complex"
              width={400}
              height={280}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="lg:w-2/3 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
              {lang === "uz" ? "Bosh Qarorgoh" : "Главная Резиденция"}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              {lang === "uz" ? "MBFB Markaziy Boshqaruvi" : "Центральное Управление MBFB"}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {lang === "uz"
                ? "Toshkent shahri, Shayxontohur tumani, Navoiy ko'chasi 30-uyda joylashgan ma'muriy bino kompleksi. Barcha funksional xizmatlar va markaziy apparat ushbu kompleksdan turib muvofiqlashtiriladi."
                : "Административный комплекс расположен в г. Ташкент, Шайхантахурский район, ул. Навои, 30. Все функциональные подразделения координируются из центрального аппарата."}
            </p>
          </div>
        </div>

        {/* Departments Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {departments.map((dept, idx) => {
            const Icon = dept.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-md transition-shadow space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold font-mono text-slate-400 dark:text-slate-500">
                    {dept.num}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  {lang === "uz" ? dept.titleUz : dept.titleRu}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {lang === "uz" ? dept.descUz : dept.descRu}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
