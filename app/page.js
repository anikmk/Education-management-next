

import { AboutUs, ChoiceUs } from "@components/Home/HomeSections";
import LatestNews from "@components/Home/HomeSections/LatestNews/LatestNews";
import OurClient from "@components/Home/HomeSections/OurClient/OurClient";
import OurCourse from "@components/Home/HomeSections/OurCourse/OurCourse";
import DepartmentSlider from "@components/Home/HomeSections/OurDepartment/OurDepartment";
import OurSkill from "@components/Home/HomeSections/OurSkills/OurSkills";
import OurTeam from "@components/Home/HomeSections/OurTeam/OurTeam";
import UpComingEvents from "@components/Home/HomeSections/UpcomingEvents/UpcomingEvents";
import HeroServer from "./components/Home/Hero/HeroServer";
import NewsAndBlogs from "@/components/Home/HomeSections/NewsAndBlogs/NewsAndBlogs";
import ChairmanSpeech from "./components/Home/HomeSections/ChairmanSpeech/ChairmanSpeech";
import TeacherSpeech from "./components/Home/HomeSections/TeacherSpeech/TeacherSpeech";
import SchoolCommittee from "./components/Home/HomeSections/SchoolCommittee/SchoolCommittee";
import InstituteFounder from "./components/Home/HomeSections/InstituteFounder/InstituteFounder";
import Donner from "./components/Home/HomeSections/Donner/Donner";
import StudentsStatisticsReportServer from "./components/Home/HomeSections/StudentsStatisticsReport/StudentsStatisticsReportServer";
import InstituteStatisticsReportServer from "./components/Home/HomeSections/InstituteStatisticsReport/InstituteStatisticsReportServer";
import InstituteInfo from "./components/Home/HomeSections/InstituteInfo/InstituteInfo";

export default function Home() {
  return (
    <div className="">
        <div>
        <HeroServer />
        <InstituteInfo />
      </div>
      <ChairmanSpeech />
     <AboutUs />
     <TeacherSpeech />
     <InstituteStatisticsReportServer />
     <OurCourse />
     <LatestNews />
     <OurTeam />
     <StudentsStatisticsReportServer />
     <SchoolCommittee />
     <InstituteFounder />
     <Donner />
     <ChoiceUs />
     <UpComingEvents />
     <OurSkill />
     <DepartmentSlider />
     <NewsAndBlogs />
     <OurClient />
    </div>
  );
}
