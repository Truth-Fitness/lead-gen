import Link from "next/link";
import ContentfulImage from "./ContentfulImage";

export default function CoverImage({
  title,
  url,
  id,
  height,
}: {
  title: string;
  url: string;
  id?: string;
  height?: number;
}) {
  const image = (
    <ContentfulImage
      alt={`Cover Image for ${title}`}
      fill
      style={{
        objectFit: "cover",
        // desaturate filter
        filter: "grayscale(100%) contrast(1.3)",
      }}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
      {id ? (
        <Link
          href={`/blog/${id}`}
          aria-label={title}
          className="cursor-pointer"
        >
          <div
            className={`relative w-full h-[${
              height ? height.toString() : "600"
            }px]`}
          >
            {image}
          </div>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
