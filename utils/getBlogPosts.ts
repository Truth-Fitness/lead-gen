import { createClient } from "contentful";
import { TypeBlogSkeleton } from "../types/blog";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

// Retrieve the list of blog posts from Contentful
export const getAllBlogPosts = async () => {
  const response = await client.getEntries<TypeBlogSkeleton>({
    content_type: "blog",
  });
  return response.items;
};

export const getBlogPostById = async (id: string) => {
  const response = await client.getEntry<TypeBlogSkeleton>(id);
  return response;
};
