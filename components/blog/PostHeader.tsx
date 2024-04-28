import CoverImage from "./CoverImage";
import DateComponent from "./DateComponent";

export default function PostHeader({
  title,
  coverImage,
  date,
}: {
  title: string;
  coverImage: string;
  date: string;
}) {
  return (
    <>
      <h1 className="text-white uppercase font-semibold pt-10 text-4xl md:text-5xl lg:text-6xl prose tracking-wide leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0 relative w-full h-[500px]">
        <CoverImage title={title} url={coverImage} />
      </div>
      <div className="max-w-4xl mx-auto text-truth-off-white">
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  );
}
