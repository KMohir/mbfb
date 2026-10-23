# MBFB — Davlat Muassasalari Binolaridan Foydalanish Boshqarmasi Rasmiy Portali

O‘zbekiston Respublikasi Iqtisodiyot va moliya vazirligi huzuridagi **Davlat muassasalari binolaridan foydalanish boshqarmasi (MBFB)** rasmiy veb-sayti.

Sayt zamonaviy davlat muassasalari infratuzilmasi, 3D raqamli egizak (Digital Twin), qavatlar kesimidagi BMS/SCADA telemetriyasi, interaktiv xizmatlar hamda kunduzgi va tungi rejimlar (Light / Dark mode) bilan to'liq ta'minlangan.

---

## 🚀 Texnologiyalar to‘plami (Tech Stack)

* **Asosiy freymvork:** [Next.js 14](https://nextjs.org/) (App Router, SSR / SSG)
* **Dasturlash tili:** [TypeScript](https://www.typescriptlang.org/)
* **Stilizatsiya va UI:** [Tailwind CSS](https://tailwindcss.com/)
* **3D & Vizualizatsiya:**
  * 3D Arxitektura Raqamli Egizagi (Digital Twin)
  * Interaktiv Qavatlar Skaneri va Telemetriya (BMS / SCADA)
  * Yengil va barqaror Canvas 2D / Three.js arxitekturaviy fon to'ri
* **Ikonkalar:** [Lucide React](https://lucide.dev/)
* **Ko'p tillilik (i18n):** O'zbekcha (`uz`) va Ruscha (`ru`)
* **Mavzular:** Kunduzgi (Light Mode) va Tungi (Dark Mode) to'liq qo'llab-quvvatlanadi

---

## 🏢 Asosiy Bo'limlar va Imkoniyatlar

1. **3D Raqamli Egizak (Hero Section):**
   * Navoiy ko'chasi 30-uydagi MBFB markaziy majmuasining 3D modeli
   * Kunduzgi va tungi rejimda avtomatik moslashuvchi arxitektura
   * 4 ta interaktiv SCADA sensor nuqtalari (Chiller, Serverlar, Terrasalar, Qabulxona)

2. **01 / Boshqarma Haqida:**
   * ISO 41001 va ISO 50001 standartlari bo'yicha operatsion boshqaruv
   * Markaziy dispetcherlik va tezkor texnik xizmat ko'rsatish
   * Jonli statistik ko'rsatkichlar (120+ davlat ob'ektlari, 99.8% barqarorlik)

3. **02 / Asosiy Faoliyat Yo'nalishlari (3D Kartochkalar):**
   * Binolarni saqlash va ekspluatatsiya qilish
   * Mukammal va joriy ta'mirlash
   * Muhandislik tarmoqlari va iqlim nazorati (HVAC)
   * Kommunal xizmatlar va xavfsizlik
   * Xonalarni operativ ijaraga berish
   * Davlat mulkidan oqilona foydalanish

4. **Bino Qavatlarini Interaktiv 3D Ko'zdan Kechirish:**
   * 1-Qavat (Qabulxona va Tashrif markazi)
   * 2-Qavat (Ma'muriy apparat va Majlislar zali)
   * 3-Qavat (Markaziy Dispetcherlik va Server markazi)
   * Tom qismi (Markaziy HVAC Chiller va Quyosh panellari)
   * Har bir qavat uchun real vaqtdagi mikroiqlim va energiya telemetriyasi

5. **Interaktiv Aloqa va Fuqarolar Qabulxonasi:**
   * Onlayn murojaat va arizalar shakli
   * Ish va qabul vaqtlari reglamenti
   * Tezkor ishonch telefonlari va interaktiv xarita

---

## 🛠️ Ishga tushirish (Local Development)

Loyihani kompyuteringizda ishga tushirish uchun quyidagi buyruqlarni ketma-ket bajaring:

```bash
# 1. Repozitoriyani yuklab olish
git clone https://github.com/KMohir/mbfb.git
cd mbfb

# 2. Kerakli paketlarni o'rnatish
npm install

# 3. Dasturchi rejimida ishga tushirish
npm run dev
```

Brauzeringizda oching: [http://localhost:3000](http://localhost:3000)

### Ishlab chiqarish (Production Build):

```bash
# Loyihani yig'ish (Build)
npm run build

# Ishlab chiqarish serverini ishga tushirish
npm start
```

---

## 📄 Litsenziya

MBFB axborot tizimlari va portali uchun rasmiy veb-ishlanma.
