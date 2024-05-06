import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";

import localFont from "next/font/local";

// Font files can be colocated inside of `app`

const ttCommons = localFont({
  src: [
    { path: "./fonts/TT Commons Regular.otf", weight: "400" },
    { path: "./fonts/TT Commons DemiBold.otf", weight: "600" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BORG token metrics from SwissBorg. Previously CHSB, now BORG",
  description:
    "The BORG token offers unique benefits to token holders with premium tiers, early access to investment opportunities, cash back on fees and more.",
  openGraph: {
    title: "Borg token metrics",
    siteName: "Borg token metrics",
    type: "website",
    locale: "en_US",
    description:
      "The BORG token offers unique benefits to token holders with premium tiers, early access to investment opportunities, cash back on fees and more.",
    images: [{ url: "/og-img.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icons/crypto.svg",
        type: "image/x-icon",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ttCommons.className + " text-petrol-800"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
