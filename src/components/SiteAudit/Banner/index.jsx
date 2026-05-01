import Container from "@/components/Container";
import { SquareCheck, Video, FileBadge  } from "lucide-react";

export default function SiteAuditHero() {
  return (
    <section
      className="relative text-white text-center pt-42.5 pb-75 px-5 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/siteaudit/highjump-site-audit-banner.jpg')",
      }}
    >
      <div className="max-w-300 mx-auto px-4 sm:px-6 md:px-5">

        <h1 className="chakra text-[36px] md:text-[64px] font-bold leading-[1.4] mb-6">
          FIND OUT EXACTLY WHAT IS HOLDING 
          YOUR WEBSITE BACK TODAY!
        </h1>

        <p className="manrope text-[18px] md:text-[36px] text-white max-w-175 mx-auto">
          Improve your online presence with our 
          completely free in-depth video analysis
        </p>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 mt-7.5">

          {/* Card 1 */}
          <div className="bg-white text-black rounded-[10px] p-5 text-center space-y-5 xl:h-78">
            <div className="w-25 h-25  mx-auto mb-4 border-6 border-[#10C8F0] rounded-full flex items-center justify-center">
              <SquareCheck className="w-12.5 h-12.5 text-[#10C8F0]" />
            </div>
            <h3 className="chakra text-[30px] uppercase leading-[1em] font-bold">
              COMPLETELY FREE
            </h3>
            <p className="text-[18px] manrope font-medium leading-[1.8em]">
              The video is non obligatory. Our aim is for you to take value from the audit.
            </p>
          </div>

          {/* Card 2 */}
         <div className="bg-white text-black rounded-[10px] p-5 text-center space-y-5 xl:h-78">
            <div className="w-25 h-25  mx-auto mb-4 border-6 border-[#10C8F0] rounded-full flex items-center justify-center">
              <Video className="w-12.5 h-12.5 text-[#10C8F0]" />
            </div>
            <h3 className="chakra text-[30px] uppercase leading-[1em] font-bold">
              DELIVERED IN 24 HRS
            </h3>
            <p className="text-[18px] manrope font-medium leading-[1.8em]">
              The video is non obligatory. Our aim is for you to take value from the audit.
            </p>
          </div>

          {/* Card 3 */}
         <div className="bg-white text-black rounded-[10px] p-5 text-center space-y-5 xl:h-78">
            <div className="w-25 h-25 mx-auto mb-4 border-6 border-[#10C8F0] rounded-full flex items-center justify-center">
              <FileBadge  className="w-12.5 h-12.5 text-[#10C8F0]" />
            </div>
            <h3 className="chakra text-[30px] uppercase leading-[1em] font-bold">
              EXPERT MADE
            </h3>
            <p className="text-[18px] manrope font-medium leading-[1.8em]">
              Your audit video will be completed by one of the senior members of the HJD team!
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}