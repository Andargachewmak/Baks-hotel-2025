import { FaWifi } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { MdOutlineBedroomParent, MdSupportAgent } from "react-icons/md";

export const ServicesData: {
  icons?: JSX.Element;
  imgSrc?: string;
  heading: string;
  subheading: string;
}[] = [
  {
    icons: <FaWifi />,
    heading: "Wifi",
    subheading: "Enjoy fast and reliable high-speed internet access throughout the entire property, available for free to all our guests.",
  },
  {
    icons: <FaParking />,
    heading: "car parking",
    subheading:  "Secure and spacious on-site parking is available for guests, providing peace of mind and easy access during your stay.",
  },
  {
    icons: <FaShower />,
    heading: "Shower",
    subheading: "All rooms feature modern, clean showers with 24/7 hot water and essential toiletries for your comfort.",
  },
 {
  icons: <MdSupportAgent />,
  heading: "24/7 Front Desk",
  subheading: "Our friendly reception staff are available around the clock to assist with check-ins, bookings, and guest support at any time.",
},
];

export const ExpertData: {
  profession: string;
  name: string;
  imgSrc: string;
}[] = [
];

// data.tsx
export const galleryImages = [
  {
    src: "/images/baks/baksho.jpg",
    name: "Deluxe Double Room",
    description: "A spacious room with a king-sized bed, perfect for couples or solo travelers.",
    price: 35,
  },
  {
    src: "/images/baks/baks.jpg",
    name: "Standard Single Room",
    description: "A cozy and comfortable room ideal for budget-conscious travelers.",
    price: 17,
  },
  {
    src: "/images/baks/baks2.jpg",
    name: "Family Suite",
    description: "A luxurious suite featuring two bedrooms and a living area, perfect for families.",
    price: 45,
  },
  {
    src: "/images/baks/bakss.jpg",
    name: "VIP Executive Room",
    description: "An elegant room with premium amenities, designed for business travelers.",
    price: 27,
  },
];