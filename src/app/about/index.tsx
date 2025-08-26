import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Home - Tayang Group',
    description: 'Selamat datang di website resmi Tayang Group Indonesia.',
};

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen font-sans">
        <Navbar />
        <main className="flex flex-1 flex-col items-center justify-center p-24 bg-[#e2ede7]">
        <h1 className="text-5xl font-bold mb-4 text-center text-neutral-700">Selamat Datang di Tayang Group</h1>
    <p className="text-lg text-foreground/80">
        Mulai edit halaman ini di{" "}
    <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
        src/app/page.tsx
        </code>
        </p>
        </main>
        <Footer />
        </div>
);
}
