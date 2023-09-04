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
      alt={`Cover Image for ${title}`}
      fill
      style={{
        objectFit: "cover",
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
          <div className="relative w-full h-[600px]">{image}</div>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
