import Hero from "@/components/Pages/Home/Hero";
import Work from "@/components/Pages/Home/Work";
import BrandsMarquee from "@/components/BrandsMarquee";
import Testimonial from "@/components/Pages/Home/Testimonial";
import Benefit from "@/components/Pages/Home/Benefit";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  title: "Results Driven Digital Marketing Agency - High Jump Digital",

  description:
    "High Jump Digital is a results-driven digital marketing agency helping businesses grow with SEO, paid ads, and high-converting strategies.",

  keywords: [
    "digital marketing agency",
    "SEO services",
    "Google Ads agency",
    "Facebook Ads",
    "web design",
    "digital marketing UK",
    "High Jump Digital",
  ],

  authors: [{ name: "High Jump Digital" }],
  creator: "High Jump Digital",
  publisher: "High Jump Digital",

  alternates: {
    canonical: "https://www.highjumpdigital.com/",
  },

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

  openGraph: {
    title: "Results Driven Digital Marketing Agency - High Jump Digital",
    description:
      "We help businesses grow with SEO, paid ads, and performance marketing strategies.",
    url: "https://www.highjumpdigital.com/",
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
    title: "Results Driven Digital Marketing Agency - High Jump Digital",
    description:
      "Scale your business with expert digital marketing strategies.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Testimonial />
      <Benefit />
      <BrandsMarquee />
      <CTA />
    </>
  );
}
