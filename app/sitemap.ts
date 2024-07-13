import { getPosts } from "@/lib/actions";
import { postList } from "@/lib/interface";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: postList[] = await getPosts();

  const postEntries: MetadataRoute.Sitemap = posts.map(({ slug }) => ({
    url: `https://teebags.shop/posts/${slug}`,
  }));

  return [
    {
      url: `https://teebags.shop`,
    },
    ...postEntries,
  ];
}
