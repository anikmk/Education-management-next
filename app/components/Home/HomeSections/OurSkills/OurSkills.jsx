"use client";

import { FaArrowRight, FaBookOpen } from "react-icons/fa6";
import Image from "next/image";
import ProgressBar from "@ramonak/react-progress-bar";
import skill_bg from "../../../../../public/assets/img/enroll/01.jpg";

export default function OurSkill() {
  return (
    <section className="relative bg-primary overflow-hidden py-20">
      {/* === Background Image === */}
      <div className="absolute inset-0">
        <Image
          src={skill_bg}
          alt="Skill background"
          fill
          className="object-cover opacity-100"
          priority
        />
        {/* === Overlay === */}
        <div className="absolute inset-0 bg-primary/85"></div>
      </div>

      {/* === Content Section === */}
      <div className="relative z-10 w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* ===== Left Content ===== */}
        <div className="space-y-6">
          <div className="bg-accent p-5 rounded-t-[60px] rounded-br-[60px] relative">
            {/* ==== Top Section ==== */}
            <div className="absolute -top-5 left-0 bg-secondary p-3 w-full text-accent rounded-t-[60px] rounded-br-[60px]">
              <h2 className="text-xl font-semibold mb-[2px]">
                Start Your Enrollment
              </h2>
              <p className="text-sm">
                We are variations of passages that have suffered.
              </p>
            </div>

            {/* ==== Form ==== */}
            <div className="pt-16">
              <form className="space-y-4">
                <input
                  type="text"
                  className="py-3 px-4 focus:outline-none w-full bg-slate-100 rounded-lg"
                  placeholder="Your Name.."
                />
                <input
                  type="email"
                  className="py-3 px-4 focus:outline-none w-full bg-slate-100 rounded-lg"
                  placeholder="Email Address.."
                />
                <select
                  defaultValue="Choice Course"
                  className="py-3 px-4 focus:outline-none w-full bg-slate-100 rounded-lg"
                >
                  <option disabled>Choice Course</option>
                  <option>Crimson</option>
                  <option>Amber</option>
                  <option>Velvet</option>
                </select>
                <textarea
                  className="py-3 h-24 px-4 focus:outline-none w-full bg-slate-100 rounded-lg"
                  placeholder="Type Message.."
                ></textarea>
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-secondary py-2 px-3 rounded-t-3xl rounded-br-3xl text-accent text-sm hover:bg-secondary/90 transition"
                >
                  ENROLL NOW <FaArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ===== Right Content ===== */}
        <div className="text-accent space-y-3">
          <div className="flex items-center gap-2 underline text-lg text-secondary">
            <FaBookOpen />
            <h3>OUR SKILLs</h3>
          </div>
          <h1 className="text-[40px] font-semibold">
            Explore Your{" "}
            <span className="text-secondary">Creativity And Talent</span> With Us
          </h1>
          <p>
            There are many variations of passages available but the majority
            have suffered alteration in some form by injected humour randomised
            words which do not look even slightly believable. If you are going
            to use passage you need sure there anything embarrassing first true
            generator on the Internet.
          </p>

          {/* === Progress Bars === */}
          <div>
            <div className="flex items-center justify-between mb-2 font-semibold text-sm">
              <label>Our Students</label>
              <label>85%</label>
            </div>
            <ProgressBar height={8} bgColor="#c42126" labelSize={12} completed={85} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2 font-semibold text-sm">
              <label>Our Teachers</label>
              <label>65%</label>
            </div>
            <ProgressBar height={8} bgColor="#c42126" labelSize={12} completed={65} />
          </div>

          <div>
            <div className="flex items-center justify-between mb-2 font-semibold text-sm">
              <label>Our Courses</label>
              <label>75%</label>
            </div>
            <ProgressBar height={8} bgColor="#c42126" labelSize={12} completed={75} />
          </div>

          <div className="pt-4">
            <button className="flex items-center gap-2 bg-secondary py-2 px-3 rounded-t-3xl rounded-br-3xl text-accent text-sm hover:bg-secondary/90 transition">
              ENROLL NOW <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
