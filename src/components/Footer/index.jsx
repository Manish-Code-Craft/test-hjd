"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

/* ✅ ADDED ONLY */
import { useState } from "react";
import ContactFormPopup from "@/components/ContactFormPopup";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const locations = [
  { name: "Australia", href: "/contact-us-aus/" },
  { name: "United Kingdom", href: "/contact-us-uk/" },
  { name: "Thailand", href: "/contact-us-th/" },
];

const services = [
  { name: "SEO", href: "/seo/" },
  { name: "Google Ads", href: "/google-ads/" },
  { name: "Facebook Ads", href: "/facebook-ads/" },
  { name: "Web Design", href: "/web-design/" },
  { name: "AI Chatbots", href: "/ai-chatbots/" },
  { name: "Branding", href: "/branding/" },
];

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "" },
  { name: "Sitemap", href: "/sitemap" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy-policy" },
];

const contactInfo = [
  {
    label: "Email",
    value: "admin@highjumpdigital.com",
    href: "mailto:admin@highjumpdigital.com",
  },
  {
    label: "UK",
    value: "+44 20 3404 2889",
    href: "tel:+442034042889",
  },
  {
    label: "AU",
    value: "+61 8 6243 1727",
    href: "tel:+61862431727",
  },
  {
    label: "TH",
    value: "+66 9 2880 0810",
    href: "tel:+66928800810",
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/highjumpdigital/",
    icon: FaFacebook, // Changed to filled version
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/high-jump-digital?originalSubdomain=th",
    icon: FaLinkedin, // Changed to filled version
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/highjumpdigital/",
    icon: FaInstagram,
  },
];

export default function Footer() {

  /* ✅ ADDED ONLY */
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <footer className="bg-[#030810] text-white">
      <Container className="py-16 lg:py-25">
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 xl:grid-cols-[4fr_1fr_1fr_1fr]">

          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/header/website-logo.svg"
                alt="High Jump Digital logo"
                width={140}
                height={31}
              />
            </Link>

            <div className="space-y-3 text-[18px] font-medium manrope leading-6">
              {locations.map((location) => (
                <Link
                  key={location.name}
                  href={location.href}
                  className="flex items-center gap-3 hover:text-[#10C8F0] transition"
                >
                  <MapPin className="h-4 w-4 text-[#10C8F0]" />
                  <span>{location.name}</span>
                </Link>
              ))}
            </div>

            <h4 className="text-[16px] manrope font-medium my-7.5 hidden lg:flex">
              © 2025 High Jump Digital. All Rights Reserved.
            </h4>

            <Image
              src="/footer/PartnerBadgeClickable.svg"
              alt="Partner Badge"
              width={120}
              height={110}
            />
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-[16px] chakra font-bold uppercase tracking-[0.32px] text-[#10C8F0]">
              Services
            </h3>
            <ul className="mt-8 space-y-6 text-[16px] manrope font-medium">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="hover:text-[#10C8F0]">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="text-[16px] chakra font-bold uppercase tracking-[0.32px] text-[#10C8F0]">
              Useful Links
            </h3>
            <ul className="mt-8 space-y-6 text-[16px] manrope  font-medium">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  {item.name === "Contact Us" ? (
                    <button
                      onClick={() => setContactOpen(true)}
                      className="cursor-pointer hover:text-[#10C8F0]"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link href={item.href} className="hover:text-[#10C8F0]">
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-[16px] chakra font-bold uppercase tracking-[0.32px] text-[#10C8F0]">
              Get In Touch
            </h3>

            <div className="mt-8 space-y-6 text-[16px] manrope font-medium">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <Link href={item.href} className="hover:text-[#10C8F0]">
                    {item.value}
                  </Link>
                </div>
              ))}

              {/* SOCIAL ICONS */}
              <div className="flex items-center gap-3 ">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      className="flex items-center justify-center hover:scale-110 transition"
                    >
                      <Icon className="w-6 h-6 text-[#10C8F0]" />
                    </Link>
                  );
                })}
              </div>
              
            </div>
            
          </div>

        </div>
         <h4 className="text-[16px] manrope font-medium my-7.5 lg:hidden">
              © 2025 High Jump Digital. All Rights Reserved.
            </h4>
      </Container>

      {/* ✅ ADDED ONLY */}
      <ContactFormPopup
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

    </footer>
  );
}