import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Cinthamani Computers | Broadcast & IT Solutions Since 1984",
  description:
    "Cinthamani Computers Pvt. Ltd. is a trusted broadcast and IT solutions company in Chennai, India. For over 40 years we have delivered Apple solutions, OTT & broadcast workflows, post-production systems, wedding video editing tools, and cable TV playout solutions to studios, broadcasters, and enterprises across India.",
  keywords: [
    "broadcast solutions India",
    "IT solutions Chennai",
    "Apple authorized reseller",
    "OTT solutions",
    "post-production systems",
    "cable TV playout",
    "wedding video editing",
    "Cinthamani Computers",
    "broadcast equipment India",
    "media technology solutions",
  ],
  authors: [{ name: "Cinthamani Computers Pvt. Ltd." }],
  openGraph: {
    title: "Cinthamani Computers | Broadcast & IT Solutions Since 1984",
    description:
      "Four decades of trusted broadcast, Apple, and IT solutions. Serving studios, broadcasters, and enterprises across India since 1984.",
    type: "website",
    locale: "en_IN",
    siteName: "Cinthamani Computers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cinthamani Computers | Broadcast & IT Solutions Since 1984",
    description:
      "Four decades of trusted broadcast, Apple, and IT solutions. Serving studios, broadcasters, and enterprises across India since 1984.",
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
      lang="en"
      className={`${lexend.variable} ${sourceSans.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        <Navbar />
        <main className="flex-1 pt-12">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
