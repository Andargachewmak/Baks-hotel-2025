"use client";
import Image from "next/image";

const Cook = () => {
  return (
<section className="relative pt-20 pb-10 sm:pt-24 sm:pb-14 md:pt-28 md:pb-16" id="aboutus-section">
      <div className="container mx-auto px-4 lg:max-w-screen-xl md:max-w-screen-md">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Column: Image */}
          <div className="flex justify-center lg:justify-end h-full">
            <div className="relative w-full max-w-[600px] h-full rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/images/baks/baks.png"
                alt="Liyat Guest House"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Subtitle */}
            <p className="text-[#238967] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 tracking-tighter uppercase">
              About Baks
            </p>

            {/* Paragraph 1 */}
            <p className="text-black/60 dark:text-white/60 text-base sm:text-lg">
              BAKS is a small, family-run hotel apartment that’s been welcoming guests since 2008.{" "}
              What started as a simple idea—to offer a flexible and comfortable place for both{" "}
              short and long stays—has grown into a trusted home-away-from-home for travelers{" "}
              from all walks of life.
            </p>

            {/* Paragraph 2 */}
            <p className="text-black/60 dark:text-white/60 text-base sm:text-lg">
              What sets us apart isn’t just our convenient location or flexible room options—it’s
              our people. At BAKS, we genuinely care about our guests. Our friendly staff go
              above and beyond to make sure everyone feels at home, whether you’re here for a
              night or a few months.
            </p>

            {/* Paragraph 3 */}
            <p className="text-black/60 dark:text-white/60 text-base sm:text-lg">
              Many of our guests return time and time again, not just for the space and comfort,
              but for the warmth and personal touch they’ve come to expect from us. We’re proud of
              the loyal community we’ve built over the years—and we look forward to welcoming you
              into it.
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
