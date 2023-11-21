import { MENTORS } from "@/constant/mentors";
import Card from "./components/Card";

import RightPart from "./components/RightPart";

export default function Mentor() {
  return (
    <div className="w-10/12 mx-auto py-10 ">
      <h1 className="md:text-7xl text-5xl font-bold">Our Mentors</h1>
      <p className="text-xl font-medium">
        Those who give us the clues and skills started in 2023
      </p>
      <section className="grid xl:grid-cols-2 grid-col-1">
        <div data-aos="fade-up" data-aos-duration="2000">
          {MENTORS.map((item) => {
            return (
              <Card
                key={item.id}
                kh_name={item.kh_name}
                en_name={item.en_name}
                position={item.position}
                github={item.links.github}
                linkedin={item.links.linkedin}
                twitter={item.links.twitter}
              />
            );
          })}
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <RightPart />
        </div>
      </section>
    </div>
  );
}
