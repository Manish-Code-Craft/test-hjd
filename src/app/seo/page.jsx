import Banner from "@/components/Seo/Banner";
import WhySeo from "@/components/Seo/WhySeo"; 
import SeoTestimonial from "@/components/Seo/SeoTestimonial";
import Process from "@/components/Seo/Process";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  title: "Search Engine Optimisation (SEO) Services - High Jump Digital",
  
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
    title: "SEO Services - High Jump Digital",
    description:
      "Rank higher on Google and grow your business with data-driven SEO strategies.",
    url: "https://www.highjumpdigital.com/seo/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SEO Services - High Jump Digital",
    description:
      "Professional SEO services to increase traffic, leads, and revenue.",
  },
};
export default function Service() {
  return (
    <>
    <Banner />
    <WhySeo />
    <SeoTestimonial />
    <Process />
    <CTA />
    </>
  );
}