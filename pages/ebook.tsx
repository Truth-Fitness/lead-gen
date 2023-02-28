import { NextPage } from "next";
import Image from "next/image";
import { MdCheck, MdCheckCircle } from "react-icons/md";
import { TestimonialCard } from "../components/TestimonialCard";
import mainHero from "../public/MINvQ27TNSM0ZI7JAnTp_CONSISTENT_10K_MONTHS_800_1200px.png";
import testimonials from "../data/testimonials.json";

const Ebook: NextPage = () => {
  return (
    <div>
      <div className="max-w-[1100px] m-auto">
        <h1 className="text-turq font-bold text-3xl font-impact text-center my-6">
          FREE EBOOK
        </h1>
        <h2 className="text-black font-bold text-6xl font-impact text-center tracking-wide mb-10">
          HOW TO BECOME A HEALTHY BUSINESS LEADER IN{" "}
          <span className="text-turq">FIVE SIMPLE STEPS</span>
        </h2>
        <div className="flex flex-wrap items-center gap-4 justify-between">
          <div className="lg:w-6/12 w-full">
            <div className="md:mx-3 mx-5 border-black border-8">
              <Image src={mainHero} alt="Picture of the author" />
            </div>
          </div>
          <div className="lg:w-5/12 w-full mx-4">
            <h3 className="text-black font-bold text-4xl font-impact my-6">{`WHAT'S IN THE EBOOK?`}</h3>
            <ul>
              <li className="flex items-center gap-4 text-xl font-bold my-2">
                <MdCheckCircle className="w-8 h-8 text-[#00d26a] flex-shrink-0" />
                Our proven simple strategy to becoming a healthy business leader
              </li>
              <li className="flex items-center gap-4 text-xl font-bold my-2">
                <MdCheckCircle className="w-8 h-8 text-[#00d26a] flex-shrink-0" />
                How to lose weight, improve energy fast
              </li>
              <li className="flex items-center gap-4 text-xl font-bold my-2">
                <MdCheckCircle className="w-8 h-8 text-[#00d26a] flex-shrink-0" />
                Our five-step process with examples and tips
              </li>
            </ul>
            <p className="text-black font-bold text-4xl font-impact my-6">
              DOWNLOAD AND GET STARTED
            </p>
            <button
              type="button"
              className=" py-4 px-6 text-white bg-black rounded-full font-bold  text-xl mt-5"
            >
              SEND ME THE FREE EBOOK
            </button>
          </div>
        </div>
      </div>
      <div className="w-full bg-black py-5 md:py-10 mt-10 relative">
        <div className="m-auto max-w-[1100px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 content-center mt-8 mx-4 ">
            {testimonials.map((testimonial) => (
              <TestimonialCard testimonial={testimonial} key={testimonial.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ebook;
