import Link from "next/link";
import Container from "../Container";

export const metadata = {
  title: "Sitemap - High Jump Digital",
  description:
    "Browse all pages on High Jump Digital including services, guides and contact pages.",
};

export default function SitemapPage() {
  const pages = [
    { name: "ABOUT", url: "/about/" },
    { name: "AI Chatbots", url: "/ai-chatbots/" },
    { name: "BLOG", url: "/blog/" },
    { name: "BRANDING", url: "/branding/" },
    { name: "Contact Us AUSTRALIA", url: "/contact-us-aus/" },
    { name: "Contact Us THAILAND", url: "/contact-us-th/" },
    { name: "Contact Us UNITED KINGDOM", url: "/contact-us-uk/" },
    { name: "FACEBOOK ADS", url: "/facebook-ads/" },
    { name: "Geo Complete Guide", url: "/geo-complete-guide/" },
    { name: "Geo Contact", url: "/geo-contact/" },
    { name: "GOOGLE ADS", url: "/google-ads/" },
    { name: "Home", url: "/" },
    { name: "Privacy", url: "/privacy-policy/" },
    { name: "SEO", url: "/seo/" },
    { name: "Sitemap", url: "/sitemap/" },
    { name: "Terms", url: "/terms/" },
    { name: "Thank you", url: "/thank-you/" },
    { name: "WEB DESIGN", url: "/web-design/" },
    { name: "Website Audit Video", url: "/site-audit/" },
  ];

  // OUR WORK
  const work = [
    { name: "ChemDry", url: "/our-work/chemdry/" },
    { name: "Reef Group", url: "/our-work/reef-group/" },
    { name: "Rock Solid Doors", url: "/our-work/rock-solid-doors/" },
    { name: "RV Parts Express", url: "/our-work/rv-parts-express/" },
    { name: "Smart Security", url: "/our-work/smart-security/" },
  ];

  return (
    <section className="pt-37.5 pb-20 px-6 text-white">
      <Container className="max-w-300">

        {/* TITLE */}
        <h1 className="text-[#10C8F0] text-[50px] md:text-[70px] font-bold chakra mb-10">
          Sitemap
        </h1>

        {/* PAGES */}
        <h3 className=" text-[28px] font-medium mb-6 poppins">
          Pages
        </h3>

        <ul className="space-y-3 list-disc pl-6 mb-12">
          {pages.map((page, i) => (
            <li key={i}>
              <Link
                href={page.url}
                className="text-[#10C8F0] underline text-[18px] manrope font-medium"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* ✅ OUR WORK SECTION (ADDED) */}
        <h3 className=" text-[28px] font-medium mb-6 poppins">
          Our Work
        </h3>

        <ul className="space-y-3 list-disc pl-6">
          {work.map((item, i) => (
            <li key={i}>
              <Link
                href={item.url}
                className="text-[#10C8F0] underline text-[18px] manrope font-medium"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

      </Container>
    </section>
  );
}