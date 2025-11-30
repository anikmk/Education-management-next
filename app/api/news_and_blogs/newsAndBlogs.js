import axiosPublic from "@/hooks/useAxiosPublic";


export async function get_news_or_blogs(api) {
  const {data} = await axiosPublic.get(`/common_document_list/5/3/${api}`);
  return data?.result; 
}


