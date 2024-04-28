import React, { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

const FAQ: React.FunctionComponent<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-5">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <h4 className="text-lg md:text-xl font-bold text-truth-dark-green">
          {question}
        </h4>
        <div className="flex items-center">
          {open ? (
            <MdExpandLess className="text-turq h-8 w-8" />
          ) : (
            <MdExpandMore className="text-turq h-8 w-8" />
          )}
        </div>
      </div>
      {open && (
        <div className="mt-4">
          <p className=" md:text-lg">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;
