"use client";
import Image from "next/image";
import { galleryImages } from "@/app/api/data";
import Masonry from "react-masonry-css";
import Link from "next/link";

const Gallery = () => {
  return (
    <section>
      <div
        className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md"
        id="gallery-section"
      >
        {/* Section Title */}
        <div className="text-center mb-14">
          <p className="text-primary text-lg font-normal mb-3 tracking-widest uppercase">
            Our Gallery
          </p>
          <h2 className="text-3xl lg:text-5xl font-semibold text-black dark:text-white">
            Explore Our Guest House
          </h2>
        </div>

        {/* Masonry Gallery */}
        <div className="my-16 px-6">
          <Masonry
            breakpointCols={{ default: 2, 700: 2, 500: 1 }}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-3xl mb-6 relative group"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                    {/* Content */}
                    <div className="space-y-4">
                      <p className="text-white text-xl font-bold">{item.name}</p>
                      <p className="text-white text-lg">{item.description}</p>
                      <Link
                        href="#"
                        className="inline-block text-white rounded-full bg-primary border border-primary py-2 px-6 hover:bg-transparent hover:text-primary transition duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Masonry>
        </div>
      </div>
    </section>
  );
};

export default Gallery;