import { RESOURCES, WHAT_WE_LEARN } from "@/constant/what-we-learn";

export default function ContentThree() {
  return (
    <div>
      {RESOURCES.map((item, index) => (
        <div
          key={index}
          className="w-full box-bg h-12 mt-5 flex items-center justify-between px-5"
        >
          <li className="md:ms-10 text-xl text-white">{item.title} </li>{" "}
          <p className="text-xl md:me-24">....</p>
        </div>
      ))}
    </div>
  );
}
