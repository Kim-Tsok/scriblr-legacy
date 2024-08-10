export const url = "https://scriblr-backend.onrender.com/api";

export const setHeaders = () => {
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${localStorage.getItem("token")}`,
    },
  };

  return headers;
};
