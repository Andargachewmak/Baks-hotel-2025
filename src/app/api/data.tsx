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
    images: [
      "/images/photo/C2806T01.jpg",
      "/images/photo/C2804T01.jpg",
      "/images/photo/C2799T01.jpg",
    ],
    name: "",
    description:
      "",
 
  },
  {
    images: [
      "/images/photo/C2789T01.jpg",
      "/images/photo/C2714T01.jpg",
      "/images/photo/C2752T01.jpg",
    ],
    name: "",
    description:
      "",
  
  },
  {
    images: [
      "/images/photo/DSC08980.jpg",
      "/images/photo/DSC08981.jpg",
      "/images/photo/DSC08978.jpg",
    ],
   name: "",
    description:
      "",
    
  },
  {
    images: [
      "/images/photo/C2826T01.jpg",
      "/images/photo/C2824T01.jpg",
      "/images/photo/C2821T01.jpg",
    ],
    name: "",
    description:
      "",
    
  },
   
];
