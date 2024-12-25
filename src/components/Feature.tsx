import React from "react";

export default function Feature() {
  return (
    <div>
      <section className="py-8 bg-neutral-50 mb-40">
        <h2 className="text-center text-3xl font-bold md:text-5xl animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600">
          Saima Khan: A journey of learning, inspiration, and making education accessible for all
        </h2>

        <p className="text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 animate-fade-in-up delay-100">
          Hello! My name is Saima and I am passionate about the transformative
          power of education Through this blog I aim to explore the many facets
          of learning—from the impact of innovative teaching methods to the role
          of technology in shaping the classrooms of tomorrow Education is not
          just about textbooks and exams it's about empowering individuals
          fostering creativity and building a brighter future for communities
          worldwide I believe that education has the potential to break barriers
          open doors and inspire lifelong curiosity Whether you are a student
          striving for excellence a teacher shaping young minds or someone who
          simply loves to learn this blog is for you Together we will dive into
          topics that spark inspiration encourage growth and highlight the
          importance of making education accessible to all Join me on this
          journey of learning and discovery as we navigate the world of
          knowledge one post at a time!
        </p>

        <div className="mx-auto max-w-7xl px-5">
          <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change">
            Exploring Our Categoies
          </h1>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100">
            {[
              "Programming Languages",
              "Frontend Frameworks",
              "Backend Development",
              "Tech Trends",
              "Design Principles",
              "AI and Machine Learning",
            ].map((category, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600"
              >
                <p className="text-center text-lg font-semibold">{category}</p>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-lg transition duration-300 ease-in-out "></div>
              </div>
            ))}
          </div>
        </div>
        <p className="text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10">
        Dive into a world of knowledge with our carefully curated categories! Whether you’re a budding web
         developer, a tech enthusiast, or someone curious about the latest trends in technology, there’s
          something here for everyone. From mastering foundational skills like HTML to unraveling the
           complexities of Artificial Intelligence, each category is designed to inspire growth and spark creativity. Explore these topics to expand your horizons, enhance your expertise, and stay ahead in the ever-evolving tech landscape. Let’s embark on this journey of learning together!


        </p>
      </section>
    </div>
  );
}
