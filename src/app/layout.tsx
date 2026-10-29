import type { Metadata, Viewport } from "next";
import { Source_Sans_3 } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { business } from "@/config/business";
import "./globals.css";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source" });

export const metadata: Metadata = {
  metadataBase: new URL(business.website),
  title: { default: `${business.displayName} | Dependable Service. Clear Communication.`, template: `%s | ${business.displayName}` },
  description: `${business.legalName} is a California limited liability company providing confirmed services with clear customer communication.`,
  applicationName: business.legalName,
  keywords: ["managed IT services", "IT support", "cybersecurity support", "remote helpdesk", "technology consulting", "small business IT support"],
  alternates: { canonical: "/" },
  icons: { icon: [{ url: "/brand/gt-logo.png", type: "image/png" }], apple: "/brand/gt-logo.png" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", siteName: business.displayName, title: business.displayName, description: "Managed IT, cybersecurity support, and remote helpdesk services.", url: business.website, images: [{ url: "/brand/gt-logo.png", width: 1254, height: 1254, alt: "Guillermo Tays IT Solutions" }] },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#102a43" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "ProfessionalService", name: business.legalName, alternateName: business.serviceBrand, url: business.website, logo: `${business.website}/brand/gt-logo.png`, email: business.generalEmail, foundingDate: "2023-03-03", areaServed: "United States", description: business.servicesSummary };
  return <html lang="en" className={sourceSans.variable} data-scroll-behavior="smooth"><body><a href="#main" className="sr-only">Skip to main content</a><SiteHeader /><main id="main">{children}</main><SiteFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></body></html>;
}
