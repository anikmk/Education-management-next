"use client";
import {
  FaAward,
  FaChalkboardTeacher,
  FaGlobe,
  FaHandHoldingUsd,
} from "react-icons/fa";

export default function Facilities() {
  const facilities_Data = [
    {
      id: 1,
      icon: <FaHandHoldingUsd className="text-2xl md:text-3xl text-white" />,
      number: "01",
      title: "Scholarship Facility",
      description:
        "It is a long established fact that a reader will be distracted.",
    },
    {
      id: 2,
      icon: <FaAward className="text-2xl md:text-3xl text-white" />,
      number: "02",
      title: "Certified Courses",
      description:
        "We provide globally recognized certifications for every course.",
    },
    {
      id: 3,
      icon: (
        <FaChalkboardTeacher className="text-2xl md:text-3xl text-white" />
      ),
      number: "03",
      title: "Expert Instructors",
      description:
        "Learn from experienced teachers who guide you step by step.",
    },
    {
      id: 4,
      icon: <FaGlobe className="text-2xl md:text-3xl text-white" />,
      number: "04",
      title: "Global Community",
      description:
        "Join thousands of learners and professionals from all over the world.",
    },
  ];

  return (
    <div className="relative">
      {/* === Facilities Section Positioned Over Hero === */}
      <div className="md:absolute md:bottom-14 right-[2%] z-20 w-[60%] mx-auto md:w-[85%] lg:w-[75%]"
      >
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5"
        >
          {facilities_Data.map((facility) => (
            <div
              key={facility.id}
              className="bg-white text-[#012758] p-4 md:p-5 rounded-3xl shadow-lg 
              hover:-translate-y-2 
              transition-all 
              duration-300 
              group 
              flex flex-col justify-between
            "
            >
              {/* === Icon + Number === */}
              <div className="flex items-center justify-between mb-5">
                <div className="bg-[#012758] w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-md group-hover:rotate-180 transition-transform duration-500">
                  {facility.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold border-2 border-[#012758] rounded-md px-3 py-1 leading-none">
                  {facility.number}
                </div>
              </div>

              {/* === Title + Description === */}
              <div>
                <h1 className="text-base md:text-lg font-semibold mb-2">
                  {facility.title}
                </h1>
                <p className="text-sm opacity-80 leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Bottom Space to Prevent Overlap === */}
      <div className="h-48 md:h-52"></div>
    </div>
  );
}
