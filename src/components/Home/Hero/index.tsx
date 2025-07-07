"use client";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

const Hero = () => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const formContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
  });

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showMobileForm, setShowMobileForm] = useState(false);

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
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      Object.entries(formData).forEach(([key, value]) =>
        form.append(key, String(value))
      );

      const res = await fetch("https://formspree.io/f/xjkryrla", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });

      if (res.ok) {
        setStatus("success");
        setIsModalOpen(true);
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

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  // Close form on outside click (mobile only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showMobileForm &&
        formContainerRef.current &&
        !formContainerRef.current.contains(event.target as Node)
      ) {
        setShowMobileForm(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMobileForm]);

  const scrollToForm = () => {
    if (window.innerWidth < 768) {
      setShowMobileForm(true);
      setTimeout(() => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const findRoom = () => {
    return (
      roomData.find(
        (room) =>
          room.capacity.adults >= formData.adults &&
          room.capacity.children >= formData.children
      ) || roomData[0]
    );
  };

  return (
    <section
      id="home-section"
      className="relative bg-black overflow-hidden pb-[160px]"
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/images/baks/baksvideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      {/* Hero Text */}
      <div className="container mx-auto px-4 pt-28 sm:pt-32 relative z-10">
        <div className="text-white text-center pb-20 sm:pb-28">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4">
            Welcome to Baks Hotel
          </h1>
          <p className="text-base sm:text-lg lg:text-2xl mb-6">
            A clean and quiet place to rest.
            <br className="hidden sm:block" />
            Perfect for locals and diaspora looking for a simple, affordable
            stay.
          </p>
          <div className="flex justify-center">
            <button
              onClick={scrollToForm}
              className="w-fit sm:w-auto bg-[#238967] hover:bg-transparent text-white border border-white px-4 py-2 rounded-full text-sm font-medium transition sm:text-base sm:px-6 sm:py-2.5"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="flex justify-center px-2 sm:px-4 md:px-8">
        <div
          ref={(el) => {
            formRef.current = el;
            formContainerRef.current = el;
          }}
          className={`z-20 border border-gray-200 bg-white dark:bg-gray-800 shadow-xl rounded-t-xl 
            p-3 sm:p-4 md:p-3 transition-all duration-300
            w-full max-w-md md:max-w-5xl mx-auto
            ${showMobileForm ? "block mt-4" : "hidden"} md:block md:mt-0
            md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2`}
        >
          {/* Close Button (mobile only) */}
          {showMobileForm && (
            <div className="flex justify-end md:hidden mb-2">
              <button
                onClick={() => setShowMobileForm(false)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 font-bold text-xl"
                aria-label="Close form"
                type="button"
              >
                &times;
              </button>
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="text-xs text-gray-500 mb-2 text-center">
              <small>
                Required fields are followed by <abbr title="">*</abbr>
              </small>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full py-2 px-2 border border-gray-300 rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full py-2 px-2 border border-gray-300 rounded text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {["checkIn", "checkOut"].map((field) => (
                <div key={field}>
                  <label className="block text-xs font-medium text-gray-700 mb-1 capitalize">
                    {field.replace("check", "Check-")} *
                  </label>
                  <input
                    type="date"
                    name={field}
                    required
                    value={formData[field as "checkIn" | "checkOut"]}
                    onChange={handleChange}
                    className="w-full py-2 px-2 border border-gray-300 rounded text-sm"
                  />
                </div>
              ))}
              {["adults", "children"].map((field) => (
                <div key={field}>
                  <label className="block text-xs font-medium text-gray-700 mb-1 capitalize">
                    {field}
                  </label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <span
                      className="px-2 cursor-pointer select-none"
                      onClick={() =>
                        decrement(field as any, field === "adults" ? 1 : 0)
                      }
                    >
                      -
                    </span>
                    <input
                      type="number"
                      name={field}
                      value={formData[field as "adults" | "children"]}
                      readOnly
                      className="w-full py-2 text-center border-none text-sm bg-transparent"
                    />
                    <span
                      className="px-2 cursor-pointer select-none"
                      onClick={() =>
                        increment(field as any, field === "adults" ? 29 : 10)
                      }
                    >
                      +
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-2 min-h-[24px]">
              {status === "success" && (
                <p className="text-green-600 text-sm">✅ Room is reserved for you.</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm">❌ Something went wrong.</p>
              )}
            </div>

            <div className="mt-2 text-center">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="bg-[#238967] text-white text-sm px-4 py-2 rounded hover:bg-opacity-90 transition disabled:opacity-50"
              >
                {status === "submitting" ? "Submitting..." : "CHECK AVAILABILITY"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Room Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setShowMobileForm(false);
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 text-xl font-bold"
            >
              &times;
            </button>
            <div className="text-center">
              {findRoom() && (
                <>
                  <Image
                    src={findRoom().image}
                    alt={findRoom().title}
                    width={400}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                    {findRoom().title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {findRoom().price}
                  </p>
                  <p className="text-gray-700 dark:text-gray-400">
                    {findRoom().description}
                  </p>
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
