import BlogCard from "@/components/BlogCard"; // Assuming the BlogCard component is reusable
import React from "react";

export default function BlogPage() {
  const posts = [
    {
      id: "1",
      title: "Education That Makes a Difference",
      description:
        "Explore how impactful education can change lives, foster creativity, and create leaders of tomorrow. A blog dedicated to meaningful and transformative learning experiences",
      date: "2024-12-3",
      imageUrl: "/images/blog1.png",
    },
    {
      id: "2",
      title: "The Future of Education",
      description:
        "From technology in classrooms to reimagining traditional learning models, explore the innovations shaping the future of education worldwide",
      date: "2024-12-3",
      imageUrl: "/images/blog2.jpeg",
    },
    {
      id: "3",
      title: "Lifelong Learning in Focus",
      description:
        "Education doesn’t stop after school! This blog highlights the importance of continuous learning, professional development, and staying curious in every stage of life",
      date: "2024-12-3",
      imageUrl: "/images/blog3.jpg",
    },
    {
      id: "4",
      title: "Breaking Barriers in Education",
      description:
        "Discover how education can overcome challenges, promote inclusivity, and create pathways to success. A blog focused on making learning accessible to all",
      date: "2024-12-3",
      imageUrl: "/images/blog4.jpeg",
    },
    {
      id: "5",
      title: "Navigating the World of Knowledge",
      description:
        "Stay informed about educational tools, techniques, and trends. Whether you’re a student, teacher, or parent, our blog has something for everyone",
      date: "2024-12-3",
      imageUrl: "/images/blog5.jpeg",
    },
    {
      id: "6",
      title: "Inspiring Learning, Inspiring Change",
      description:
        "A blog that celebrates the beauty of education, offering practical advice, motivational stories, and innovative solutions to modern-day learning challenges",
      date: "2024-12-3",
      imageUrl: "/images/blog6.jpeg",
    },
    {
      id: "7",
      title: "Empowering Minds, One Post at a Time",
      description:
        "Join us on a journey to explore how education can empower individuals, bridge gaps, and create opportunities for personal and professional growth",
      date: "2024-12-3",
      imageUrl: "/images/blog7.jpeg",
    },
    {
      id: "8",
      title: "Unlocking the Power of Learning",
      description:
        "Dive into the world of education with insights, tips, and resources to inspire students, educators, and lifelong learners alike. Discover how knowledge can transform lives and shape futures.",
      date: "2024-12-3",
      imageUrl: "/images/blog8.jpeg",
    },
    {
      id: "9",
      title: "Your Gateway to Educational Excellence",
      description:
        "Explore the latest trends in education, effective teaching methods, and innovative learning strategies. A blog dedicated to helping students and educators thrive in an ever-changing world",
      date: "2024-12-3",
      imageUrl: "/images/blog9.jpeg",
    },
    {
      id: "10",
      title: "Education for a Better Tomorrow",
      description:
        "From early childhood learning to advanced studies, our blog covers everything you need to know about making education impactful and meaningful for individuals and communities.",
      date: "2024-12-3",
      imageUrl: "/images/blog10.jpg",
    },
    {
      id: "11",
      title: "Inspiring Minds, One Post at a Time",
      description:
        "Dive into a world where education meets inspiration. Our blog is dedicated to sharing insights, strategies, and resources to help students, educators, and lifelong learners thrive.",
      date: "2024-12-3",
      imageUrl: "/images/blog11.jpg",
    },
    {
      id: "12",
      title: "Your Ultimate Guide to Learning and Growth",
      description:
        "Welcome to an education-focused blog that empowers readers to unlock their potential. Discover articles on modern learning techniques, career development, and tools to make education accessible and impactful.",
      date: "2024-12-3",
      imageUrl: "/images/blog12.jpeg",
    },
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
