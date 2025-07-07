"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/app/api/data";
import Masonry from "react-masonry-css";

type GalleryItem = {
  images: string[];
  name?: string;
  description?: string;
};

const Gallery = () => {
  return (
    <section>
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md"
        id="gallery-section"
      >
        {/* Section Title */}
        <div className="text-center mb-14">
          <p className="text-[#238967] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 tracking-tighter uppercase">
            Our Gallery
          </p>
        </div>

        {/* Masonry Gallery */}
        <div className="my-16 px-6">
          <Masonry
            breakpointCols={{ default: 2, 700: 2, 500: 1 }}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {galleryImages.map((item, index) => (
              <ImageSliderCard
                key={index}
                item={{
                  images: item.images,
                  name: item.name ?? `Gallery Item ${index + 1}`,
                  description:
                    item.description ?? "Explore our beautiful rooms and spaces.",
                }}
              />
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

const ImageSliderCard = ({ item }: { item: GalleryItem }) => {
  const [current, setCurrent] = useState(0);
  const total = item.images?.length || 0;

  useEffect(() => {
    if (total === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);
    return () => clearInterval(interval);
  }, [total]);

  if (total === 0) return null;

  const nextSlide = () => setCurrent((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + total) % total);

  return (
    <div className="overflow-hidden rounded-3xl mb-6 relative group">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={item.images[current]}
          alt={item.name ?? "Gallery image"}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Dots Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {item.images.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${
                current === i ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrent(i)}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        {/* Prev/Next Buttons */}
        {total > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-xl"
              title="Previous image"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-xl"
              title="Next image"
              aria-label="Next image"
            >
              ›
            </button>
          </>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <div className="space-y-4">
            <p className="text-white text-xl font-bold">{item.name}</p>
            <p className="text-white text-lg">{item.description}</p>
            <Link
              href="#"
              className="inline-block text-white rounded-full bg-[#238967] border border-white py-2 px-6 hover:bg-transparent hover:text-white transition duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
