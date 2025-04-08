import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image
          className="drop-shadow-white"
          src="/logo.svg"
          alt="Quee logo"
          width={130}
          height={64}
        />
      </div>
      <div>
        <button className="bg-[#ACCDFF] px-9 py-[18px] rounded-xl">
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Header;
