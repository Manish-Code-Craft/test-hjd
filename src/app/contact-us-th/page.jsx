import ContactTh from "@/components/ContactUs/ContactTh";
import ThMap from "@/components/ContactUs/ThMap";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

   title: "Contact Us - High Jump Digital (Australia)",
  description:
    "Contact High Jump Digital Thailand for expert SEO, Google Ads, Facebook Ads, and web design services. Let’s grow your business with proven digital strategies.",

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
    canonical: "/contact-us-th/",
  },

  openGraph: {
    title: "Contact Us - High Jump Digital (United Kingdom)",
    description:
      "Contact High Jump Digital Thailand for expert SEO, Google Ads, Facebook Ads, and web design services. Let’s grow your business with proven digital strategies.",
    url: "/contact-us-th/",
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
     <ContactTh /> 
     <ThMap />
     <CTA />
     </>
    );
}