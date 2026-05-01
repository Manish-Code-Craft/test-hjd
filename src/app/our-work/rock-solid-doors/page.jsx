import Banner from "@/components/RockSolidDoor/Banner";
import StatsSection from "@/components/RockSolidDoor/StatsSection";
import CaseStudySection from "@/components/RockSolidDoor/CaseStudySection";
import CTA from "@/components/Pages/Home/CTA";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Rock Solid Doors - High Jump Digital",

  description:
    "Discover how High Jump Digital helped Rock Solid Doors, a UK-based composite door company, enhance their online presence and drive more leads through a tailored digital strategy.",
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
    canonical: "/our-work/rock-solid-doors/",
  },

  openGraph: {
    title: "Rock Solid Doors Case Study - High Jump Digital",
    description:
      "See how we partnered with Rock Solid Doors to improve visibility, generate leads, and deliver measurable growth with a custom digital strategy.",
    url: "/our-work/rock-solid-doors/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.highjumpdigital.com/images/hjd-favicon.png",
        width: 512,
        height: 512,
        alt: "Rock Solid Doors Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Rock Solid Doors Case Study - High Jump Digital",
    description:
      "Explore how High Jump Digital helped Rock Solid Doors grow their business with a powerful digital strategy.",
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
