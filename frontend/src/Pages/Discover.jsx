import { useEffect, useState } from "react";
import Book from "../components/Book";
import ContentForm from "../components/ContentForm";

const Discover = () => {
  const [contents, setContents] = useState(null);

  useEffect(() => {
    const fetchContents = async () => {
      const response = await fetch("http://localhost:5174/api/contents");
      const json = await response.json();

      if (response.ok) {
        setContents(json);
      }
    };

    fetchContents();
  }, []);

  const handleOpen = () => {
    document.getElementById("form").style.display = "flex";
  };

  return (
    <>
      <div className="overflow-hidden">
        <h1 className="m-4 text-center font-bold font-mono text-3xl text-blue-800">
          All Books
        </h1>
        <div className="w-screen flex items-center justify-center overflow-hidden relative">
          <ContentForm />
        </div>
        <div className="flex flex-wrap">
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
