import { useState } from "react";
import axios from "axios";
import logo from "/logowhite.svg";

const ContentForm = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    document.getElementById("form").style.display = "none";

    const content = { title, about };
    const response = await fetch("http://localhost:5174/api/contents", {
      method: "POST",
      body: JSON.stringify(content),
      headers: {
        "Content-Type": "application/Json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setAbout("");
      setError(null);
      console.log("New book added", json);
    }
  };

  const handleClose = () => {
    document.getElementById("form").style.display = "none";
  };
  const handleOpenNew = () => {
    document.getElementById("main").style.display = "flex";
  };

  return (
    <>
      <form
        className="w-screen h-screen items-center justify-center font-mono hidden z-50 fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25"
        id="form"
      >
        <div
          className="bg-white flex flex-col w-[30rem] font-mono px-[3rem] py-[2rem] rounded-lg border-2 border-gray-100 shadow-xl m-4 overflow-hidden"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex items-end justify-end">
            <button
              className="text-center cursor-pointer text-sm bg-blue-800 text-white shadow-xl w-7 h-7"
              onClick={handleClose}
            >
              X
            </button>
          </div>
          <h1 className="text-center text-2xl font-bold text-blue-800 m-3">
            Add a new book
          </h1>
          <p>Title:</p>
          <input
            type="text"
            name="title"
            value={title}
            id="title"
            required
            onChange={(e) => setTitle(e.target.value)}
            className="outline-none border-2 border-gray-500 rounded-md p-1 mb-4 px-2 font-serif"
          />
          <label>About:</label>
          <textarea
            type="text"
            value={about}
            name="about"
            id="about"
            rows="7"
            spellCheck
            maxLength={450}
            required
            onChange={(e) => setAbout(e.target.value)}
            className="outline-none border-2 border-gray-500 rounded-md p-1 px-2 font-serif resize-none"
          />

          <label className="text-right text-sm text-gray-500 mb-4">0/450</label>
          <div className="w-full flex items-center justify-center">
            <button
              className="mt-3 px-3 py-2 bg-blue-800 text-white"
              onClick={handleOpenNew}
            >
              Next
            </button>
          </div>

          <div className="w-full flex items-center justify-center"></div>
        </div>
        <div
          className="w-screen h-screen fixed p-4 flex-col bg-white hidden"
          id="main"
        >
          <textarea
            name="content"
            className="w-full h-full resize-none outline-none border-2 border-gray-500 p-2 px-3 font-serif"
            required
            id="content"
          ></textarea>
          <div className="w-full flex items-center justify-center">
            <button
              type="submit"
              className="mt-4 px-3 py-2 bg-blue-800 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContentForm;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
