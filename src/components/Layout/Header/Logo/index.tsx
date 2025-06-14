import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-black dark:text-white text-2xl font-semibold gap-4"
    >
      <Image
        src="/images/baks/bakshot.png"
        alt="logo"
        width={100}
        height={30}
        style={{ width: "auto", height: "auto" }}
        quality={100}
      />
      
    </Link>
  );
};

export default Logo;
