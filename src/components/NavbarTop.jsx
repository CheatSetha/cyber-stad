import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
export default function NavbarTop() {
  return (
    <div className="navbar m-0 p-0 bg-secondary text-2xl ">
      <div className="navbar w-10/12 mx-auto shadow-none p-0 bg-secondary h-[80px]">
        <div className="navbar-start">
          <a className="navbar-item text-primary font-semibold max-sm:text-xl">
            Hacker
          </a>
          <a className="navbar-item-custome font-semibold max-sm:hidden">
            CSTAD
          </a>
        </div>
        <div className="navbar-end">
          <Link
            target="_blank"
            href={"https://istad.co/"}
            className="navbar-item text-primary font-semibold max-sm:text-xl"
          >
            Go to CSTAD <IoIosArrowForward className="inline " />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
