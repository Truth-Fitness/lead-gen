import Link from "next/link";
import ContentfulImage from "./ContentfulImage";

export default function CoverImage({
  title,
  url,
  id,
}: {
  title: string;
  url: string;
  id?: string;
}) {
  const image = (
    <ContentfulImage
      width={2000}
      height={1000}
      alt={`Cover Image for ${title}`}
      className={"hover:shadow-medium transition-shadow duration-200"}
      src={url}
    />
  );

  return (
    <div className="sm:mx-0">
      {id ? (
        <Link href={`/blog/${id}`} aria-label={title} className="cursor-pointer">
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
