"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-200 flex justify-between items-center max-w-[1200px] mx-auto py-5 px-4 relative z-30">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          width={74}
          height={29}
          style={{ height: "auto" }}
        />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden lg:flex h-full gap-12">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* Mobile Menu Icon */}
      <Image
        src="/menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
