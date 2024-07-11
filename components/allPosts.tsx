"use client";

import { postList } from "@/lib/interface";
import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";

type Props = {
  posts: postList[];
};

const AllPosts = ({ posts }: Props) => {
  const articlesShown = 6;
  const [loadMore, setLoadMore] = useState(articlesShown);
  const showMoreArticles = () => {
    setLoadMore(loadMore + articlesShown / 2);
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {posts.slice(0, loadMore).map((post, i) => (
          <div
            key={i}
            className="border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
          >
            <Link href={`/posts/${post.slug}`}>
              <div>
                <Image
                  src={urlFor(post.titleImage).url()}
                  height={400}
                  width={400}
                  alt="post Image"
                  className="h-72 w-full object-cover object-center"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    {post.title}
                  </h1>
                  <p className="leading-relaxed mb-3 line-clamp-2">
                    {post.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-4">
        {loadMore < posts?.length ? (
          <Button type="button" onClick={showMoreArticles}>
            Load More
          </Button>
        ) : (
          <Button type="button" disabled>
            That's all!
          </Button>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
