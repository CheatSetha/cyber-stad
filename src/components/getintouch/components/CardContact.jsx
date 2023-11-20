import { VscGithub } from "react-icons/vsc";
import { CiLinkedin, CiTwitter } from "react-icons/ci";

export default function CardContact({ i, title }) {
  return (
    <div
      id="card-contact"
      className="md:w-[300px] md:h-[300px] w-[150px] flex flex-col gap-8 justify-center items-center"
    >
      <VscGithub className={`text-6xl ${i == "2" ? " " : "hidden"}`} />
      <CiLinkedin className={`text-6xl ${i == "1" ? " " : "hidden"}`} />
      <h5 className="text-xl font-bold">Contact us via {title}</h5>
    </div>
  );
}
