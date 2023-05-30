import Link from "next/link";
import React from "react";
import Image from "next/image";

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-40">
      <Link href="/" className="flex items-center justify-center">
        <Image src="/logo.png" alt="LeetClone" width={300} height={300}/>
      </Link>
      <div className="flex items-center">
        <button className="bg-brand-orange text-white px-2 py-1 sm:px-4 rounded-md text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-2 hover:border-brand-orange border-transparent transition duration-300 ease-in-out">
            Sign In
        </button>
      </div>
    </div>
  );
};
export default Navbar;
