
import React from "react";
import { Card, CardContent, CardTitle } from "../components/ui/card";
import Image from "next/image";

interface BlogCardProps {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: BlogCardProps) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-white text-black" : "bg-cyan-500 text-slate-800"
      } rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300`}
    >
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <Image
          src={post.imageUrl}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="transition-transform transform hover:scale-110 duration-300"
        />
      </div>

      <CardTitle className="text-xl font-normal mt-4 text-center">
        {post.title}
      </CardTitle>

      <CardContent className="text-center mt-2">
        <p>{post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          Published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 py-2 rounded transition-transform transform hover:scale-105 duration-300 ${
            isDarkBackground
              ? "bg-black text-white hover:bg-blue-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } flex items-center justify-center`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
