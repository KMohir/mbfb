"use client";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArchitecturalBackground3D from "@/components/3d/ArchitecturalBackground3D";
import { useTheme } from "@/lib/ThemeContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div
      className={`antialiased min-h-screen flex flex-col transition-colors duration-300 relative selection:bg-teal-500 selection:text-white ${
        theme === "dark" ? "bg-[#070b12] text-slate-100" : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      {/* 3D Architectural Blueprint & Telemetry Background */}
      <ArchitecturalBackground3D />
      
      <TopBar />
      <Header />
      <main className="flex-grow w-full relative z-10 bg-transparent">
        {children}
      </main>
      <Footer />
    </div>
  );
}
