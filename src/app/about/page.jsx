import Banner from "@/components/About/Banner"; 
import ProvideService from "@/components/About/ProvideService";
import BehindCurtain from "@/components/About/BehindCurtain";
import Quote from "@/components/About/Quote";
import BrandsMarquee from "@/components/BrandsMarquee";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "About Us - High Jump Digital",

  description:
    "Learn more about High Jump Digital, a results-driven digital marketing agency specializing in SEO, Google Ads, and Facebook Ads.",

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
    canonical: "/about/",
  },

  openGraph: {
    title: "About Us - High Jump Digital",
    description:
      "Learn more about High Jump Digital, a results-driven digital marketing agency specializing in SEO, Google Ads, and Facebook Ads.",
    url: "/about/",
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

export default function About() {
  return (
    <>
      <Banner /> 
      <ProvideService />
      <BehindCurtain />
      <Quote />
      <BrandsMarquee />
      <CTA />
    </>
  );
}