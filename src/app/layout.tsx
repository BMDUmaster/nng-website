import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./reading-rhythm.css";
import { fontVariables } from "./fonts";
import { Analytics, AnalyticsNoScript } from "@/components/analytics/Analytics";
import { Motion } from "@/components/art/Motion";
import { PageVeil } from "@/components/brand/PageVeil";
import { EnquiryDialog } from "@/components/enquiry/EnquiryDialog";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Icon } from "@/components/icons/Icon";
import { MobileEnquiryBar } from "@/components/layout/MobileEnquiryBar";
import { ContactDock } from "@/components/layout/ContactDock";
import { PreviewNotice } from "@/components/layout/PreviewNotice";
import { FilmViewer } from "@/components/voices/FilmViewer";
import { site } from "@/content/site";

const description =
  `Narayani Garg, ${site.title}. Mind. Direction. Alignment. Personal guidance for the patterns, decisions and changes you are working through.`;

const shareImage = new URL(
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/og-narayani-psychic-mentor.jpg`,
  site.previewNote ? "https://deoxysaryan.github.io" : site.url,
).href;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Narayani Garg | Transformation with NNG",
    template: "%s | Narayani Garg, Transformation with NNG",
  },
  description,
  alternates: { canonical: "/" },
  // The site stays out of search until SITE_INDEXABLE=true is set at launch.
  robots: site.indexable ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "Narayani Garg | Transformation with NNG",
    description,
    images: [{ url: shareImage, width: 1200, height: 630, alt: `${site.person}, ${site.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Narayani Garg | Transformation with NNG",
    description,
    images: [shareImage],
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#FAF6F0",
};

/** The hand-drawn service icons for the header menus, drawn on the server so the registry stays out of the browser. */
const navIcons = {
  "/services/brain-training/": <Icon id="hub-brain-training" />,
  "/services/astrology/": <Icon id="hub-astrology" />,
  "/services/numerology/": <Icon id="hub-numerology" />,
  "/services/vastu/": <Icon id="hub-vastu" />,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontVariables}>
      <body className="practice-site">
        <AnalyticsNoScript />
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <PreviewNotice />
        <Header icons={navIcons} />
        <main id="main">{children}</main>
        <Footer />
        <ContactDock />
        <MobileEnquiryBar />
        <EnquiryDialog />
        <FilmViewer />
        <PageVeil />
        <Motion />
        <Analytics />
      </body>
    </html>
  );
}
