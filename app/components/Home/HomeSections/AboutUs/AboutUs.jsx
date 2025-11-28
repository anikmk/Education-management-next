
import Image from "next/image";
import { FaBookOpenReader, FaQuoteRight, FaHeadset } from "react-icons/fa6";
import aboutImg1 from "../../../../../public/assets/img/about/01.jpg";
import aboutImg2 from "../../../../../public/assets/img/about/02.jpg";
import aboutImg3 from "../../../../../public/assets/img/about/03.jpg";
import exchance_idea from "../../../../../public/assets/img/icon/exchange-idea.svg";
import open_book from "../../../../../public/assets/img/icon/open-book.svg";
import global_education from "../../../../../public/assets/img/icon/global-education.svg";
import { about_us_data } from "@/api/about_us/about_us_api";
import AboutBtn from "./AboutBtn";



// meta data
export const metadata = {
  title: "About Us | Eduka School Management System",
  description:
    "Learn more about Eduka, a modern and digital school management system empowering schools with advanced technology and innovation.",
  keywords: [
    "Eduka",
    "school management system",
    "education software",
    "Next.js project",
    "Bangladesh education",
  ],
  openGraph: {
    title: "About Eduka - Modern School Management System",
    description:
      "Eduka is an advanced platform for managing schools digitally, designed for administrators, teachers, and students.",
    siteName: "Eduka",
    images: [
      {
        url: aboutImg1,
        width: 1200,
        height: 630,
        alt: "Eduka School Management System About Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default async function AboutUs() {  

  const api = process.env.NEXT_PUBLIC_PATHSHALA_SCHOOL_CODE;
  const about_data = await about_us_data(api);
  const fullDescription = about_data?.result[0]?.news_details;
  const shortDescription = fullDescription?.slice(0, 250) + "...";

  const about_page_id = about_data?.result[0]?.news_id
  
  return (
    <section className="about-area pb-24  text-primary dark:bg-secondary dark:text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <Image
                  src={aboutImg1}
                  alt="About"
                  className="rounded-t-[80px] rounded-bl-[80px] w-full h-auto object-cover"
                />
                <div className="mt-6 flex items-center gap-3 bg-secondary p-5 rounded-t-[60px] rounded-br-[50px] shadow-sm">
                  <div className="bg-white p-3 rounded-full shadow-md">
                    <Image
                      src={exchance_idea}
                      alt="Experience"
                      className="w-14 h-14"
                    />
                  </div>
                  <b className="text-accent text-lg leading-tight">
                    30 Years Of <br /> Quality Service
                  </b>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-64 h-64 border-[3px] border-dashed border-secondary rounded-full p-2">
                  <Image
                    src={aboutImg2}
                    alt="About"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <Image
                  src={aboutImg3}
                  alt="About"
                  className="rounded-b-[80px] rounded-tr-[80px] w-full h-auto object-cover mt-4"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Section Heading */}
            <div>
              <div className="flex items-center gap-2 font-semibold uppercase text-xl">
                <FaBookOpenReader />
                <span className="text-secondary">About Institute</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 my-6 leading-snug">
                Our <span className="text-secondary">Education System</span> Inspires You More.
              </h2>
            </div>

            {/* Description */}
            <div className="text-gray-600 leading-relaxed mb-8 prose" dangerouslySetInnerHTML={{ __html: shortDescription }}>
             
            </div>

            {/* Features + Quote */}
            <div className="grid md:grid-cols-2 gap-7 mb-16">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Image
                    src={open_book}
                    alt="Service"
                    className="w-14 h-14 bg-secondary p-2 rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-800 text-lg">
                      Education Services
                    </h5>
                    <p className="text-gray-600 text-sm">
                      It is a long established fact that a reader will be distracted by readable content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Image
                    src={global_education}
                    alt="Global"
                    className="w-14 h-14 bg-secondary p-2 rounded-full"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-800 text-lg">
                      International Hubs
                    </h5>
                    <p className="text-gray-600 text-sm">
                      It is a long established fact that a reader will be distracted by readable content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-black border-l-4 border-yellow-400 p-5 rounded-lg relative">
                <p className="text-gray-700 text-sm leading-relaxed">
                  It is a long established fact that a reader will be distracted by the readable content of a page
                  when looking at its layout.
                </p>
                <FaQuoteRight className="absolute bottom-3 right-3 text-yellow-500 text-2xl opacity-60" />
              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <AboutBtn  btnText={"Details"} page_id={about_page_id}/>

              <div className="flex items-center gap-3">
                <div className="bg-neutral p-3 rounded-full">
                  <FaHeadset className="text-accent text-2xl" />
                </div>
                <div>
                  <span className="text-secondary text-sm font-medium">Call Now</span>
                  <h6 className="text-lg font-semibold text-gray-800">
                    <a href="tel:+21236547898" className="text-neutral hover:text-secondary">
                      +2 123 654 7898
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
