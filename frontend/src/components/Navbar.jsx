import { Link } from "react-router-dom";
import avatar from "/img4.jpg";
import logo from "/logo.svg";

const Navbar = () => {
  return (
    <div className="w-screen h-[3.2rem] p-3 flex items-center justify-between px-9 max-sm:px-5 text-black border-b-2 border-zinc fixed bg-white z-10">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-5 h-5 mx-1" />
        <h1 className="font-bold text-2xl">Scriblr</h1>
      </div>
      <div className="flex font-mono">
        <ul className="flex items-center justify-center">
          <li className="mx-2">
            <Link to={""}>Books</Link>
          </li>
          <li className="mx-2">
            <Link to={""}>Articles</Link>
          </li>
          <li className="mx-2">
            <Link to={""}>Writers</Link>
          </li>
          <li className="mx-2">
            <Link to={""}>Publishers</Link>
          </li>
          |
          <li className="mx-2">
            <Link to={""}>
              <img
                src={avatar}
                className="rounded-full border-2 w-7 h-7 border-blue-800 items-center object-cover"
              ></img>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
