import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto py-4">
      <div className="flex gap-2 items-center list-none">
        <Link href={"/"}>
          <li>Home</li>
        </Link>
        <Link href={"/destinations"}>
          <li>Destinations</li>
        </Link>
        <Link href={"/"}>
          <li>My Bookings</li>
        </Link>
      </div>
      <div>
        <Image
          src={"/assets/Wanderlast.png"}
          alt="Logo"
          width={200}
          height={200}
        ></Image>
      </div>
      <div className="flex items-center gap-4">
        <Link href={"/"}>Login</Link>
        <Link href={"/"}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
