import React from "react";
import Image from "next/image";

const RoomsPage: React.FC = () => {
  const rooms = [
    {
      title: "Exclusive Room",
      description:
        "Luxurious room with private pool and garden view, perfect for couples.",
      features: ["1 Queen Bed", "Private Pool", "2 - 5 Guests"],
      imageSrc: "/images/Room/excut.png",
      altText: "Exclusive Room",
    },
    {
      title: "Family Room",
      description:
        "Spacious room designed for families with comfortable amenities.",
      features: ["2 Queen Beds", "Balcony", "Up to 6 Guests"],
      imageSrc: "/images/Room/Family-Room.png",
      altText: "Family Room",
    },
    {
      title: "Business Room",
      description:
        "Modern room equipped with workspace and high-speed internet.",
      features: ["1 King Bed", "Work Desk", "Free Wi-Fi"],
      imageSrc: "/images/Room/buisness.png",
      altText: "Business Room",
    },
  ];

  return (
    <div className="container mx-auto px-4 pt-24 pb-16" id="rooms-section">
      {/* Push the section lower */}
      <p className='text-primary text-lg text-center font-normal mb-3 tracking-widest uppercase'>Rooms</p>
      <h2 className="text-3xl md:text-4xl font-bold text-center text-black dark:text-white mb-12">
        Our Comfort Rooms
      </h2>

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
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent">
          <ul className="space-y-1 sm:space-y-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-xs sm:text-sm text-white opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out"
              >
                <span className="mr-2 text-blue-400">●</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-6 bg-white dark:bg-gray-900">
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">
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