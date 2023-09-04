import Link from "next/link";

import { Blog } from "../../types/blog";
import CoverImage from "./CoverImage";
import DateComponent from "./DateComponent";

export default function HeroPost({ post }: { post: Blog }) {
  const mainImage = post.fields?.mainImage;
  let mainImageUrl: string | undefined = undefined;
  if (mainImage && "fields" in mainImage) {
    mainImageUrl = mainImage.fields.file?.url;
  }

  return (
    <section>
      <div className="mb-8 md:mb-16 cursor-pointer">
        {mainImageUrl && (
          <CoverImage
            title={post.fields.title}
            url={mainImageUrl}
            id={post.sys.id}
          />
        )}
      </div>
      <div className="md:grid  md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
            <Link href={`/blog/${post.sys.id}`} className="hover:underline">
              {post.fields.title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateComponent dateString={post.sys.createdAt} />
          </div>
        </div>
      </div>
    </section>
  );
}
