import { get_teachers } from "@/api/teacher/teacher_info_api";
import TeamSocialIcon from "@/components/Home/HomeSections/OurTeam/TeamSocialIcon";
import Image from "next/image";
import NavigationBtn from "@/components/Shared/NavigationBtn/NavigationBtn";
import TeacherDetailsBtn from "@/components/Home/HomeSections/OurTeam/TeacherDetailsBtn";
import { get_school_record } from "@/api/school_info/school_info_Api";
import maleAvatar from "../../../public/assets/img/avatar/teacher-male.jpg"
import femaleAvatar from "../../../public/assets/img/avatar/teacher-female.jpg"
export default async function page() {
      const image_base_url = process.env.NEXT_PUBLIC_TEACHER_IMAGE_BASEURL;
      const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
      const allTeachers = await get_teachers(api);
        const school_record = await get_school_record(api);
        const institute_eiin = school_record?.result?.eiin;

  return (
    <div>
        <section className="py-32 text-center">
      {/* Heading Section */}
      <div className="max-w-md mx-auto mb-10">
        <p className="text-secondary font-semibold uppercase tracking-widest flex justify-center items-center gap-2 underline text-2xl">
         Our Teachers
        </p>
            <div className="mt-4">
                <NavigationBtn text_1={"Home"} text_2={"Our Teachers"}/>
            </div>
      </div>

      {/* Team Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {allTeachers?.map((teacher) => {

           const imageSrc = teacher?.img_ext && teacher?.img_ext.trim() !== "" ? `${image_base_url}/${institute_eiin}/teacher/${teacher.teacher_code}${teacher.img_ext}`
          :
          teacher?.gender?.toLowerCase() === "male" ?
           maleAvatar : femaleAvatar
          return (
          <div
            key={teacher?.teacher_code}
            className="relative rounded-t-3xl rounded-br-3xl p-4 overflow-hidden shadow-lg group transition-all duration-500 hover:-translate-y-2"
          >
            {/* Optimized Image */}
            <Image
              src={imageSrc}
              alt={teacher.teacher_name}
              className="w-full h-72 object-cover rounded-t-3xl rounded-br-3xl"
              width={300}
              height={200}
            />

            {/* Hover Social Icons */}
              <TeamSocialIcon />
            {/* Content */}
            <div className="flex justify-between pt-2 items-center">
              <div>
                <h3 className="font-semibold text-md">
                  {teacher.teacher_name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-primary">
                  {teacher.designation}
                </p>
              </div>
              {/* Floating share icon */}
              <div className="z-10"><TeacherDetailsBtn teacher_code={teacher?.teacher_code}/></div>
            </div>
          </div>
)})}
      </div>
    </section>

    </div>
  )
}
