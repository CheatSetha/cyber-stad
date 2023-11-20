import { VscGithub } from "react-icons/vsc";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
export default function MemberCard({ name, position, avatar, github, linkedin}) {

  return (
    <div className="bg-third z-0 w-[250px] h-[300px]">
      <div id="bg-img" className=" w-[250px] h-[300px]  z-30 relative -top-1 -left-1 bg-secondary flex flex-col justify-center items-center">
        <div class="avatar  border-white border-2 w-[90px] mb-6 h-[90px] ">
          <img
            src={avatar || "https://i.pravatar.cc/150?u=a042581f4e29026024d"}
            alt="avatar"
          />
        </div>
        <h1 className="font-semibold text-2xl">{name || "human"}</h1>
        <p className="font-light text-lg">{position || "ceo"}</p>
        <div className="flex gap-7 mt-3">
          <Link className="cursor-pointer" href={github || "#" }><VscGithub className="text-lg" /></Link>
          <CiLinkedin className="text-lg" />
          <CiTwitter className="text-lg" />
        </div>
      </div>
      {/* <Image
        className="absolute z-50 -mt-[304.5px] -ml-1"
        src="/line.svg"
        width={250}
        height={10}
        alt="line buttom"
      /> */}
    </div>
  );
}
