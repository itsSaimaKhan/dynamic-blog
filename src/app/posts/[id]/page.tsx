'use client';
import React from 'react';
import Commentsection from '@/components/CommentSection';
import AuthoreCard from '@/components/AuthoreCard';
import Footer from '@/components/Footer';

const posts = [
  {
    id: '1',
    title: "Education That Makes a Difference",
    description: "Explore how impactful education can change lives, foster creativity, and create leaders of tomorrow. A blog dedicated to meaningful and transformative learning experiences.",
    date: "2024-12-03",
    image: "/images/blog1.png",
  },

  {
    id: '2',
    title: "The Future of Education",
    description:"From technology in classrooms to reimagining traditional learning models, explore the innovations shaping the future of education worldwide",
    date: "2024-12-3",
    image: "../images/blog2.jpeg",
  },
  {
    id: '3',
    title: "Lifelong Learning in Focus",
    description:"Education doesn’t stop after school! This blog highlights the importance of continuous learning, professional development, and staying curious in every stage of life",
    date: "2024-12-3",
    image: "../images/blog3.jpg",
  },
  {
    id: '4',
    title: "Breaking Barriers in Education",
    description:"Discover how education can overcome challenges, promote inclusivity, and create pathways to success. A blog focused on making learning accessible to al",
    date: "2024-12-3",
    image: "../images/blog4.jpeg",
  },
  {
    id: '5',
    title: "Navigating the World of Knowledge",
    description:"Stay informed about educational tools, techniques, and trends. Whether you’re a student, teacher, or parent, our blog has something for everyone",
    date: "2024-12-3",
    image: "../images/blog5.jpeg",
  },
  {
    id: '6',
    title: "Inspiring Learning, Inspiring Change",
    description:"A blog that celebrates the beauty of education, offering practical advice, motivational stories, and innovative solutions to modern-day learning challenges",
    date: "2024-12-3",
    image: "../images/blog6.jpeg",
  },
  {
    id: '7',
    title: "Empowering Minds, One Post at a Time",
    description:"Join us on a journey to explore how education can empower individuals, bridge gaps, and create opportunities for personal and professional growth",
    date: "2024-12-3",
    image: "../images/blog7.jpeg",
  },
  {
    id: '8',
    title: "Unlocking the Power of Learning",
    description:"Dive into the world of education with insights, tips, and resources to inspire students, educators, and lifelong learners alike. Discover how knowledge can transform lives and shape futures.",
    date: "2024-12-3",
    image: "../images/blog8.jpeg",
  },
  {
    id: '9',
    title: "Your Gateway to Educational Excellence",
    description:"Explore the latest trends in education, effective teaching methods, and innovative learning strategies. A blog dedicated to helping students and educators thrive in an ever-changing world",
    date: "2024-12-3",
    image: "../images/blog9.jpeg",
  },
  {
    id: '10',
    title: "Education for a Better Tomorrow",
    description:"From early childhood learning to advanced studies, our blog covers everything you need to know about making education impactful and meaningful for individuals and communities.",
    date: "2024-12-3",
    image: "../images/blog10.jpg",
  },
  {
    id: '11',
    title: "Inspiring Minds, One Post at a Time",
    description:"Dive into a world where education meets inspiration. Our blog is dedicated to sharing insights, strategies, and resources to help students, educators, and lifelong learners thrive. From innovative teaching methods to practical learning tips, explore how knowledge can transform lives and create a brighter future",
    date: "2024-12-3",
    image: "../images/blog11.jpg",
  },
  {
    id: '12',
    title: "Your Ultimate Guide to Learning and Growth",
    description:"Welcome to an education-focused blog that empowers readers to unlock their potential. Discover articles on modern learning techniques, career development, and tools to make education accessible and impactful. Join us in fostering a culture of curiosity, growth, and success",
    image: "../images/blog12.jpeg",
  },

  // Add remaining posts here, ensure paths to images and dates are accurate.
];

export default function PostDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <h2 className="text-2xl font-bold text-center mt-10">Post Not Found</h2>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("\n").map((para, index) => (
      <p key={index} className="mt-4 text-justify">
        {para.trim()}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="md:text-4xl text-3xl font-bold text-red-600 text-center">
        {post.title}
      </h1>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-auto rounded-md mt-4"
        />
      )}

      <div className="mt-6 text-lg text-slate-700">
        {renderParagraphs(post.description)}
      </div>
      <Commentsection postId={post.id} />
      <AuthoreCard />
      <Footer/>
    </div>
  );
}
