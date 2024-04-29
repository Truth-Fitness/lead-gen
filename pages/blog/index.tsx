import { getAllBlogPosts } from "../../utils/getBlogPosts";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Blog } from "../../types/blog";
import HeroPost from "../../components/blog/HeroPost";
import MorePosts from "../../components/blog/MorePosts";

export default function Index({
  allPosts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <div className="bg-truth-dark-green">
      <div className="container mx-auto px-5 max-w-6xl p-10 ">
        {heroPost && <HeroPost post={heroPost} />}
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps<{
  allPosts: Blog[];
}> = async () => {
  const allPosts = (await getAllBlogPosts()) ?? [];
  return {
    props: { allPosts },
  };
};
