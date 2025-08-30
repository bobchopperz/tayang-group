'use client';

import { translations, type Language } from "@/lib/translations";

interface FooterProps {
  currentLang: Language;
}

const Footer = ({ currentLang }: FooterProps) => {
  return (
    <footer className="w-full p-8 flex items-center justify-center border-t border-white/10 bg-slate-800 text-white">
      <div className="text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Tayang Group Indonesia. {translations[currentLang].footerRights}</p>
      </div>
    </footer>
  );
};

export default Footer;