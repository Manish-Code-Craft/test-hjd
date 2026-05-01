"use client";
import { useRouter } from "next/navigation";

export default function GeoContactForm() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/thankyou");
  };

  return (
    <section className="py-16 px-6 bg-[#020A12] text-white">
      <div className="max-w-140 w-full mx-auto">
        <div className="border border-[#10C8F029] rounded-[14px] p-8">

          <h3 className="chakra text-[22px] font-bold uppercase leading-[1em] tracking-[0.01em] mb-5">
            Request your audit
          </h3>

          <p className="manrope text-[14px] font-medium text-[#FFFFFFC7] mb-8">
            We’ll be in touch within one business day.
          </p>

          {/* ✅ FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 manrope font-medium">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 poppins text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFFFFFC7]">
                  First name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#090F1499] border border-[#10C8F029] rounded-lg px-4 py-3 outline-none text-white"
                />
              </div>

              <div>
                <label className="block mb-2 poppins text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFFFFFC7]">
                  Last name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-[#090F1499] border border-[#10C8F029] rounded-lg px-4 py-3 outline-none text-white"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 poppins text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFFFFFC7]">
                Email address
              </label>
              <input
                type="email"
                required
                className="w-full bg-[#090F1499] border border-[#10C8F029] rounded-lg px-4 py-3 outline-none text-white"
              />
            </div>

            <div>
              <label className="block mb-2 poppins text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFFFFFC7]">
                Phone number
              </label>
              <input
                type="tel"
                required
                className="w-full bg-[#090F1499] border border-[#10C8F029] rounded-lg px-4 py-3 outline-none text-white"
              />
            </div>

            <div>
              <label className="block mb-2 poppins text-[11px] font-semibold uppercase tracking-[0.12em] text-[#FFFFFFC7]">
                Website URL
              </label>
              <textarea
                rows="1"
                placeholder="https://"
                className="w-full bg-[#090F1499] border border-[#10C8F029] rounded-lg px-4 py-3 outline-none text-white resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#10C8F0] cursor-pointer text-[#001018] py-4 uppercase font-bold chakra text-[14px] tracking-wide rounded-lg"
            >
              Request my free audit
            </button>

          </form>

          <p className="manrope text-[12px] text-[#FFFFFFC7] text-center mt-5">
            By submitting this form you agree to our{" "}
            <a href="/privacy-policy" className="text-[#10C8F0] underline">
              privacy policy
            </a>.
          </p>

        </div>
      </div>
    </section>
  );
}