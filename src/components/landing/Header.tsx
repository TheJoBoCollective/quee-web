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
      <div>
        <button className="bg-[#ACCDFF] px-9 py-[18px] font-medium rounded-xl">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Header;
