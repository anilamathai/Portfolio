import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Anila Mathai | Software Developer",
  description: "Portfolio of Anila Mathai, an Emerging Software Developer specializing in AI/ML and Full Stack Development.",
  openGraph: {
    title: "Anila Mathai | Software Developer",
    description: "Portfolio of Anila Mathai, an Emerging Software Developer specializing in AI/ML and Full Stack Development.",
    url: "https://your-deployment-url.vercel.app",
    siteName: "Anila Mathai Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anila Mathai | Software Developer",
    description: "Portfolio of Anila Mathai, an Emerging Software Developer specializing in AI/ML and Full Stack Development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-background overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
