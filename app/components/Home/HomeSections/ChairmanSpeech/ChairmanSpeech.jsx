import { get_chairman_speech } from "@/api/chairman_speech/chairman_speech";
import Container from "@/components/Shared/Container/Container";
import DetailsChairmanSpeechBtn from "./DetailsChairmanSpeechBtn";
import { get_chairman_list } from "@/api/chairman_list/chairman_list";
import Image from "next/image";
import { get_school_record } from "@/api/school_info/school_info_Api";

export default async function ChairmanSpeech() {
    const imgBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASEURL;
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const chairman_Speech = await get_chairman_speech(api);
  const chairman_list = await get_chairman_list(api);
  const school_record = await get_school_record(api);
  const fullDescription = chairman_Speech[0]?.news_details || "";
  const shortDescription = fullDescription?.slice(0, 250);
  return (
    <Container>
      <div className="my-14 bg-slate-100 p-8 rounded-xl shadow-md">
          <div className="space-y-2">
            {
                chairman_list.slice(0,1)?.map((chairman) => (
                    <div key={chairman?.com_member_id}>
                        <div className="flex items-start gap-6">
                            <div className="rounded-xl">
                                <Image width={600} height={200} src={`${imgBaseUrl}/${school_record?.result?.eiin}/member/${chairman?.com_member_id}${chairman?.img_ext}`}/>
                            </div>
                            <div>
                                <div className="text-secondary text-4xl mb-4">"</div>
                                <h2 className="text-2xl font-bold text-primary">
                                 {chairman?.member_name}
                                </h2>
                                <div className="text-secondary font-bold">────────────</div>
                                <h4 className="text-lg font-semibold text-gray-600 mb-10">{chairman?.designation_name_en}</h4>
                                  <p className="text-gray-700 leading-relaxed mb-5"
                                dangerouslySetInnerHTML={{ __html: shortDescription }}></p>
                                {/* Read More Button */}
                                <DetailsChairmanSpeechBtn />
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
