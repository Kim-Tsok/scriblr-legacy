import { Link } from "react-router-dom";
import avatar from "/avatar6.png";
import logo from "/logo.svg";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <div className="w-screen h-[3.2rem] p-3 flex items-center justify-between px-9 max-sm:px-5 text-black border-b-2 border-zinc fixed bg-white z-10 mb-10">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-5 h-5 mx-1" />
          <h1 className="font-bold text-2xl">Scriblr</h1>
        </div>
        <div className="flex font-mono">
          <ul className="flex items-center justify-center ">
            <div className="flex max-md:hidden">
              <li className="mx-2">
                <Link to="/discover">Books</Link>
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
            </div>
            <li className="mx-2">
              <div className="dropdown dropdown-hover dropdown-end">
                <div tabIndex={0}>
                  <img
                    src={avatar}
                    className="rounded-full border-2 w-7 h-7 items-center object-cover"
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow bg-white mt-2 right-0"
                >
                  {!user && (
                    <>
                      <li>
                        <Link to="/signup">Signup</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    </>
                  )}
                  {user && (
                    <>
                      <li>profile</li>
                      <li>
                        <button onClick={handleLogout} className="text-red-600">
                          logout
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
