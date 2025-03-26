import Link from "next/link";
import { Blog } from "../../types/blog";
import DateComponent from "./DateComponent";
import CoverImage from "./CoverImage";

export default function PostPreview({ post }: { post: Blog }) {
  const mainImage = post.fields?.mainImage;
  let mainImageUrl: string | undefined = undefined;
  if (mainImage && "fields" in mainImage) {
    mainImageUrl = mainImage.fields.file?.url;
  }

  return (
    <div>
      <div className="mb-5 cursor-pointer">
        {mainImageUrl && (
          <CoverImage
            title={post.fields.title}
            id={post.sys.id}
            url={mainImageUrl}
            height={400}
          />
        )}
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link href={`/blog/${post.sys.id}`} className="hover:underline">
          {post.fields.title}
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateComponent dateString={post.sys.createdAt} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{post.fields.description}</p>
    </div>
  );
}
