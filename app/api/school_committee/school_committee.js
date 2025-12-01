import axiosPublic from "@/hooks/useAxiosPublic";


export async function get_school_commitee(api) {
  const {data} = await axiosPublic.get(`/get_committee_list/${api}`);
  return data; 
}


