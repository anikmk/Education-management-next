import axiosPublic from "@/hooks/useAxiosPublic";

export async function get_chairman_speech(api) {
  const {data} = await axiosPublic.get(`/individual_page_info/chairman-speech/${api}`);
  return data?.result; 
}


