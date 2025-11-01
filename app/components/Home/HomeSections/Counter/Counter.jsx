'use client';

import Image from "next/image";
import CountUp from "react-countup";

import courseIcon from "../../../../../public/assets/img/icon/course.svg";
import graduationIcon from "../../../../../public/assets/img/icon/graduation.svg";
import teacherIcon from "../../../../../public/assets/img/icon/teacher-2.svg";
import awardIcon from "../../../../../public/assets/img/icon/award.svg";
import bgImage from "../../../../../public/assets/img/hope/img_66e009da135b24.78622202.jpg";
import Container from "@components/Shared/Container/Container";
export default function Counter() {
  const counterData = [
    {
      id: 1,
      icon: courseIcon,
      count: 500,
      title: "Total Courses",
    },
    {
      id: 2,
      icon: graduationIcon,
      count: 1900,
      title: "Our Students",
    },
    {
      id: 3,
      icon: teacherIcon,
      count: 750,
      title: "Skilled Lecturers",
    },
    {
      id: 4,
      icon: awardIcon,
      count: 30,
      title: "Win Awards",
    },
  ];

  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20"
      style={{
          backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>

      <Container>
        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center text-white z-10">
          {counterData.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col items-center justify-center transition-transform duration-500"
            >
              {/* Icon Box */}
              <div className="relative w-20 h-20 mb-5">
                <div className="absolute inset-0 bg-red-600 rounded-tl-[40%] rounded-tr-[60%] rounded-bl-[60%] rounded-br-[40%] flex items-center justify-center transform transition-all duration-500 border-r-8 border group-hover:border-transparent group-hover:scale-105">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Counter Number */}
              <h3 className="text-5xl font-bold">
                <CountUp end={item.count} duration={3} />+
              </h3>

              {/* Title */}
              <p className="mt-2 font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
