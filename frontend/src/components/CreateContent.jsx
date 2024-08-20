import { useState } from "react";
import { Link } from "react-router-dom";

const CreateContent = () => {
  const [contentType, setContentType] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    console.log(contentType);
  };

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <label className="text-4xl m-3 font-bold">
          What would you like to create?
        </label>
        <select
          name="Content"
          id="contentSelect"
          className="text-lg w-[30rem] p-3 m-3 rounded-lg border-2 border-neutral-600 outline-none bg-white cursor-pointer"
        >
          <option
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            Book
          </option>
          <option
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
          >
            Article
          </option>
          <option value={contentType}>Poem</option>
        </select>
        <Link
          className="w-[20rem] bg-slate-200 text-center p-4 rounded-lg m-3 text-xl font-semibold"
          to="/create/books"
          onClick={handleClick}
        >
          Continue
        </Link>
      </div>
    </>
  );
};

export default CreateContent;
