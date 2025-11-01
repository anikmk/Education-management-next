"use client";

import Image from "next/image";
import { FaBookOpen } from "react-icons/fa6";
import choiceUS_bg from "../../../../../public/assets/img/choose/01.jpg";
import choice_bg_shape from "../../../../../public/assets/img/shape/01.png";
import choice_icon1 from "../../../../../public/assets/img/icon/acting.svg";
import choice_icon2 from "../../../../../public/assets/img/icon/course-material.svg";
import choice_icon3 from "../../../../../public/assets/img/icon/online-course.svg";
import choice_icon4 from "../../../../../public/assets/img/icon/money.svg";

const chooseData = [
  {
    id: 1,
    icon: choice_icon1,
    title: "Expert Teachers",
    desc: "There are many variations of the suffered.",
  },
  {
    id: 2,
    icon: choice_icon2,
    title: "Courses Material",
    desc: "There are many variations of the suffered.",
  },
  {
    id: 3,
    icon: choice_icon3,
    title: "Online Courses",
    desc: "There are many variations of the suffered.",
  },
  {
    id: 4,
    icon: choice_icon4,
    title: "Affordable Price",
    desc: "There are many variations of the suffered.",
  },
];

export default function ChoiceUs() {
  return (
    <section className="relative bg-primary overflow-hidden py-20">
      {/* === Background Shape Layer === */}
      <div className="absolute inset-0 opacity-100">
        <Image
          src={choice_bg_shape}
          alt="background shape"
          fill
          className="object-cover object-center opacity-40"
          priority
        />
      </div>

      {/* === Overlay Layer === */}
      <div className="absolute inset-0 bg-primary/70"></div>

      {/* === Content Section === */}
      <div className="relative z-10 w-[75%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div>
            <p className="text-secondary font-semibold flex items-center gap-2 uppercase tracking-wide underline">
              <FaBookOpen /> Why Choose Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              We Are Expert &{" "}
              <span className="text-secondary">Do Our Best</span> For Your Goal
            </h2>
            <p className="text-white/80 text-sm md:text-base">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when many desktop and web page
              editors looking at its layout.
            </p>
          </div>

          {/* Choose Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6">
            {chooseData.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-accent rounded-t-full rounded-br-full"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-secondary text-accent rounded-t-full rounded-br-full shadow-md p-[6px]">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="invert brightness-0 sepia saturate-200 hue-rotate-[120deg]"
                  />
                </div>
                <div className="p-2">
                  <h4 className="text-lg font-semibold text-black mb-[5px]">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end relative">
          <div className="relative">
            <Image
              src={choiceUS_bg}
              alt="Why Choose Us"
              placeholder="blur"
              priority
              className="rounded-b-[30%] rounded-tl-[30%] shadow-lg w-full max-w-md object-cover"
            />
            <div className="absolute border-4 border-secondary rounded-b-[30%] rounded-tl-[30%] w-[102%] h-[102%] top-2 right-2 bottom-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
