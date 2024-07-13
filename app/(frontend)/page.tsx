import AllPosts from "@/components/allPosts";
import PaginationMenu from "@/components/pagination-menu";
import PostCard from "@/components/postCard";
import { getPosts } from "@/lib/actions";
import { postList } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import React from "react";

export const revalidate = 60;

export default async function Home({
  searchParams = {},
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const searchTerm =
    typeof searchParams.search === "string" ? searchParams.search : "";

  const posts: postList[] = await getPosts();

  return (
    <div className="p-4 text-gray-600 min-h-screen">
      <div>
        {/*{posts.length === 0 ? (
          <p>No posts found for "{searchTerm}"</p>
        ) : (
          posts.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              slug={post.slug}
              description={post.shortDescription}
              image={urlFor(post.titleImage).url()}
            />
          ))
        )}*/}
        <AllPosts posts={posts} />
      </div>
    </div>
  );
}
