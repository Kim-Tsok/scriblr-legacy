import { useAuthContext } from "../../hooks/useAuthContext";
import signedOutAvatar from "/person.png";
import { Link } from "react-router-dom";

const OutAvatar = () => {
  const { user } = useAuthContext();
  return (
    <>
      {!user && (
        <div className="flex items-center font-mono">
          <Link
            to="/create"
            className="rounded-full mr-1 p-2 px-3 bg-blue-800 text-white text-[13px] font-mono max-md:hidden"
          >
            Create
          </Link>
          <li className="mx-2 font-sans flex items-center">
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} className="m-0 border-none">
                <img
                  src={signedOutAvatar}
                  className="rounded-full border-2 w-8 h-8 items-center object-cover"
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
        </div>
      )}
    </>
  );
};

export default OutAvatar;
