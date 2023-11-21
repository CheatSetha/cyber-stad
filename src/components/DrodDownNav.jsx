import Link from "next/link";
import { RiMenu4Fill } from "react-icons/ri";
export default function DrodDownNav() {
  return (
    <div className="dropdown ">
      <label className="my-2" tabIndex="0">
        <RiMenu4Fill />
      </label>
      <div className="dropdown-menu bg-secondary">
        <Link href={'/'} className="dropdown-item text-lg hover:bg-third hover:text-black">Home</Link>
        <Link href={"#aboutus"} tabIndex="-1" className="dropdown-item text-lg hover:bg-third hover:text-black">
          About US
        </Link>
        <Link href={"#contactus"} tabIndex="-1" className="dropdown-item text-lg hover:bg-third hover:text-black">
          Contact Us
        </Link>
      </div>
    </div>
  );
}
