import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import ClientLayout from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: "Ma'muriy binolardan foydalanish boshqarmasi | MBFB",
  description: "Binoning texnik sozligi, uzluksiz faoliyati va davlat mulkidan oqilona foydalanishni ta'minlaymiz.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz" className="scroll-smooth light" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <ThemeProvider>
            <ClientLayout>{children}</ClientLayout>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
