import { WHAT_WE_LEARN } from "@/constant/what-we-learn";

export default function ContentOne() {
  return (
    <div>
      {WHAT_WE_LEARN.map((item, index) => (
        <div
          key={index}
          className="w-full box-bg min-h-[48px] mt-5 flex items-center justify-between px-5"
        >
          <li className="md:ms-10 text-xl text-white">{item.title} </li>{" "}
        </div>
      ))}
    </div>
  );
}
