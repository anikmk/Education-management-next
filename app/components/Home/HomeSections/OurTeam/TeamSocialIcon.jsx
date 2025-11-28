
"use client"
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";

export default function TeamSocialIcon() {
  return (
    <>
    {/* Hover Social Icons */}
                <div className="absolute top-0 right-0 h-full w-0 bg-black/60 flex flex-col items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:w-16 transition-all duration-500 ease-in-out">
                  <button
                    aria-label="Facebook"
                    className="text-accent hover:text-secondary transition-colors"
                  >
                    <FaFacebookF size={18} />
                  </button>
                  <button
                    aria-label="WhatsApp"
                    className="text-accent hover:text-secondary transition-colors"
                  >
                    <FaWhatsapp size={18} />
                  </button>
                  <button
                    aria-label="LinkedIn"
                    className="text-accent hover:text-secondary transition-colors"
                  >
                    <FaLinkedinIn size={18} />
                  </button>
                  <button
                    aria-label="YouTube"
                    className="text-accent hover:text-secondary transition-colors"
                  >
                    <FaYoutube size={18} />
                  </button>
                </div>
    </>
    
  )
}
