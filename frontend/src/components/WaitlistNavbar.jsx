import { Link } from "react-router-dom";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <div className="w-screen h-[4rem] p-3 flex items-center justify-between text-white dark:text-black px-9 max-sm:px-5">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-5 h-5 mx-1" />
        <h1 className="font-bold text-xl">Scriblr</h1>
      </div>
      <div className="flex font-mono">
        <ul>
          {/* <i className="mx-2">
            <a href="#">Home</a>
          </i>
          <i className="mx-2">
            <a href="#">About</a>
          </i>
          <i className="mx-2">
            <a href="#">faq</a>
          </i> */}
          <i className="mx-2k">
            <Link to={"/about"}>About</Link>
          </i>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
