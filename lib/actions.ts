import { cache } from "react";
import { client } from "./sanity";

export async function getPosts(searchTerm: string) {
  const query = `*[_type == 'post' && (
    title match $searchTerm || shortDescription match $searchTerm)] | order(_createdAt desc) {
        _id,
        title,
        "slug": slug.current,
        excerpt,
        shortDescription,
        titleImage,
        content,
    }`;

  const params = { searchTerm: `${searchTerm}*` };

  try {
    const data = await client.fetch(query, params);
    return data;
  } catch (error) {
    return [];
  }
}

export async function getPopularPosts(slug: string) {
  const query = `
  *[_type == 'post' && slug.current != '${slug}'] | order(_createdAt desc) [0...4] {
    title,
    "slug": slug.current,
    excerpt,
    content,
    shortDescription,
    titleImage,
  }
    `;

  const data = await client.fetch(query);
  return data;
}

export const getSinglePost = cache(async (slug: string) => {
  const query = `
        *[_type == 'post' && slug.current == '${slug}'] {
          title,
          "slug": slug.current,
          shortDescription,
          content,
          titleImage,
        }[0]
    `;

  const data = await client.fetch(query);
  return data;
});
