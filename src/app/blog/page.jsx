import Banner from "@/components/Blog/Banner";

export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

   title: "Blog - High Jump Digital",
  description:
    "Explore insights, strategies, and digital marketing tips from High Jump Digital. Stay updated with SEO, Google Ads, and growth trends.",

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
    canonical: "/blog/",
  },

  openGraph: {
    title: "Blog - High Jump Digital",
    description:
      "Latest digital marketing insights from High Jump Digital.",
    url: "/blog/",
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
    title: "Google Ads Services (PPC Agency) | High Jump Digital",
    description:
      "Professional PPC management to grow your business with measurable results.",
    images: ["https://www.highjumpdigital.com/images/hjd-favicon.png"],
  },
};



export default function Blog() {
    return (
     <>
     <Banner />
     </>
    );
}