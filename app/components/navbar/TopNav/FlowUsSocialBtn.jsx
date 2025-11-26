'use client'

import Container from "@/components/Shared/Container/Container";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";

export default function FlowUsSocialBtn() {
  return (
     <div className="bg-secondary w-full md:w-[30%] p-3 flex justify-center">
        <Container>
          <div className="flex items-center justify-center gap-3 text-lg flex-wrap md:flex-nowrap">
            <span> Follow Us</span>
            <FaSquareFacebook className="text-accent hover:scale-110 duration-300" />
            <FaLinkedin className="text-accent hover:scale-110 duration-300" />
            <FaWhatsappSquare className="text-accent hover:scale-110 duration-300" />
            <FaYoutube className="text-accent hover:scale-110 duration-300" />
          </div>
        </Container>
      </div>
  )
}
