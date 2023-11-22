import Image from "next/image";

export default function EndIng() {
  return (
    <div className="pt-10 max-sm:pb-4">
      <div className="w-10/12 mx-auto ">
        <div className="flex justify-center">
          <Image
            className=""
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-once="true"
            src={"/images/logo.png"}
            width={300}
            height={100}
            alt="logo"
          />
        </div>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
          className="text-xl font-medium mb-10 text-center mt-4"
        >
          We - Leaners try to explore new stuff for improve our skill and
          develop more advantages for our society and people in the next
          generation.
        </p>
      </div>
      <div className="flex mt-20 justify-around gap-40 max-sm:hidden">
        <div className="flex gap-10">
          <div className="w-[83px] bg-secondary self-end box-stand h-[250px]"></div>
          <div className="w-[83px] bg-secondary self-end box-stand h-[180px]"></div>
          <div className="w-[83px] bg-secondary self-end box-stand h-[250px]"></div>
          <div className="w-[83px] bg-secondary self-end box-stand h-[130px]"></div>
        </div>
        <div className="flex gap-10 max-sm:hidden max-[768px]:hidden md:hidden xl:flex ">
          <img
            className="w-[320px] opacity-10"
            src="/images/end/1.png"
            alt="hacker"
          />
          <img
            className="w-[250px] opacity-10"
            src="/images/end/2.png"
            alt="hacker"
          />
        </div>
      </div>
    </div>
  );
}
