import { FaWifi } from "react-icons/fa";
import { FaParking } from "react-icons/fa";
import { FaShower } from "react-icons/fa";
import { MdOutlineBedroomParent } from "react-icons/md";

export const ServicesData: {
  icons?: JSX.Element;
  imgSrc?: string;
  heading: string;
  subheading: string;
}[] = [
  {
    icons: <FaWifi />,
    heading: "Wifi",
    subheading: "Sed ut perspiciatis unde omnis iste natus error",
  },
  {
    icons: <FaParking />,
    heading: "car parking",
    subheading: "Sed ut perspiciatis unde omnis iste natus error",
  },
  {
    icons: <FaShower />,
    heading: "Shower",
    subheading: "Sed ut perspiciatis unde omnis iste natus error",
  },
  {
    icons: <MdOutlineBedroomParent />,
    heading: "Rooms services",
    subheading: "Sed ut perspiciatis unde omnis iste natus error",
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