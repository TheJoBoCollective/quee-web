import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link href="/">
        <Image
          className="drop-shadow-white"
          src="/logo.svg"
          alt="Quee logo"
          width={130}
          height={64}
        />
      </Link>
      <div className="mr-2 md:mr-0">
        <button className="bg-[#ACCDFF] px-4 py-3 md:px-9 md:py-[18px] font-medium rounded-xl">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Header;
