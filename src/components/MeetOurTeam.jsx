import { BASE_TEAM_MEMBER } from "@/constant/team-member";

import MemberCard from "./MemberCard";
export default function MeetOurTeam() {
  return (
   <div id="bg-team">
     <div  className="w-10/12 mx-auto py-10">
      <h1 className="font-bold md:text-7xl text-5xl ">
        Meet Our <br />
        Team
      </h1>
      <p className="text-2xl text-secondary mb-10">We have stated in 2023</p>

      {/* card item section */}
      <div className="flex max-sm:justify-center md:justify-center xl:justify-start gap-20 flex-wrap">
        {BASE_TEAM_MEMBER.map((item) => {
          return (
            <MemberCard
              key={item.id}
                name={item.name}
                position={item.position}
                avatar={item.profile}
                github={item.github}
                
            />
          );
        })}
      </div>
    </div>
   </div>
  );
}
