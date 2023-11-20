import Image from "next/image";
import Link from "next/link";
import { VscGithub } from "react-icons/vsc";

export default function Navbar() {
  return (
    <div className="navbar   bg-primary p-0">
      <div className="navbar w-10/12 mx-auto p-0 shadow-none text-2xl font-semibold bg-primary h-[80px]">
        <div className="navbar-start">
          <Link href={'/'} className="navbar-item ">
            <Image className="w-full" src={'/images/logo.png'} width={300} height={50} alt="logo"/>
          </Link>
        </div>
        <div className="navbar-center max-sm:hidden">
          <Link href="/" className="navbar-items navbar-item">Home</Link>
          <a href="#aboutus" className="navbar-items navbar-item">About</a>
          <a href="#contactus" className="navbar-items navbar-item">Contact</a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item">
            <VscGithub className="text-primary text-2xl " />
          </a>
        </div>
      </div>
    </div>
  );
}
