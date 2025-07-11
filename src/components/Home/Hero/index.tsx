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

  type StatusType = "idle" | "submitting" | "success" | "error";
  const [status, setStatus] = useState<StatusType>("idle");
  const [showMobileForm, setShowMobileForm] = useState(false);
  const [showRooms, setShowRooms] = useState(false);

  const [reservedRoom, setReservedRoom] = useState<{
    id: number;
    image: string;
    title: string;
    price: string;
    description: string;
    capacity: { adults: number; children: number };
  } | null>(null);

  const roomData = [
    {
      id: 1,
      image: "/images/photo/C2728T01.jpg",
      title: "Studio Room",
      price: "",
      description: "A compact and comfortable studio room ideal for solo travelers or short stays.",
      capacity: { adults: 1, children: 0 },
    },
    {
      id: 2,
      image: "/images/baks/baks.jpg",
      title: "Twin Room",
      price: "",
      description: "A modern twin room with two separate beds, perfect for friends or colleagues.",
      capacity: { adults: 2, children: 0 },
    },
    {
      id: 3,
      image: "/images/photo/C2806T01.jpg",
      title: "Single Room",
      price: "",
      description: "A simple and private single room designed for one guest, ideal for short stays.",
      capacity: { adults: 1, children: 0 },
    },
    {
      id: 4,
      image: "/images/photo/C2826T01.jpg",
      title: "Sweet Room",
      price: "",
      description: "A luxurious suite featuring spacious interiors and premium comfort for couples or families.",
      capacity: { adults: 2, children: 2 },
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const increment = (field: "adults" | "children", max: number) => {
    setFormData((prev) => ({ ...prev, [field]: Math.min(prev[field] + 1, max) }));
  };

  const decrement = (field: "adults" | "children", min: number) => {
    setFormData((prev) => ({ ...prev, [field]: Math.max(prev[field] - 1, min) }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => form.append(key, String(value)));
      const res = await fetch("https://formspree.io/f/xjkryrla", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: form,
      });
      if (res.ok) {
        setStatus("success");
        setShowRooms(true);
        setTimeout(() => {
          document.getElementById("rooms-section")?.scrollIntoView({ behavior: "smooth" });
        }, 300);
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
      const video = videoRef.current;
      video.load();
      video.play().catch((err) => console.warn("Autoplay failed:", err));
      video.playbackRate = 0.5;
    }
  }, []);

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
      setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReserveRoom = (room: typeof roomData[0]) => {
    setReservedRoom(room);
    setTimeout(() => {
      setReservedRoom(null);
      setShowRooms(false);
      setFormData({ name: "", email: "", checkIn: "", checkOut: "", adults: 1, children: 0 });
    }, 3000);
  };

  return (
    <section id="home-section" className="relative bg-black overflow-hidden min-h-[60vh] sm:min-h-screen">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/photo/baks-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-top md:object-center z-0"
      >
        <source src="/images/baks/baksvideo1.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      <div className="container mx-auto px-4 pt-24 sm:pt-36 relative z-20 min-h-[60vh] sm:min-h-[100vh]">
        {/* Updated text container with padding-top added here: */}
        <div className="text-white text-center pt-20 pb-32 sm:pb-28">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4">BAKS Hotel Apartment - Stay Your Way</h1>
          <p className="text-base sm:text-lg lg:text-2xl mb-6">
           Welcome to BAKS – A Smart Stay for Every Schedule… Short stays or extended visits,
            BAKS gives you the freedom of choice with hotel-style comfort and apartment-style 
            convenience
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

      {!showRooms && !reservedRoom && (
        <div className="flex justify-center px-2 sm:px-4 md:px-8">
          <div
            ref={(el) => {
              formRef.current = el;
              formContainerRef.current = el;
            }}
            className={`z-30 border border-gray-200 bg-white dark:bg-gray-800 shadow-xl rounded-t-xl 
              p-3 sm:p-4 md:p-3 transition-all duration-300
              w-full max-w-md md:max-w-5xl mx-auto
              ${showMobileForm ? "block fixed bottom-6 left-1/2 -translate-x-1/2 z-50" : "hidden"} 
              md:block md:mt-0 md:absolute md:bottom-0 md:left-1/2 md:transform md:-translate-x-1/2`}
          >
            <form onSubmit={handleSubmit}>
              {showMobileForm && (
                <div className="flex justify-end md:hidden mb-2">
                  <button
                    onClick={() => setShowMobileForm(false)}
                    className="text-gray-500 hover:text-gray-700 font-bold text-xl"
                    type="button"
                  >
                    &times;
                  </button>
                </div>
              )}

              <div className="text-xs text-gray-500 mb-2 text-center">
                <small>
                  Required fields are followed by <abbr title="">*</abbr>
                </small>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full py-2 px-2 border border-gray-300 rounded text-sm"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-2 px-2 border border-gray-300 rounded text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {["checkIn", "checkOut"].map((field) => (
                  <input
                    key={field}
                    type="date"
                    name={field}
                    required
                    value={formData[field as "checkIn" | "checkOut"]}
                    onChange={handleChange}
                    className="w-full py-2 px-2 border border-gray-300 rounded text-sm"
                  />
                ))}
                {["adults", "children"].map((field) => (
                  <div key={field} className="flex items-center border border-gray-300 rounded">
                    <span
                      className="px-2 cursor-pointer"
                      onClick={() => decrement(field as any, field === "adults" ? 1 : 0)}
                    >
                      -
                    </span>
                    <input
                      type="number"
                      name={field}
                      readOnly
                      value={formData[field as "adults" | "children"]}
                      className="w-full text-center bg-transparent py-2 text-sm"
                    />
                    <span
                      className="px-2 cursor-pointer"
                      onClick={() => increment(field as any, field === "adults" ? 29 : 10)}
                    >
                      +
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-2 min-h-[24px]">
                {status === "success" && <p className="text-green-600 text-sm">✅ Room is reserved for you.</p>}
                {status === "error" && <p className="text-red-600 text-sm">❌ Something went wrong.</p>}
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
      )}

      {showRooms && !reservedRoom && (
        <div id="rooms-section" className="container mx-auto px-4 py-12 relative z-30 max-w-6xl">
          <h2 className="text-white text-3xl font-semibold mb-6 text-center">Available Rooms</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {roomData.map((room) => (
              <div
                key={room.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col"
              >
                <Image
                  src={room.image}
                  alt={room.title}
                  width={400}
                  height={200}
                  className="object-cover"
                />
                <div className="p-4 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{room.title}</h3>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">{room.price}</p>
                  <p className="text-gray-600 dark:text-gray-400 flex-grow">{room.description}</p>
                  <button
                    onClick={() => handleReserveRoom(room)}
                    className="mt-4 bg-[#238967] text-white py-2 rounded hover:bg-opacity-90 transition"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {reservedRoom && (
        <div className="container mx-auto px-4 py-20 relative z-30 max-w-md text-center text-white">
          <div className="bg-[#238967] rounded-lg p-10 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">🎉 Your room is reserved!</h2>
            <p className="mb-4 text-lg">{reservedRoom.title}</p>
            <Image
              src={reservedRoom.image}
              alt={reservedRoom.title}
              width={400}
              height={200}
              className="mx-auto rounded-lg"
            />
            <p className="mt-4">Thank you for booking with us, {formData.name || "Guest"}.</p>
            <p className="mt-2">We look forward to hosting you.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
