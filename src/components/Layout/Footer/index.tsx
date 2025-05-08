import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-darkmode">
      {/* Main Footer Content */}
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
        <div className="grid grid-cols-1 sm:grid-cols-4 lg:gap-20 md:gap-6 sm:gap-12 gap-6 pb-16">
          {/* Column 1: Logo and Social Media */}
          <div className="col-span-1">
            <Logo />
            <p className="text-xs font-medium text-grey dark:text-white/50 mt-5 mb-16 max-w-[70%]">
              Open an account in minutes, get full financial control for much
              longer.
            </p>
            <div className="flex gap-6 items-center">
              <Link
                href="#"
                className="group bg-white hover:bg-primary rounded-full shadow-xl p-3"
              >
                <Icon
                  icon="fa6-brands:facebook-f"
                  width="16"
                  height="16"
                  className="group-hover:text-white text-black"
                />
              </Link>
              <Link
                href="#"
                className="group bg-white hover:bg-primary rounded-full shadow-xl p-3"
              >
                <Icon
                  icon="fa6-brands:instagram"
                  width="16"
                  height="16"
                  className="group-hover:text-white text-black"
                />
              </Link>
              <Link
                href="#"
                className="group bg-white hover:bg-primary rounded-full shadow-xl p-3"
              >
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="16"
                  height="16"
                  className="group-hover:text-white text-black"
                />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-span-1">
            <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">
              Quick Links
            </h4>
            <ul>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Home
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#aboutus-section"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  About Us
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#service-section"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Services
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Other Pages */}
          <div className="col-span-1">
            <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">
              Other Pages
            </h4>
            <ul>
              <li className="pb-5">
                <Link
                  href="/privace"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Terms of Use
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  Disclaimer
                </Link>
              </li>
              <li className="pb-5">
                <Link
                  href="#"
                  className="text-black/70 dark:text-white/70 hover:text-primary dark:hover:text-primary text-base"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info and Reservation */}
          <div className="col-span-1">
            <h4 className="text-black dark:text-white mb-9 font-semibold text-xl">
              Contact Info
            </h4>
            <ul>
              <li className="pb-5 flex items-center gap-2">
                <Icon
                  icon="fa-solid:map-marker-alt"
                  className="text-primary"
                />
                <span className="text-black/70 dark:text-white/70 text-base">
                22 St. Addis Ababa, Ethiopia
                </span>
              </li>
              <li className="pb-5 flex items-center gap-2">
                <Icon icon="fa-solid:phone-alt" className="text-primary" />
                <span className="text-black/70 dark:text-white/70 text-base">
                +251913962955
                </span>
              </li>
              <li className="pb-5 flex items-center gap-2">
                <Icon icon="fa-solid:envelope" className="text-primary" />
                <span className="text-black/70 dark:text-white/70 text-base">
                  mail@domain.com
                </span>
              </li>
            </ul>

           
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-grey/15 dark:border-white/15 my-10"></div>

        {/* Copyright Section */}
        <div className="flex justify-between items-center py-6">
          <p className="text-sm text-black/70 dark:text-white/70">
            © 2025 - Liyat Guest House. Developed by{" "}
            <Link
              href="https://www.tbctechnologies.org/"
              target="_blank"
              className="hover:text-primary"
            >
              TBC Technologies
            </Link>
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-black/70 dark:text-white/70 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-black/70 dark:text-white/70 hover:text-primary"
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