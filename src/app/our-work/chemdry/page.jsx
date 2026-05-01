import Banner from "@/components/RockSolidDoor/Banner"; 
import StatsSection from "@/components/ChemDry/StatsSection";
import CaseStudySection from "@/components/ChemDry/CaseStudySection";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "ChemDry Case Study | High Jump Digital UK",

  description:
    "Discover how High Jump Digital helped ChemDry Express WA generate over 1100+ leads and increase brand reach through targeted Facebook Ads and digital marketing strategies.",
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
    canonical: "/our-work/chemdry/",
  },

  openGraph: {
    title: "ChemDry Case Study | High Jump Digital",
    description:
      "See how High Jump Digital helped ChemDry generate 1100+ leads and boost brand awareness through Facebook Ads.",
    url: "/our-work/chemdry/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.highjumpdigital.com/images/hjd-favicon.png",
        width: 512,
        height: 512,
        alt: "ChemDry Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ChemDry Case Study | High Jump Digital",
    description:
      "Learn how ChemDry increased leads and reach using Facebook Ads with High Jump Digital.",
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
