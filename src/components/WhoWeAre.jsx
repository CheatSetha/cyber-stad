export default function WhoWeAre() {
  return (
    <div id="aboutus" className="md:flex md:flex-wrap flex-nowrap max-sm:py-10  gap-14 bg-secondary">
      <div className=" flex h-fit gap-4 max-sm:hidden">
        <div className="d-1 md:w-[120px] md:h-[300px] xl:w-[158px] xl:h-[500px] bg-third"></div>
        <div className="d-2 xl:self-end md:w-[120px] self-end xl:w-[158px] md:h-[250px] xl:h-[330px] bg-third"></div>
      </div>
      {/* <div className="flex gap-6 justify-between"> */}
      <div className="who-we-are w-[400px]  max-sm:w-10/12 max-sm:mx-auto flex flex-col gap-5 justify-center items-center">
        <h3 className="text-3xl font-bold self-start">Who we are</h3>
        <h1 className="md:text-7xl text-5xl self-start max-sm:self-start font-bold">
          We Hackers <br />
          At CSTAD{" "}
        </h1>
      </div>
      <div className="desc max-sm:pt-5 md:py-10  max-sm:w-10/12 md:mx-auto max-sm:mx-auto xl:w-[510px] md:w-10/12 flex justify-center items-center">
        <p className="font-medium md:text-2xl text-xl text-secondary">
          Cyber-STAD is a group of cybersecurity researching student of CSTAD,
          CSTAD is a noteworthy science and technology center in Cambodia. We
          hackers focusing on security awareness and protechting againt
          cybersecurity threat. We research to solve problem in real-life as
          well as to improve security flaw of software or applicatoin in
          Cambodia. <br /> <br />
          This the Cyber-STAD Portfolio webpage for previewing what we have
          achieved, solved and overcomed and to show about our status- The
          organization supported us, our parnters, our team members, and our
          menters for guiding us in this field.
        </p>
      </div>
    </div>
    // </div>
  );
}
