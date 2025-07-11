"use client";

import React from "react";
import Image from "next/image";

const RoomsPage: React.FC = () => {
  const rooms = [
    {
      title: "Serviced Apartments – Perfect for Long Stays",
      description:
        "Elegant and cozy space featuring a queen bed, ideal for long stays with complete amenities and great comfort.",
      features: [
        "Bedroom, living area, full kitchen, and private bathroom",
        "Housekeeping",
        "Laundry facilities",
        "Discounted long-stay rates",
        "TV",
      ],
      imageSrc: "/images/photo/C2819T01.jpg",
      altText: "Serviced Apartment Room",
    },
    {
      title: "Hotel Rooms – Ideal for Short Stays",
      description:
        "Comfortable and spacious hotel room with two beds, perfect for travelers and families visiting short term.",
      features: [
        "Double bed for 2 people",
        "En-suite bathroom",
        "Wi-Fi, TV",
        "Daily housekeeping",
      ],
      imageSrc: "/images/baks/baks.jpg",
      altText: "Hotel Room",
    },
  ];

  return (
    <div className="max-w-[1600px] mx-auto px-6 pt-24 pb-20" id="rooms-section">
      <p className="text-[#238967] text-2xl sm:text-3xl text-center md:text-4xl lg:text-5xl font-semibold mb-16 tracking-tighter uppercase">
        Our Rooms
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
        {rooms.map((room, index) => {
          const [firstLine, secondLine] = room.title.split(" – ");
          return (
            <Room
              key={index}
              firstLine={firstLine}
              secondLine={secondLine}
              description={room.description}
              features={room.features}
              imageSrc={room.imageSrc}
              altText={room.altText}
              priority={index < 2}
            />
          );
        })}
      </div>
    </div>
  );
};

const Room: React.FC<{
  firstLine: string;
  secondLine: string;
  description: string;
  features: string[];
  imageSrc: string;
  altText: string;
  priority?: boolean;
}> = ({
  firstLine,
  secondLine,
  description,
  features,
  imageSrc,
  altText,
  priority,
}) => {
  return (
    <div className="group relative w-full max-w-[700px] rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] bg-gray-800 shadow-2xl flex flex-col min-h-[300px]">
      {/* Image Section */}
      <div className="relative w-full h-[26rem]">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay with Features */}
        <div className="absolute -bottom-2.5 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-base text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
              >
                <span className="mr-2 text-[#238967] text-lg">●</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 sm:p-10 bg-white dark:bg-gray-900 flex-grow">
        <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4 group-hover:text-[#238967] transition-colors duration-300">
  {firstLine}
  <br />
  <span className="block pl-4 sm:pl-6">{secondLine}</span>
</h3>

        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RoomsPage;
