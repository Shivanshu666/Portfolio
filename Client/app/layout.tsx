// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "../providers/QueryProvider";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import IntroEye from "../components/Hero/IntroEye"; // 👈 import

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Shivanshu Prajapati · Developer,Freelancer",
  description: "Senior software engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <QueryProvider>
          <IntroEye>      
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </IntroEye>
        </QueryProvider>
      </body>
    </html>
  );
}