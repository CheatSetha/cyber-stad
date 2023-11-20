import Image from "next/image";
import CardContact from "./components/CardContact";

export default function GenIntoch() {
  return (
  
      <div className="bg-secondary bg-opacity-5 md:h-[705px] h-full py-10">
        {/* <Image className=" absolute w-[1440px] -mt-20 " src={'/images/getintouch.svg'} width={100} height={100} alt="bg-line"/> */}
        <img className="z-0 absolute opacity-10 md:h-[605px] h-[404px] w-full " src={'https://4kwallpapers.com/images/wallpapers/new-york-city-cityscape-night-city-lights-half-moon-5k-1680x1050-437.jpg'} alt="bg-line"/>
        <h1 className="md:text-7xl text-5xl z-30 font-bold text-center pt-10">Get in Touch</h1>
        <p className="text-xl z-30 font-medium mb-10 text-center mt-4">
          Contact us - question, partnership. We are all ears.
        </p>

        <div className="flex z-30  justify-center md:gap-[80px] gap-5 py-10 ">
          <CardContact />
          <CardContact />
        </div>

        {/* background svg */}
      </div>

  );
}
