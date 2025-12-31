'use client';

import CountUp from "react-countup";
import bgImage from "../../../../../public/assets/img/hope/img_66e009da135b24.78622202.jpg";
import Container from "@/components/Shared/Container/Container";

export default function StudentsStatisticsReportClient({studentsStatistics}) {

  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-20"
      style={{
          backgroundImage: `url(${bgImage.src})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/70"></div>
       <div className="relative text-white text-center z-10 mb-12">
            <h2 className="text-2xl font-bold">Student Statistics</h2>
            <div>-------</div>
            <p className="font-medium">Class wise Students</p>
          </div>

      <Container>
         
        <div className="relative grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center text-white z-10">
          {studentsStatistics?.map((report) => (
            <div
              key={report?.class_name}
              className="group flex flex-col items-center justify-center transition-transform duration-500"
            >
              
              {/* Counter Number */}
              <h3 className="text-5xl font-bold border-2 rounded-full w-32 h-32 flex items-center justify-center bg-secondary/70">
                <CountUp end={report?.total_student} duration={3} />
              </h3>

              {/* Title */}
              <p className="mt-2 font-medium">{report?.class_name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
