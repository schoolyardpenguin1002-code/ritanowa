import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:4000");

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: {
    default: `${siteConfig.nameShort} | 高崎市の精神科特化型訪問看護`,
    template: `%s | ${siteConfig.nameShort}`,
  },
  description:
    "高崎市の精神科特化型訪問看護「りたの輪」。医師がバックアップする専門性と、ICTが生み出すゆとりの時間で、想いが巡り心が整うケアを。高崎市 精神科 訪問看護のご相談はお気軽に。",
  keywords: [
    "高崎市",
    "精神科",
    "訪問看護",
    "りたの輪",
    "訪問看護ステーション",
    "群馬県",
    "精神科訪問看護",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.name,
    title: `${siteConfig.nameShort} | 高崎市の精神科特化型訪問看護`,
    description:
      "想いが巡り、心が整う。利他の心が循環する、新しい訪問看護。高崎市で精神科特化の訪問看護をお探しなら「りたの輪」へ。",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.nameShort} | 高崎市の精神科特化型訪問看護`,
    description:
      "高崎市の精神科特化型訪問看護。医師バックアップとICTで、対話に時間をかけられる訪問看護ステーションです。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
