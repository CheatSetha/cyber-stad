"use client";
import { MdOutlineCheckBox } from "react-icons/md";
import TapCustom from "./components/TapCustom";

export default function WhatWeDone() {
  return (
    <div className="py-10">
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className="md:text-7xl text-5xl font-bold text-center"
      >
        What we have learned
      </h1>

      <div className="md:w-[675px] w-full max-sm:px-5 mx-auto">
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="text-xl font-medium mb-10 text-end mt-4"
        >
          <MdOutlineCheckBox className="inline text-primary" /> Making all
          hacking magic happened
        </p>
        <TapCustom />
      </div>
    </div>
  );
}
