import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useContentsContext } from "../hooks/useContentContext";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { booksCreate } from "../slices/bookSlice.js";
import "react-quill/dist/quill.snow.css";
import coverPreview from "/cover preview.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Tiptap from "./tiptap.jsx";

import sideImg from "/Side image.png";
import sideImgRes from "/Side Image(res).png";
import img from "/img for create.png";

const ContentForm = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [cover, setCover] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileSubmit = async (e) => {};

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

  const onFileChange = (e) => {
    setError(""); // Reset error message when a new file is selected
    const chosenFile = e.target.files[0];
    if (chosenFile) {
      setFile(chosenFile);
      setFileName(chosenFile.name);
    } else {
      setFile(null);
      setFileName("No file chosen");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    try {
      setIsLoading(true);
      const result = await dispatch(
        booksCreate({
          title,
          about,
          cover: cover,
          author: user?.firstName,
          content: value,
        })
      ).unwrap();

      navigate("/discover");
      // Reset form fields
      setTitle("");
      setAbout("");
      setCover("");
      setValue("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to create book. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="w-[40%] flex items-center justify-center flex-col max-md:w-screen">
          <div className="w-[30vw] max-md:w-screen">
            <h1 className="text-blue-800 text-3xl font-bold m-6 text-center">
              Let's Create
            </h1>
            <input
              type="text"
              placeholder="Title"
              className="bg-white text-3xl font-bold m-2 mt-0 outline-none p-2 h-10"
            />
            <textarea
              name="description"
              id="description"
              rows="13"
              spellCheck
              minLength={10}
              maxLength={1024}
              placeholder="what is your book about..."
              className="bg-white w-full resize-none outline-none m-2 p-2"
            ></textarea>
            <div className="flex flex-col w-full items-center">
              <button
                type="submit"
                className="group relative w-[90%] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>
              <div className="flex w-full justify-start pl-4 pt-1">
                <Link className="ml-2 mt-1 " to="/create">
                  {"< Back"}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[60%] h-[95%] flex max-md:hidden">
          <img
            src={sideImg}
            className="object-contain w-full h-full max-[1360px]:hidden"
          />
          <img
            src={sideImgRes}
            className="object-contain h-full w-full hidden max-[1360px]:block max-[979px]:hidden"
          />
          <img
            src={img}
            className="object-contain h-full w-full hidden max-[979px]:block "
          />
        </div>
      </div>
    </>
  );
};

export default ContentForm;
