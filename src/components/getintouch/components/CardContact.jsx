import { VscGithub } from "react-icons/vsc";
import { CiLinkedin, CiTwitter } from "react-icons/ci";
import Link from "next/link";

export default function CardContact({ i, title }) {
  return (
    <div
      id="card-contact"
      className="md:w-[300px] bg-secondary md:h-[300px] w-[150px] flex flex-col gap-8 justify-center max-sm:p-5 items-center"
    >
      <Link
        className={`md:text-6xl text-5xl ${i == "2" ? " " : "hidden"}`}
        target="_blank"
        href={"https://github.com/CheatSetha"}
      >
        {" "}
        <VscGithub />
      </Link>
      <Link
        className={`md:text-6xl text-5xl ${i == "1" ? " " : "hidden"}`}
        target="_blank"
        href={"https://www.linkedin.com/in/cheat-setha-276395263/"}
      >
        {" "}
        <CiLinkedin />
      </Link>

      <h5 className="text-xl font-bold">Contact us via {title}</h5>
    </div>
  );
}
