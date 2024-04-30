import { Blog } from "../../types/blog";
import PostPreview from "./PostPreview";

export default function MorePosts({ posts }: { posts: Blog[] }) {
  return (
    <section className="text-white">
      <h2 className="mb-8 text-3xl md:text-4xl font-semibold tracking-tighter leading-tight">
        More Posts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {posts.map((post) => (
          <PostPreview key={post.sys.id} post={post} />
        ))}
      </div>
    </section>
  );
}
