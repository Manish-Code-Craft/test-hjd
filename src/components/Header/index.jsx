"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "@/components/Container";
import ServiceMenuPopup from "@/components/ServiceMenuPopup";
import ContactMenuPopup from "@/components/ContactMenuPopup";
import ContactFormPopup from "@/components/ContactFormPopup";

const navigationItems = [
  {
    name: "SERVICES",
    children: [
      { name: "SEO", href: "/seo" },
      { name: "GOOGLE ADS", href: "/google-ads" },
      { name: "FACEBOOK ADS", href: "/facebook-ads" },
      { name: "WEB DESIGN", href: "/web-design" },
      { name: "AI CHATBOT", href: "/ai-chatbots" },
    ],
  },
  { name: "OUR WORK", href: "/our-work" },
  { name: "ABOUT", href: "/about" },
  { name: "BLOG", href: "/blog" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactFormOpen, setContactFormOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-999 bg-[#090F14] transition-all duration-300 ${
          scrolled ? "bg-[#090F14] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <Container>
          {/* 🔥 FIXED HEADER ROW */}
          <div
            className={`relative flex items-center justify-between py-7.5 transition-all duration-300 ${
              scrolled
                ? "border-b border-transparent"
                : "border-b border-[#3F3F3F]"
            }`}
          >
            {/* LOGO */}
            <div className="logo-wrapper z-10">
              <Link href="/">
                <Image
                  src="/header/website-logo.svg"
                  alt="High Jump Digital"
                  width={140}
                  height={31}
                />
              </Link>
            </div>

            {/* 🔥 CENTER MENU ICON (≤768px) */}
            <div className="absolute left-1/2 -translate-x-1/2 xl:hidden">
              <button
                className="text-white"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X /> : <Menu />}
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4 md:gap-20 z-10">
              {/* DESKTOP NAV */}
              <nav className="hidden xl:flex items-center gap-10">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    {item.name === "SERVICES" ? (
                      <button
                        onClick={() => setServiceOpen(true)}
                        className="cursor-pointer text-white text-[16px] font-bold chakra uppercase tracking-[0.32px] hover:text-[#10C8F0] transition"
                      >
                        {item.name}
                      </button>
                    ) : item.name === "CONTACT" ? (
                      <button
                        onClick={() => setContactOpen(true)}
                        className="cursor-pointer text-white text-[16px] font-bold chakra uppercase tracking-[0.32px] hover:text-[#10C8F0] transition"
                      >
                        {item.name}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-white text-[16px] font-bold chakra uppercase tracking-[0.32px] hover:text-[#10C8F0] transition"
                      >
                        {item.name}
                      </Link>
                    )}

                    {item.children && (
                      <div className="absolute left-0 top-full mt-0 bg-[#090F14] min-w-60 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-5 py-4 chakra text-[16px] font-bold text-[#10C8F0] hover:text-black hover:bg-[#10C8F0]"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* CTA BUTTON */}
              <div className="">
                <button
                  onClick={() => setContactFormOpen(true)}
                  className="text-white text-[16px] cursor-pointer font-bold chakra uppercase tracking-[0.32px] border border-[#10C8F0] px-5 py-2 rounded-full hover:bg-[#10C8F0] hover:text-black transition"
                >
                  WORK WITH US
                </button>
              </div>
            </div>
          </div>
        </Container>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="xl:hidden fixed inset-0 bg-[#02141C] z-999 pt-6 px-6">
            <div className="flex items-center justify-between mb-10">
              <Image
                src="/header/website-logo.svg"
                alt="High Jump Digital"
                width={120}
                height={30}
              />

              <button
                onClick={() => setMobileOpen(false)}
                className="bg-[#10C8F0] p-3 rounded"
              >
                <X className="text-white " />
              </button>
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setContactFormOpen(true);
                }}
                className="border border-[#10C8F0] px-5 py-2 rounded-full text-white chakra font-bold uppercase text-sm"
              >
                WORK WITH US
              </button>
            </div>

            <div className="flex flex-col bg-[#02141C] -m-10 p-10 pb-0">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href || "#"}
                  onClick={() => setMobileOpen(false)}
                  className={`chakra text-[25px] font-bold uppercase px-4 py-5 border-b  border-[#0d2a35] ${
                    item.name === "OUR WORK"
                      ? "bg-[#10C8F0] text-white"
                      : "text-[#10C8F0]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* POPUPS */}
      <ServiceMenuPopup
        isOpen={serviceOpen}
        onClose={() => setServiceOpen(false)}
      />
      <ContactMenuPopup
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />
      <ContactFormPopup
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </>
  );
}
