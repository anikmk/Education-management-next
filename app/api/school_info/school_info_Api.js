import axiosPublic from "@pages/hooks/useAxiosPublic";

export const get_school_record = async(api) => {
    const {data} = await axiosPublic.get(`get_institute_records/${api}`);
    return data;
}
