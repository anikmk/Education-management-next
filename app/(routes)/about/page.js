import Image from "next/image";
import detailsImage from "../../../public/assets/img/about/01.jpg";
import Container from "@/components/Shared/Container/Container";

export default function Page() {
  return (
    <div className="py-32 text-center">
      <Container>
        {/* Top Title */}
        <h2 className="text-3xl font-bold mb-6">About Us</h2>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 justify-center py-5">
          <button className="px-4 py-2 font-semibold">Home</button>
          <div>{">"}</div>
          <button className="px-5 py-1.5 bg-secondary text-accent rounded-2xl font-semibold">
            About Us
          </button>
        </div>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 text-left mt-10">
          
          {/* Image 40% */}
          <div className="w-full md:w-[40%] h-[30%]">
            <Image
              width={500}
              height={100}
              alt="About details"
              src={detailsImage}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Text 60% */}
          <div className="w-full md:w-[60%] leading-7 text-lg">
            <p>
              We teach student using advanced learning materials and ensure a
              congenial learning environment for connective practice, regular
              tests, systematic and science-based activities in the classrooms
              targeting the academic calendar published under the Ministry of
              Education, Sylhet Education Board. As a result, this institution
              has been establishing its superiority in both curricular and
              co-curricular activities.
            </p>

            <p className="mt-4">
              This institution has acquired recognition in inter-school & college
              debate, cultural competitions, essay competitions, and educational
              co-curricular activities — with the combined effort of students,
              teachers, guidance, and the skilled management of the Governing
              Body.
            </p>

            <p className="mt-4">
              We are determined to make it the best educational institution in
              Sylhet as well as Bangladesh, maintaining consistency in achieved
              results and reputation. Our expectation is to receive the cordial
              cooperation of all to improve the standard of education.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
