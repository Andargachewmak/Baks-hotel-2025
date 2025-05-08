"use client";
import Image from "next/image";
import Link from "next/link";
import { ServicesData } from "@/app/api/data";
import { FaParking, FaShower, FaWifi } from "react-icons/fa";
import React from "react";

const Services = () => {
  return (
    <section>
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md"
        id="service-section"
      >
        {/* Section Title */}
        <div className="text-center mb-14">
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            Services
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white lg:max-w-60% mx-auto">
            Get a many of interesting Services.
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32">
          {ServicesData.map((items, i) => (
            <div
              key={i}
              className="relative p-8 rounded-3xl bg-gradient-to-b from-black/5 to-white dark:from-white/5 dark:to-black overflow-hidden text-center"
            >
              {/* Icon Container (Above the Title) */}
              <div className="flex justify-center items-center w-24 h-24 rounded-full bg-primary text-white mx-auto mb-6">
                {items.icons && React.cloneElement(items.icons, { size: 48 })} {/* Increased icon size */}
              </div>

              {/* Service Heading */}
              <h3 className="text-2xl text-black dark:text-white font-semibold mb-4">
                {items.heading}
              </h3>

              {/* Service Subheading */}
              <p className="text-lg font-normal text-black/50 dark:text-white/50 mb-6">
                {items.subheading}
              </p>

              {/* Learn More Button */}
              <div className="flex items-center justify-center">
                <Link
                  href="/"
                  className="text-lg group duration-300 ease-in-out font-medium text-primary flex items-center relative after:absolute after:w-full after:h-px after:bg-primary after:bottom-0 after:right-0 after:translate-x-full hover:after:translate-x-0"
                >
                  Learn More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="ml-2 text-primary"
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