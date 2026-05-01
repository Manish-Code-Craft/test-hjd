import GeoHero from "@/components/GeoContact/GeoHero"; 
import GeoContactForm from "@/components/GeoContact/GeoContactForm"; 
import GeoFAQ from "@/components/GeoContact/GeoFAQ"; 

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Geo Contact - High Jump Digital",

  description:
    "Learn how generative AI is transforming search and discover how your brand can adapt with a modern GEO (Generative Engine Optimisation) strategy to stay visible in AI-powered results.",

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
    canonical: "/geo-contact/",
  },

  openGraph: {
    title: "Geo Contact - High Jump Digital",
    description:
      "Discover how AI-powered search is reshaping SEO and how to adapt your strategy for generative engines.",
    url: "https://www.highjumpdigital.com/geo-contact/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.highjumpdigital.com/images/hjd-favicon.png",
        width: 512,
        height: 512,
        alt: "GEO Complete Guide",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Geo Contact - High Jump Digital",
    description:
      "Understand how generative AI is changing search and how to optimise your brand for it.",
    images: ["https://www.highjumpdigital.com/images/hjd-favicon.png"],
  },
};

export default function GeoContact() {
  return (
    <>
      <GeoHero />
      <GeoContactForm />
      <GeoFAQ />
    </>
  );
}