"use client";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ScrollToTop from "react-scroll-to-top";

import EndIng from "@/components/Ending/EndIng";
import Landing from "@/components/Landing";
import MeetOurTeam from "@/components/MeetOurTeam";
import OurSponser from "@/components/OurSponser";
import WhatWeDone from "@/components/WeHaveDone";
import WhoWeAre from "@/components/WhoWeAre";
import GenIntoch from "@/components/getintouch";
import Mentor from "@/components/mentors";
import Vision from "@/components/ourvision";
import { useEffect } from "react";


export default function ProviderAnimation() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Landing />
      <WhoWeAre />
      <MeetOurTeam />
      <OurSponser />
      <Mentor />
      <Vision />
      <WhatWeDone />
      <GenIntoch />
      <EndIng />
      <ScrollToTop smooth color="#9FEF00" style={
        {
            paddingLeft:"5.5px",
            backgroundColor:"#141D2B",
            boxShadow:"0px 0px 10px 0px #9FEF00",
        }
        }/>
      
    </div>
  );
}
