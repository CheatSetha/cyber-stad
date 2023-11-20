"use client";

import { BASE_LAB_BANNER } from "@/constant/base-lab-banner";
import { Carousel } from "flowbite-react";

export default function CarouselTest() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 ">
      <Carousel>
        {BASE_LAB_BANNER.map((item, index) => {
          return (
            <div
              key={item.id}
              className="w-[200px] landing-card h-[200px] flex flex-col justify-center items-center shadow-2xl"
            >
              <h2 className="text-5xl font-bold text-center ">{item.value}+</h2>
              <p className="text-xl">{item.name}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
