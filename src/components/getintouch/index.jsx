import Image from "next/image";
import CardContact from "./components/CardContact";

export default function GenIntoch() {
  return (
  
      <div  id="contactus" className="bg-secondary bg-img-git md:h-[706px] w-full h-full">
      

       <div id="bg-line-git"  className="bg-secondary bg-opacity-90 md:h-[706px] h-full ">
       <h1 className="md:text-7xl text-5xl z-30 font-bold text-center pt-10">Get in Touch</h1>
        <p className="text-xl z-30 font-medium mb-10 text-center mt-4">
          Contact us - question, partnership. We are all ears.
        </p>

        <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-once="true"
         
         className="flex z-30  justify-center md:gap-[80px] gap-5 ">
          <CardContact title={'Github'} i={'2'}/>
          <CardContact title={"LinkedIn"} i={'1'}/>
        </div>
       </div>

      </div>

  );
}
