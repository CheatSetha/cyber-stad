"use client"
import Image from "next/image";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";
import DrodDownNav from "./DrodDownNav";
import { useEffect, useState } from "react";
import Headroom from "react-headroom";

export default function Navbar() {

  



  return (
    <Headroom>
    <div className="navbar   bg-primary p-0">

      <div className={`navbar w-10/12 mx-auto p-0 shadow-none text-2xl font-semibold bg-primary h-[80px] `}>
        <div className="navbar-start">
          <Link href={"/"} className="navbar-item ">
            <Image
              className="w-full"
              src={"/images/logo.png"}
              width={300}
              height={50}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center lg:gap-10 md:gap-5  max-sm:hidden">
          <Link href="/" className=" navbar-item-custom ">
            Home
          </Link>
          <Link href="#aboutus" className=" navbar-item-custom">
            About
          </Link>
          <Link href="#contactus" className="navbar-item-custom">
            Contact
          </Link>
        </div>
        <div className="navbar-end">
          <Link
            target="_blank"
            href={"https://github.com/CheatSetha"}
            className="navbar-item max-sm:hidden"
          >
            <VscGithub className="text-primary text-2xl " />
          </Link>
          <span className="max-sm:block hidden">
            <DrodDownNav />
          </span>
        </div>
      </div>
    </div>
    </Headroom>
  );
}
