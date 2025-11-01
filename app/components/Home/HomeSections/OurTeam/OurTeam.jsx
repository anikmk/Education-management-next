"use client"
import Image from "next/image";
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { FiShare2 } from "react-icons/fi";
import team_member_1 from "../../../../../public/assets/img/team/01.jpg";
import team_member_2 from "../../../../../public/assets/img/team/02.jpg";
import team_member_3 from "../../../../../public/assets/img/team/03.jpg";
import team_member_4 from "../../../../../public/assets/img/team/04.jpg";
import Link from "next/link";

export const metadata = {
  title: "Our Teachers | Meet Our Expert Instructors",
  description:
    "Get to know our professional and experienced teachers who are dedicated to helping students achieve their learning goals.",
};

const teamData = [
  {
    id: 1,
    name: "Angela T. Vigil",
    title: "Associate Professor",
    img: team_member_1,
  },
  {
    id: 2,
    name: "Frank A. Mitchell",
    title: "Associate Professor",
    img: team_member_2,
  },
  {
    id: 3,
    name: "Susan D. Lunsford",
    title: "CEO & Founder",
    img: team_member_3,
  },
  {
    id: 4,
    name: "Dennis A. Pruitt",
    title: "Associate Professor",
    img: team_member_4,
  },
];

export default function OurTeam() {
  return (
   <Link href={"/ourTeamDetails"}>
     <section className="py-16 bg-accent text-center">
      {/* Heading Section */}
      <div className="max-w-md mx-auto mb-10">
        <p className="text-secondary font-semibold uppercase tracking-widest flex justify-center items-center gap-2 underline">
          <FaBookOpen /> Our Teachers
        </p>
        <h2 className="text-3xl my-3 md:text-4xl font-bold text-gray-900">
          Meet With Our <span className="text-secondary">Teachers</span>
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>

      {/* Team Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {teamData.map((member) => (
          <div
            key={member.id}
            className="relative bg-accent rounded-t-3xl rounded-br-3xl p-4 overflow-hidden shadow-lg group transition-all duration-500 hover:-translate-y-2"
          >
            {/* Optimized Image */}
            <Image
              src={member.img}
              alt={member.name}
              placeholder="blur"
              className="w-full h-72 object-cover rounded-t-3xl rounded-br-3xl"
            />

            {/* Hover Social Icons */}
            <div className="absolute top-0 right-0 h-full w-0 bg-black/60 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500 ease-in-out">
              <a
                href="#"
                aria-label="Facebook"
                className="text-accent hover:text-secondary transition-colors"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                aria-label="WhatsApp"
                className="text-accent hover:text-secondary transition-colors"
              >
                <FaWhatsapp size={18} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-accent hover:text-secondary transition-colors"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="text-accent hover:text-secondary transition-colors"
              >
                <FaYoutube size={18} />
              </a>
            </div>

            {/* Content */}
            <div className="flex justify-between pt-2">
              <div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {member.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-primary">
                  {member.title}
                </p>
              </div>
              {/* Floating share icon */}
              <div className="bg-primary text-accent p-2 w-10 h-10 flex items-center justify-center rounded-full shadow-md ml-4">
                <FiShare2 />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
   </Link>
  );
}
