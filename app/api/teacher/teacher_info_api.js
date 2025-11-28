import axiosPublic from "@/hooks/useAxiosPublic";

export async function get_teachers(api) {
  const {data} = await axiosPublic.get(`/get_employee_list/1/${api}`);
  return data?.teacher_records; 
}


