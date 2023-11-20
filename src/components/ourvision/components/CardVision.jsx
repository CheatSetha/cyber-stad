export default function CardVision({ img, title }) {
  const imgagePath =
    img ||
    "https://e0.pxfuel.com/wallpapers/140/190/desktop-wallpaper-one-piece-chopper-full-click-one-piece-chopper-one-piece-iphone-manga-anime-one-piece-cute-one-piece-chopper.jpg";
  const txt = title || "chopper";
  return (
    <div >
      <div className="bg-third mx-auto w-[300px] h-[400px]">
        <div className=" w-[300px] h-[400px] relative -top-1 -left-1">
          <img className="w-[300px] h-[400px]" src={imgagePath} alt="photo" />
        </div>
      </div>
      <h5 className="text-center font-bold text-2xl mt-8">{txt}</h5>
    </div>
  );
}
