import React from "react";

type Props = {
  children: React.ReactNode;
};

export const TextContainer: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="border-2 border-turq text-navy rounded-tl-lg rounded-br-lg p-3 mb-4 mt-4 bg-white">
      {children}
    </div>
  );
};
