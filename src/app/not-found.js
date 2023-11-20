import Image from "next/image";

export default function Custom404() {
    return <div className="w-full flex-wrap h-screen flex justify-center items-center">
      <div>
      <Image alt="404" src="/404.svg" width={500} height={500}  />
      </div>
      <div>
      <h1 className="font-bold text-primary text-5xl">404-Page Not Found</h1>
      </div>
    </div>
  }