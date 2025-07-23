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
          <p className="text-[#238967] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 tracking-tighter uppercase">
            Services
          </p>
          
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-12">
          {ServicesData.map((items, i) => (
            <div
              key={i}
              className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#238967] to-[#238967] dark:from-[#238967]/5 dark:to-[#238967] text-center transition-shadow hover:shadow-lg"
            >
              {/* Icon */}
              <div className="flex justify-center items-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-[#238967] mx-auto mb-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
