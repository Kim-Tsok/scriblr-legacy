import { useState } from "react";
import { useContentsContext } from "../hooks/useContentContext";
import axios from "axios";

const ContentForm = () => {
  const { dispatch } = useContentsContext();
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmitImage = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("about", about);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/content", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Content added:", response.data);
      // Handle successful upload
    } catch (error) {
      console.error("Error uploading content:", error);
      setError(error.message);
    }
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
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
      dispatch({ type: "CREATE_CONTENTS", payload: json });
    }
  };

  const handleClose = () => {
    document.getElementById("form").style.display = "none";
  };
  const handleOpenNew = () => {
    event.preventDefault();
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

          <input type="file" onChange={handleImageChange} />
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
          className="w-screen h-screen fixed p-4 px-[20rem] flex-col bg-white hidden"
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
              onClick={handleSubmit}
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
