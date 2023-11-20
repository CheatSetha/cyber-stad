import { VscGithub } from "react-icons/vsc";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import { Koh_Santepheap } from "next/font/google";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { FaSquareTwitter } from "react-icons/fa6";

const kohsantepheap = Koh_Santepheap({ subsets: ["latin"], weight: "400" });

export default function Card({
  kh_name,
  en_name,
  position,
  github,
  linkedin,
  twitter,
}) {
  return (
    <div className="md:flex  my-8">
      <div className="md:w-6/12">
        <h1 className="text-2xl font-bold ">
          <span className="underline">{en_name}</span> -{" "}
          <span className={`text-primary ${kohsantepheap.className}`}>
            {kh_name}
          </span>
        </h1>
        <p className="text-xl">Instructor - {position}</p>
      </div>
      <div className="flex gap-5 max-sm:mt-3 ">
        <VscGithub className="text-xl" />
        <PiLinkedinLogoBold className="text-xl" />
        <FaSquareTwitter className="text-xl" />
      </div>
    </div>
  );
}
