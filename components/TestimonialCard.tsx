import { Testimonial } from "../types/testimonial";
import { useState } from "react";
import { CldImage } from "next-cloudinary";

type Props = {
  testimonial: Testimonial;
};

export const TestimonialCard = ({ testimonial }: Props) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="rounded shadow-lg ring-1 ring-black ring-opacity-5 p-4 pb-8 bg-white m-auto relative min-h-[500px]">
      {testimonial.linkedIn && (
        <a
          href={testimonial.linkedIn}
          target="_blank"
          rel="noreferrer"
          className="absolute top-4 left-4"
        >
          <CldImage
            src="truth-lead-gen/LinkedIn_icon-4da9594d777ead0de676fbb74cac80cf"
            alt="linkedin"
            width="20px"
            height="20px"
          />
        </a>
      )}
      <div className="flex justify-center">
        <CldImage
          src={testimonial.image}
          alt={testimonial.name}
          objectFit="cover"
          width="200px"
          height="200px"
          className="rounded-full"
        />
      </div>
      <div className="text-center mt-4">
        <h3 className="text-lg font-bold text-truth-mid-green">
          {testimonial.name}
        </h3>
        <p className="text-sm text-truth-dark-rose">{testimonial.title}</p>
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
