"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";

const ArrowIcon = ({ colorClass = "" }) => (
  <svg width="20" height="20" viewBox="0 0 18 16" fill="none">
    <path
      d="M9.33888 15.712L15.1469 9.04H0.770875V7.624H15.1709L9.33888 0.951999H11.1869L17.7869 8.32L11.1869 15.712H9.33888Z"
      className={`transition-colors duration-300 ${colorClass}`}
    />
  </svg>
);

export default function WorkBenefits({
  title,
  items = [],
  itemWidth = "lg:w-87",
}) {
  const [openIndices, setOpenIndices] = useState([]);
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const activeItem = items[hoveredIndex] || items[0];

  const toggleAccordion = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
    setHoveredIndex(index);
  };

  return (
    <section className="bg-[#090F14] transition-all duration-300">
      <Container>

        {/* TITLE (optional, no space if not passed) */}
        {title && (
          <h2 className="text-[30px] sm:text-[48px] lg:text-[64px] chakra font-bold uppercase leading-[1.8em] tracking-[0.32px] text-white mb-6">
            {title}
          </h2>
        )}

        <div className="flex flex-col lg:flex-row mt-12.5">

          {/* LEFT SIDE */}
          <div className="space-y-4 lg:space-y-0 lg:pr-15 ">
            {items.map((item, index) => {
              const isOpen = openIndices.includes(index);
              const isHovered = index === hoveredIndex;

              return (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1024) {
                        setHoveredIndex(index);
                      }
                    }}
                    className={`w-full  ${itemWidth} flex items-center justify-between gap-4 text-left text-[20px] sm:text-[20px] md:text-[24px] font-semibold chakra uppercase leading-0 md:leading-[1.8em] tracking-[0.32px] transition-colors duration-300 
                       px-7.5 py-5 lg:px-0 lg:py-2.5 cursor-pointer border border-[#10c8f0] lg:border-0 bg-[#88888830] lg:bg-transparent
                        ${isOpen ? "max-lg:text-white" : "max-lg:text-cyan-400"} 
                        ${isHovered ? "lg:text-cyan-400" : "lg:text-white lg:hover:text-cyan-300"}`}
                  >
                    <span className="">{item.title}</span>
                    <span className="inline-flex">
                      <ArrowIcon
                        colorClass={`
                          ${isOpen ? "max-lg:fill-white" : "max-lg:fill-cyan-400"} 
                          ${isHovered ? "lg:fill-cyan-400" : "lg:fill-white"}
                        `}
                      />
                    </span>
                  </button>

                  {/* MOBILE ACCORDION */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out lg:hidden ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-3 space-y-4 p-2 sm:p-0 pb-4">
                        {item.paragraphs?.map((p, i) => (
                          <p key={i} className="text-[16px] poppins leading-7 text-white">
                            {p}
                          </p>
                        ))}

                        {/* MOBILE BUTTON (optional, no space if missing) */}
                        {item.href && item.buttonText && (
                          <Link
                            href={item.href}
                            className="inline-flex items-center rounded-full border border-cyan-400 px-5 py-2.5 text-[20px] poppins font-normal uppercase text-cyan-400"
                          >
                            {item.buttonText}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE (DESKTOP) */}
          <div className="hidden lg:flex flex-col justify-between">
            <div className="space-y-5 text-white px-5">
              {activeItem?.paragraphs?.map((p, i) => (
                <p key={i} className="text-[18px] poppins font-normal leading-8.25 text-white">
                  {p}
                </p>
              ))}
            </div>

            {/* DESKTOP BUTTON (optional, no space if missing) */}
            {activeItem?.href && activeItem?.buttonText && (
              <div className="mt-4 px-5">
                <Link
                  href={activeItem.href}
                  className="inline-flex items-center rounded-full border border-cyan-400 px-5 py-2.5 text-[18px] font-normal uppercase poppins text-cyan-400 transition hover:border-white hover:text-white"
                >
                  {activeItem.buttonText}
                </Link>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}