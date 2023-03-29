import Image from "next/image";

type Props = {
  index: number;
  title: string;
  description: string;
};

const Feature: React.FunctionComponent<Props> = ({
  index,
  title,
  description,
}) => {
  return (
    <div className="rounded shadow bg-white p-3 md:p-6">
      <div className="w-full flex justify-center text-4xl mb-4">
        <div className="rounded-full bg-gradient-to-br shadow-md from-turq via-turq-dark to-navy text-white w-16 h-16 flex justify-center items-center">
          {index}
        </div>
      </div>
      <h3 className="text-center font-bold">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};
export default Feature;
