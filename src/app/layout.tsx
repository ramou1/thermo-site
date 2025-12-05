import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thermo Service Climatização LTDA",
  description: "Especializada em soluções de climatização, elétrica, hidráulica e tecnologia da informação. Fundada em 2012, com sede em São José, SC.",
  keywords: "climatização, instalações elétricas, comércio atacadista, tecnologia da informação, São José SC",
  authors: [{ name: "Thermo Service Climatização LTDA" }],
  openGraph: {
    title: "Thermo Service Climatização LTDA",
    description: "Especializada em soluções de climatização, elétrica, hidráulica e tecnologia da informação.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/logo-thermo.jpeg",
        width: 1200,
        height: 630,
        alt: "Thermo Service Climatização LTDA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thermo Service Climatização LTDA",
    description: "Especializada em soluções de climatização, elétrica, hidráulica e tecnologia da informação.",
    images: ["/logo-thermo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
