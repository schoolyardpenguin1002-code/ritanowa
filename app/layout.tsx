import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Analytics } from "@vercel/analytics/react";
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
  : new URL("http://localhost:4000");

const defaultTitle = `${siteConfig.nameShort} | 高崎市の${siteConfig.specialtyShort}訪問看護`;
const defaultDescription =
  `高崎市の小児精神科訪問看護「りたのわ」。不登校・発達の特性・お子さまのこころの不調——ご家族に寄り添う訪問看護。${siteConfig.regionalPartners}と連携し、想いが巡り心が整うケアを。`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: baseUrl,
  icons: {
    icon: [{ url: "/icon.png", type: "image/png", sizes: "750x750" }],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "750x750" }],
  },
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.nameShort}`,
  },
  description: defaultDescription,
  keywords: [
    "高崎市",
    "小児",
    "精神科",
    "訪問看護",
    "りたのわ",
    "訪問看護ステーション",
    "群馬県",
    "小児精神科訪問看護",
    "不登校",
    "発達障害",
    "発達の特性",
  ],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: siteConfig.concept,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
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
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${notoSerifJP.variable} scroll-smooth`}
    >
      <body className="flex min-h-dvh min-h-screen flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
