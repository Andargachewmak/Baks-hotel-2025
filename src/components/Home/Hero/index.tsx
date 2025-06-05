"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const Hero = () => {
  const formRef = useRef<HTMLDivElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  // Modal visibility state
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Room data based on adults and children
  const roomData = [
    {
      id: 1,
      image: "/images/baks/baks2.jpg",
      title: "Standard Room",
      price: "$100/night",
      description:
        "A cozy standard room with a single bed and shared bathroom, perfect for solo travelers.",
      capacity: { adults: 1, children: 0 },
    },
    {
      id: 2,
      image: "/images/Room/buisness.png",
      title: "Business Suite",
      price: "$250/night",
      description:
        "A luxurious business suite with a king-sized bed, private bathroom, and stunning city views.",
      capacity: { adults: 2, children: 0 },
    },
    {
      id: 3,
      image: "/images/Room/excut.png",
      title: "Executive Suite",
      price: "$350/night",
      description:
        "An exclusive executive suite with premium amenities, ideal for business travelers.",
      capacity: { adults: 2, children: 0 },
    },
    {
      id: 4,
      image: "/images/Room/Family-Room.png",
      title: "Family Room",
      price: "$400/night",
      description:
        "A spacious family room with multiple beds, perfect for families or groups.",
      capacity: { adults: 2, children: 2 },
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const increment = (field: "adults" | "children", max: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Math.min(prev[field] + 1, max),
    }));
  };

  const decrement = (field: "adults" | "children", min: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: Math.max(prev[field] - 1, min),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => form.append(key, String(value)));

      const res = await fetch("https://formspree.io/f/mwpbello",  {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: form,
      });

      if (res.ok) {
        setStatus("success");
        setIsModalOpen(true); // Open modal on success
        setFormData({
          name: "",
          email: "",
          checkIn: "",
          checkOut: "",
          adults: 1,
          children: 0,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Find the appropriate room based on adults and children
  const findRoom = () => {
    return (
      roomData.find(
        (room) =>
          room.capacity.adults >= formData.adults &&
          room.capacity.children >= formData.children
      ) || roomData[0] // Default to the first room if no match is found
    );
  };

  return (
    <section
      id="home-section"
      className="relative bg-gray-50 dark:bg-gray-700 overflow-hidden"
      style={{
        backgroundImage: `url(/images/baks/baks.png)`,
        backgroundSize: "cover",
        backgroundPosition: "top-10%",
        paddingBottom: "160px", // Reserve space for the form
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 justify-start h-full">
          <div className="col-span-12 text-white text-center pb-24 lg:pb-32">
            <h1 className="text-3xl lg:text-5xl font-semibold mb-5">
              Experience Comfort and Hospitality <br />Like Never Before!
            </h1>
            <p className="text-md lg:text-base font-normal mb-10">
              Nestled in the heart of Addis Abeba, Baks Hotel offers a haven of tranquility and
              warmth for every traveler.
              <br />
              Whether you're here for business or leisure, we ensure a delightful stay that feels just
              like home.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8">
              {/* Buttons */}
              <button
                onClick={scrollToForm}
                className="text-sm font-medium rounded-full text-white py-3 px-6 bg-[#238967] hover:text-white border border-white hover:bg-transparent transition-all"
              >
                Book Now
              </button>
              <Link
                href="#about-section"
                className="flex border justify-center rounded-full text-sm font-medium items-center py-3 px-8 text-white hover:text-white hover:bg-[#238967] transition-all"
              >
                Explore now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div
        ref={formRef}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[95%] max-w-5xl bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 sm:p-6 z-20 border border-gray-200 mt-8"
      >
        <form onSubmit={handleSubmit}>
          <div className="text-xs text-gray-500 mb-2 text-center">
            <small>
              Required fields are followed by <abbr title="">*</abbr>
            </small>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Full Name <abbr title="">*</abbr>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full p-1.5 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Email <abbr title="">*</abbr>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full p-1.5 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Check-in <abbr title="">*</abbr>
              </label>
              <input
                type="date"
                name="checkIn"
                required
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full p-1.5 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">
                Check-out <abbr title="">*</abbr>
              </label>
              <input
                type="date"
                name="checkOut"
                required
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full p-1.5 border border-gray-300 rounded text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Adults</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="px-1.5 cursor-pointer" onClick={() => decrement("adults", 1)}>
                  -
                </span>
                <input
                  type="number"
                  name="adults"
                  value={formData.adults}
                  readOnly
                  className="w-full p-1.5 text-center border-none text-sm bg-transparent"
                />
                <span className="px-1.5 cursor-pointer" onClick={() => increment("adults", 29)}>
                  +
                </span>
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Children</label>
              <div className="flex items-center border border-gray-300 rounded">
                <span className="px-1.5 cursor-pointer" onClick={() => decrement("children", 0)}>
                  -
                </span>
                <input
                  type="number"
                  name="children"
                  value={formData.children}
                  readOnly
                  className="w-full p-1.5 text-center border-none text-sm bg-transparent"
                />
                <span className="px-1.5 cursor-pointer" onClick={() => increment("children", 10)}>
                  +
                </span>
              </div>
            </div>
          </div>

          {/* Submission Feedback */}
          <div className="text-center mt-2 min-h-[24px]">
            {status === "success" && (
              <p className="text-green-600 text-sm">
                ✅ Room is available! and the room is reserved for you.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </div>

          <div className="mt-4 text-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="bg-[#238967] text-white px-4 py-2 rounded text-sm hover:bg-opacity-90 transition disabled:opacity-50"
            >
              {status === "submitting" ? "Submitting..." : "CHECK AVAILABILITY"}
            </button>
          </div>
        </form>
      </div>

      {/* Modal for Room Details */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl font-bold"
            >
              &times;
            </button>
            <div className="text-center">
              {/* Find the appropriate room */}
              {findRoom() && (
                <>
                  {/* Room Image */}
                  <Image
                    src={findRoom().image}
                    alt={`${findRoom().title} Image`}
                    width={400}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  {/* Room Title */}
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {findRoom().title}
                  </h3>
                  {/* Room Price */}
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{findRoom().price}</p>
                  {/* Room Description */}
                  <p className="text-gray-700 dark:text-gray-400">{findRoom().description}</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;