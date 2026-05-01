import { Star } from "lucide-react";

export default function Testimonial() {
 const data = [
  {
    text: `“High Jump were most helpful and not pushy. The video review of our website was very informative and useful.”`,
    name: "SUE REID",
  },
  {
    text: (
      <>
        “The site audit video I received was very insightful. I was able to action
        <br />
        some of the points suggested and in turn generated more leads!”
      </>
    ),
    name: "AARON DEAN",
  },
  {
    text: (
      <>
        “I cannot believe how much value I was able to get from a 10 minute video.
        <br />
        It changed my whole outlook on marketing!”
      </>
    ),
    name: "CATHERINE THOMAS",
  },
];

  return (
    <section className="bg-white py-12.5 px-5">
      <div className="max-w-300 mx-auto">

        {/* Heading */}
        <h2 className="chakra text-[36px] md:text-[47px] font-bold uppercase leading-[1.6] text-black text-center mb-10">
          What Customers Say About Our Videos
        </h2>

        {/* Cards */}
        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">

          {data.map((item, i) => (
            <div
              key={i}
              className="w-full border border-[#CBCBCB] rounded-[5px] p-10 text-center m-2.5"
            >

              {/* Text */}
              <p className="manrope text-[18px] font-medium leading-[1.5em] lg:h-45">
                {item.text}
              </p>

              {/* Stars */}
              <div className="flex justify-center mb-8 text-[#E4B520]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#E4B520]" />
                ))}
              </div>

              {/* Name */}
              <h3 className="chakra text-[18px] font-bold uppercase">
                {item.name}
              </h3>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}