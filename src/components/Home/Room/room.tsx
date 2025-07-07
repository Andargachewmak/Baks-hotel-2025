import React from "react";
import Image from "next/image";

const RoomsPage: React.FC = () => {
  const rooms = [
    
  {
    title: "Sweet Room",
    description:
"Elegant and cozy room with a queen bed, ideal for couples or solo guests seeking comfort.",    features: ["1 Queen Bed", "1–2 Guests"],
    imageSrc: "/images/Room/studio4.png",
    altText: "Exclusive Room",
  },
  {
    title: "Twin Room",
    description:
      "Comfortable and spacious room with two beds, perfect for friends or small families.",
    features: ["2 Beds", "Balcony", "Up to 2 Guests"],
    imageSrc: "/images/baks/baks.jpg",
    altText: "Family Room",
  },
  {
    title: "Single Room",
    description:
      "A sleek and modern room tailored for solo travelers or business guests, with workspace and high-speed internet.",
    features: ["1 King Bed",  "Free Wi-Fi"],
    imageSrc: "/images/photo/C2733T01.jpg",
    altText: "Business Room",
  },
];


  return (
    <div className="container mx-auto px-4 pt-24 pb-16" id="rooms-section">
      {/* Push the section lower */}
      <p className='text-[#238967] text-2xl sm:text-3xl  text-center md:text-4xl lg:text-5xl font-semibold mb-12 tracking-tighter   uppercase'> Our Rooms</p>
    
      {/* Room Grid with Animation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-in">
        {rooms.map((room, index) => (
          <Room
            key={index}
            title={room.title}
            description={room.description}
            features={room.features}
            imageSrc={room.imageSrc}
            altText={room.altText}
          />
        ))}
      </div>
    </div>
  );
};

const Room: React.FC<{
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  altText: string;
}> = ({ title, description, features, imageSrc, altText }) => {
  return (
    <div className="group relative rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] bg-gray-800">
      {/* Image Section */}
      <div className="relative w-full h-56 sm:h-64">
        <Image
          src={imageSrc}
          alt={altText}
          fill
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Overlay with Features List */}
        <div className="absolute -bottom-2.5 left-0 right-0 p-2 sm:p-3 bg-gradient-to-t from-black/80 to-transparent">
          <ul className="space-y-1 sm:space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-xs sm:text-sm text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
              >
                <span className="mr-2 text-[#238967]">●</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 bg-white dark:bg-gray-900">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3 group-hover:text-[#238967] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default RoomsPage;