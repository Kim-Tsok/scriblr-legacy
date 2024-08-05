import { useState } from "react";
import { useContentsContext } from "../hooks/useContentContext";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { contentsCreate } from "../slices/contentSlice.js";
import "react-quill/dist/quill.snow.css";
import coverPreview from "/cover preview.png";
import axios from "axios";

const ContentForm = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [cover, setCover] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.contents);
  let characterCount = about.length;
  var characterCounter = document.getElementById("characterCounter");

  if (characterCount >= (1024 / 100) * 90) {
    characterCounter.style.color = "red";
  } else if (characterCount >= (1024 / 100) * 75) {
    characterCounter.style.color = "rgb(201, 195, 34)";
  } else if (characterCount >= 1) {
    characterCounter.style.color = "gray";
  }

  const handleContentImageUpload = (e) => {
    const file = e.target.files[0];

    TransformFileData(file);
  };

  const TransformFileData = (file) => {
    const reader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setCover(reader.result);
      };
    } else {
      setCover("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);
    if (!isLoading) {
      document.getElementById("form").style.display = "none";
    }

    dispatch(
      contentsCreate({
        title,
        about,
        cover: cover,
      })
    );
  };

  const handleClose = (e) => {
    e.preventDefault();
    setTitle("");
    setAbout("");
    setValue("");
    document.getElementById("form").style.display = "none";
  };
  const handleOpenNew = (e) => {
    e.preventDefault();
    document.getElementById("main").style.display = "flex";
  };
  const handleBack = (e) => {
    e.preventDefault();
    document.getElementById("main").style.display = "none";
  };

  return (
    <>
      <form
        className="w-screen h-screen items-center justify-center font-mono hidden z-50 fixed inset-0 bg-black backdrop-blur-sm bg-opacity-25"
        id="form"
      >
        <div
          className="bg-white flex flex-col w-[40rem] font-mono px-[3rem] py-[2rem] rounded-lg border-2 border-gray-100 shadow-xl m-4 overflow-hidden justify-center items-center"
          onSubmit={handleSubmit}
          id="firstForm"
        >
          <div className="w-full flex items-end justify-end">
            <button
              className="text-center cursor-pointer text-sm bg-blue-800 text-white shadow-xl w-7 h-7"
              onClick={handleClose}
            >
              X
            </button>
          </div>
          <div>
            <h1 className="text-center text-2xl font-bold text-blue-800 m-3">
              Add a new book
            </h1>
          </div>
          <div className="flex">
            <div className="flex flex-col">
              <p>Title:</p>
              <input
                type="text"
                name="title"
                value={title}
                id="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                className="outline-none border-2 bg-white border-gray-500 rounded-md p-1 mb-4 px-2 font-serif"
              />
              <label>About:</label>
              <textarea
                type="text"
                value={about}
                name="about"
                id="about"
                rows="7"
                spellCheck
                minLength={10}
                maxLength={1024}
                required
                onChange={(e) => setAbout(e.target.value)}
                className="outline-none border-2 bg-white border-gray-500 rounded-md p-1 px-2 font-serif resize-none"
              />
              <label
                className="text-right text-sm text-gray-500 mb-3"
                id="characterCounter"
              >
                {characterCount}/1024
              </label>
              <label>Cover:</label>
              <input
                type="file"
                accept="image/*"
                required
                onChange={handleContentImageUpload}
                className="p-1 rounded-md border-2 border-zinc-500"
              />
            </div>

            <div className="bg-white p-5 text-center pr-0 max-md:hidden">
              Cover Preview
              {cover ? (
                <>
                  <img
                    src={cover}
                    className="h-[270px] w-[180px] object-cover items-center border-2 border-gray-500"
                  />
                </>
              ) : (
                <>
                  <img
                    src={coverPreview}
                    className="h-[270px] w-[180px] object-cover items-center border-2 border-gray-500"
                  />
                </>
              )}
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-col">
            <button
              className="mt-3 px-3 py-2 bg-blue-800 text-white"
              onClick={handleOpenNew}
            >
              Next
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
        </div>
        <div
          className="w-screen h-full fixed flex-col bg-[#F3F3F3] hidden  items-center overflow-x-hidden"
          id="main"
        >
          <div
            className="flex w-screen items-center justify-between"
            id="topofquill"
          >
            <h1 className="text-3xl font-bold font-sans px-6">{title}</h1>
            <div className="flex items-end justify-end px-5">
              <button
                type="submit"
                onClick={handleBack}
                className="m-2 px-3 py-2 border-2 border-blue-800 text-black"
              >
                Back
              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="m-2 px-3 py-2 bg-blue-800 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </div>
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className=" flex items-center justify-center flex-col border-none"
          />
        </div>
      </form>
    </>
  );
};

export default ContentForm;
