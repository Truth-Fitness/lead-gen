import { useState } from "react";
import presentation from "../public/presentation.json";
import { PresentationStep } from "../types/presentation";
import { motion } from "framer-motion";
import Image from "next/image";

const Presentation: React.FunctionComponent = () => {
  const [step, setStep] = useState<PresentationStep>(presentation[0]);
  return (
    <div className="flex flex-wrap-reverse justify-between items-center">
      <div className="mt-10 md:mt-0 md:w-[45%]">
        <Image
          src="/cameron-weights.jpg"
          alt="Picture of the author"
          width={600}
          height={400}
          objectFit="cover"
          className="shadow-lg rounded-lg "
        />
      </div>
      <div className="md:w-6/12">
        <p className="text-red font-bold mb-5">
          INTRODUCING THE SIX-WEEK RAPID RESULT SYSTEM
        </p>
        <h3 className="text-2xl font-bold text-turq mb-3">
          A six-week online guaranteed results coaching programme built for
          business leaders{" "}
        </h3>
        <p className="text-gray-600">
          For business leaders that demand the best results as fast as possible,
          with as little impact on their busy schedules
        </p>
        <ul className="steps w-full mt-5">
          {presentation.map((countStep) => (
            <li
              key={countStep.id}
              className={`step ${
                countStep.id === step.id && "step-primary"
              } cursor-pointer`}
              onClick={() => setStep(countStep)}
            ></li>
          ))}
        </ul>
        <motion.div
          key={step ? step.id : "empty"}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-xl font-bold text-navy mt-5 mb-3">
            {step.title}
          </h4>
          <p className="transition ease-in-out duration-500">{step.content}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Presentation;
