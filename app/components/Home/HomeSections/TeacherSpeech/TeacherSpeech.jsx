import Container from "@/components/Shared/Container/Container";
import DetailsTeacherSpeechBtn from "./DetailsTeacherSpeechBtn";
import { get_teacher_speech } from "@/api/teacher_speech/teacher_speech";
import { get_teachers } from "@/api/teacher/teacher_info_api";
import { get_school_record } from "@/api/school_info/school_info_Api";
import Image from "next/image";
import maleAvatar from "../../../../../public/assets/img/avatar/teacher-male.jpg"
import femaleAvatar from "../../../../../public/assets/img/avatar/teacher-female.jpg"

export default async function TeacherSpeech() {
    const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASEURL;
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const teacher_Speech = await get_teacher_speech(api);
  const teacher_list = await get_teachers(api);
  const school_record = await get_school_record(api);
  const fullDescription = teacher_Speech[0]?.news_details || "";
  const shortDescription = fullDescription?.slice(0, 250);
  return (
    <Container>
      <div className="my-14 bg-slate-100 p-8 rounded-xl shadow-md">
          <div className="space-y-2">
            {
                teacher_list.slice(0,1)?.map((teacher) => (
                    <div key={teacher?.teacher_code}>
                        <div className="flex items-start gap-6">
                            <div className="rounded-xl">
                                <Image width={600} height={200} src={
                                    teacher?.img_ext
                                    ? `${imgBaseUrl}/${school_record?.result?.eiin}/teacher/${teacher?.teacher_code}${teacher?.img_ext}`
                                    : teacher?.gender === "male" ? maleAvatar : femaleAvatar
                                }/>
                            </div>
                            <div>
                                <div className="text-secondary text-4xl mb-4">"</div>
                                <h2 className="text-2xl font-bold text-primary">
                                 {teacher?.teacher_name}
                                </h2>
                                <div className="text-secondary font-bold">────────────</div>
                                <h4 className="text-lg font-semibold text-gray-600 mb-10">{teacher?.designation}</h4>
                                  <p className="text-gray-700 leading-relaxed mb-5"
                                dangerouslySetInnerHTML={{ __html: shortDescription }}></p>
                                {/* Read More Button */}
                                <DetailsTeacherSpeechBtn />
                            </div>
                        </div>
                    </div>
                ))
            }
          </div>
      </div>
    </Container>
  );
}
