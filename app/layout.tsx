import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const rubik = Rubik({ weight: ["400", "600"], subsets: ["latin"] });

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
      <body className={rubik.className + " text-petrol-800"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
