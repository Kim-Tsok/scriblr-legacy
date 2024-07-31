import { useEffect, useState } from "react";
import { useContentsContext } from "../hooks/useContentContext";
import Book from "../components/Book";
import ContentForm from "../components/ContentForm";
import Navbar from "../components/Navbar";

const Discover = () => {
  const [isLoading, setIsLoading] = useState("");
  const { contents, dispatch } = useContentsContext();

  useEffect(() => {
    const fetchContents = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://scriblr-backend.onrender.com/api/contents"
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_CONTENTS", payload: json });
        setIsLoading(false);
      }
    };

    fetchContents();
  }, []);

  if (!isLoading) {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.display = "none";
    }
  }
  const handleOpen = () => {
    document.getElementById("form").style.display = "flex";
  };

  return (
    <>
      <div
        id="loader"
        className="w-screen h-screen flex justify-center items-center bg-white fixed z-[1]"
      >
        <div className="loader"></div>
      </div>
      <div className="overflow-hidden">
        <Navbar />;
        <h1 className="m-4 text-center font-bold font-mono text-3xl text-blue-800 my-11">
          All Books
        </h1>
        <div className="w-screen flex items-center justify-center overflow-hidden relative">
          <ContentForm />
        </div>
        <div className="flex flex-wrap justify-center items-center">
          {contents &&
            contents.map((content) => (
              <Book key={content._id} content={content} />
            ))}
        </div>
        <button
          className="fixed right-0 bottom-0 m-7 bg-gray-300 rounded-full shadow-xl w-10 h-10"
          onClick={handleOpen}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Discover;
