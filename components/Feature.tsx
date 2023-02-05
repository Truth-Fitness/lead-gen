import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

const Feature: React.FunctionComponent<Props> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="rounded shadow bg-white p-3 md:p-6">
      <div className="w-full flex justify-center">
        <Image
          src={image}
          alt="feature"
          width="120px"
          height="120px"
          className="rounded-full"
          objectFit="cover"
        />
      </div>
      <h3 className="text-center font-bold">{title}</h3>
      <p className="text-center">{description}</p>
    </div>
  );
};
export default Feature;
