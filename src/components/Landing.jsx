import { BASE_LAB_BANNER } from "@/constant/base-lab-banner";
import TypeAnimationText from "./TypeAnimation";
import CarouselTest from "./CarouselTest";

export default function Landing() {
  return (
    <>
      <div className="md:h-screen flex flex-col justify-center py-10  items-center">
        <div className="mb-20">
          <h1 className="md:text-8xl text-5xl text-center font-bold text-white">
            WE HAcking <br />{" "}
            <span className="text-primary">
              {" "}
              <TypeAnimationText />
            </span>{" "}
          </h1>
          <p className="font-medium mt-6 md:text-3xl text-2xl mx-auto xl:w-[1050px] w-full text-secondary text-center">
            We challenge ourself with hacking skill to improve security and
            protextion in the cyberspace and the worldwide
          </p>
        </div>
        {/* md:grid md:grid-cols-5 */}
        <div
          id="hide-content"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-once="true"
          className="w-10/12 mx-auto flex gap-8 md:gap-5 flex-shrink md:justify-center md:flex-wrap max-sm:hidden   "
        >
          {BASE_LAB_BANNER.map((item, index) => {
            return (
              <div
              
                key={item.id}
                className="w-[200px] landing-card h-[200px] flex flex-col justify-center items-center shadow-2xl"
              >
                <h2 className="text-5xl text-white font-bold text-center ">
                  {item.value}+
                </h2>
                <p className="text-xl text-white">{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="w-10/12 mx-auto block md:hidden">
          <CarouselTest />
        </div>
      </div>
    </>
  );
}
