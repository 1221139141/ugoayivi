import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ugo AYIVI - avocat",
  description: "Site officiel - en maintenance",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="h-full">
      <body className="flex flex-col">
        <header>
            <Navbar/>
        </header>
       <main className="grow">
        {children}
       </main>
        <Footer/>
      </body>
    </html>
  );
}
