import Image from "next/image";
import CardVision from "./components/CardVision";
import TimeLine from "./components/TimeLine";

export default function Vision() {
  return (
    <div className="bg-secondary w-full py-10  ">
      <Image
        className="h-[844px] absolute right-0"
        src={"/images/visionline-2.png"}
        width={100}
        height={100}
        alt="bg-line"
      />
      <div className="w-10/12 mx-auto ">
        <h1 className="md:text-7xl text-5xl font-bold">
          Our Vision & Community
        </h1>
        <p className="text-xl font-medium mb-10 text-center mt-4">
          We haved started in this skill - Cybersecurity since{" "}
          <span className="text-primary ">2023</span>, we love to make ourselve{" "}
          <span className="text-primary">busy.</span>
        </p>

        {/* <CardVision /> */}
        <div className="flex max-sm:flex-col flex-wrap max-sm:mb-5 max-sm:justify-center md:gap-10 gap-20 xl:gap-20">
          <span data-aos-once="true" data-aos="fade-up" data-aos-duration="2000">
            <CardVision img={"/images/vision/1.png"} title={"we start"} />{" "}
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            className="md:mt-20"
          >
            <CardVision img={"/images/vision/2.png"} title={"We made"} />{" "}
          </span>
          <span
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            className="xl:mt-40 md:-mt-20"
          >
            <CardVision img={"/images/vision/3.png"} title={"We achieved"} />{" "}
          </span>
        </div>

        <Image
          className="w-[756px]  max-xl:hidden z-40 absolute -mt-40 ms-40"
          src={"/images/Vector7.svg"}
          width={100}
          height={100}
          alt="bg-line"
        />
        {/* timeline */}
        <TimeLine />
      </div>
    </div>
  );
}
