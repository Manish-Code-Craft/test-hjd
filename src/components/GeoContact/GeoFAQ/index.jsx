export default function GeoFAQ() {
  return (
    <section className=" px-6 bg-[#020A12] text-white">
      <div className="max-w-245 mx-auto border-t border-[#10C8F029] py-20">

        {/* TITLE */}
        <h2 className="chakra text-[22px] md:text-[26px] font-bold uppercase tracking-[0.01em] mb-12">
          Common questions
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">

          {/* LEFT COLUMN */}
          <div className="space-y-10">
            
            <div>
              <h4 className="chakra text-[13px] md:text-[14px] font-bold uppercase tracking-[0.04em] mb-3">
                How long does the audit take?
              </h4>
              <p className="manrope text-[14px] text-[#FFFFFFC7] leading-[1.6em]">
                Most audits are delivered within 48 business hours of your submission, followed by a 30-minute walkthrough call at a time that suits you.
              </p>
            </div>

            <div>
              <h4 className="chakra text-[13px] md:text-[14px] font-bold uppercase tracking-[0.04em] mb-3">
                What if my site is brand new?
              </h4>
              <p className="manrope text-[14px] text-[#FFFFFFC7] leading-[1.6em]">
                That’s fine. For newer sites we focus the audit on category-level citation opportunities and technical foundations to set you up correctly from day one.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">
            
            <div>
              <h4 className="chakra text-[13px] md:text-[14px] font-bold uppercase tracking-[0.04em] mb-3">
                Is this really free?
              </h4>
              <p className="manrope text-[14px] text-[#FFFFFFC7] leading-[1.6em]">
                Yes. There’s no obligation. If we’re a good fit to work together we can talk about it on the call — but the audit is yours to keep either way.
              </p>
            </div>

            <div>
              <h4 className="chakra text-[13px] md:text-[14px] font-bold uppercase tracking-[0.04em] mb-3">
                Who runs the audit?
              </h4>
              <p className="manrope text-[14px] text-[#FFFFFFC7] leading-[1.6em]">
                A senior GEO specialist at High Jump Digital, using the same methodology we use with our retained clients.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}