"use client"; // Mark this file as a Client Component
import emailjs from "@emailjs/browser"; // Import EmailJS for email handling
import React, { useState } from "react";
import { useRef } from "react";
import Head from "next/head";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null); // Create a ref for the form element
  const sendEmail = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (formRef.current) {
      emailjs.sendForm("service_a6c97db", "template_sqp92a8",formRef.current,"04GrNtiR0bIZI64G4").then(
        ()=> {
          alert("Message sent successfully!"); // Alert on success
          formRef.current?.reset(); // Reset the form
        },
          (error) => {
          alert("Failed to send message, please try again: " + error.text); // Alert on error
        }
      );
    }
  }
    const [form, setForm] = useState({ name: "", email: "", message: "" });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted", form);
    alert("Thank you for contacting us! We will get back to you soon.");
  };

  // Tabler Icons for Contact Info (Bold)
  const EnvelopeSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
      aria-hidden="true"
    >
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
      <path d="M3 7l9 6l9 -6" />
    </svg>
  );

  const PhoneSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
      aria-hidden="true"
    >
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
  );

  const MapSVG = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
      aria-hidden="true"
    >
      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
    </svg>
  );

  return (
    <>
      {/* Add Metadata for SEO */}
      <Head>
        <title>Contact Us - Your Website Name</title>
        <meta
          name="description"
          content="Get in touch with us through our contact form or visit our location."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-[1440px] bg-white rounded-3xl p-6 shadow-lg md:p-12 flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Left Section: Contact Form */}
          <div className="w-full md:w-1/2 p-6 text-black bg-white rounded-2xl shadow-md">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center md:text-left mb-6 md:mb-8 text-primary">
              Get in Touch
            </h2>
            <p className="text-sm md:text-base text-center md:text-left text-gray-600 mb-6 md:mb-8">
              Have any questions? We'd love to hear from you!
            </p>
            <form ref={formRef} onSubmit={sendEmail}
              role="form"
              className="space-y-4 md:space-y-6"
            >
              <input
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-xl text-black text-sm md:text-base"
                aria-label="Your Name"
              />
              <input
                name="email"
                type="email"
                placeholder="Your Email"
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-xl text-black text-sm md:text-base"
                aria-label="Your Email"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                onChange={handleChange}
                required
                rows={4}
                className="w-full p-3 md:p-4 border border-gray-300 rounded-xl text-black text-sm md:text-base"
                aria-label="Your Message"
              />
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold p-3 md:p-4 rounded-xl transition duration-300 hover:scale-105 hover:bg-opacity-90"
                aria-label="Submit Contact Form"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Section: Contact Information */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 bg-white rounded-2xl shadow-md p-6">
            {/* Contact Details */}
            <div className="bg-primary p-4 md:p-6 rounded-2xl text-white shadow-md">
              <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-4">
                Contact Information
              </h3>
              <p className="flex items-center gap-2 md:gap-3 text-sm md:text-lg">
                {EnvelopeSVG}{" "}
                <span className="font-medium">contact@example.com</span>
              </p>
              <p className="flex items-center gap-2 md:gap-3 text-sm md:text-lg mt-2">
                {PhoneSVG} <span className="font-medium">+251 93 674 7234</span>
              </p>
              <p className="flex items-center gap-2 md:gap-3 text-sm md:text-lg mt-2">
                {MapSVG} <span className="font-medium">Liyat Guest House Location</span>
              </p>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl overflow-hidden shadow-md aspect-video w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3940.6117247941015!2d38.7878901!3d9.0078281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85583ae64f8f%3A0xe42e57386efce382!2sLiya%20Guest%20House!5e0!3m2!1sen!2set!4v1744375534854!5m2!1sen!2set"
                style={{ border: "0", width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;