import { useAuthContext } from "./useAuthContext";
import { useContentsContext } from "./useContentContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: dispatchContents } = useContentsContext();

  const logout = () => {
    // remove user from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    dispatchContents({ type: "SET_CONTENTS", payload: null });
  };

  return { logout };
};
