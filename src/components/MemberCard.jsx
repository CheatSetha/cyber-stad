import { VscGithub } from "react-icons/vsc";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import Image from "next/image";
import Link from "next/link";
export default function MemberCard({
  name,
  position,
  avatar,
  github,
  linkedin,
  twitter,
}) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-once="true"
      className="bg-third z-0 w-[250px] h-[300px]"
    >
      <div
        id="bg-img"
        className=" w-[250px] h-[300px]  z-30 relative -top-1 -left-1 bg-secondary flex flex-col justify-center items-center"
      >
        <div class="avatar  border-white border-2 w-[90px] mb-6 h-[90px] ">
          <img
            src={avatar || "https://i.pravatar.cc/150?u=a042581f4e29026024d"}
            alt="avatar"
          />
        </div>
        <h1 className="font-semibold text-2xl">{name || "human"}</h1>
        <p className="font-light text-lg">{position || "ceo"}</p>
        <div className="flex gap-7 mt-3">
          <Link target="_blank" className="cursor-pointer" href={github || "#"}>
            <VscGithub className="text-lg" />
          </Link>
          <Link
            target="_blank"
            className="cursor-pointer"
            href={linkedin || "#"}
          >
            <CiLinkedin className="text-lg" />
          </Link>
          <Link
            target="_blank"
            className="cursor-pointer"
            href={twitter || "#"}
          >
            <CiTwitter className="text-lg" />
          </Link>
        </div>
      </div>
    </div>
  );
}
