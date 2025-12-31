
import { get_statistics_report } from '@/api/statistics_report/statistics_report_api';
import InstituteStatisticsReportClient from './InstituteStatisticsReportClient'

export default async function InstituteStatisticsReportServer() {
    const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
    const statisticsReport = await get_statistics_report(api); 
    const totalTeachers = statisticsReport?.employee_records?.total_teacher;
    const totalStaffs = statisticsReport?.employee_records?.total_staff;
    const totalStudents = statisticsReport?.student_records?.total_student;
    const totalClasses = statisticsReport?.classWiseTotalStudents?.length;
    
  return (
    <div>
        <InstituteStatisticsReportClient totalTeachers={totalTeachers} totalStaff={totalStaffs} totalStudents={totalStudents} totalClass={totalClasses}/>
    </div>
  )
}
