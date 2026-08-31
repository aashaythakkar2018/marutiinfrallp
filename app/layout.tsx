import type { Metadata, Viewport } from "next";
import Script from "next/script";

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
  verification: {
    google: "-JxH088o9vX52lpujheKTnC_bvGm5wxuR-3zOsv42JY",
  },
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
      <head>
        <meta name="google-site-verification" content="-JxH088o9vX52lpujheKTnC_bvGm5wxuR-3zOsv42JY" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KCZ5QQ7EGJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KCZ5QQ7EGJ');
          `}
        </Script>
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

