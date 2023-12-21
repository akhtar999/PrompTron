"use client";

import Link from "next/link"; // it will allow us to move to other pages of our app
import Image from "next/image"; // it is going to automatically optimize the image for us

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="PrompTron logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">PrompTron</p>
      </Link>

      {/* mobile navigation */}
       <div></div>
    </nav>
  );
};

export default Nav;
