import ContactAus from "@/components/ContactUs/ContactAus";
import AusMap from "@/components/ContactUs/AusMap";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

   title: "Contact Us - High Jump Digital (Australia)",
  description:
    "Get in touch with High Jump Digital Australia. Speak with our experts about SEO, Google Ads, and digital growth strategies.",

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
    canonical: "/contact-us-aus/",
  },

  openGraph: {
    title: "Contact Us - High Jump Digital (Australia)",
    description:
      "Contact High Jump Digital Australia for expert digital marketing services.",
    url: "/contact-us-aus/",
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
     <ContactAus />
     <AusMap />
     <CTA />
     </>
    );
}