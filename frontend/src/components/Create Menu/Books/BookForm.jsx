import { useState } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext.jsx";
import { useContentsContext } from "../../../hooks/useContentContext.jsx";

import { useDispatch, useSelector } from "react-redux";
import { booksCreate } from "../../../slices/bookSlice.js";
import "react-quill/dist/quill.snow.css";
import coverPreview from "/cover preview.png";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Tiptap from "../../tiptap.jsx";

import InfoForm from "./InfoForm.jsx";
import WriteBook from "./WriteBook.jsx";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("No file chosen");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const { user } = useAuthContext();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.contents);

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
      <form
        className="w-screen h-screen flex items-center justify-center"
        name=""
        onSubmit={handleSubmit}
      >
        <div id="Book_First">
          <InfoForm title={title} setTitle={setTitle} />
        </div>
        <div
          className="w-screen h-full fixed flex-col bg-[#F3F3F3] hidden  items-center overflow-x-hidden"
          id="Book_Second"
        >
          <WriteBook title={title} value={value} setValue={setValue} />
        </div>
      </form>
    </>
  );
};

export default BookForm;
