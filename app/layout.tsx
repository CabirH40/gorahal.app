import type React from "react";
import type { Metadata } from "next";
import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppButton } from "./components/whatsapp-button";

const arabicFont = Noto_Sans_Arabic({ subsets: ["arabic"] });

export const metadata: Metadata = {
  title: "Go Rahal",
  description: "موقع سياحي متخصص في تقديم أفضل الخدمات السياحية في تركيا",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
          {/* Favicon */}
  <link rel="icon" href="/logo.png" type="image/png" />
        {/* Google Ads Global Site Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17046869879"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17046869879');
            `,
          }}
        />
      </head>
      <body className={arabicFont.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
