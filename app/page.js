

import { AboutUs, ChoiceUs } from "@components/Home/HomeSections";
import Counter from "@components/Home/HomeSections/Counter/Counter";
import Facilities from "@components/Home/HomeSections/Facilites/Facilites";
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

export default function Home() {
  return (
    <div className="">
        <div>
        <HeroServer />
        <Facilities />
      </div>
      <ChairmanSpeech />
     <AboutUs />
     <TeacherSpeech />
     <Counter />
     <OurCourse />
     <LatestNews />
     <OurTeam />
     <SchoolCommittee />
     <InstituteFounder />
     <ChoiceUs />
     <UpComingEvents />
     <OurSkill />
     <DepartmentSlider />
     <NewsAndBlogs />
     <OurClient />
    </div>
  );
}
