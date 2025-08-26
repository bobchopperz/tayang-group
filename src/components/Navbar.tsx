'use client';

import Link from 'next/link';
import Image from 'next/image';
import { translations, type Language } from '@/lib/translations'; // 1. Impor data dan tipe

// Definisikan tipe untuk props yang diterima
interface NavbarProps {
    currentLang: Language;
    onLangChange: (lang: Language) => void;
}

const Navbar = ({ currentLang, onLangChange }: NavbarProps) => {
    // State dan fungsi handleLangChange telah dihapus dari sini
    // dan sekarang diterima melalui props.

    return (
        <header className="w-full bg-[#e9f3f2] text-black shadow-md sticky top-0 z-50 backdrop-blur-sm">
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
                            <span className="font-medium tracking-wide text-stone-800">Tayang Group Indonesia</span>
                        </Link>
                    </div>
                    {/* Right Section: Nav Links + Language Switcher */}
                    <div className="hidden md:flex items-center">
                        <div className="flex items-baseline space-x-4">
                            {/* 4. Logika untuk menampilkan teks tetap sama, tapi sekarang datanya dari luar */}
                            <Link href="#section1" className="text-stone-600 hover:text-stone-900 px-3 py-2 rounded-md text-base font-medium">
                                {translations[currentLang].home}
                            </Link>
                            <Link href="#section5" className="text-stone-600 hover:text-stone-900 px-3 py-2 rounded-md text-base font-medium">
                                {translations[currentLang].about}
                            </Link>
                            <Link href="#section7" className="text-stone-600 hover:text-stone-900 px-3 py-2 rounded-md text-base font-medium">
                                {translations[currentLang].contact}
                            </Link>
                        </div>

                        {/* Language Switcher */}
                        <div className="ml-6 flex items-center space-x-2 text-base font-medium">
                            {/*<Globe size={18} className="text-stone-600" /> opsi logo globe*/}
                            {currentLang === 'ID' ? (
                                <span className="font-bold text-stone-900 cursor-default">ID</span>
                            ) : (
                                <button onClick={() => onLangChange('ID')} className="text-stone-600 hover:text-stone-900">
                                    ID
                                </button>
                            )}
                            <span className="text-stone-300">|</span>
                            {currentLang === 'EN' ? (
                                <span className="font-bold text-stone-900 cursor-default">EN</span>
                            ) : (
                                <button onClick={() => onLangChange('EN')} className="text-stone-600 hover:text-stone-900">
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