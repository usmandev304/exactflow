import './globals.css';
import { Header } from './components/navigation/Header';
import { Montserrat, Geist } from 'next/font/google';
import { cn } from "@/lib/utils";
import type { Viewport } from 'next';

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("bg-[#F8F9FE]", "font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Clash+Grotesk:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${montserrat.variable} bg-[#F8F9FE]`}> {/* Light grid background color */}
        <Header />
        <main className="">
          {children}
        </main>
      </body>
    </html>
  );
}