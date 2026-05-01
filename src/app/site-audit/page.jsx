import Banner from "@/components/SiteAudit/Banner"; 
import CTA from "@/components/SiteAudit/CTA";
import WhatYouGet from "@/components/SiteAudit/WhatYouGet";
import OurCompany from "@/components/SiteAudit/OurCompany";
import Testimonial from "@/components/SiteAudit/Testimonial";
import OrderCTA from "@/components/SiteAudit/OrderCTA"

export const metadata = {
  title: "Website Audit Video - High Jump Digital",
  
  description:
    "Boost your rankings and drive organic traffic with High Jump Digital's expert SEO services. We specialize in technical SEO, on-page optimization, and high-converting strategies.",


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
    canonical: "https://www.highjumpdigital.com/seo/",
  },

  openGraph: {
    title: "Website Audit Video - High Jump Digital",
    description:
      "Rank higher on Google and grow your business with data-driven SEO strategies.",
    url: "https://www.highjumpdigital.com/seo/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Website Audit Video - High Jump Digital",
    description:
      "Professional SEO services to increase traffic, leads, and revenue.",
  },
};
export default function Service() {
  return (
    <>
    <Banner /> 
    <CTA />
    <WhatYouGet />
    <OurCompany />
    <Testimonial />
    <OrderCTA />
    </>
  );
}