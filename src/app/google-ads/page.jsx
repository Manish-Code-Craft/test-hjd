import Banner from "@/components/GoogleAds/Banner"; 
import CTA from "@/components/Pages/Home/CTA";
import WhyGoogle from "@/components/GoogleAds/WhyGoogle";
import GoogleTestimonial from "@/components/GoogleAds/GoogleTestimonial";
import GoogleProcess from "@/components/GoogleAds/GoogleProcess";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Google Ads Services (PPC Agency) | High Jump Digital",

  description:
    "Drive instant traffic and maximize ROI with High Jump Digital's expert Google Ads services. We create high-converting PPC campaigns tailored to your business goals.",

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
    canonical: "/google-ads/",
  },

  openGraph: {
    title: "Google Ads Services (PPC Agency) | High Jump Digital",
    description:
      "Launch high-performing Google Ads campaigns that generate leads and sales.",
    url: "/google-ads/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/google-ads.jpg",
        width: 1200,
        height: 630,
        alt: "Google Ads Services by High Jump Digital",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Google Ads Services (PPC Agency) | High Jump Digital",
    description:
      "Professional PPC management to grow your business with measurable results.",
    images: ["/og/google-ads.jpg"],
  },
};

export default function GoogleAds() {
  return (
    <>
      <Banner /> 
      <WhyGoogle />
      <GoogleTestimonial />
      <GoogleProcess />
      <CTA />
    </>
  );
}