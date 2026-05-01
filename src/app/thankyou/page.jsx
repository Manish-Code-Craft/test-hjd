import Banner from "@/components/Thankyou/Banner"; 
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Thank You | High Jump Digital",

  description:
    "Thank you for your enquiry. Our team at High Jump Digital will review your request and get back to you shortly with your website audit details.",

  keywords: [
    "thank you page",
    "High Jump Digital",
    "website audit request",
    "confirmation page",
    "digital marketing enquiry"
  ],

  authors: [{ name: "High Jump Digital" }],
  creator: "High Jump Digital",
  publisher: "High Jump Digital",

  robots: {
    index: false, 
    follow: false,
  },

  alternates: {
    canonical: "/thank-you/",
  },

  openGraph: {
    title: "Thank You | High Jump Digital",
    description:
      "Your request has been received. Our team will contact you shortly.",
    url: "https://www.highjumpdigital.com/thank-you/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Thank You | High Jump Digital",
    description:
      "Your request has been successfully submitted.",
  },
};

export default function (){
    return(
    <>
    <Banner />
    <CTA />
     </>
    );
}