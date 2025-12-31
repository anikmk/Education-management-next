import axiosPublic from "@/hooks/useAxiosPublic"

export const get_individual_pages = async(pageType,api) => {
    const {data} = await axiosPublic.get(`/individual_page_info/${pageType}/${api}`);
    return data?.result?.[0];
}