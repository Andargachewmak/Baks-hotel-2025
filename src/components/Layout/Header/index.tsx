"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { headerData } from "../Header/Navigation/menuData";
import Logo from "./Logo";
import Image from "next/image";
import HeaderLink from "../Header/Navigation/HeaderLink";
import MobileHeaderLink from "../Header/Navigation/MobileHeaderLink";
import { useTheme } from "next-themes";
import { Icon } from "@iconify/react/dist/iconify.js";

const Header: React.FC = () => {
  const pathUrl = usePathname();
  const { theme, setTheme } = useTheme();

  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  const navbarRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle scroll event
  const handleScroll = () => {
    setSticky(window.scrollY >= 20);
  };

  // Handle clicks outside the mobile menu
  const handleClickOutside = (event: MouseEvent) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      navbarOpen
    ) {
      setNavbarOpen(false);
    }
  };

  // Add scroll and click event listeners
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        sticky || pathUrl !== "/"
          ? "shadow-lg bg-blue-300 dark:bg-blue-300 py-4"
          : "shadow-none py-8 bg-transparent"
      }`}
    >
      <div className="lg:py-0 py-2">
        <div className="container mx-auto max-w-screen-xl flex items-center justify-between px-4">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-grow items-center gap-8 justify-center">
            {headerData.map((item, index) => (
              <HeaderLink key={index} item={item} />
            ))}
          </nav>

          {/* Right Section (Phone Icon + Burger Menu) */}
          <div className="flex items-center gap-4">
            {/* Phone Icon */}
            <Link href="#" className="text-lg font-medium hover:text-primary">
              <Icon
                icon="solar:phone-bold"
                className="text-primary text-3xl inline-block me-2"
              />
              +251913962955
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="block lg:hidden p-2 rounded-lg focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`block w-6 h-0.5 transition-all duration-300 ${
                  sticky || pathUrl !== "/" ? "bg-black" : "bg-black"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${
                  sticky || pathUrl !== "/" ? "bg-black" : "bg-black"
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${
                  sticky || pathUrl !== "/" ? "bg-black" : "bg-black"
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {navbarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setNavbarOpen(false)}
          />
        )}

        {/* Mobile Navigation Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed top-0 right-0 h-full w-64 bg-gray-500 dark:bg-gray-800 shadow-lg transform transition-transform duration-300 ${
            navbarOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
        >
          <div className="flex items-center justify-between p-4">
            {/* Logo in Mobile Menu */}
            <h2 className="text-lg font-bold text-midnight_text dark:text-midnight_text">
              <Logo />
            </h2>

            {/* Close Button */}
            <button
              onClick={() => setNavbarOpen(false)}
              className="p-2 focus:outline-none"
              aria-label="Close menu Modal"
            >
              <Icon
                icon="mdi:close"
                className="text-2xl text-white dark:text-white"
              />
            </button>
          </div>

          {/* Mobile Links */}
          <nav className="flex flex-col items-start p-4">
            {headerData.map((item, index) => (
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;