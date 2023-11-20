export default function NavbarTop() {
  return (
    <div className="navbar m-0 p-0 bg-secondary text-2xl ">
      <div className="navbar w-10/12 mx-auto shadow-none p-0 bg-secondary h-[80px]">
        <div className="navbar-start">
          <a className="navbar-item text-primary font-semibold">Hacker</a>
          <a className="navbar-item font-semibold ">CSTAD</a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item hover:text-primary font-semibold">Go to CSTAD &gt; </a>
        </div>
      </div>
    </div>
  );
}
