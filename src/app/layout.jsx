import "@/styles/globals.css";
import { Poppins, Manrope, Chakra_Petch } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
 
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100","200","300","400","500","600","700","800","900"],
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const chakra = Chakra_Petch({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-chakra",
  weight: ["300","400","500","600","700"],
});
 
export const metadata = {
  title: {
    default: "Results Driven Digital Marketing Agency - High Jump Digital", 
  },
  description:
    "High Jump Digital is a results-driven digital marketing agency dedicated to helping businesses grow, scale, and succeed online. We combine data, creativity, and strategy to deliver measurable outcomes through SEO, paid advertising, social media marketing, and conversion-focused campaigns.",
  icons: {
    icon: "/images/hjd-favicon.png",
    shortcut: "/images/hjd-favicon.png",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/manifest.json",
};
 
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${chakra.variable} ${poppins.variable}`}
      >
        <Header />

        <div className="min-h-screen bg-[#090F14] text-gray-800">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}