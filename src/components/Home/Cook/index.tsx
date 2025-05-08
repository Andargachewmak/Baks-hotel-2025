"use client";
import Image from "next/image";

const Cook = () => {
  return (
    <section className="relative" id="aboutus-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-16">
          {/* Left Column: Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/Liyat/liyat2.jpg"
              alt="Liyat Guest House"
              width={500} // Adjusted width for better alignment
              height={600} // Adjusted height for better alignment
              className="rounded-lg shadow-lg object-cover"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Subtitle */}
            <p className="text-primary text-lg font-normal tracking-widest uppercase">
              About Us
            </p>

            {/* Title */}
            <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
              Welcome to Liyat Guest House
            </h2>

            {/* Paragraph 1 */}
            <p className="text-black/50 dark:text-white/50 text-lg font-normal">
              Welcome to Liyat Guest House, where comfort meets elegance.
              Nestled in a prime location, we offer a relaxing and homely
              atmosphere for travelers seeking quality accommodation. Whether
              you're here for business or leisure, our guest house provides a
              seamless blend of modern amenities and traditional hospitality.
            </p>

            {/* Paragraph 2 */}
            <p className="text-black/50 dark:text-white/50 text-lg font-normal">
              At Liyat Guest House, we prioritize guest satisfaction by offering
              personalized services, well-equipped rooms, and a welcoming
              ambiance. Our goal is to make every stay memorable with a touch of
              warmth and professionalism.
            </p>

            {/* Call-to-Action Button */}
            <a
              href="tel:+251936747234"
              className="text-xl font-medium rounded-full text-white py-4 px-6 bg-primary hover:bg-transparent hover:text-primary border border-primary w-fit transition duration-300"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cook;