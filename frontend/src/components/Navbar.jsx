import { Link } from "react-router-dom";
import logo from "/logowhite.svg";

const Navbar = () => {
  return (
    <div className="h-[4rem] p-3 flex items-center justify-between text-white px-9">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-5 h-5 mx-1" />
        <h1 className="font-bold text-xl">Scriblr</h1>
      </div>
      <div className="flex font-mono">
        <ul>
          <i className="mx-2">
            <a href="#">Home</a>
          </i>
          <i className="mx-2">
            <a href="#">About</a>
          </i>
          <i className="mx-2">
            <a href="#">faq</a>
          </i>
          <i className="px-[10px] py-[5px] rounded-xl border-white border-2 mx-2">
            <Link to="/discover">Test</Link>
          </i>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
