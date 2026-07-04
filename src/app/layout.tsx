import type { Metadata } from "next";
import "@fontsource-variable/fraunces/standard.css";
import "@fontsource-variable/fraunces/standard-italic.css";
import "@fontsource-variable/manrope";
import "./globals.css";
import LegalBackdrop from "@/components/LegalBackdrop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyGuard from "@/components/CopyGuard";

export const metadata: Metadata = {
  title: "Mesfin Getachew & Associates Law Office",
  description:
    "An Ethiopian law office providing civil, labour, IP/trademark and commercial legal services to corporate and private clients in Addis Ababa and across Ethiopia since 2004.",
  openGraph: {
    title: "Mesfin Getachew & Associates Law Office",
    description: "An Ethiopian law office providing civil, labour, IP/trademark and commercial legal services since 2004.",
    type: "website",
  },
  keywords: ["Mesfin Getachew", "law office Ethiopia", "Ethiopian lawyer", "Addis Ababa attorney", "civil law Ethiopia", "labour law Ethiopia", "trademark Ethiopia"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="grain antialiased">
        <CopyGuard />
        <LegalBackdrop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
