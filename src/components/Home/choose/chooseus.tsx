"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const features = [
  {
    icon: "mdi:room-service-outline",
    title: "Exceptional Service",
    description:
      "Enjoy 24/7 assistance, convenient airport pickup, and reliable parking service to make your stay effortless.",
  },
  {
    icon: "material-symbols:shield-lock-outline",
    title: "Safety & Cleanliness",
    description:
      "Top-tier hygiene standards, secure facilities, and contactless services ensure peace of mind.",
  },
  {
    icon: "mdi:map-marker-radius-outline",
    title: "Prime Location",
    description:
      "Located close to major attractions, transport, and business hubs for convenience and accessibility.",
  },
  {
    icon: "mdi:calendar-clock-outline", // changed icon for flexible booking
    title: "Flexible Booking",
    description:
      "Book your stay daily, weekly, or monthly — with discounted long-term rates that offer exceptional value and flexibility.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#238967] dark:text-white mb-4 uppercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Us
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-sm sm:text-base mb-12">
          Discover what sets us apart and why guests love staying with us.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-md bg-white dark:bg-gray-900 hover:bg-[#238967] transition duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="flex items-center justify-center mb-4">
                <Icon
                  icon={feature.icon}
                  width={36}
                  height={36}
                  className="text-[#238967] group-hover:text-white transition duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-white transition duration-300 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white transition duration-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
