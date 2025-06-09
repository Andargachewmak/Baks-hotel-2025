"use client";
import Image from "next/image";
import Link from "next/link";
import { ServicesData } from "@/app/api/data";
import React from "react";

const Services = () => {
  return (
    <section className="py-10 sm:py-14 md:py-20" id="service-section">
      <div className="container mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md">
        {/* Section Title */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-[#238967] text-sm sm:text-base md:text-lg font-extrabold mb-3 tracking-widest uppercase">
            Services
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white max-w-2xl mx-auto leading-snug">
            Get a many of interesting Services.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6">
          {ServicesData.map((items, i) => (
            <div
              key={i}
              className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#A7C48F]/5 to-[#238967] dark:from-[#800020]/5 dark:to-[#800020] text-center transition-shadow hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#238967] text-white mx-auto mb-6">
                {items.icons && React.cloneElement(items.icons, { size: 40 })}
              </div>

              {/* Service Title */}
              <h3 className="text-xl sm:text-2xl text-black dark:text-white font-semibold mb-4">
                {items.heading}
              </h3>

              {/* Service Description */}
              <p className="text-base sm:text-lg font-normal text-white/90 dark:text-white/90 mb-6">
                {items.subheading}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center justify-center">
                <Link
                  href="/"
                  className="text-base group font-medium text-white flex items-center relative after:absolute after:w-full after:h-px after:bg-white after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0 transition-all"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="ml-2 text-[#A7C48F]"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 6l6 6-6 6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
