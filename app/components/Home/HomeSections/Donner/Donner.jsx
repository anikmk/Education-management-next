import { donner_list } from "@/api/donner/donner";
import { get_school_record } from "@/api/school_info/school_info_Api";
import Container from "@/components/Shared/Container/Container";
import Image from "next/image";

import { FaPhoneVolume } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default async function Donner() {
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASEURL;

  const donners = await donner_list(api);
  const school_record = await get_school_record(api);

  return (
    <Container>
      <section className="px-4 py-12">
        {/* Section Title */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-secondary">
            Donners
          </h2>
          <div className="w-24 h-[3px] bg-secondary mt-2"></div>
        </div>

        {/* Donner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {donners?.map((donner) => (
            <div
              key={donner.id}
              className="flex gap-6 border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="flex-shrink-0">
                <Image
                  src={`${imgBaseUrl}/${school_record?.result?.eiin}/donner/${donner.id}${donner.img_ext}`}
                  alt={donner.name_en}
                  width={110}
                  height={130}
                  className="rounded-lg object-cover border border-slate-200"
                />
              </div>

              {/* Content */}
              <div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {donner.name_en}
                  </h2>

                  <h4 className="text-sm text-primary font-medium mb-2">
                    {donner.designation_en}
                  </h4>

                  <p
                    className="text-gray-600 text-sm leading-relaxed mb-3"
                  >
                    {donner?.contribution_amount}
                    </p>
                </div>

                {/* Contact */}
                <div className="flex gap-3 items-center">
                  {donner.contact && (
                    <a
                      href={`tel:${donner.contact}`}
                      className="w-9 h-9 flex items-center justify-center rounded-md border border-slate-200 hover:bg-primary hover:text-white transition"
                    >
                      <FaPhoneVolume size={16} />
                    </a>
                  )}

                  {donner.email && (
                    <a
                      href={`mailto:${donner.email}`}
                      className="w-9 h-9 flex items-center justify-center rounded-md border border-slate-200 hover:bg-primary hover:text-white transition"
                    >
                      <IoMail size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
