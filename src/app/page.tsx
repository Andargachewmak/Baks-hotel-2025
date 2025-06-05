import React from "react";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Cook from "@/components/Home/Cook";
// import Expert from "@/components/Home/Expert";
import Gallery from "@/components/Home/Gallery";
// import Newsletter from "@/components/Home/Newsletter";
import { Metadata }     from "next";
import Room from "@/components/Home/Room/room";
import ContactUs from "@/components/Home/ContactUs/contactus";
export const metadata: Metadata = {
  title: "Baks Hotel",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Cook />
      <Services />
      <Room />
      {/* <Expert /> */}
      <Gallery />
     <ContactUs/>
      {/* <Newsletter /> */}
    </main>
  );
}
