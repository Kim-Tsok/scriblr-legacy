import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/logo.svg";
import close from "/xmark.svg";
import bars from "/bars.svg";
import { useAuthContext } from "../hooks/useAuthContext";
import InAvatar from "./Navbar/InAvatar";
import OutAvatar from "./Navbar/OutAvatar";
import ResponsiveNav from "./Navbar/ResponsiveNav";

const Navbar = () => {
  const { user } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-screen flex items-center justify-center fixed z-10">
        <div className="w-full h-[3.2rem] m-3 p-3 flex items-center justify-between px-4 sm:px-9 text-black border-2 border-zinc bg-white  rounded-md shadow">
          <Link className="flex items-center" to="/discover">
            <img src={logo} alt="logo" className="w-5 h-5 mr-1" />
            <h1 className="font-bold text-xl sm:text-2xl font-mono max-[300px]:hidden">
              Scriblr
            </h1>
          </Link>
          <ul className="flex items-center justify-center">
            <div className="hidden md:flex">
              <li className="mx-2">
                <Link to="/discover/books">Books</Link>
              </li>
              <li className="mx-2">
                <Link to="/discover/articles">Articles</Link>
              </li>
              <li className="mx-2">
                <Link to="/p/writers">Writers</Link>
              </li>
              <li className="mx-2">
                <Link to="/p/publishers">Publishers</Link>
              </li>
            </div>
          </ul>
          <ul className="flex items-center">
            <InAvatar />
            <OutAvatar />
            {!isMenuOpen && (
              <>
                <li className="md:hidden">
                  <button onClick={toggleMenu} className="p-2">
                    <img src={bars} className="w-5 h-5" alt="Menu" />
                  </button>
                </li>
              </>
            )}
            {isMenuOpen && (
              <>
                <li className="md:hidden">
                  <button onClick={toggleMenu} className="p-2">
                    <img src={close} className="w-5 h-5" alt="Menu" />
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
        {isMenuOpen && (
          <ResponsiveNav
            setIsMenuOpen={setIsMenuOpen}
            isMenuOpen={isMenuOpen}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
