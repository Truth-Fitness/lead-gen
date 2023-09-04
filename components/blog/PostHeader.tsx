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
      <h1 className="mt-10 text-5xl md:text-6xl lg:text-7xl prose tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
        {title}
      </h1>
      <div className="mb-8 md:mb-16 sm:mx-0 relative w-full h-[500px]">
        <CoverImage title={title} url={coverImage} />
      </div>
      <div className="max-w-4xl mx-auto text-gray-500">
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  );
}
