import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Iqbal | Full Stack Developer & Software Engineer",
    template: "%s | Iqbal Full Stack Developer",
  },
  description:
    "Iqbal is a Full Stack Developer and Software Engineer specializing in Next.js, React, Node.js, MongoDB, and scalable web applications. View portfolio, projects, and contact details.",
  keywords: [
    "Iqbal Full Stack Developer",
    "Iqbal Software Engineer",
    "Iqbal Portfolio",
    "Next.js Developer",
    "MERN Stack Developer",
    "Software Engineer Portfolio",
  ],
  authors: [{ name: "Mohammad Iqbal" }],
  creator: "Mohammad Iqbal",
  metadataBase: new URL("https://iqbaldev.in"),
  openGraph: {
    title: "Iqbal | Full Stack Developer & Software Engineer",
    description:
      "Portfolio of Iqbal, a Full Stack Developer building scalable web apps using Next.js, React, Node.js, and modern cloud tools.",
    url: "https://iqbaldev.in",
    siteName: "Iqbal Portfolio",
    images: [
      {
        url: "/iqbal-og.png", 
        width: 1200,
        height: 630,
        alt: "Iqbal Full Stack Developer Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"suppressHydrationWarning>
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Mohammad Iqbal",
      url: "https://iqbaldev.in",
      jobTitle: "Full Stack Developer",
      sameAs: [
        "https://github.com/moiqbalbbdniit",
        "https://linkedin.com/in/moiqbalbbdniit",
      ],
      knowsAbout: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "PostgreSQL",
        "TypeScript",
        "Software Engineering",
      ],
    }),
  }}
/>

       <body>
      
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
             <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
    </html>
  );
}
