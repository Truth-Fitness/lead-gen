import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import { GetServerSideProps } from "next";
import { getAllBlogPosts, getBlogPostById } from "../../utils/getBlogPosts";
import { Blog } from "../../types/blog";
import PostHeader from "../../components/blog/PostHeader";
import PostBody from "../../components/blog/PostBody";

export default function Post({ post }: { post: Blog }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }
  const mainImage = post.fields.mainImage;
  let mainImageUrl: string | undefined = undefined;
  if (mainImage && "fields" in mainImage) {
    mainImageUrl = mainImage.fields.file?.url;
  }

  return (
    <div className="container mx-auto px-5 max-w-5xl mb-10">
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article>
            <Head>
              <title>
                {post.fields.title}
              </title>
              <meta property="og:image" content={mainImageUrl} />
            </Head>
            {mainImageUrl && <PostHeader
              title={post.fields.title}
              coverImage={mainImageUrl}
              date={post.sys.createdAt}
            />}
            <PostBody content={post.fields.content} />
          </article>
        </>
      )}
    </div>
  );
}

export const getStaticProps: GetServerSideProps<{
  post: Blog;
}> = async ({ params }) => {
  const id = params?.id;
  if (!id) throw new Error("No id provided");
  const data = await getBlogPostById(params?.id as string);
  return {
    props: {
      post: data,
    },
  };
};

export async function getStaticPaths() {
  const allPosts = await getAllBlogPosts();
  return {
    paths: allPosts?.map((post) => `/blog/${post.sys.id}`) ?? [],
    fallback: true,
  };
}
