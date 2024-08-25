import { useState } from "react";
import { Link } from "react-router-dom";

const InfoForm = ({ title, setTitle }) => {
  const [about, setAbout] = useState("");
  const [cover, setCover] = useState("");

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

  const handleNext = (e) => {
    e.preventDefault();

    const f_form = document.getElementById("Book_First");
    const s_form = document.getElementById("Book_Second");

    f_form.style.display = "none";
    s_form.style.display = "flex";
  };
  return (
    <>
      <div id="BookInfoForm">
        <h1 className="text-blue-800 text-3xl font-bold m-6 text-center max-md:my-8">
          Let's Create
        </h1>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-white text-3xl font-bold m-2 mt-0 outline-none p-2 h-10"
        />
        <textarea
          name="description"
          id="description"
          rows="13"
          spellCheck
          required
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          minLength={30}
          maxLength={1024}
          placeholder="what is your book about..."
          className="bg-white w-full resize-none outline-none m-2 p-2"
        ></textarea>
        <div className="w-full flex items-center justify-center flex-col my-2">
          <label className="text-left items-start">Cover:</label>
          <div className="p-1 rounded-md border-2  border-zinc-500 w-[70%]">
            <input
              type="file"
              accept="image/*"
              required
              onChange={handleContentImageUpload}
              className="w-full h-full z-10 "
            />
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <button
            onClick={handleNext}
            className="group relative w-[90%] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
          >
            Next
          </button>
          <div className="flex w-full justify-start pl-4 pt-1">
            <Link className="ml-2 mt-1 " to="/create">
              {"< Back"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoForm;
