"use client";
import { useEffect, useState } from "react";

const words = [
  "SEO",
  "GOOGLE ADS",
  "FACEBOOK ADS",
  "WEB DESIGN",
  "BRANDING",
  "HIGH JUMP",
];

export default function RotatingText() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="rotating-banner-headline">
      <span className="rbh-dynamic-wrapper">
        {words.map((word, wordIndex) => {
          const isActive = wordIndex === activeIndex;
          const isPrev =
            wordIndex ===
            (activeIndex - 1 + words.length) % words.length;

          return (
            <span
              key={wordIndex}
              className={`rbh-dynamic-text 
                ${isActive ? "rbh-text-active" : ""}
                ${isPrev ? "rbh-text-inactive" : ""}
              `}
            >
              {word.split("").map((letter, i) => (
                <span
                  key={i}
                  className={`rbh-letter ${
                    isActive ? "rbh-animation-in" : ""
                  }`}
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          );
        })}
      </span>
    </span>
  );
}