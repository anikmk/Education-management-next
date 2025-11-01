"use client";

import Image from "next/image";
import shape_3 from "../../../public/assets/img/shape/03.png";
import logo_light from "../../../public/assets/img/logo/logo-light.png";
import { LuPhoneCall } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { FaCaretRight } from "react-icons/fa";
import { FaSquareFacebook, FaLinkedin, FaSquareWhatsapp, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  const footer_contact_data = [
    { id: 1, text: "+2 123 654 7898", icon: <LuPhoneCall /> },
    { id: 2, text: "25/B Milford Road, New York", icon: <IoLocationOutline /> },
    { id: 3, text: "info@eduka.com", icon: <HiOutlineMail /> },
  ];

  const quick_links = [
    { id: 1, text: "About Us", icon: <FaCaretRight /> },
    { id: 2, text: "FAQ's", icon: <FaCaretRight /> },
    { id: 3, text: "Testimonials", icon: <FaCaretRight /> },
    { id: 4, text: "Terms Of Service", icon: <FaCaretRight /> },
    { id: 5, text: "Privacy Policy", icon: <FaCaretRight /> },
    { id: 6, text: "Update News", icon: <FaCaretRight /> },
  ];

  const campus_links = [
    { id: 1, text: "Campus Safety", icon: <FaCaretRight /> },
    { id: 2, text: "Student Activities", icon: <FaCaretRight /> },
    { id: 3, text: "Academic Department", icon: <FaCaretRight /> },
    { id: 4, text: "Planning & Administration", icon: <FaCaretRight /> },
    { id: 5, text: "Office Of The Chancellor", icon: <FaCaretRight /> },
    { id: 6, text: "Facility Services", icon: <FaCaretRight /> },
  ];

  const social_media_icon = [
    { id: 1, icon: <FaSquareFacebook /> },
    { id: 2, icon: <FaLinkedin /> },
    { id: 3, icon: <FaSquareWhatsapp /> },
    { id: 4, icon: <FaYoutube /> },
  ];

  return (
    <footer className="relative bg-primary text-accent overflow-hidden">
      {/* Background Shape */}
      <div className="absolute opacity-5 w-full mx-auto">
        <Image
          src={shape_3}
          alt="Background Shape"
          className="w-[30%] mx-auto"
        />
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 pt-20 pb-14">
          {/* === About Us === */}
          <div className="transition-transform duration-500 hover:-translate-y-2">
            <p className="inline-block mb-4">
              <Image
                src={logo_light}
                alt="Eduka Logo"
                className="w-40 hover:scale-105 transition-transform duration-500"
              />
            </p>
            <p className="mb-4 text-sm leading-relaxed">
              We are many variations of passages available but the majority have
              suffered alteration in some form by injected humour words
              believable.
            </p>
            <ul className="space-y-2 text-sm">
              {footer_contact_data.map((item) => (
                <li key={item.id}>
                  <div className="flex items-center gap-2 hover:text-white transition-colors duration-300">
                    <span className="text-accent bg-secondary p-2 rounded-r-full rounded-tl-full">
                      {item.icon}
                    </span>
                    {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* === Quick Links === */}
          <div className="transition-transform duration-500 hover:-translate-y-2">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="border-b-[3px] border-gray-600 w-20 mb-5 relative">
              <div className="border-b-[3px] border-red-500 top-0 left-4 w-8 absolute"></div>
            </div>
            <ul className="space-y-2">
              {quick_links.map((item) => (
                <li key={item.id}>
                  <div className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 cursor-pointer">
                    <div className="text-secondary">{item.icon}</div>
                    {item.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* === Our Campus === */}
          <div className="transition-transform duration-500 hover:-translate-y-2">
            <h4 className="text-lg font-semibold mb-4">Our Campus</h4>
            <div className="border-b-[3px] border-gray-600 w-20 mb-5 relative">
              <div className="border-b-[3px] border-red-500 top-0 left-4 w-8 absolute"></div>
            </div>
            <ul className="space-y-2">
              {campus_links.map((campusItem) => (
                <li key={campusItem.id}>
                  <div className="flex items-center gap-2 hover:text-blue-400 transition-all duration-300 cursor-pointer">
                    <div className="text-secondary">{campusItem.icon}</div>
                    {campusItem.text}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* === Newsletter === */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to get the latest updates and news.
            </p>
            <form className="space-y-5">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md text-gray-900 outline-none"
              />
              <button
                type="submit"
                className="bg-secondary text-white px-5 py-4 rounded-r-full rounded-tl-full hover:bg-accent hover:text-secondary transition-colors duration-300 w-full text-center"
              >
                Subscribe Now ✉️
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* === Copyright Section === */}
      <div className="border-t border-gray-700 py-4 relative z-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="hover:text-blue-400 transition-colors duration-300">
            &copy; {new Date().getFullYear()}{" "}
            <p className="text-blue-400 hover:underline">
              Eduka
            </p>{" "}
            — All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            {social_media_icon.map((icon) => (
              <i
                key={icon.id}
                className="text-2xl cursor-pointer hover:text-secondary transition-colors duration-300"
              >
                {icon.icon}
              </i>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
