import { get_statistics_report } from "@/api/statistics_report/statistics_report_api";
import StudentsStatisticsReportClient from "./StudentsStatisticsReportClient";


export default async function StudentsStatisticsReportServer() {
  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const statistics_report = await get_statistics_report(api);
  const studentsStatistics = statistics_report?.classWiseTotalStudents;

  return (
    <div><StudentsStatisticsReportClient studentsStatistics={studentsStatistics}/></div>
  )
}
