import axiosPublic from "@/hooks/useAxiosPublic";


export async function get_teacher_speech(api) {
  const {data} = await axiosPublic.get(`/individual_page_info/principal-speech/${api}`);
  return data?.result; 
}


