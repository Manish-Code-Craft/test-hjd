import Banner from "@/components/RockSolidDoor/Banner";
import StatsSection from "@/components/SmartSecurity/StatsSection";
import CaseStudySection from "@/components/SmartSecurity/CaseStudySection";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Smart Security Case Study | High Jump Digital UK",

  description:
    "Discover how High Jump Digital helped Smart Security improve online visibility, increase traffic, and generate high-quality leads through a tailored digital marketing strategy",
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
    canonical: "/our-work/smart-security/",
  },

  openGraph: {
    title: "Smart Security Case Study | High Jump Digital",
    description:
      "See how High Jump Digital helped Smart Security grow visibility, traffic, and leads with a strategic digital approach.",
    url: "/our-work/smart-security/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.highjumpdigital.com/images/hjd-favicon.png",
        width: 512,
        height: 512,
        alt: "Smart Security Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Security Case Study | High Jump Digital",
    description:
      "Learn how Smart Security increased leads and visibility with High Jump Digital.",
    images: ["https://www.highjumpdigital.com/images/hjd-favicon.png"],
  },
};

export default function RockSolidDoorsPage() {
    return (
        <>
        <Banner />
        <StatsSection />    
        <CaseStudySection />
        <CTA />
        </>
    );

}
