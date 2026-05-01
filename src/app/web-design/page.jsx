import Banner from "@/components/WebDesign/Banner";
import WhyDesign from "@/components/WebDesign/WhyDesign";
import DesignTestimonial from "@/components/WebDesign/DesignTestimonial";
import DesignProcess from "@/components/WebDesign/DesignProcess";
import CTA from "@/components/Pages/Home/CTA";


export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Web Design Services | Custom Website Design Agency",

  description:
    "Professional web design services by High Jump Digital. We create responsive, SEO-friendly, and high-converting websites tailored to your business needs.",

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
    canonical: "/web-design/",
  },

  openGraph: {
    title: "Web Design Services | High Jump Digital",
    description:
      "We design modern, responsive, and SEO-optimized websites that convert visitors into customers.",
    url: "/web-design/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/web-design.jpg", // make sure this image exists
        width: 1200,
        height: 630,
        alt: "Web Design Services by High Jump Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Design Services | High Jump Digital",
    description:
      "Custom website design that drives results. Fast, responsive, and SEO-ready.",
    images: ["/og/web-design.jpg"],
  },
};

export default function WebDesign() {
    return (
        <>
        <Banner />
        <WhyDesign />
        <DesignTestimonial />
        <DesignProcess />
        <CTA />
        </>
    );
}
