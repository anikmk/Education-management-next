import Image from "next/image";
import { FaUsers } from "react-icons/fa6";
import { get_school_commitee } from "@/api/school_committee/school_committee";
import { get_school_record } from "@/api/school_info/school_info_Api";

// Avatar images
import maleAvatar from "../../../../../public/assets/img/avatar/teacher-male.jpg";
import femaleAvatar from "../../../../../public/assets/img/avatar/teacher-female.jpg";
import TeamSocialIcon from "../OurTeam/TeamSocialIcon";
import AllCommitteeBtn from "./AllCommitteeBtn";
import CommitteeDetailsBtn from "./CommitteeDetailsBtn";

export const metadata = {
  title: "School Committee | Management Board",
  description:
    "Meet the respected committee members who lead and manage the school with dedication.",
};

export default async function SchoolCommittee() {
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASEURL;

  const commitees = await get_school_commitee(api);
  const school_record = await get_school_record(api);
  const instituteEIIN = school_record?.result?.eiin;

  return (
    <section className="py-16 text-center">
      {/* Heading */}
      <div className="max-w-md mx-auto mb-10">
        <p className="text-secondary font-semibold uppercase tracking-widest flex justify-center items-center gap-2 underline">
          <FaUsers /> School Committee
        </p>
        <h2 className="text-3xl my-3 md:text-4xl font-bold text-gray-900 dark:text-white">
          School <span className="text-secondary">Management Team</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Meet the dedicated individuals responsible for the school's strategic
          leadership and governance.
        </p>
      </div>

      {/* Committee Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {commitees?.member_records?.map((member) => {
            const finalImageSrc =
                        member?.img_ext && member?.img_ext.trim() !== ""
                          ? `${imgBaseUrl}/${instituteEIIN}/member/${member.com_member_current_id}${member.img_ext}`
                          : member?.member_gender === "1"
                          ? maleAvatar
                          : femaleAvatar;

          return (
            <div
              key={member.com_member_id}
              className="relative rounded-t-3xl rounded-br-3xl p-4 overflow-hidden shadow-lg group transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image */}
              <Image
                src={finalImageSrc}
                alt={member.member_name}
                width={300}
                height={200}
                className="w-full h-72 object-cover rounded-t-3xl rounded-br-3xl"
              />
                <TeamSocialIcon />
              {/* Info */}
              <div className="flex justify-between pt-2 items-center">
                <div>
                  <h3 className="font-semibold text-md">
                    {member?.member_name}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-primary">
                    {member?.designation_name_en}
                  </p>
                </div>
                <div className="z-10"><CommitteeDetailsBtn /></div>
              </div>
            </div>
          );
        })}
      </div>
      <AllCommitteeBtn />
    </section>
  );
}
