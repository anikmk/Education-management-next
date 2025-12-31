import axiosPublic from "@/hooks/useAxiosPublic"

export const get_statistics_report = async(api) => {
    const {data} = await axiosPublic.get(`/get_student_statistics/${api}`);
    return data;

}