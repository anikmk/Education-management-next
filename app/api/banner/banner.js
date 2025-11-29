import axiosPublic from "@/hooks/useAxiosPublic";


export async function get_banner_data(api) {
  const {data} = await axiosPublic.get(`/organization_banner_list/5/${api}`);
  return data?.result; 
}


