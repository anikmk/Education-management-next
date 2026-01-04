import { get_single_teacher } from "@/api/teacher/teacher_info_api";
import Container from "@/components/Shared/Container/Container";
import Image from "next/image";

export default async function Page({ params }) {
  const { id } = params;
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;

  const teacherDetails = await get_single_teacher(id, api);
  const { records } = teacherDetails;
  console.log(teacherDetails?.institute_records?.institute_EIIN)
  const singleTeacherImg = process.env.NEXT_PUBLIC_IMAGE_BASEURL

  return (
    <div className="py-24 bg-[#f8fafc] mt-16">
      <Container>

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800">Teacher Info</h2>
          <p className="text-sm text-gray-500 mt-1">
            Home / Our Teachers / <span className="text-orange-500">Teacher Info</span>
          </p>
        </div>

        {/* Main Wrapper */}
        <div className="bg-white rounded-xl shadow-md p-8 grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Left Profile */}
          <div className="text-center">
            {/* Image তুমি বসাবে */}
            <div className="rounded-lg flex items-center justify-center">
              <Image width={200} height={250} alt={records.teacher_name} src={`${process.env.NEXT_PUBLIC_IMAGE_BASEURL}/${teacherDetails?.institute_records?.institute_EIIN}/teacher/${id}${records?.img_ext}`}/>
            </div>

            <h3 className="mt-4 text-xl font-bold text-orange-500">
              {records.teacher_name}
            </h3>
            <p className="text-sm text-gray-600">
              {records.designation}
            </p>

            {/* Social icons (optional) */}
            <div className="flex justify-center gap-3 mt-4">
              <div className="w-8 h-8 bg-gray-100 rounded"></div>
              <div className="w-8 h-8 bg-gray-100 rounded"></div>
              <div className="w-8 h-8 bg-gray-100 rounded"></div>
            </div>
          </div>

          {/* Right Info */}
          <div className="lg:col-span-3 space-y-5">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border border-slate-100 shadow rounded-md p-4">
                <p className="text-xs text-gray-500">MPO Index Number</p>
                <p className="font-semibold">{records.mpo_index || "-"}</p>
              </div>

              <div className="border border-slate-100 shadow rounded-md p-4">
                <p className="text-xs text-gray-500">Joining Date</p>
                <p className="font-semibold">{records.joining_date}</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border border-slate-100 shadow rounded-md p-4">
                <p className="text-xs text-gray-500">Birth Date</p>
                <p className="font-semibold">{records.birth_date}</p>
              </div>

              <div className="border border-slate-100 shadow rounded-md p-4">
                <p className="text-xs text-gray-500">National ID</p>
                <p className="font-semibold">{records.national_id}</p>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border border-slate-100 shadow rounded-md p-4">
                <p className="text-xs text-gray-500">Fathers Name</p>
                <p className="font-semibold">{records.father_name}</p>
              </div>

              <div className="border border-slate-100 shadow rounded-md p-4">
                <p className="text-xs text-gray-500">Mothers Name</p>
                <p className="font-semibold">{records.mother_name}</p>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border border-slate-100 shadow rounded-md p-4">
                <p className="text-xs text-gray-500">Email</p>
                <p className="font-semibold">{records.email_address}</p>
              </div>

              <div className="border border-slate-100 shadow rounded-md p-4">
                <p className="text-xs text-gray-500">Contact No.</p>
                <p className="font-semibold">{records.contact_number}</p>
              </div>
            </div>

            {/* Row 5 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="border border-slate-100 shadow rounded-md p-4">
                <p className="text-xs text-gray-500">Qualification</p>
                <p className="font-semibold">{records.teacher_qualification}</p>
              </div>

              <div className="border border-slate-100 shadow rounded-md p-4">
                <p className="text-xs text-gray-500">Experience</p>
                <p className="font-semibold">{records.teacher_experience}</p>
              </div>
            </div>

            {/* Interest */}
            <div className="border border-slate-100 shadow rounded-md p-4">
              <p className="text-xs text-gray-500">Interest</p>
              <p className="font-semibold">{records.teaching_interest || "-"}</p>
            </div>

            {/* Address */}
            <div className="border border-slate-100 shadow rounded-md p-4">
              <p className="text-xs text-gray-500">Present Address</p>
              <p className="font-semibold">{records.present_address}</p>
            </div>

            <div className="border border-slate-100 shadow rounded-md p-4">
              <p className="text-xs text-gray-500">Permanent Address</p>
              <p className="font-semibold">{records.parmanent_address}</p>
            </div>

          </div>
        </div>
      </Container>
    </div>
  );
}
