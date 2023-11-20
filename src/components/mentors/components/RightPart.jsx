import Image from "next/image";
import MentorPicCard from "./MentorPicCard";

export default function RightPart() {
  return (
    <div
      id="mentor-page"
      className="md:w-[617px]  w-[300px] max-sm:ms-3 md:h-[430px] bg-mentor flex flex-col gap-10 items-center justify-center"
    >
      <Image
        className="absolute max-sm:hidden w-[350px] "
        src="/images/mentorbg.png"
        width={400}
        height={0}
        alt="background line"
      />
      <div className="top-img flex w-full justify-center max-[420px]:gap-0 max-[420px]:-mr-10 gap-x-11 mt-10">
        <MentorPicCard name={"Mom Reaksmey"} img={"/images/mentor/mey.jpg"} />
        <MentorPicCard name={"Chan Chhaya"} img={"/images/mentor/ya.jpg"} />
      </div>
      <div className="top-bt flex w-full justify-center max-[420px]:justify-around">
        <span className="">
          <MentorPicCard name={"Kit Tara"} img={"/images/mentor/tara.JPG"} />
        </span>
        <span className="mt-16 max-[420px]:-ms-[30px] max-[420px]:mt-0">
          <MentorPicCard name={"Kay Keo"} img={"/images/mentor/keo.jpg"} />
        </span>
        <MentorPicCard name={"Sang Sokea"} img={"/images/mentor/kea.jpg"} />
      </div>
    </div>
  );
}
