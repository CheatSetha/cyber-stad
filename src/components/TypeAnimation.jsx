"use client"
import { TypeAnimation } from "react-type-animation";

const TypeAnimationText = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed once, initially
        " ",
        1000,
        "CYBER",
        1000,
        "CYBERSecurity",
        1000,
        "CYBER-STAD",
        1000,
        
      ]}
      speed={50}
  
      repeat={Infinity}
    />
  );
};
export default TypeAnimationText;
