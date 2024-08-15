export const url = "https://scriblr-backend.onrender.com/api";

export const setHeaders = () => {
  console.log(localStorage.getItem("token"));
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return headers;
};
