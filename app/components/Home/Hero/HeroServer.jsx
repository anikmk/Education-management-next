import { get_school_record } from "@/api/school_info/school_info_Api";
import HeroClient from "./HeroClient";
import { get_banner_data } from "@/api/banner/banner";


export default async function HeroServer() {
    const imgBaseURl = process.env.NEXT_PUBLIC_IMAGE_BASEURL;
    const api =  process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
    const schoolData = await get_school_record(api);
    const bannerData = await get_banner_data(api);
    const eiin_number = schoolData?.result?.eiin;

    const banner_info = bannerData?.map((item) => ({
        id: item?.id,
        title_english: item?.title_english,
        title_bangla: item?.title_bangla,
        banner_url: `${imgBaseURl}/${eiin_number}/site/banner/${item?.id}${item?.attachment}`
    }))

  return <HeroClient bannerInfo={banner_info}/>
}
