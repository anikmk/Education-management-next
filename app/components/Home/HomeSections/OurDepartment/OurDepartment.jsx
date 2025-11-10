"use client"; // needed if using state/hooks in Next.js 13+ app directory

import { useState, useCallback } from "react";
import Image from "next/image";
import { FaBookOpen } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight, FaArrowRightLong } from "react-icons/fa6";
import { departmentData } from "./departmentData";

export default function DepartmentSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? departmentData.length - 1 : prev - 1));

  const nextSlide = useCallback(
    () =>
      setCurrent((prev) =>
        prev === departmentData.length - 1 ? 0 : prev + 1
      ),
    []
  );

  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="w-[75%] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-secondary font-semibold uppercase tracking-wide flex justify-center items-center gap-2">
            <FaBookOpen /> Department
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Browse Our <span className="text-secondary">Department</span>
          </h2>
          <p className="text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative w-full overflow-hidden">
          {/* Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-secondary hover:bg-primary rounded-full p-2 shadow-md"
          >
            <FaArrowLeft className="text-accent" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-secondary hover:bg-primary rounded-full p-2 shadow-md"
          >
            <FaArrowRight className="text-accent" />
          </button>

          {/* Slider Content */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {departmentData.map((dept) => (
              <div
                key={dept.id}
                className="min-w-full md:min-w-[50%] lg:min-w-[26%] px-3 flex justify-center"
              >
                <div className="bg-white rounded-t-[50px] rounded-br-[50px] shadow-lg p-5 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 border-[7px] border-secondary rounded-full opacity-20"></div>

                  <div className="mb-3 flex justify-center">
                    <Image
                      src={dept.image}
                      alt={dept.title}
                      width={48}
                      height={48}
                      className="w-12"
                    />
                  </div>

                  <h4 className="text-xl font-semibold text-black my-2">
                    {dept.title}
                  </h4>
                  <p className="text-gray-600 mb-4 text-xs">{dept.desc}</p>

                  <a
                    href={dept.link}
                    className="inline-flex items-center gap-2 font-medium hover:text-secondary text-sm"
                  >
                    Read More <FaArrowRightLong />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-5 gap-2">
            {departmentData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === idx ? "bg-secondary w-6" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
