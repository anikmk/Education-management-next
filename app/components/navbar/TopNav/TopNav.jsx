"use client";


import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Container from "@components/Shared/Container/Container";


export default function TopNav() {
  return (
    <div className="flex flex-col md:flex-row text-accent">
      
      {/* === Left Section (Follow Us) === */}
      <div className="bg-secondary w-full md:w-[30%] p-3 flex justify-center">
        <Container>
          <div className="flex items-center justify-center gap-3 text-lg flex-wrap md:flex-nowrap">
            <span>Follow Us</span>
            <FaSquareFacebook className="text-accent hover:scale-110 duration-300" />
            <FaLinkedin className="text-accent hover:scale-110 duration-300" />
            <FaWhatsappSquare className="text-accent hover:scale-110 duration-300" />
            <FaYoutube className="text-accent hover:scale-110 duration-300" />
          </div>
        </Container>
      </div>

      {/* === Right Section (Contact Info) === */}
      <div className="bg-neutral w-full md:w-[70%] p-3 flex justify-center md:justify-end mt-2 md:mt-0 bg-primary">
        <Container>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end text-lg gap-2 md:gap-4">
            <div>25/B Milford Road, New York</div>
            <div className="border-r-2 bg-accent w-[1px] h-7 opacity-20"></div>
            <div>[email protected]</div>
            <div className="border-r-2 bg-accent w-[1px] h-7 opacity-20"></div>
            <div>+2 123 654 7898</div>
          </div>
        </Container>
      </div>
    </div>
  );
}
