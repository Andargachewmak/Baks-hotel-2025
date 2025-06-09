import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Cook from "@/components/Home/Cook";
import Gallery from "@/components/Home/Gallery";
import Room from "@/components/Home/Room/room";
import ContactUs from "@/components/Home/ContactUs/contactus";

export const metadata: Metadata = {
  title: "Baks Hotel",
  icons: {
    icon: "/images/baks/bakshotel.svg", // <-- this path must match the public folder
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Cook />
      <Services />
      <Room />
      <Gallery />
      <ContactUs />
    </main>
  );
}
