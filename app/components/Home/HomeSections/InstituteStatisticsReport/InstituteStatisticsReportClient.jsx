'use client';

import Image from "next/image";
import CountUp from "react-countup";
import bgImage from "../../../../../public/assets/img/hope/img_66e009da135b24.78622202.jpg";
import Container from "@components/Shared/Container/Container";
import teacher_icon from '../../../../../public/assets/img/Statistics-icon/teacher.png'
import staff_icon from '../../../../../public/assets/img/Statistics-icon/staffs.png'
import student_icon from '../../../../../public/assets/img/Statistics-icon/student-male.png'
import class_room_icon from '../../../../../public/assets/img/Statistics-icon/classroom.png'

export default function InstituteStatisticsReportClient({totalTeachers,totalStaff,totalStudents,totalClass}) {

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
          
          {/* counter 1 */}
            <div
              className="group flex flex-col items-center justify-center transition-transform duration-500"
            >
              {/* Icon Box */}
              <div className="relative w-20 h-20 mb-5">
                <div className="absolute inset-0 bg-red-600 rounded-tl-[40%] rounded-tr-[60%] rounded-bl-[60%] rounded-br-[40%] flex items-center justify-center transform transition-all duration-500 border-r-8 border group-hover:border-transparent group-hover:scale-105">
                  <Image
                    src={class_room_icon}
                    alt={"title"}
                    width={40}
                    height={40}
                    className="filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Counter Number */}
              <h3 className="text-5xl font-bold">
                <CountUp end={totalClass} duration={3} />
              </h3>

              {/* Title */}
              <p className="mt-2 font-medium">Classes</p>
            </div>


            {/* counter 2 */}
            <div
              className="group flex flex-col items-center justify-center transition-transform duration-500"
            >
              {/* Icon Box */}
              <div className="relative w-20 h-20 mb-5">
                <div className="absolute inset-0 bg-red-600 rounded-tl-[40%] rounded-tr-[60%] rounded-bl-[60%] rounded-br-[40%] flex items-center justify-center transform transition-all duration-500 border-r-8 border group-hover:border-transparent group-hover:scale-105">
                  <Image
                    src={student_icon}
                    alt={"title"}
                    width={40}
                    height={40}
                    className="filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Counter Number */}
              <h3 className="text-5xl font-bold">
                <CountUp end={totalStudents} duration={3} />
              </h3>

              {/* Title */}
              <p className="mt-2 font-medium">Students</p>
            </div>


            {/* counter 3 */}
            <div
              className="group flex flex-col items-center justify-center transition-transform duration-500"
            >
              {/* Icon Box */}
              <div className="relative w-20 h-20 mb-5">
                <div className="absolute inset-0 bg-red-600 rounded-tl-[40%] rounded-tr-[60%] rounded-bl-[60%] rounded-br-[40%] flex items-center justify-center transform transition-all duration-500 border-r-8 border group-hover:border-transparent group-hover:scale-105">
                  <Image
                    src={teacher_icon}
                    alt={"title"}
                    width={40}
                    height={40}
                    className="filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Counter Number */}
              <h3 className="text-5xl font-bold">
                <CountUp end={totalTeachers} duration={3} />
              </h3>

              {/* Title */}
              <p className="mt-2 font-medium">Teachers</p>
            </div>


            {/* counter 4 */}
            <div
              className="group flex flex-col items-center justify-center transition-transform duration-500"
            >
              {/* Icon Box */}
              <div className="relative w-20 h-20 mb-5">
                <div className="absolute inset-0 bg-red-600 rounded-tl-[40%] rounded-tr-[60%] rounded-bl-[60%] rounded-br-[40%] flex items-center justify-center transform transition-all duration-500 border-r-8 border group-hover:border-transparent group-hover:scale-105">
                  <Image
                    src={staff_icon}
                    alt={"title"}
                    width={40}
                    height={40}
                    className="filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Counter Number */}
              <h3 className="text-5xl font-bold">
                <CountUp end={totalStaff} duration={3} />
              </h3>

              {/* Title */}
              <p className="mt-2 font-medium">Staffs</p>
            </div>
         
        </div>
      </Container>
    </section>
  );
}
