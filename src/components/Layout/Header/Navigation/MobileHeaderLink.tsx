"use client";
import Link from "next/link";
import { HeaderItem } from "@/types/menu";

interface MobileHeaderLinkProps {
  item: HeaderItem;
  onClick?: () => void;
}

const MobileHeaderLink: React.FC<MobileHeaderLinkProps> = ({ item, onClick }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = item.href.replace("#", "");
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });

      // Close menu *after* scroll starts
      setTimeout(() => {
        onClick?.();
      }, 300);
    } else {
      onClick?.(); // fallback if no section found
    }
  };

  return (
    <a
      href={item.href}
      onClick={handleClick}
      className="text-base text-black dark:text-white font-medium mb-4"
    >
      {item.label}
    </a>
  );
};

export default MobileHeaderLink;
