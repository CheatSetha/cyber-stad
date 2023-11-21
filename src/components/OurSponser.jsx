import Image from "next/image";

export default function OurSponser() {
  return (
    <div className="bg-secondary mt-7 ">
      <Image
        className="absolute"
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
            className="md:text-7xl text-5xl self-start font-bold"
          >
            Our Sponser
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="text-2xl self-start text-secondary"
          >
            Thos who help us grow
          </p>
        </div>
        <div className="flex flex-wrap justify-start items-center md:gap-10 gap-4 max-sm:my-3">
          <div>
            {" "}
            <Image
              data-aos="fade-up"
              data-aos-duration="2000"
              className="w-[429px]"
              src="/images/mptc-logo-wide.png"
              width={500}
              height={300}
              alt="sponser"
            />
          </div>
          <div>
            <Image
              data-aos="fade-up"
              data-aos-duration="2000"
              className="md:w-[179px] w-[150px]"
              src="/images/CBRD-LOGO.png"
              width={300}
              height={100}
              alt="sponser"
            />
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="self-start"
          >
            <img
              className="w-[429px] "
              src="/images/CSTAD_120.png"
              alt="cstad logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
