"use client";

import { useState, useEffect } from "react";
import {FaBars,FaTimes,FaChevronDown,FaChevronRight,FaSearch,} from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import LanguageToggleBtn from "../LanguageToggle/LanguageToggleBtn";
import Cookies from "js-cookie";

export default function Navbar({data}) {
  const logoUrl_1 = data?.result?.site_path;
  const logoUrl_2 = data?.result?.logo;
  const nav_logo = logoUrl_1 + logoUrl_2

  const language = Cookies.get("lang") || "en";

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
<div className="dark:bg-black dark:text-white z-100">
      <nav
      className={` bg-accent dark:bg-black dark:text-white text-black p-2 shadow-md w-full z-50 fixed transition-all duration-200 ${
        sticky ? "top-0 mt-0" : "top-0 mt-12"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
          <div className="flex items-center gap-1.5">
      <Image
        className="dark:brightness-150"
        src={nav_logo}
        alt={`${data?.result?.name} - logo`}
        width={50}
        height={50}
        priority 
      />
      <div>
        <p className="text-xs text-slate-500">ESTD: {data?.result?.estd}</p>
        <h2 className="text-lg font-semibold">{data?.result?.name}</h2>
        <p className="text-xs text-slate-500">Address: {data?.result?.address}</p>
      </div>
    </div>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex items-center space-x-4 font-semibold relative text-sm">
          <Link href={"/"}>
            <li className="hover:text-red-600 cursor-pointer">{language === "en" ? "Home":"হোম"}</li> 
          </Link>
         <li className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              About <FaChevronDown className="text-xs mt-1" />
            </button>
            <ul className="absolute left-0 top-14 bg-black text-accent w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-secondary">
                <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">
                  About Us</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">History</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Founder & Doner List</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Our Vission</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Campus Tour</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Achievements</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Honarable Chairman</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Our Principal</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Administrators</li>
            </ul>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              Information <FaChevronDown className="text-xs mt-1" />
            </button>
            <ul className="absolute left-0 top-14 bg-black text-accent w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-secondary">
              <Link href={'/'}>
                <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">
                  Administrators
                </li>
              </Link>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Statistics Report</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Govt. Approval Letter</li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              Academic <FaChevronDown className="text-xs mt-1" />
            </button>
            <ul className="absolute left-0 top-14 bg-black text-accent w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-secondary">
              <Link href={'/'}>
                <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">
                  Class Schedule
                </li>
              </Link>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Our Teachers</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Former Teachers</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Our Staffs</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Former Staffs</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Academic Rules</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Academic Calender</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Attendance Sheet</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Leave Information</li>
            </ul>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              {language === "en" ? "Admission":"ভর্তি"} <FaChevronDown className="text-xs mt-1" />
            </button>
            <ul className="absolute left-0 top-14 bg-black text-accent w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-secondary">
              <Link href={'/admission/howToApply'}>
                <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">
                  Why Study?
                </li>
              </Link>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">How to apply</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Admission Test</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Admission Policy</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Registration System</li>
            </ul>
          </li>

          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              Students <FaChevronDown className="text-xs mt-1" />
            </button>
            <ul className="absolute left-0 top-14 bg-black text-accent w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-secondary">
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Student List</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Tution Fees</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Mobile Banking</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Daily Activites</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Exam Schedule</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Student Uniform</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Exam System</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Rules and Regulation</li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              Facilites <FaChevronDown className="text-xs mt-1" />
            </button>
            <ul className="absolute left-0 top-14 bg-black text-accent w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-secondary">
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Library</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Play Ground</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Physics Lab</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Biology Lab</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">ICT Lab</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Chemistry Lab</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Extra Activites</li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              Result <FaChevronDown className="text-xs mt-1" />
            </button>
            <ul className="absolute left-0 top-14 bg-black text-accent w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-secondary">
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Exam Result </li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Academic Result</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Evaluation Result</li>
              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Board Exam Result</li>
            </ul>
          </li>

          <li className="hover:text-red-600 cursor-pointer">Contact</li>
          <li className="hover:text-red-600 cursor-pointer">
            <FaSearch /> 
          </li>
          <li className="hover:text-red-600 cursor-pointer">
            <DarkModeBtn />
          </li>
          <li className="hover:text-red-600 cursor-pointer">
            <LanguageToggleBtn />
          </li>
          {/* <li className="text-accent bg-secondary py-2 px-3 rounded-t-3xl rounded-br-3xl cursor-pointer flex items-center gap-2">
            <FaPencil /> Apply Now
          </li> */}
        </ul>




        {/* ===== Mobile Menu Toggle ===== */}
        <div
          className="md:hidden cursor-pointer text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* ===== Mobile Dropdown ===== */}
      <div
        className={`md:hidden bg-black text-accent transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col space-y-2 px-6">
          <li>
            <button
              onClick={() => toggleDropdown("home")}
              className="w-full flex justify-between items-center py-2"
            >
              Home <FaChevronDown />
            </button>
            {activeDropdown === "home" && (
              <ul className="pl-4 text-sm space-y-1">
                <li className="py-1">Home 1</li>
                <li className="py-1">Home 2</li>
              </ul>
            )}
          </li>

          <li>
            <button
              onClick={() => toggleDropdown("admissions")}
              className="w-full flex justify-between items-center py-2"
            >
              Admissions <FaChevronDown />
            </button>
            {activeDropdown === "admissions" && (
              <ul className="pl-4 text-sm space-y-1">
                <li className="py-1">How To Apply</li>

                <li>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSubmenu("campus");
                    }}
                    className="w-full flex justify-between items-center py-1"
                  >
                    Our Campus <FaChevronDown className="text-xs" />
                  </button>

                  {activeSubmenu === "campus" && (
                    <ul className="pl-4 text-sm space-y-1">
                      <li>Campus Tour</li>
                      <li>Campus Life</li>
                      <li>Notice Board</li>
                      <li>Student Activities</li>
                    </ul>
                  )}
                </li>

                <li className="py-1">Tuition Fees</li>
              </ul>
            )}
          </li>

          <li>Academics</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Contact</li>
          <li className="hover:text-red-600 cursor-pointer">
            <FaSearch />
          </li>
          <li className="hover:text-red-600 cursor-pointer">
            <DarkModeBtn />
          </li>
          <li className="text-accent bg-secondary py-2 px-3 rounded-t-3xl rounded-br-3xl cursor-pointer flex items-center gap-2 justify-center">
            <FaPencil /> Apply Now
          </li>
        </ul>
      </div>
    </nav>
</div>
  );
}
