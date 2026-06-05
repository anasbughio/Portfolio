import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Fahad Hamza Minhas | Full-Stack MERN & Next.js Developer",
  description: "Portfolio of Fahad Hamza Minhas, a Web Developer specializing in the MERN stack, Next.js, and AI integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${sora.variable} font-sans min-h-screen relative`}>
        <Navbar />
        <div className="pt-24"> 
          {children}
        </div>
      </body>
    </html>
  );
}