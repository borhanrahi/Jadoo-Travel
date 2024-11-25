import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F1A501",
};

export const metadata: Metadata = {
  title: "Jadoo Travel | Book Your Next Adventure",
  description:
    "Book your trip in minutes with Jadoo Travel. Discover the best destinations, flights, and customized travel experiences around the world.",
  keywords:
    "travel, booking, flights, destinations, travel packages, vacation planning",
  openGraph: {
    title: "Jadoo Travel | Book Your Next Adventure",
    description:
      "Book your trip in minutes with Jadoo Travel. Discover the best destinations, flights, and customized travel experiences around the world.",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Jadoo Travel",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jadoo Travel | Book Your Next Adventure",
    description:
      "Book your trip in minutes with Jadoo Travel. Discover the best destinations, flights, and customized travel experiences around the world.",
    images: ["/og-image.jpg"], // Add your Twitter card image
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: "#F1A501",
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased light relative overflow-x-hidden`}
      >
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
