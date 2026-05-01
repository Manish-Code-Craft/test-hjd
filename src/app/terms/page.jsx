import Banner from "@/components/Terms/Banner";
import TermsContent from "@/components/Terms/TermsContent";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Terms - High Jump Digital",

  description:
    "Read the terms and conditions for using High Jump Digital's website and services. Understand your rights, responsibilities, and our policies.",

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
    canonical: "/terms/",
  },

  openGraph: {
    title: "Terms - High Jump Digital",
    description:
      "Read the terms and conditions for using High Jump Digital's website and services.",
    url: "/terms/",
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
    title: "Terms - High Jump Digital",
    description:
      "Understand the terms and conditions of using High Jump Digital services.",
    images: ["https://www.highjumpdigital.com/images/hjd-favicon.png"],
  },
};

export default function TermsPage() {
  return (
    <> 
        <Banner />
        <TermsContent />
    </>
  );
}