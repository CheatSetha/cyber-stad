import { VscGithub } from "react-icons/vsc";
import { CiLinkedin, CiTwitter } from "react-icons/ci";

export default function CardContact() {
  return (
    <div id="card-contact" className="md:w-[300px] md:h-[300px] w-[150px] flex flex-col gap-8 justify-center items-center">
        <VscGithub className="text-6xl" />
        <h5 className="text-xl font-bold">Contact us via Github</h5>

    </div>
  )
}