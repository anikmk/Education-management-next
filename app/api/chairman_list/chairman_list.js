import axiosPublic from "@/hooks/useAxiosPublic";

export async function get_chairman_list(api) {
  const {data} = await axiosPublic.get(`/get_committee_list/${api}`);
  return data?.member_records; 
}


