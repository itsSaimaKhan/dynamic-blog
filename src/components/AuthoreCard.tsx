import Image from "next/image";
import React from "react";

export default function AuthorCard() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-12">
      <div className="flex items-center animation-fadeIn">
        <div className="relative w-16 h-16 mr-4">
          <Image
            className="rounded-full border-2 border-red-500"
            src="/images/autimg.jpg" // Ensure the correct path for the image
            alt="Author Image"
            layout="fill" // Makes the image responsive
            objectFit="cover" // Ensures the image is properly cropped and covers the area
          />
        </div>
        <div>
          <h3 className="text-xl font-bold">Saima Khan</h3>
          <p className="text-slate-500">Web Developer | Graphic Designer</p>
        </div>
      </div>

      <p className="mt-4 text-black leading-relaxed">
        Saima is a skilled graphic designer and web developer with a passion for
        creating visually appealing and user-friendly designs. Combining creativity with
        technical expertise, she excels at crafting unique digital experiences that stand
        out.
      </p>
      <div className="mt-4 flex space-x-3">
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Twitter
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-gray-600 rounded-md hover:bg-gray-700 transition duration-300"
        >
          GitHub
        </a>
        <a
          href="#"
          className="px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
