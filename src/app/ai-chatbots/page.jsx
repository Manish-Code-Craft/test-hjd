import Banner from "@/components/AIChatbot/Banner"; 
import AiTechnology from "@/components/AIChatbot/AiTechnology";
import AiSetup from "@/components/AIChatbot/AiSetup";
import AiHosting from "@/components/AIChatbot/AiHosting";
import AiAdditional from "@/components/AIChatbot/AiAdditional";
import AiCta from "@/components/AIChatbot/AiCta";
import CTA from "@/components/Pages/Home/CTA";


export const metadata = {
  metadataBase: new URL("https://www.highjumpdigital.com"),

  title: "AI Chatbot Development Agency | High Jump Digital",

  description:
    "Build intelligent AI chatbots with High Jump Digital. Automate customer support, generate leads, and enhance user experience with custom AI chatbot solutions.",

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
    canonical: "/ai-chatbots/",
  },

  openGraph: {
    title: "AI Chatbot Development Agency | High Jump Digital",
    description:
      "Custom AI chatbot solutions to automate support, boost engagement, and increase conversions.",
    url: "/ai-chatbots/",
    siteName: "High Jump Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og/ai-chatbot.jpg", 
        width: 1200,
        height: 630,
        alt: "AI Chatbot Development Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Chatbot Development Agency | High Jump Digital",
    description:
      "Smart AI chatbot solutions to grow your business and automate conversations.",
    images: ["/og/ai-chatbot.jpg"],
  },
};


export default function AiChatboat() {
    return (
        <>
        <Banner /> 
        <AiTechnology />
        <AiSetup />
        <AiHosting />
        <AiAdditional />
        <AiCta />
        <CTA />
        </>
    );
}
