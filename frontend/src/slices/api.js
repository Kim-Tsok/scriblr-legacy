export const url = "https://scriblr-backend.onrender.com/api";

export const setHeaders = () => {
  setTimeout(() => {
    console.log(localStorage.getItem("token"));
  }, 2000);
  console.log(localStorage.getItem("ttken"));
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  return headers;
};
