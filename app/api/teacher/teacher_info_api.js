import axiosPublic from "@/hooks/useAxiosPublic";

export async function get_teachers(api) {
  const {data} = await axiosPublic.get(`/get_employee_list/1/${api}`);
  return data?.teacher_records; 
}


export const get_single_teacher = async(id,api) => {
  const {data} = await axiosPublic.get(`/get_employee_profile/${id}/${api}`);
  return data;
}