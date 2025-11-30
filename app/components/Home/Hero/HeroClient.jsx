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

import { useEffect } from "react";
import Link from "next/link";

export default function HeroClient({bannerInfo}) {

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
        {bannerInfo?.map((item) => (
          <SwiperSlide key={item?.id}>
            <div className="relative w-full h-screen">
              <Image
                src={item?.banner_url}
                alt={item?.title_english || item?.title_bangla}
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-primary/40 flex flex-col justify-center px-10 md:px-24 text-white">
                <div className="max-w-2xl space-y-5 animate-fadeIn">
                  <h4 data-aos="fade-down" className="text-lg md:text-5xl font-semibold text-accent uppercase tracking-wide">
                    {item?.title_english || item?.title_bangla}
                  </h4>
                  {/* <h2 data-aos="zoom-in"data-aos-delay="200" className="text-2xl md:text-4xl font-bold capitalize leading-tight">
                    {item.heading}
                  </h2> */}
                  <p data-aos="fade-up"
                    data-aos-delay="300" className="text-base md:text-md opacity-90 capitalize">
                    {item?.title_bangla}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-6">
                   <Link href={'/about'}>
                    <button data-aos="fade-up"
                      data-aos-delay="350" className="bg-secondary text-white px-5 py-2 rounded-r-full rounded-tl-full hover:bg-accent hover:text-secondary transition-all duration-300 flex items-center gap-2">
                      About Us <FaArrowRightLong />
                    </button>
                   </Link>
                    <Link href={'/contact'}>
                    <button data-aos="fade-up"
                      data-aos-delay="450" className="bg-secondary text-white px-5 py-3 rounded-r-full rounded-tl-full hover:bg-accent hover:text-secondary transition-all duration-300 flex items-center gap-2">
                      Contact <FaArrowRightLong />
                    </button>
                    </Link>
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
