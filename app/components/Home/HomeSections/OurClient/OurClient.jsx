"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { clientData } from "./clientData";


export default function OurClient() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="w-[80%] mx-auto text-center">
        {/* === Section Title === */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Our <span className="text-secondary">Clients</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Trusted by leading organizations and valued partners.
          </p>
        </div>

        {/* === Swiper Slider === */}
        <Swiper
          slidesPerView={2}
          spaceBetween={12}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
              spaceBetween: 12,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 12,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 12,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {clientData?.map((client, idx) => (
            <SwiperSlide
              key={idx}
              className="flex items-center justify-center py-10 bg-accent rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            >
              <Image
                src={client.client_Logo}
                alt={"our client"}
                width={100}
                height={100}
                className="object-contain md:w-28 mx-auto"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
