"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { Check } from "lucide-react";
import { useState } from "react";
import VideoPopup from "@/components/VideoPopup";

export default function WhatYouGet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-[#F4F8FE] py-25 overflow-hidden">
        <div className="mx-auto px-4 md:px-8 xl:px-0  xl:pl-[14%]  w-full">
          <div className="flex flex-col xl:flex-row items-center gap-10">
            
            {/* LEFT */}
            <div className="w-full xl:w-1/2 flex flex-col justify-center">
              <h2 className="chakra text-[36px] md:text-[47px] font-bold uppercase leading-[1.6] text-black mb-8">
                What you'll get
              </h2>

              <div className="space-y-2">
                {[
                  {
                    title: "Actionable points",
                    desc: "We will provide you with actionable tasks that will help improve your current performance.",
                  },
                  {
                    title: "Personalised data",
                    desc: "All of the data and information we discuss is specific to your website and no one elses.",
                  },
                  {
                    title: "Marketing Insight",
                    desc: "Learn about what drives the success of a website in achieving its goals.",
                  },
                  {
                    title: "Expert Advise",
                    desc: "Audit analysis provided by an experienced professional who is a senior team member.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6.25 p-2 border-b border-[#C9C9C9]">
                    
                    <div className=" bg-[#10C8F0] p-1 rounded-[100px] flex items-center justify-center">
                      <Check className="w-6 h-6  text-white" />
                    </div>

                    <div>
                      <h3 className="chakra text-[21px] font-bold uppercase leading-[1.5em] mb-5">
                        {item.title}
                      </h3>
                      <p className="text-[18px] manrope font-medium text-black">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE (CLICK → POPUP) */}
            <div
              className="w-full xl:w-[70%] cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <Image
                src="/siteaudit/thumbnail-siteaudit.jpg"
                alt="Audit Preview"
                width={1270}
                height={720}
                className="w-full h-auto object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* POPUP */}
      <VideoPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}