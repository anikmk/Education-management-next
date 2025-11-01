"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import sliderImage_1 from '../../../../public/assets/img/slider/slider-1.jpg';
import sliderImage_2 from '../../../../public/assets/img/slider/slider-2.jpg';
import sliderImage_3 from '../../../../public/assets/img/slider/slider-3.jpg';

const slider_data = [
  {
    id: 1,
    slider_img: sliderImage_1,
    heading: "Start Your Beautiful and Bright Future",
    sub_heading: "Welcome to Eduka Institute",
    slider_desc:
      "Unlock your potential with expert-led courses designed to shape your career and build your confidence for a brighter tomorrow.",
    btn_text1: "About Us",
    btn_text2: "Get Started",
  },
  {
    id: 2,
    slider_img: sliderImage_2,
    heading: "Empower Your Learning Journey",
    sub_heading: "Discover Endless Opportunities",
    slider_desc:
      "From technology to creativity — explore diverse learning paths that inspire growth, innovation, and success at every step.",
    btn_text1: "Explore Courses",
    btn_text2: "Join Today",
  },
  {
    id: 3,
    slider_img: sliderImage_3,
    heading: "Learn, Grow & Achieve",
    sub_heading: "Building Skills for a Better Future",
    slider_desc:
      "Our mission is to make quality education accessible to all — helping learners achieve excellence through knowledge and practice.",
    btn_text1: "View Programs",
    btn_text2: "Contact Us",
  },
];

export default function Hero() {
  return (
    <div className="carousel w-full h-screen relative">
      {slider_data.map((item, index) => (
        <div
          key={item.id}
          id={`slide${index + 1}`}
          className="carousel-item relative w-full h-screen"
        >
          {/* Next.js Image */}
          <div className="relative w-full h-full">
            <Image
              src={item.slider_img}
              alt={`Slide ${index + 1}`}
              className="object-cover"
              fill
            />
          </div>

          {/* Overlay + Text */}
          <div className="absolute inset-0 bg-primary/30 flex flex-col justify-center px-10 md:px-24 text-white">
            <div className="max-w-xl space-y-5">
              <h2 className="text-lg md:text-xl font-bold leading-tight text-secondary underline uppercase">
                {item.sub_heading}
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight capitalize">
                {item.heading}
              </h2>
              <p className="text-lg md:text-xl opacity-90 capitalize">
                {item.slider_desc}
              </p>
              <div className="flex gap-4 mt-4">
                <button className="bg-secondary text-white px-5 py-3 rounded-r-full rounded-tl-full hover:bg-accent hover:text-secondary transition-colors duration-300 flex items-center gap-2">
                  {item.btn_text1} <FaArrowRightLong />
                </button>
                <button className="bg-secondary text-white px-5 py-3 rounded-r-full rounded-tl-full hover:bg-accent hover:text-secondary transition-colors duration-300 flex items-center gap-2">
                  {item.btn_text2} <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a
              href={`#slide${index === 0 ? slider_data.length : index}`}
              className="btn btn-circle bg-secondary text-white border-none hover:bg-white hover:text-[#012758]"
            >
              ❮
            </a>
            <a
              href={`#slide${index + 2 > slider_data.length ? 1 : index + 2}`}
              className="btn btn-circle bg-secondary text-white border-none hover:bg-white hover:text-[#012758]"
            >
              ❯
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
