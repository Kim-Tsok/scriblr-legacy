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
            to="/login"
            className="rounded-full mr-1 p-2 px-3 bg-blue-800 text-white text-[13px] font-mono max-md:hidden"
          >
            Login
          </Link>
          <li className="mx-2 font-sans flex items-center">
            <div tabIndex={0} className="m-0 border-none">
              <img
                src={signedOutAvatar}
                className="rounded-full w-8 h-8 items-center object-cover"
                alt="Sign in"
              />
            </div>
          </li>
        </div>
      )}
    </>
  );
};

export default OutAvatar;
