"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import "swiper/css";
import "swiper/css/navigation";

import "aos/dist/aos.css";
import AOS from "aos";

import sliderImage_1 from "../../../../public/assets/img/slider/slider-1.jpg";
import sliderImage_2 from "../../../../public/assets/img/slider/slider-2.jpg";
import sliderImage_3 from "../../../../public/assets/img/slider/slider-3.jpg";
import { useEffect } from "react";

const slider_data = [
  {
    id: 1,
    slider_img: sliderImage_1,
    heading: "Start Your Beautiful and Bright Future",
    sub_heading: "Welcome to Eduka Institute",
    slider_desc:
      "Unlock your potential with expert-led courses designed to shape your career and build your confidence for a brighter tomorrow.",
    btn_text1: "About Us",
    btn_text2: "Get Started",
  },
  {
    id: 2,
    slider_img: sliderImage_2,
    heading: "Empower Your Learning Journey",
    sub_heading: "Discover Endless Opportunities",
    slider_desc:
      "From technology to creativity — explore diverse learning paths that inspire growth, innovation, and success at every step.",
    btn_text1: "Explore Courses",
    btn_text2: "Join Today",
  },
  {
    id: 3,
    slider_img: sliderImage_3,
    heading: "Learn, Grow & Achieve",
    sub_heading: "Building Skills for a Better Future",
    slider_desc:
      "Our mission is to make quality education accessible to all — helping learners achieve excellence through knowledge and practice.",
    btn_text1: "View Programs",
    btn_text2: "Contact Us",
  },
];

export default function Hero() {
   useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      delay: 60,
    });
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden group">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = ".button-prev-slide";
          swiper.params.navigation.nextEl = ".button-next-slide";
        }}
        navigation={{
          prevEl: ".button-prev-slide",
          nextEl: ".button-next-slide",
        }}
        className="h-full"
      >
        {slider_data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-screen">
              <Image
                src={item.slider_img}
                alt={item.heading}
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-primary/40 flex flex-col justify-center px-10 md:px-24 text-white">
                <div className="max-w-xl space-y-5 animate-fadeIn">
                  <h4 data-aos="fade-down" className="text-lg md:text-xl font-semibold text-secondary uppercase tracking-wide underline">
                    {item.sub_heading}
                  </h4>
                  <h2 data-aos="zoom-in"data-aos-delay="200" className="text-2xl md:text-4xl font-bold capitalize leading-tight">
                    {item.heading}
                  </h2>
                  <p data-aos="fade-up"
                    data-aos-delay="300" className="text-base md:text-md opacity-90 capitalize">
                    {item.slider_desc}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <button data-aos="fade-up"
                      data-aos-delay="350" className="bg-secondary text-white px-5 py-2 rounded-r-full rounded-tl-full hover:bg-accent hover:text-secondary transition-all duration-300 flex items-center gap-2">
                      {item.btn_text1} <FaArrowRightLong />
                    </button>
                    <button data-aos="fade-up"
                      data-aos-delay="450" className="bg-secondary text-white px-5 py-3 rounded-r-full rounded-tl-full hover:bg-accent hover:text-secondary transition-all duration-300 flex items-center gap-2">
                      {item.btn_text2} <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="absolute top-[50%] -left-36 group-hover:left-0 z-10 group-hover:duration-400 group-hover:transition-all w-12 h-10 text-accent rounded-r-full font-bold bg-secondary grid place-items-center cursor-pointer button-prev-slide">
          <GoArrowLeft />
        </div>
        <div className="absolute top-[50%] -right-36 group-hover:right-0 z-10 group-hover:duration-400 group-hover:transition-all w-12 h-10 text-accent rounded-l-full font-bold bg-secondary grid place-items-center cursor-pointer button-next-slide">
          <GoArrowRight />
        </div>
      </Swiper>
    </section>
  );
}
