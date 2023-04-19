import results from "../data/results.json";
import { Result } from "../types/results";
import { useState } from "react";
import Image from "next/image";
import { ReactCompareSlider } from "react-compare-slider";
import { motion } from "framer-motion";

const ResultsComparison: React.FunctionComponent = () => {
  const [selectResult, setSelectResult] = useState<Result>(results[0]);
  return (
    <div className="flex justify-center mt-10">
      <div className="flex grow p-2 flex-wrap-reverse justify-center max-w-7xl items-center">
        <div className="w-full md:w-7/12 p-2 md:text-lg cursor-pointer">
          {results.map((result) => (
            <div
              className={`${
                selectResult.id === result.id
                  ? "bg-navy-light text-turq md:-mr-6 md:pr-6"
                  : "bg-navy text-turq "
              } mb-4 md:p-5 p-4 rounded flex items-center  shadow-lg gap-4 hover:bg-navy-light hover:text-white`}
              key={result.id}
              onClick={() => setSelectResult(result)}
            >
              <div className="md:w-32 shrink-0">
                <h4 className="md:text-xl text-lg font-bold">{result.name}</h4>
                <p className="text-sm">{result.title}</p>
              </div>
              <p className="text-white ml-2 text-right grow">
                {result.description}
              </p>
            </div>
          ))}
        </div>
        <div className="w-full md:w-5/12 p-2 flex justify-center">
          <div className="w-[300px]">
            <motion.div
              key={selectResult ? selectResult.id : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ReactCompareSlider
                position={40}
                itemOne={
                  <div>
                    <Image
                      alt="before"
                      src={"/results/" + selectResult.before}
                      width="400px"
                      height="700px"
                      objectFit="contain"
                    />
                  </div>
                }
                itemTwo={
                  <Image
                    alt="after"
                    src={"/results/" + selectResult.after}
                    width="400px"
                    height="700px"
                    objectFit="contain"
                  />
                }
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsComparison;
