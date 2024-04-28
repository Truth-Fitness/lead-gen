import React from "react";

type Props = {
  children: React.ReactNode;
};

export const TextContainer: React.FunctionComponent<Props> = ({ children }) => {
  return (
    <div className=" text-white rounded-tl-lg rounded-br-lg shadow p-3 mb-4 mt-4 bg-truth-mid-green">
      {children}
    </div>
  );
};
