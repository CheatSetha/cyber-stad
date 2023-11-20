import Image from "next/image";
import MentorPicCard from "./MentorPicCard";

export default function RightPart() {
  return (
    <div className="md:w-[617px]  w-[320px] max-sm:ms-3 md:h-[430px] bg-mentor flex flex-col gap-10 items-center justify-center">
        <Image className="absolute max-sm:hidden w-[350px] " src="/images/mentorbg.png" width={400} height={0} alt="background line"/>
        <div className="top-img flex w-full justify-center gap-x-11 mt-10">
        <MentorPicCard />
        <MentorPicCard />
        </div>
        <div className="top-bt flex w-full justify-center ">
        <span className=""><MentorPicCard /></span>
        <span className="mt-16"><MentorPicCard /></span>
        <MentorPicCard />
        </div>
       
       
    </div>
  )
}