'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { translations, type Language } from '@/lib/translations'; // 1. Impor data dan tipe

// Definisikan tipe untuk props yang diterima
interface NavbarProps {
    currentLang: Language;
    onLangChange: (lang: Language) => void;
}

const Navbar = ({ currentLang, onLangChange }: NavbarProps) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Set state menjadi true jika pengguna scroll lebih dari 10px
            setIsScrolled(window.scrollY > 10);
        };

        // Tambahkan event listener saat komponen dimuat
        window.addEventListener('scroll', handleScroll);

        // Hapus event listener saat komponen dilepas untuk mencegah memory leak
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`w-full fixed top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
            isScrolled ? 'bg-[#e9f3f2] shadow-md' : 'bg-transparent'
        }`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section (Tidak diubah) */}
                    <div className="flex">
                        <Link href="/" className="flex-shrink-0 flex items-center gap-4 text-xl">
                            <Image
                                src="/logo-fix.png" // Anda bisa mengganti ini dengan logo Anda
                                alt="Tayang Group Logo"
                                width={50}
                                height={10}
                                priority
                            />
                            <span className={`font-medium tracking-wide transition-colors ${isScrolled ? 'text-stone-800' : 'text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>Tayang Group Indonesia</span>
                        </Link>
                    </div>
                    {/* Right Section: Nav Links + Language Switcher */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-baseline space-x-4">
                            {/* 4. Logika untuk menampilkan teks tetap sama, tapi sekarang datanya dari luar */}
                            <Link href="#section1" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-gray-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>
                                {translations[currentLang].home}
                            </Link>
                            <Link href="#section5" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-gray-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>
                                {translations[currentLang].about}
                            </Link>
                            <Link href="#section7" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-gray-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>
                                {translations[currentLang].contact}
                            </Link>
                        </div>

                        {/* Language Switcher */}
                        <div className="ml-6 flex items-center space-x-2 text-base font-medium">
                            {/*<Globe size={18} className={`transition-colors ${isScrolled ? 'text-stone-600' : 'text-white'}`} /> opsi logo globe*/}
                            {currentLang === 'ID' ? (
                                <span className={`font-bold cursor-default transition-colors ${isScrolled ? 'text-stone-900' : 'text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>ID</span>
                            ) : (
                                <button onClick={() => onLangChange('ID')} className={`transition-colors ${isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-gray-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>
                                    ID
                                </button>
                            )}
                            <span className={`transition-colors ${isScrolled ? 'text-stone-300' : 'text-white/50'}`}>|</span>
                            {currentLang === 'EN' ? (
                                <span className={`font-bold cursor-default transition-colors ${isScrolled ? 'text-stone-900' : 'text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>EN</span>
                            ) : (
                                <button onClick={() => onLangChange('EN')} className={`transition-colors ${isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-gray-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>
                                    EN
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;