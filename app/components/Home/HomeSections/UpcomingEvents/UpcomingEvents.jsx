"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import {FaArrowLeft,FaArrowRight,FaArrowRightLong,FaClock,
} from "react-icons/fa6";
import { eventsData } from "./eventsData";

export default function UpComingEvents() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? eventsData.length - 1 : prev - 1));

  const nextSlide = useCallback(
    () => setCurrent((prev) => (prev === eventsData.length - 1 ? 0 : prev + 1)),
    []
  );

  return (
    <section className="py-20 bg-primary/5 relative overflow-hidden">
      <div className="w-[75%] mx-auto">
        {/* === Section Heading === */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-secondary font-semibold uppercase tracking-wide flex justify-center items-center gap-2">
            Events
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
            Our Upcoming <span className="text-secondary">Events</span>
          </h2>
          <p className="text-gray-600">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        {/* === Slider Container === */}
        <div className="relative w-full overflow-hidden">
          {/* === Arrows === */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-secondary hover:bg-primary rounded-full p-2 shadow-md transition"
          >
            <FaArrowLeft className="text-accent" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-secondary hover:bg-primary rounded-full p-2 shadow-md transition"
          >
            <FaArrowRight className="text-accent" />
          </button>

          {/* === Slider Content === */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {eventsData.map((event) => (
              <div
                key={event.id}
                className="min-w-full md:min-w-[50%] lg:min-w-[33.33%] px-3 flex justify-center"
              >
                <div className="bg-white rounded-t-3xl rounded-br-3xl shadow-lg overflow-hidden max-w-lg w-full group hover:shadow-xl transition-all duration-300 p-4">
                  {/* === Event Image === */}
                  <div className="relative mb-3">
                    <div className="relative w-full h-60">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover rounded-t-3xl rounded-br-3xl group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <span className="absolute top-3 left-3 bg-secondary text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                      <FaMapMarkerAlt /> {event.location}
                    </span>
                  </div>

                  {/* === Event Info === */}
                  <div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-2">
                        <FaCalendarAlt className="text-secondary text-sm" />{" "}
                        {event.date}
                      </span>
                      <span className="flex items-center gap-2">
                        <FaClock className="text-secondary text-sm" />{" "}
                        {event.time}
                      </span>
                    </div>

                    <h4 className="text-xl font-semibold text-black my-2">
                      {event.title}
                    </h4>
                    <p className="text-gray-600 mb-4 text-sm">{event.desc}</p>

                    <a
                      href={event.link}
                      className="inline-flex items-center gap-2 text-accent font-medium hover:bg-primary transition-all rounded-t-3xl rounded-br-3xl bg-secondary py-2 px-3"
                    >
                      Join Event <FaArrowRightLong />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* === Dots === */}
          <div className="flex justify-center mt-5 gap-2">
            {eventsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  current === idx ? "bg-secondary w-6" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
