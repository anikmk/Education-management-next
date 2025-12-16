import axiosPublic from "@/hooks/useAxiosPublic"

export const institute_founder_list = async(api) => {
    const {data} = await axiosPublic.get(`/get_profile_list/4/1/6/${api}`)
    return data?.result
}