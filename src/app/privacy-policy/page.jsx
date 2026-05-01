
import Banner from "@/components/PrivacyPolicy/Banner";
import PrivacyContent from "@/components/PrivacyPolicy/PrivacyContent";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "Privacy - High Jump Digital",

  description:
    "Learn how High Jump Digital collects, uses, and protects your personal data. Read our privacy policy to understand your rights and how we handle your information.",

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
    canonical: "/privacy/",
  },

  openGraph: {
    title: "Privacy - High Jump Digital",
    description:
      "Learn how High Jump Digital collects, uses, and protects your personal data. Read our privacy policy to understand your rights.",
    url: "/privacy/",
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
    title: "Privacy - High Jump Digital",
    description:
      "Read the privacy policy of High Jump Digital and understand how your data is collected, used, and protected.",
    images: ["https://www.highjumpdigital.com/images/hjd-favicon.png"],
  },
};


export default function PrivacyPolicyPage() {
  return (
    <>
     <Banner />
     <PrivacyContent />
    </>
  );
}