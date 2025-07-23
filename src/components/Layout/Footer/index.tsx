import React, { FC } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-[#238967]">
      {/* Main Footer Content */}
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16">
          {/* Column 1: Logo and Social Media */}
          <div className="col-span-1">
            <Logo />
            <p className="text-sm sm:text-sm font-normal text-gray-300 dark:text-white/70 mt-6 mb-10 max-w-[80%] leading-relaxed">
  Discover comfort redefined and hospitality perfected — where every detail is crafted to make your stay memorable.
</p>

            <div className="flex gap-6 items-center">
              <Link
                href="https://web.facebook.com/profile.php?id=61577866152880"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black hover:bg-[#A7C48F] rounded-full shadow-xl p-3"
              >
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="16"
                  height="16"
                  className="group-hover:text-white text-white"
                />
              </Link>
              <Link
                href="https://www.instagram.com/bakshotel/"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black hover:bg-[#A7C48F] rounded-full shadow-xl p-3"
              >
                <Icon
                  icon="fa6-brands:instagram"
                  width="16"
                  height="16"
                  className="group-hover:text-white text-white"
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@bakshotel?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-black hover:bg-[#A7C48F] rounded-full shadow-xl p-3"
              >
                <Icon
                  icon="cib:tiktok"
                  width="16"
                  height="16"
                  className="group-hover:text-white text-white"
                />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-white dark:text-white mb-9 font-semibold text-xl">
              Quick Links
            </h4>
            <ul>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-[#A7C48F] dark:hover:text-[#A7C48F] text-base"
                >
                  Home
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#aboutus-section"
                  className="text-white/70 dark:text-white/70 hover:text-[#A7C48F] dark:hover:text-[#A7C48F] text-base"
                >
                  About Us
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#service-section"
                  className="text-white/70 dark:text-white/70 hover:text-[#A7C48F] dark:hover:text-[#A7C48F] text-base"
                >
                  Services
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-[#A7C48F] dark:hover:text-[#A7C48F] text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Pages */}
          <div className="col-span-1">
            <h4 className="text-white dark:text-white mb-9 font-semibold text-xl">
              Other Pages
            </h4>
            <ul>
              <li className="pb-5">
                <Link
                  href="/privace"
                  className="text-white/70 dark:text-white/70 hover:text-[#A7C48F] dark:hover:text-[#A7C48F] text-base"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-[#A7C48F] dark:hover:text-[#A7C48F] text-base"
                >
                  Terms of Use
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-[#A7C48F] dark:hover:text-[#A7C48F] text-base"
                >
                  Disclaimer
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-white/70 dark:text-white/70 hover:text-[#A7C48F] dark:hover:text-[#A7C48F] text-base"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info and Reservation */}
<div className="col-span-1">
  <h4 className="text-white dark:text-white mb-9 font-semibold text-xl">
    Contact Info
  </h4>
  <ul>
    <li className="pb-3 flex items-center gap-2">
      <Icon
        icon="fa-solid:map-marker-alt"
        className="text-white"
        width={20}
        height={20}
      />
      <span className="text-white/70 dark:text-white/70 text-base">
        Aw-Hakm Building, Bob Marley, Addis Ababa
      </span>
    </li>
    <li className="pb-3 flex items-center gap-2">
      <Icon
        icon="fa-solid:phone-alt"
        className="text-white"
        width={20}
        height={20}
      />
      <span className="text-white/70 dark:text-white/70 text-base">
        +251911517716
      </span>
    </li>
    <li className="pb-3 flex items-center gap-2">
      <Icon
        icon="mdi:whatsapp"
        className="text-white"
        width={20}
        height={20}
      />
      <span className="text-white/70 dark:text-white/70 text-base">
        +447915609464
      </span>
    </li>
    <li className="pb-3 flex items-center gap-2">
      <Icon
        icon="fa-solid:envelope"
        className="text-white"
        width={20}
        height={20}
      />
      <span className="text-white/70 dark:text-white/70 text-base">
        bakshotels@gmail.com
      </span>
    </li>
  </ul>
</div>
        </div>

        {/* Reservation Button */}
        
        {/* Divider */}
        <div className="border-t border-grey/15 dark:border-white/15 my-10"></div>

        {/* Copyright Section */}
        <div className="flex justify-between items-center py-6">
          <p className="text-sm text-white/70 dark:text-white/70">
            © 2025 - Baks Hotel. Developed by{" "}
            <Link
              href="https://www.tbctechnologies.org/"
              target="_blank"
              className="hover:text-[#A7C48F]"
            >
              Andargachew Mekonnen
            </Link>
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-white/70 dark:text-white/70 hover:text-[#A7C48F]"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-white/70 dark:text-white/70 hover:text-[#A7C48F]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
