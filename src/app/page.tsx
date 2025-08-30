'use client'; // Jadikan Client Component untuk mengelola state

import { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { translations, type Language } from '@/lib/translations';

// Metadata statis tidak bisa diekspor dari Client Component.
// Untuk metadata dinamis, Anda perlu menggunakan cara lain atau menempatkannya di layout.tsx.

export default function Home() {
  // === State Management ===
  const [currentLang, setCurrentLang] = useState<Language>('EN');
  const [navTheme, setNavTheme] = useState<'light' | 'dark'>('light'); // Default 'light' karena section pertama putih

  // === Refs untuk setiap section ===
  const sections = {
    section1: useRef<HTMLElement>(null),
    section2: useRef<HTMLElement>(null),
    section3: useRef<HTMLElement>(null),
    section4: useRef<HTMLElement>(null),
    section5: useRef<HTMLElement>(null),
  };

  const handleLangChange = (lang: Language) => {
      setCurrentLang(lang);
      console.log(`Bahasa diubah ke: ${lang}`);
  };

  // === Intersection Observer untuk mengubah tema Navbar ===
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const theme = (entry.target as HTMLElement).dataset.theme as 'light' | 'dark';
          setNavTheme(theme);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: '-50% 0px -50% 0px', // Memicu saat section berada di tengah layar
      threshold: 0,
    });

    Object.values(sections).forEach(sectionRef => {
      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }
    });

    return () => observer.disconnect();
  }, []); // Hanya dijalankan sekali

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Kirim state dan fungsi sebagai props ke Navbar */}
      <Navbar currentLang={currentLang} onLangChange={handleLangChange} navTheme={navTheme} />
      {/* Bungkus semua section dengan satu tag <main> */}
      <main>
        {/* Section 1: Putih (Navbar Solid) */}
        <section ref={sections.section1} data-theme="light" id="section1" className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
          <h1 className="text-5xl font-bold mb-4 text-center text-neutral-700">{translations[currentLang].section1}</h1>
            <span className="text-black text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>

        {/* Section 2: Hitam (Navbar Transparan) */}
        <section ref={sections.section2} data-theme="dark" id="section2" className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
            <h1 className="text-5xl font-bold mb-4 text-center text-neutral-200">{translations[currentLang].section2}</h1>
            <span className="text-neutral-300 text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>

        {/* Section 3: Putih (Navbar Solid) */}
        <section ref={sections.section3} data-theme="light" id="section3" className="flex min-h-screen flex-col items-center justify-center p-24 bg-white">
            <h2 className="text-5xl font-bold mb-4 text-center text-neutral-700">{translations[currentLang].section3}</h2>
            <span className="text-black text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>

        {/* Section 4: Hitam (Navbar Transparan) */}
        <section ref={sections.section4} data-theme="dark" id="section4" className="flex min-h-screen flex-col items-center justify-center p-24 bg-black text-white">
            <h2 className="text-5xl font-bold mb-4 text-center text-neutral-200">{translations[currentLang].section4}</h2>
            <span className="text-neutral-300 text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>

        {/* Section 5: Silver Terang (Navbar Solid) */}
        <section ref={sections.section5} data-theme="light" id="section5" className="flex min-h-screen flex-col items-center justify-center p-24 bg-slate-200 text-black">
            <h2 className="text-5xl font-bold mb-4 text-center text-neutral-700">{translations[currentLang].section5}</h2>
            <span className="text-black text-center max-w-lg">{translations[currentLang].placeholderText}</span>
        </section>
      </main>
      {/* Kirim state sebagai prop ke Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
};