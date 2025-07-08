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
  const [reservedRoom, setReservedRoom] = useState<null | {
    id: number;
    image: string;
    title: string;
    price: string;
    description: string;
    capacity: { adults: number; children: number };
  }>(null);

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
      capacity: { adults: 3, children: 0 },
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
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
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

  const scrollToForm = () => {
    if (window.innerWidth < 768) {
      setShowMobileForm(true);
      setTimeout(() => formRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch((err) => console.warn("Autoplay failed:", err));
      videoRef.current.playbackRate = 0.5;
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

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (showRooms || reservedRoom) {
      html.classList.add("overflow-hidden");
      body.classList.add("overflow-hidden");
    } else {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
    }

    return () => {
      html.classList.remove("overflow-hidden");
      body.classList.remove("overflow-hidden");
    };
  }, [showRooms, reservedRoom]);

  return (
    <section id="home-section" className="relative bg-black overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/baks/baks.png"
        className="absolute inset-0 w-full h-90 object-cover object-top md:object-center z-0"
      >
        <source src="/images/baks/baksvideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />

      <div className="container mx-auto px-4 pt-28 sm:pt-32 relative z-10">
        <div className="text-white text-center pb-20 sm:pb-28">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold mb-4">Welcome to Baks Hotel</h1>
          <p className="text-base sm:text-lg lg:text-2xl mb-6">
            A clean and quiet place to rest.
            <br className="hidden sm:block" />
            Perfect for locals and diaspora looking for a simple, affordable stay.
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
      {!showRooms && !reservedRoom && (
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
                  Required fields are followed by <abbr title="required">*</abbr>
                </small>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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

              {/* Check-In, Check-Out, Adults, Children */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                {/* Check-In */}
                <div>
                  <label
                    htmlFor="checkIn"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Check-In
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full py-2 px-2 border border-gray-300 rounded text-sm"
                  />
                </div>

                {/* Check-Out */}
                <div>
                  <label
                    htmlFor="checkOut"
                    className="block text-xs font-medium text-gray-700 mb-1"
                  >
                    Check-Out
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full py-2 px-2 border border-gray-300 rounded text-sm"
                  />
                </div>

                {/* Adults */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Adults
                  </label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <span
                      className="px-2 cursor-pointer select-none"
                      onClick={() => decrement("adults", 1)}
                    >
                      -
                    </span>
                    <input
                      type="number"
                      name="adults"
                      value={formData.adults}
                      readOnly
                      className="w-full py-2 text-center border-none text-sm bg-transparent"
                    />
                    <span
                      className="px-2 cursor-pointer select-none"
                      onClick={() => increment("adults", 29)}
                    >
                      +
                    </span>
                  </div>
                </div>

                {/* Children */}
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">
                    Children
                  </label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <span
                      className="px-2 cursor-pointer select-none"
                      onClick={() => decrement("children", 0)}
                    >
                      -
                    </span>
                    <input
                      type="number"
                      name="children"
                      value={formData.children}
                      readOnly
                      className="w-full py-2 text-center border-none text-sm bg-transparent"
                    />
                    <span
                      className="px-2 cursor-pointer select-none"
                      onClick={() => increment("children", 10)}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center mt-2 min-h-[24px]">
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
                  {status === "submitting"
                    ? "Submitting..."
                    : "CHECK AVAILABILITY"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Floating Room Panel */}
      {(showRooms || reservedRoom) && (
        <div className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-gray-200">
            {reservedRoom ? (
              <div className="text-center p-6 text-white bg-[#238967] rounded-lg">
                <h2 className="text-3xl font-bold mb-4">🎉 Your room is reserved!</h2>
                <p className="mb-4 text-lg">{reservedRoom.title}</p>
                <Image
                  src={reservedRoom.image}
                  alt={reservedRoom.title}
                  width={400}
                  height={200}
                  className="mx-auto rounded-lg"
                />
                <p className="mt-4">
                  Thank you for booking with us, {formData.name || "Guest"}.
                </p>
                <p className="mt-2">We look forward to hosting you.</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between items-center px-4 pt-4">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Available Rooms
                  </h2>
                  <button
                    onClick={() => setShowRooms(false)}
                    className="text-gray-600 hover:text-red-500 text-2xl font-bold"
                    aria-label="Close modal"
                  >
                    &times;
                  </button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 p-4">
                  {roomData.map((room) => (
                    <div
                      key={room.id}
                      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
                    >
                      <Image
                        src={room.image}
                        alt={room.title}
                        width={400}
                        height={200}
                        className="object-cover"
                      />
                      <div className="p-4 flex-grow flex flex-col">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                          {room.title}
                        </h3>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                          {room.price}
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 flex-grow">
                          {room.description}
                        </p>
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
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
