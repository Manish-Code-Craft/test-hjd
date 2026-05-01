import SitemapPage from "@/components/SitemapPage";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Sitemap - High Jump Digital",

  description:
    "Browse all pages on High Jump Digital. Access our full sitemap including services, guides, and contact pages to easily navigate our website.",

  authors: [{ name: "High Jump Digital" }],
  creator: "High Jump Digital",
  publisher: "High Jump Digital",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "/sitemap/",
  },

  openGraph: {
    title: "Sitemap - High Jump Digital",
    description:
      "Explore the complete sitemap of High Jump Digital and navigate all available pages easily.",
    url: "https://www.highjumpdigital.com/sitemap/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Sitemap - High Jump Digital",
    description:
      "View all pages and resources available on High Jump Digital through our sitemap.",
  },
};

export default function Sitemap (){
    return(
      <>
      <SitemapPage />
      </>
    );
}