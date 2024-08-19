import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const InAvatar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };
  return (
    <>
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
    </>
  );
};

export default InAvatar;
