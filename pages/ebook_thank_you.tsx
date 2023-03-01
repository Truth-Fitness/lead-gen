import { NextPage } from "next";

import BookNow from "../components/BookNow";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { TestimonialCard } from "../components/TestimonialCard";
import testimonials from "../data/testimonials.json";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const EbookThankYou: NextPage = () => {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <div className="max-w-[1100px] m-auto">
      <div className="mx-4">
        <h1 className="text-black font-bold text-4xl text-center mt-6 mb-4">
          {`You’re good to go 🤩`}
        </h1>
        <p className="text-lg text-center font-bold text-gray-500 mb-6">
          Check your email
        </p>
        <h2 className="text-turq font-bold text-5xl font-impact text-center tracking-wide mb-4">
          HOW TO BECOME A HEALTHY BUSINESS LEADER IN FIVE SIMPLE STEPS
        </h2>
        <div className="flex items-center flex-wrap pt-5 pb-10 max-w-[1400px] m-auto gap-4">
          <div className="lg:w-6/12 w-full">
            <div className="md:mx-3">
              <div className=" pt-[51.25%] md:pt-[46.25%] relative w-full lg:pt-[60.5%]">
                <ReactPlayer
                  url="https://youtu.be/S4n3Uir0WK0"
                  width="100%"
                  height="100%"
                  className="absolute top-0 left-0"
                />
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 w-full">
            <h3 className="text-2xl md:text-3xl font-bold  text-black my-4 md:mb-2">
              Schedule your free strategy call
            </h3>
            <h4 className="text-xl font-bold text-turq mb-4">{`Here's how we'll help you: `}</h4>
            <ul className="list-disc  text-lg text-gray-800 ml-6">
              <li>Review your current programme and strategy</li>
              <li>
                Give you simple tricks to optimise what you’re doing right now
              </li>
              <li>Show you how to accelerate your results for success</li>
            </ul>
            <div className="w-full my-6">
              <BookNow buttonText="BOOK A FREE STRATEGY CALL" fullWidth />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <h2 className="text-3xl text-center font-bold">
            What people say about TRUTH…
          </h2>
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

export default EbookThankYou;
