import { get_school_record } from "@/api/school_info/school_info_Api";
import TopNav from "./TopNav";

export default async function TopNavServer() {
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const data = await get_school_record(api);

  return <TopNav schoolData={data} />;
}
