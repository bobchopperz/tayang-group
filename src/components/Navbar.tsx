'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { translations, type Language } from '@/lib/translations'; // 1. Impor data dan tipe

// Definisikan tipe untuk props yang diterima
interface NavbarProps {
    currentLang: Language;
    onLangChange: (lang: Language) => void;
    navTheme: 'light' | 'dark';
}

const Navbar = ({ currentLang, onLangChange, navTheme }: NavbarProps) => {
    const isLight = navTheme === 'light';
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Efek untuk menutup dropdown saat klik di luar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMobileMenuOpen(false);
            }
        };

        if (isMobileMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMobileMenuOpen]);

    return (
        <header className={`w-full fixed top-0 z-50 backdrop-blur-sm transition-all duration-300 ${
            isLight ? 'bg-[#e9f3f2] shadow-md' : 'bg-transparent'
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
                            <span className={`font-medium tracking-wide transition-colors ${isLight ? 'text-stone-800' : 'text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>Tayang Group Indonesia</span>
                        </Link>
                    </div>
                    {/* Right Section: Nav Links + Language Switcher */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-baseline space-x-4">
                            {/* 4. Logika untuk menampilkan teks tetap sama, tapi sekarang datanya dari luar */}
                            <Link href="#section1" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isLight ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-gray-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>
                                {translations[currentLang].home}
                            </Link>
                            <Link href="#section5" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isLight ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-gray-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>
                                {translations[currentLang].about}
                            </Link>
                            <Link href="#section7" className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${isLight ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-gray-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>
                                {translations[currentLang].contact}
                            </Link>
                        </div>

                        {/* Language Switcher */}
                        <div className="ml-6 flex items-center space-x-2 text-base font-medium">
                            {/*<Globe size={18} className={`transition-colors ${isLight ? 'text-stone-600' : 'text-white'}`} /> opsi logo globe*/}
                            {currentLang === 'ID' ? (
                                <span className={`font-bold cursor-default transition-colors ${isLight ? 'text-stone-900' : 'text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>ID</span>
                            ) : (
                                <button onClick={() => onLangChange('ID')} className={`transition-colors ${isLight ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-gray-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>
                                    ID
                                </button>
                            )}
                            <span className={`transition-colors ${isLight ? 'text-stone-300' : 'text-white/50'}`}>|</span>
                            {currentLang === 'EN' ? (
                                <span className={`font-bold cursor-default transition-colors ${isLight ? 'text-stone-900' : 'text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>EN</span>
                            ) : (
                                <button onClick={() => onLangChange('EN')} className={`transition-colors ${isLight ? 'text-stone-600 hover:text-stone-900' : 'text-white hover:text-gray-200 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.4)]'}`}>
                                    EN
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Mobile Hamburger Button & Dropdown Container */}
                    <div ref={menuRef} className="md:hidden relative flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Open menu"
                            className="p-2 rounded-md"
                        >
                            {isMobileMenuOpen ? (
                                <X className={`h-6 w-6 transition-colors ${isLight ? 'text-stone-800' : 'text-white'}`} />
                            ) : (
                                <Menu className={`h-6 w-6 transition-colors ${isLight ? 'text-stone-800' : 'text-white'}`} />
                            )}
                        </button>

                        {/* Mobile Dropdown Menu */}
                        {isMobileMenuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="mobile-menu-button">
                                    <Link href="#section1" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100" role="menuitem">
                                        {translations[currentLang].home}
                                    </Link>
                                    <Link href="#section5" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100" role="menuitem">
                                        {translations[currentLang].about}
                                    </Link>
                                    <Link href="#section7" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100" role="menuitem">
                                        {translations[currentLang].contact}
                                    </Link>

                                    {/* Divider */}
                                    <div className="border-t border-gray-100 my-1"></div>

                                    {/* Mobile Language Switcher */}
                                    <div className="px-4 py-2 flex items-center justify-center space-x-2 text-base font-medium">
                                        {currentLang === 'ID' ? <span className="font-bold text-stone-900">ID</span> : <button onClick={() => onLangChange('ID')} className="text-stone-600 hover:text-stone-900">ID</button>}
                                        <span className="text-stone-300">|</span>
                                        {currentLang === 'EN' ? <span className="font-bold text-stone-900">EN</span> : <button onClick={() => onLangChange('EN')} className="text-stone-600 hover:text-stone-900">EN</button>}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;