import axiosPublic from "@/hooks/useAxiosPublic"

export const donner_list = async(api) => {
    const {data} = await axiosPublic.get(`/get_profile_list/5/1/6/${api}`);
    return data?.result;
}