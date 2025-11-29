import Image from "next/image";
import { FaBookOpen } from "react-icons/fa6";
import TeamSocialIcon from "./TeamSocialIcon";
import { get_teachers } from "@/api/teacher/teacher_info_api";
import AllTeachersBtn from "./AllTeachersBtn";
import TeacherDetailsBtn from "./TeacherDetailsBtn";
import { get_school_record } from "@/api/school_info/school_info_Api";

// Avatar images
import maleAvatar from "../../../../../public/assets/img/avatar/teacher-male.jpg";
import femaleAvatar from "../../../../../public/assets/img/avatar/teacher-female.jpg";

export const metadata = {
  title: "Our Teachers | Meet Our Expert Instructors",
  description:
    "Get to know our professional and experienced teachers who are dedicated to helping students achieve their learning goals.",
};

export default async function OurTeam() {
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const image_base_url = process.env.NEXT_PUBLIC_IMAGE_BASEURL;

  const teachers_data = await get_teachers(api);
  const school_record = await get_school_record(api);
  const institute_eiin = school_record?.result?.eiin;

  return (
    <section className="py-16 text-center">
      {/* Heading Section */}
      <div className="max-w-md mx-auto mb-10">
        <p className="text-secondary font-semibold uppercase tracking-widest flex justify-center items-center gap-2 underline">
          <FaBookOpen /> Our Teachers
        </p>
        <h2 className="text-3xl my-3 md:text-4xl font-bold text-gray-900 dark:text-white">
          Meet With Our <span className="text-secondary">Teachers</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Team Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {teachers_data?.slice(0, 8)?.map((teacher) => {
          const finalImageSrc =
            teacher?.img_ext && teacher?.img_ext.trim() !== ""
              ? `${image_base_url}/${institute_eiin}/teacher/${teacher.teacher_code}${teacher.img_ext}`
              : teacher?.gender?.toLowerCase() === "male"
              ? maleAvatar
              : femaleAvatar;

          return (
            <div
              key={teacher?.teacher_code}
              className="relative rounded-t-3xl rounded-br-3xl p-4 overflow-hidden shadow-lg group transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <Image
                src={finalImageSrc}
                alt={teacher.teacher_name}
                width={300}
                height={200}
                className="w-full h-72 object-cover rounded-t-3xl rounded-br-3xl"
              />

              {/* Hover Social Icons */}
              <TeamSocialIcon />

              {/* Info Section */}
              <div className="flex justify-between pt-2 items-center">
                <div>
                  <h3 className="font-semibold text-md">
                    {teacher?.teacher_name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-primary">
                    {teacher?.designation}
                  </p>
                </div>

                {/* Details Button */}
                <div className="z-10">
                  <TeacherDetailsBtn teacher_code={teacher?.teacher_code} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show all teachers */}
      <div>
        <AllTeachersBtn />
      </div>
    </section>
  );
}
