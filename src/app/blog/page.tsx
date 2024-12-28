import BlogCard from "@/components/BlogCard"; // Assuming the BlogCard component is reusable
import React from "react";

export default function BlogPage() {
  const posts = [
    {
      id: '1',
      title: "Education That Makes a Difference",
      description: "Explore how impactful education can change lives, foster creativity, and create leaders of tomorrow. A blog dedicated to meaningful and transformative learning experiences",
      date: "2024-12-3",
      imageUrl: "/images/blog1.png", // Correct path
    },
    {
      id: '2',
      title: "The Future of Education",
      description: "From technology in classrooms to reimagining traditional learning models, explore the innovations shaping the future of education worldwide",
      date: "2024-12-3",
      imageUrl: "/images/blog2.jpeg", // Correct path
    },
    {
      id: '3',
      title: "Lifelong Learning in Focus",
      description: "Education doesn’t stop after school! This blog highlights the importance of continuous learning, professional development, and staying curious in every stage of life",
      date: "2024-12-3",
      imageUrl: "/images/blog3.jpg", // Correct path
    },
    // Continue the rest of the posts here...
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="py-8 bg-indigo-600 text-white text-center">
        <h1 className="text-4xl font-bold">Our Blog</h1>
        <p className="text-lg mt-2">Inspiring Minds and Shaping the Future</p>
      </header>

      <main className="container mx-auto px-5 py-10">
        <h2 className="text-3xl font-semibold text-gray-700 text-center mb-10">
          Latest Blog Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogCard key={post.id} post={post} isDarkBackground={index % 2 === 0} />
          ))}
        </div>
      </main>

      <footer className="py-6 bg-gray-800 text-white text-center">
        <p>&copy; 2024 Your Blog Name. All rights reserved.</p>
      </footer>
    </div>
  );
}
