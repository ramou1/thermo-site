import type { Metadata } from "next";
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
        {children}
      </body>
    </html>
  );
}
