import ContactUk from "@/components/ContactUs/ContactUk";
import UkMap from "@/components/ContactUs/UkMap";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

   title: "Contact Us - High Jump Digital (Australia)",
  description:
    "Get in touch with High Jump Digital UK. Speak with our team about SEO, Google Ads, web design, and digital growth strategies to grow your business.",

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
    canonical: "/contact-us-uk/",
  },

  openGraph: {
    title: "Contact Us - High Jump Digital (United Kingdom)",
    description:
      "Get in touch with High Jump Digital UK. Speak with our team about SEO, Google Ads, web design, and digital growth strategies to grow your business.",
    url: "/contact-us-uk/",
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
     <ContactUk />
     <UkMap />
     <CTA />
     </>
    );
}