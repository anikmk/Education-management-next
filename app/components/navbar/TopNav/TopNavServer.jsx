

import { get_school_record } from "@pages/api/school_info/school_info_Api";
import TopNav from "./TopNav";


export default async function TopNavServer() {
  // const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const api = "ITLAB-ABCD2020"
  const data = await get_school_record(api);
console.log(data)
  return <TopNav schoolData={data} />;
}
