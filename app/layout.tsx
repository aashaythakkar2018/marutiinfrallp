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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K4RQDW95');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KCZ5QQ7EGJ"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-KCZ5QQ7EGJ');
            `,
          }}
        />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K4RQDW95"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}

