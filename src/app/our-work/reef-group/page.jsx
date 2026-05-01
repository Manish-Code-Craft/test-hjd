import Banner from "@/components/RockSolidDoor/Banner";
import StatsSection from "@/components/ReefGroup/StatsSection";
import CTA from "@/components/Pages/Home/CTA";
import CaseStudySection from "@/components/ReefGroup/CaseStudySection";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Reef Group Case Study | High Jump Digital UK",

  description:
    "Discover how High Jump Digital helped Reef Group improve their online visibility, increase organic traffic, and generate high-quality leads through a tailored SEO and digital strategy.",
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
    canonical: "/our-work/reef-group/",
  },

  openGraph: {
    title: "Reef Group Case Study | High Jump Digital UK",
    description:
      "Learn how High Jump Digital helped Reef Group grow traffic and generate leads through SEO.",
    url: "/our-work/reef-group/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://www.highjumpdigital.com/images/hjd-favicon.png",
        width: 512,
        height: 512,
        alt: "Reef Group Case Study",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Reef Group Case Study | High Jump Digital UK",
    description:
      "See how High Jump Digital helped Reef Group boost SEO performance, increase visibility, and generate more qualified leads.",
    images: ["https://www.highjumpdigital.com/images/hjd-favicon.png"],
  },
};

export default function ReefGroupPage() {
    return (
        <>
        <Banner />
        <StatsSection /> 
        <CaseStudySection />
        <CTA />
        </>
    );

}
