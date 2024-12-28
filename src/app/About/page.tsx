import React from "react";

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Section */}
      <header className="py-10 bg-indigo-600 text-white text-center">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="text-lg mt-2">Discover Our Mission and Vision</p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-5 py-10">
        {/* Who We Are Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
            Who We Are
          </h2>
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            Welcome to our blog! Our mission is to empower individuals with the
            knowledge and tools they need to succeed. From exploring the latest
            trends in technology to sharing inspirational stories, we aim to
            make learning accessible and engaging for everyone.
          </p>
        </section>

        {/* Our Vision Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
            Our Vision
          </h2>
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            We believe education is the cornerstone of personal and professional
            growth. Our vision is to create a community of lifelong learners who
            inspire each other to explore grow and innovate. Whether you are a
            student teacher or curious individual this platform is here to
            support your journey.
          </p>
        </section>

        {/* What We Offer Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Insightful Blog Posts",
              "Latest Tech Trends",
              "Learning Resources",
              "Expert Tips & Tricks",
              "Community Support",
              "Innovative Ideas",
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-indigo-100 transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-700">
                  {feature}
                </h3>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
