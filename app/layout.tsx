import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1A3A5C",
};
import { Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maruti Infra Engineering LLP | Premium PEB & Structural Steel Solutions",
  description: "Leading manufacturer of Pre-Engineered Buildings (PEB) and heavy structural steel in Gujarat, India. Delivering excellence in industrial infrastructure with speed and precision.",
  keywords: ["PEB", "Pre-Engineered Buildings", "Structural Steel", "Industrial Sheds", "Turnkey Projects", "Maruti Infra", "Gujarat", "India"],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "Maruti Infra Engineering LLP",
    description: "Building the backbone of modern industry with world-class steel solutions.",
    type: "website",
    locale: "en_IN",
    url: "https://maruti-infra-app-aashay-thakkars-projects-c3309a12.vercel.app",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
