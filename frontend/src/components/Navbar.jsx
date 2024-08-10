import { useState } from "react";
import { Link } from "react-router-dom";
import signedOutAvatar from "/person.png";
import avatar from "/avatar6.png";
import logo from "/logo.svg";
import close from "/xmark.svg";
import bars from "/bars.svg";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="w-full h-[3.2rem] p-3 flex items-center justify-between px-4 sm:px-9 text-black border-b-2 border-zinc fixed bg-white z-10 mb-10">
        <Link className="flex items-center" to="/discover">
          <img src={logo} alt="logo" className="w-5 h-5 mr-1" />
          <h1 className="font-bold text-xl sm:text-2xl font-mono max-[300px]:hidden">
            Scriblr
          </h1>
        </Link>
        <div className="flex font-mono">
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
              <li className="mx-2">|</li>
            </div>
            {user && (
              <li className="mx-2 font-sans">
                <div className="dropdown dropdown-hover dropdown-end">
                  <div tabIndex={0}>
                    <img
                      src={user?.avatarLink}
                      className="rounded-full w-7 h-7 items-center object-cover"
                      alt="User avatar"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="text-ellipsis dropdown-content menu rounded-box z-[1] w-[8rem] border-2 border-gray-300 p-2 shadow bg-white"
                  >
                    <li>
                      <button>Profile</button>
                    </li>
                    <li>
                      <button onClick={handleLogout} className="text-red-600">
                        Logout
                      </button>
                    </li>
                    <li className="text-gray-600 items-end mt-2 text-ellipsis">
                      {user?.username}
                    </li>
                  </ul>
                </div>
              </li>
            )}
            {!user && (
              <li className="mx-2 font-sans">
                <div className="dropdown dropdown-hover dropdown-end">
                  <div tabIndex={0} className="m-0 border-none">
                    <img
                      src={signedOutAvatar}
                      className="rounded-full border-2 w-7 h-7 items-center object-cover"
                      alt="Sign in"
                    />
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu rounded-box z-[1] w-[10rem] border-2 border-gray-300 p-2 shadow bg-white"
                  >
                    <li>
                      <Link to="/signup">Signup</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </ul>
                </div>
              </li>
            )}
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
      </div>
      {isMenuOpen && (
        <div className="fixed h-screen flex justify-center items-center text-center text-3xl leading-[3rem] top-[3.2rem] left-0 right-0 bg-white border-b-2 border-zinc z-20 md:hidden">
          <ul className="py-2">
            <li className="px-4 py-2">
              <Link to="/discover/books" onClick={toggleMenu}>
                Books
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/discover/books" onClick={toggleMenu}>
                Articles
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/discover/books" onClick={toggleMenu}>
                Writers
              </Link>
            </li>
            <li className="px-4 py-2">
              <Link to="/discover/books" onClick={toggleMenu}>
                Publishers
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
