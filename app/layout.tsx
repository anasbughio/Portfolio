import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "Anas Bughio | MERN Stack & CMS Developer",
  description: "Portfolio of Anas Bughio, a MERN Stack Developer and CMS Developer specializing in Shopify, WordPress, Webflow, and DevOps.",
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