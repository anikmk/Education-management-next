import axiosPublic from "@/hooks/useAxiosPublic";

export async function get_school_record(api) {
  const {data} = await axiosPublic.get(`/get_institute_records/${api}`);
  return data; 
}


