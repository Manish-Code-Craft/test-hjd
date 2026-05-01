import Banner from "@/components/FacebookAds/Banner"; 
import WhyFacebook from "@/components/FacebookAds/WhyFacebook";
import FacebookTestimonial from "@/components/FacebookAds/FacebookTestimonial"; 
import FaceboolProcess from "@/components/FacebookAds/FacebookProcess";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  title: "Facebook & Instagram Ads Management - High Jump Digital",
  
  description:
    "Scale your business with high-performing Facebook and Instagram ads. High Jump Digital creates targeted campaigns that drive leads, sales, and brand awareness.",

  keywords: [
    "Facebook Ads agency",
    "Instagram Ads management",
    "Meta Ads services",
    "paid social advertising",
    "Facebook Ads UK",
    "Facebook Ads Australia",
    "Facebook Ads Thailand",
    "High Jump Digital Facebook Ads"
  ],

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
    canonical: "https://www.highjumpdigital.com/facebook-ads/",
  },

  openGraph: {
    title: "Facebook & Instagram Ads - High Jump Digital",
    description:
      "Reach the right audience and grow faster with data-driven Facebook and Instagram ad campaigns.",
    url: "https://www.highjumpdigital.com/facebook-ads/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Facebook Ads Services - High Jump Digital",
    description:
      "Generate leads and sales with expert Facebook and Instagram advertising.",
  },
};

export default function FacebookAdsPage() {
  return (
    <>
      <Banner /> 
      <WhyFacebook />
      <FacebookTestimonial />
      <FaceboolProcess />
      <CTA />
    </>
  );
}