import { Testimonial } from "../types/testimonial";
import Image from "next/image";
import { useState } from "react";

type Props = {
  testimonial: Testimonial;
};

export const TestimonialCard = ({ testimonial }: Props) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="rounded shadow-lg ring-1 ring-black ring-opacity-5 p-4 pb-8 bg-white max-w-sm m-auto relative min-h-[500px]">
      {testimonial.linkedIn && (
        <a
          href={testimonial.linkedIn}
          target="_blank"
          rel="noreferrer"
          className="absolute top-4 left-4"
        >
          <Image
            src="/LinkedIn_icon.svg"
            alt="linkedin"
            width="20px"
            height="20px"
          />
        </a>
      )}
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
        {expand
          ? testimonial.testimonial
          : testimonial.testimonial.slice(0, 200)}
        {testimonial.testimonial.length > 200 && (
          <span
            className="text-turq cursor-pointer"
            onClick={() => setExpand(!expand)}
          >
            {expand ? " show less" : " ... show more"}
          </span>
        )}
      </p>
      <p className="text-gray-400 text-xs mt-2 absolute bottom-4 left-4">
        {testimonial.date}
      </p>
    </div>
  );
};
