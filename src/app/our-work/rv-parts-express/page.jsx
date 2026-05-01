import Banner from "@/components/RvPart/Banner";
import StatsSection from "@/components/RvPart/StatsSection";
import CaseStudySection from "@/components/RvPart/CaseStudySection";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "RV Parts Express Case Study | High Jump Digital UK",

  description:
    "Discover how High Jump Digital helped RV Parts Express increase revenue, optimise Google Ads campaigns, and improve ROI through a data-driven digital marketing strategy.",
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
    canonical: "/our-work/rv-parts-express/",
  },

  openGraph: {
    title: "RV Parts Express Case Study | High Jump Digital",
    description:
      "See how High Jump Digital helped RV Parts Express scale revenue using Google Ads and performance marketing strategies.",
    url: "/our-work/rv-parts-express/",
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
    title: "RV Parts Express Case Study | High Jump Digital",
    description:
      "Learn how RV Parts Express improved ROI and campaign performance with High Jump Digital.",
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
