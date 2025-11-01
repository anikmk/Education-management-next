"use client";

import Image from "next/image";
import Link from "next/link";
import { FaBookOpen, FaUsers, FaClock, FaRegBookmark, FaLink } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { coursesData } from "./courseData";
import Container from "@components/Shared/Container/Container";


export default function OurCourse() {
  const course_title_des =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";

  return (
    <section className="bg-accent py-20">
      <Container>
        {/* Heading Section */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-secondary font-semibold text-xl flex items-center justify-center gap-2 underline">
            <FaBookOpen /> Our Courses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-neutral">
            Let’s Check Our <span className="text-secondary">Courses</span>
          </h2>
          <p className="text-gray-600 mt-3">{course_title_des}</p>
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coursesData.map((course) => (
            <div
              key={course.id}
              className="bg-accent shadow-xl overflow-hidden hover:shadow-2xl transition duration-300 p-5 rounded-t-3xl rounded-br-3xl"
            >
              {/* Image Section */}
              <div className="relative group">
                <div className="overflow-hidden rounded-t-3xl rounded-br-3xl">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={500}
                    height={300}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                    <Link
                      href="#"
                      className="text-accent text-xl bg-secondary p-3 rounded-full hover:bg-accent hover:text-red-600 transition animate-bounce"
                    >
                      <FaLink />
                    </Link>
                  </div>
                </div>

                <span className="absolute top-4 -right-4 bg-secondary text-accent px-3 py-2 text-sm font-medium rounded-t-3xl rounded-br-3xl flex items-center gap-1 z-10">
                  <FaRegBookmark /> {course.tag}
                </span>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-2">
                    <FaBookOpen className="text-secondary" /> {course.lessons} Lessons
                  </span>
                  <div className="flex items-center gap-1 text-secondary">
                    <ReactStars
                      count={5}
                      value={course.rating}
                      size={20}
                      isHalf={true}
                      activeColor="#c42126"
                      color="#c42126"
                    />
                    <span className="ml-1">({course.rating}.0)</span>
                  </div>
                </div>

                <h3 className="font-bold text-lg mb-2 text-neutral cursor-pointer hover:text-secondary transition">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                <div className="flex justify-between items-center border-t pt-3">
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <span className="flex items-center gap-1">
                      <FaUsers className="text-secondary" /> {course.seats} Seats
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-secondary" /> {course.duration}
                    </span>
                  </div>
                  <span className="bg-secondary text-accent font-semibold px-4 py-1 rounded-t-3xl rounded-br-3xl">
                    ${course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
