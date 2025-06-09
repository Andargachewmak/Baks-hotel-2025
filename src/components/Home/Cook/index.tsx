"use client";
import Image from "next/image";

const Cook = () => {
  return (
    <section className="relative py-10 sm:py-14 md:py-16" id="aboutus-section">
      <div className="container mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/baks/baks1.jpg"
              alt="Liyat Guest House"
              width={500}
              height={600}
              className="rounded-lg shadow-lg object-cover w-full max-w-[400px] sm:max-w-[500px] h-auto"
              priority
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Subtitle */}
            <p className="text-[#238967] text-sm sm:text-base font-extrabold tracking-widest uppercase">
              About Us
            </p>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black dark:text-white leading-snug">
              Welcome to Hotel
            </h2>

            {/* Paragraph 1 */}
            <p className="text-black/60 dark:text-white/60 text-base sm:text-lg">
              Welcome to Baks Hotel, where comfort meets elegance. Nestled in a
              prime location, we offer a relaxing and homely atmosphere for
              travelers seeking quality accommodation. Whether you're here for
              business or leisure, our guest house provides a seamless blend of
              modern amenities and traditional hospitality.
            </p>

            {/* Paragraph 2 */}
            <p className="text-black/60 dark:text-white/60 text-base sm:text-lg">
              At Baks Hotel, we prioritize guest satisfaction by offering
              personalized services, well-equipped rooms, and a welcoming
              ambiance. Our goal is to make every stay memorable with a touch of
              warmth and professionalism.
            </p>

            {/* Call-to-Action Button */}
            <a
              href="tel:+251936747234"
              className="inline-block text-base sm:text-lg font-medium rounded-full text-white py-3 px-6 bg-[#238967] hover:bg-transparent hover:text-[#238967] border border-black transition duration-300"
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
