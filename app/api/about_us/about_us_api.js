import axiosPublic from "@/hooks/useAxiosPublic";



export async function about_us_data(api) {
  const {data} = await axiosPublic.get(`/individual_page_info/about_us/${api}`);
  return data; 
}


