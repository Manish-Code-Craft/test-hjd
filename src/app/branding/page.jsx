
import Banner from "@/components/Branding/Banner";
import WhyBrand from "@/components/Branding/WhyBrand";
import BrandTestimonial from "@/components/Branding/BrandTestimonial";
import BrandProcess from "@/components/Branding/BrandProcess";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Creative Branding Agency - High Jump Digital",
  description:
    "Build a powerful brand with High Jump Digital. We create impactful branding strategies that help your business stand out and grow.",

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
    canonical: "/branding/",
  },

  openGraph: {
    title: "Creative Branding Agency - High Jump Digital",
    description:
      "Professional branding services to elevate your business identity and visibility.",
    url: "/branding/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.highjumpdigital.com/images/hjd-favicon.png",
        width: 512,
        height: 512,
        alt: "High Jump Digital Branding",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Creative Branding Agency - High Jump Digital",
    description:
      "Expert branding services to build a strong and memorable business identity.",
    images: ["https://www.highjumpdigital.com/images/hjd-favicon.png"],
  },
};


export default function OurWork() {
    return (
     <> 
     <Banner />
     <WhyBrand />
     <BrandTestimonial />
     <BrandProcess />
     <CTA />
     </>
    );
}