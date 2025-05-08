"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  // State for Adults and Children inputs
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  // Increment and Decrement Handlers
  const incrementAdults = () => {
    if (adults < 29) setAdults(adults + 1);
  };

  const decrementAdults = () => {
    if (adults > 1) setAdults(adults - 1);
  };

  const incrementChildren = () => {
    if (children < 10) setChildren(children + 1);
  };

  const decrementChildren = () => {
    if (children > 0) setChildren(children - 1);
  };

  return (
    <section
      id="home-section"
      className="relative bg-gray-50 dark:bg-gray-700 overflow-hidden"
      style={{
        backgroundImage: `url(/images/hero/liyat.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "641px", // Fixed height for the hero section
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-start h-full">
          {/* Left Column: Text Content */}
          <div className="col-span-12 text-white text-center">
            <h1 className="text-3xl lg:text-5xl font-semibold mb-5">
              Experience Comfort and Hospitality Like Never Before!
            </h1>
            <p className="text-md lg:text-base font-normal mb-10">
              Nestled in the heart of Addis Abeba, Liyat Guest House offers a
              haven of tranquility and warmth for every traveler.
              <br />
              Whether you're here for business or leisure, we ensure a
              delightful stay that feels just like home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="#cook-section"
                className="text-sm w-full sm:w-auto font-medium rounded-full text-white py-3 px-5 bg-primary hover:text-primary border border-primary hover:bg-transparent"
              >
                Book Now
              </Link>
              <Link
                href="#about-section"
                className="flex border w-full sm:w-auto justify-center rounded-full text-sm font-medium items-center py-3 px-8 text-primary hover:text-white hover:bg-primary"
              >
                Explore now
              </Link>
            </div>
          </div>

          {/* Right Column: Empty (Image is in the background) */}
          <div className="col-span-12"></div>
        </div>
      </div>

      {/* Floating Availability Search Container */}
      <div
        className="absolute bottom-[-20px] left-0 right-0 mx-auto w-full max-w-[600px] bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-20"
        style={{ border: "2px solid #ccc" }}
      >
        <form method="GET" className="mphb_sc_search-form" action="">
          {/* Required Fields Tip */}
          <div className="text-xs text-gray-500 mb-2 text-center">
            <small>
              Required fields are followed by <abbr title="">*</abbr>
            </small>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Check-in Date */}
            <div className="mphb_sc_search-check-in-date">
              <label
                htmlFor="mphb_check_in_date-mphb-search-form"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Check-in <abbr title="">*</abbr>
              </label>
              <input
                id="mphb_check_in_date-mphb-search-form"
                data-datepick-group="mphb-search-form"
                placeholder="Check-in Date"
                required
                type="date"
                name="mphb_check_in_date"
                className="w-full p-1.5 border border-gray-300 rounded focus:outline-none text-sm"
                autoComplete="off"
              />
            </div>

            {/* Check-out Date */}
            <div className="mphb_sc_search-check-out-date">
              <label
                htmlFor="mphb_check_out_date-mphb-search-form"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Check-out <abbr title="">*</abbr>
              </label>
              <input
                id="mphb_check_out_date-mphb-search-form"
                data-datepick-group="mphb-search-form"
                placeholder="Check-out Date"
                required
                type="date"
                name="mphb_check_out_date"
                className="w-full p-1.5 border border-gray-300 rounded focus:outline-none text-sm"
                autoComplete="off"
              />
            </div>

            {/* Adults */}
            <div className="mphb_sc_search-adults">
              <label
                htmlFor="mphb_adults-mphb-search-form"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Adults
              </label>
              <div className="flex items-center border border-gray-300 rounded">
                <span
                  className="px-1.5 cursor-pointer text-sm"
                  onClick={decrementAdults}
                >
                  -
                </span>
                <input
                  type="number"
                  id="mphb_adults-mphb-search-form"
                  name="mphb_adults"
                  value={adults}
                  min="0"
                  max="29"
                  readOnly
                  className="w-full p-1.5 text-center border-none focus:outline-none text-sm bg-transparent"
                />
                <span
                  className="px-1.5 cursor-pointer text-sm"
                  onClick={incrementAdults}
                >
                  +
                </span>
              </div>
            </div>

            {/* Children */}
            <div className="mphb_sc_search-children">
              <label
                htmlFor="mphb_children-mphb-search-form"
                className="block text-xs font-medium text-gray-700 mb-1"
              >
                Children
              </label>
              <div className="flex items-center border border-gray-300 rounded">
                <span
                  className="px-1.5 cursor-pointer text-sm"
                  onClick={decrementChildren}
                >
                  -
                </span>
                <input
                  type="number"
                  id="mphb_children-mphb-search-form"
                  name="mphb_children"
                  value={children}
                  min="0"
                  max="10"
                  readOnly
                  className="w-full p-1.5 text-center border-none focus:outline-none text-sm bg-transparent"
                />
                <span
                  className="px-1.5 cursor-pointer text-sm"
                  onClick={incrementChildren}
                >
                  +
                </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-4 text-center">
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 transition"
            >
              CHECK AVAILABILITY
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;