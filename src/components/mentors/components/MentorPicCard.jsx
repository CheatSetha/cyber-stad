export default function MentorPicCard({name, img}) {
    const imageMentor = img ? img : "https://e0.pxfuel.com/wallpapers/140/190/desktop-wallpaper-one-piece-chopper-full-click-one-piece-chopper-one-piece-iphone-manga-anime-one-piece-cute-one-piece-chopper.jpg"
    const mentorName = name ? name : "Tony Tony Chopper"
  return (
    <div className="w-[150px] h-[130px] flex flex-col justify-center items-center">
        <div className="avatar w-24 h-24  border-white border-2">
            <img src={imageMentor} alt="mentor picture" />
        </div>
        <h5 className="font-bold text-xl">{mentorName}</h5>
    </div>
  )
}