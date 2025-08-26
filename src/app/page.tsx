'use client'; // Jadikan Client Component untuk mengelola state

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { translations, type Language } from '@/lib/translations';

// Metadata statis tidak bisa diekspor dari Client Component.
// Untuk metadata dinamis, Anda perlu menggunakan cara lain atau menempatkannya di layout.tsx.

export default function Home() {
  // State dan fungsi pengubahnya dipindahkan ke sini dari Navbar
  const [currentLang, setCurrentLang] = useState<Language>('ID');

  const handleLangChange = (lang: Language) => {
      setCurrentLang(lang);
      // Logika i18n yang sebenarnya akan dijalankan di sini
      console.log(`Bahasa diubah ke: ${lang}`);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Kirim state dan fungsi sebagai props ke Navbar */}
      <Navbar currentLang={currentLang} onLangChange={handleLangChange} />
      {/* Bungkus semua section dengan satu tag <main> */}
      <main>
        <section id="section1" className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
          <h1 className="text-5xl font-bold mb-4 text-center text-neutral-700">{translations[currentLang].section1}</h1>
            <span className="text-black text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>

        <section id="section2" className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
            <h1 className="text-5xl font-bold mb-4 text-center text-neutral-700">{translations[currentLang].section2}</h1>
            <span className="text-black text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>

        <section id="section3" className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
            <h2 className="text-5xl font-bold mb-4 text-center text-neutral-700">{translations[currentLang].section3}</h2>
            <span className="text-black text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>

        <section id="section4" className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
            <h2 className="text-5xl font-bold mb-4 text-center text-neutral-700">{translations[currentLang].section4}</h2>
            <span className="text-black text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>

        <section id="section5" className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
            <h2 className="text-5xl font-bold mb-4 text-center text-neutral-700">{translations[currentLang].section5}</h2>
            <span className="text-black text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>

        <section id="section6" className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-50">
            <h2 className="text-5xl font-bold mb-4 text-center text-neutral-700">{translations[currentLang].section6}</h2>
            <span className="text-black text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>

        <section id="section7" className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
            <h2 className="text-5xl font-bold mb-4 text-center text-neutral-700">{translations[currentLang].section7}</h2>
            <span className="text-black text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>
      </main>
      {/* Kirim state sebagai prop ke Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
};