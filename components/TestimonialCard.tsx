import { Testimonial } from "../types/testimonial";
import Image from "next/image";

type Props = {
  testimonial: Testimonial;
};

export const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <div className="rounded shadow-md p-4 bg-white max-w-xs m-auto">
      {/* center this image */}
      <div className="flex justify-center">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          objectFit="cover"
          width="200px"
          height="200px"
          className="rounded-full"
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold">{testimonial.name}</h3>
        <p className="text-sm text-gray-500">{testimonial.title}</p>
      </div>
      <p className="text-gray-600 text-center mt-4">
        {testimonial.testimonial}
      </p>
    </div>
  );
};
