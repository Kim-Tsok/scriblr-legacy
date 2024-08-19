export const url = "https://scriblr-backend.onrender.com/api";

export const setHeaders = () => {
  const token = localStorage.getItem("token");
  console.log("Token retrieved in setHeaders:", token);

  if (!token) {
    console.warn("No token found in localStorage");
    // You might want to redirect to login page here
  }

  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
};
