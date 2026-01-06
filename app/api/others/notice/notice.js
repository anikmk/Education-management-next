import axiosPublic from "@/hooks/useAxiosPublic"

export const get_all_notice = async(limit,api) => {
    const {data} = await axiosPublic.get(`/common_document_list/1/${limit}/${api}`);
    return data?.result;
}

export const get_single_notice = async(id,api) => {
    const {data} = await axiosPublic.get(`/individual_document_info/1/${id}/${api}`);
    return data?.result;
} 
