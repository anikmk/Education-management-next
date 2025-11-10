
import Hero from "@components/Home/Hero/Hero";
import { AboutUs, ChoiceUs } from "@components/Home/HomeSections";
import Counter from "@components/Home/HomeSections/Counter/Counter";
import Facilities from "@components/Home/HomeSections/Facilites/Facilites";
import LatestNews from "@components/Home/HomeSections/LatestNews/LatestNews";
import OurBlogs from "@components/Home/HomeSections/OurBlogs/OurBlogs";
import OurClient from "@components/Home/HomeSections/OurClient/OurClient";
import OurCourse from "@components/Home/HomeSections/OurCourse/OurCourse";
import DepartmentSlider from "@components/Home/HomeSections/OurDepartment/OurDepartment";
import OurSkill from "@components/Home/HomeSections/OurSkills/OurSkills";
import OurTeam from "@components/Home/HomeSections/OurTeam/OurTeam";
import UpComingEvents from "@components/Home/HomeSections/UpcomingEvents/UpcomingEvents";

export default function Home() {
  return (
    <div className="">
        <div>
        <Hero />
        <Facilities />
      </div>
     <AboutUs />
     <Counter />
     <OurCourse />
     <LatestNews />
     <OurTeam />
     <ChoiceUs />
     <UpComingEvents />
     <OurSkill />
     <DepartmentSlider />
     <OurBlogs />
     <OurClient />
    </div>
  );
}
