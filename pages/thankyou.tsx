import { NextPage } from "next";

import BookNow from "../components/BookNow";
import dynamic from "next/dynamic";
import { useEffect } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const ThankYou: NextPage = () => {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);

  return (
    <div className="bg-gray-900 relative w-screen h-screen ">
      <div className="flex items-center flex-wrap-reverse px-5 pt-10 pb-10 max-w-[1400px] m-auto">
        <div className="lg:w-6/12 w-full">
          <h1 className="text-4xl md:text-5xl font-bold  text-white my-4 md:mb-2">
            Thank You!
          </h1>
          <p className="text-lg uppercase tracking-wider text-gray-300  mb-2">
            A confirmation email has been sent to your inbox. In the meantime,
            watch this video:
          </p>
        </div>
        <div className="lg:w-6/12 w-full">
          <div className="md:mx-3">
            <div className=" pt-[51.25%] md:pt-[46.25%] relative w-full lg:pt-[60.5%]">
              <ReactPlayer
                url="https://youtu.be/MaMK1_pfKwI"
                width="100%"
                height="100%"
                className="absolute top-0 left-0"
              />
            </div>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold  text-gray-300  mb-2 text-center">
        Book a strategy call:
      </h3>
      <div className="w-full my-6">
        <BookNow />
      </div>
    </div>
  );
};

export default ThankYou;
