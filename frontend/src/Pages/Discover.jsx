import { useEffect, useState } from "react";
import { useContentsContext } from "../hooks/useContentContext";
import Book from "../components/Book";
import ContentForm from "../components/ContentForm";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Discover = () => {
  const [isLoading, setIsLoading] = useState("");
  const { contents, dispatch } = useContentsContext();

  useEffect(() => {
    const fetchContents = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://scriblr-backend.onrender.com/api/books"
      );
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_CONTENTS", payload: json });
        setIsLoading(false);
      }

      if (!response.ok) {
        console.log(error);
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
      <div className="overflow-hidden bg-white">
        <h1 className="m-4 text-center font-bold font-mono text-3xl text-blue-800 bg-white mb-5 mt-[5rem]">
          All Books
        </h1>
        <div className="w-screen flex items-center justify-center overflow-hidden relative bg-white">
          <ContentForm />
        </div>
        <div className="flex flex-wrap justify-center items-center bg-white">
          {contents &&
            contents.map((content) => (
              <Book key={content._id} content={content} cover={content.cover} />
            ))}
        </div>
        <div className="w-screen fixed h-10 bottom-0 z-10 flex items-center justify-center">
          <Link
            to="/create"
            className="rounded-full fixed  bottom-0 m-7 z-10 p-2 px-3 bg-blue-800 text-white  font-mono md:hidden"
          >
            Create
          </Link>
        </div>
      </div>
    </>
  );
};

export default Discover;
