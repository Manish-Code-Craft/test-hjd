import Banner from "@/components/OurWork/Banner";
import WorkPost from "@/components/OurWork/WorkPost";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Our Work - High Jump Digital",

  description:
    "View our portfolio of successful SEO, Google Ads, Facebook Ads, and web design projects. Discover how we help businesses grow",

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
    canonical: "/our-work/",
  },

  openGraph: {
    title: "Our Work - High Jump Digital",
    description:
      "View our portfolio of successful SEO, Google Ads, Facebook Ads, and web design projects. Discover how we help businesses grow.",
    url: "/our-work/",
    siteName: "High Jump Digital",
    locale: "en_US",
   type: "website",
    images: [
      {
        url: "https://www.highjumpdigital.com/images/hjd-favicon.png",
        width: 512,
        height: 512,
        alt: "High Jump Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Google Ads Services (PPC Agency) | High Jump Digital",
    description:
      "Professional PPC management to grow your business with measurable results.",
    images: ["https://www.highjumpdigital.com/images/hjd-favicon.png"],
  },
};



export default function OurWork() {
    return (
     <>
     <WorkPost />
     <CTA />
     </>
    );
}