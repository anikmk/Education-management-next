"use client";

import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronRight,
  FaSearch,
} from "react-icons/fa";
import nav_logo from "../../../../public/assets/img/logo/logo.png";
import { FaPencil } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
import DarkModeBtn from "../DarkModeBtn/DarkModeBtn";
import { get_school_record } from "@pages/api/school_info/school_info_Api";

export default function Navbar() {
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
<div className="dark:bg-black dark:text-white">
      <nav
      className={` bg-accent dark:bg-black dark:text-white text-black p-2 shadow-md w-full z-50 fixed transition-all duration-200 ${
        sticky ? "top-0 mt-0" : "top-0 mt-12"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
          <div>
      <Image
        className="dark:brightness-150"
        src={nav_logo}
        alt="Logo"
        width={200}
        height={200}
        priority 
      />
    </div>

        {/* ===== Desktop Menu ===== */}
        <ul className="hidden md:flex items-center space-x-6 font-semibold relative">
          <Link href={"/"}>
            <li className="hover:text-red-600 cursor-pointer">Home</li>
          </Link>

          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              Courses <FaChevronDown className="text-xs mt-1" />
            </button>
            <ul className="absolute left-0 top-14 bg-black text-accent w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-secondary">
              <Link href={'/'}>
                <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">
                  Course -1
                </li>
              </Link>

              <li className="relative group/submenu px-4 py-2 hover:bg-red-600 cursor-pointer flex justify-between items-center">
                Multiple Courses
                <FaChevronRight className="text-xs" />
                <ul className="absolute left-full top-0 bg-black text-accent w-56 opacity-0 translate-x-2 invisible group-hover/submenu:opacity-100 group-hover/submenu:translate-x-0 group-hover/submenu:visible transition-all duration-300 ease-in-out">
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Multi - 1</li>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Multi - 2</li>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Multi - 3</li>
                </ul>
              </li>

              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Course -2</li>
            </ul>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              Admissions <FaChevronDown className="text-xs mt-1" />
            </button>
            <ul className="absolute left-0 top-14 bg-black text-accent w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-secondary">
              <Link href={'/admission/howToApply'}>
                <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">
                  How To Apply
                </li>
              </Link>

              <li className="relative group/submenu px-4 py-2 hover:bg-red-600 cursor-pointer flex justify-between items-center">
                Our Campus
                <FaChevronRight className="text-xs" />
                <ul className="absolute left-full top-0 bg-black text-accent w-56 opacity-0 translate-x-2 invisible group-hover/submenu:opacity-100 group-hover/submenu:translate-x-0 group-hover/submenu:visible transition-all duration-300 ease-in-out">
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Campus Tour</li>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Campus Life</li>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Notice Board</li>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Student Activities</li>
                </ul>
              </li>

              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Tuition Fees</li>
            </ul>
          </li>

          <li className="hover:text-red-600 cursor-pointer">Academics</li>
          <li className="hover:text-red-600 cursor-pointer">Blog</li>
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-red-600">
              Page <FaChevronDown className="text-xs mt-1" />
            </button>
            <ul className="absolute left-0 top-14 bg-black text-accent w-56 opacity-0 translate-y-2 invisible group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-300 ease-in-out border-t-2 border-secondary">
              <Link href={'/'}>
                <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">
                  About Us
                </li>
              </Link>

              <li className="relative group/submenu px-4 py-2 hover:bg-red-600 cursor-pointer flex justify-between items-center">
                Events
                <FaChevronRight className="text-xs" />
                <ul className="absolute left-full top-0 bg-black text-accent w-56 opacity-0 translate-x-2 invisible group-hover/submenu:opacity-100 group-hover/submenu:translate-x-0 group-hover/submenu:visible transition-all duration-300 ease-in-out">
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Campus Tour</li>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Campus Life</li>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Notice Board</li>
                  <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Student Activities</li>
                </ul>
              </li>

              <li className="px-4 py-2 hover:bg-red-600 cursor-pointer">Gallery</li>
            </ul>
          </li>
          <Link href={"/contactUs"}><li className="hover:text-red-600 cursor-pointer">Contact</li></Link>
          <li className="hover:text-red-600 cursor-pointer">
            <FaSearch />
          </li>
          <li className="hover:text-red-600 cursor-pointer">
            <DarkModeBtn />
          </li>
          <li className="text-accent bg-secondary py-2 px-3 rounded-t-3xl rounded-br-3xl cursor-pointer flex items-center gap-2">
            <FaPencil /> Apply Now
          </li>
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
