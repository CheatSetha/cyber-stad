import Image from "next/image";

export default function OurSponser() {
  return (
    <div className="bg-secondary mt-7 ">
      <Image
        className="absolute max-md:hidden"
        src={"/images/Vector 4.svg"}
        width={100}
        height={100}
        alt="bg-line"
      />
      <div className=" w-10/12 mx-auto h-[329px] md:flex justify-between gap-10 items-center">
        <div className="flex justify-start flex-shrink-0 items-center flex-col me-20">
          <h1
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            className="lg:text-7xl text-5xl self-start font-bold"
          >
            Our Sponser
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            className="text-2xl self-start text-secondary"
          >
            Those who help us grow
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
          className="flex flex-wrap justify-start items-center md:gap-5 xl:gap-10 gap-4 max-sm:my-3"
        >
          <div>
            {" "}
            <Image
              className="xl:w-[429px] max-sm:w-[320px] md:w-[270px] "
              src="/images/mptc-logo-wide.png"
              width={500}
              height={300}
              alt="sponser"
            />
          </div>
          <div>
            <Image
            id="cbrd-logo"
              className="md:w-[110px] xl:w-[150px] w-[140px] "
              src="/images/CBRD-LOGO.png"
              width={300}
              height={100}
              alt="sponser"
            />
          </div>

          <div className="self-start -ms-1.5">
            <img
              className="w-[500px]  "
              src="/images/CSTAD_120.png"
              alt="cstad logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
