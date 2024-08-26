import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Tiptap from "../../tiptap.jsx";
import "./styles.scss";

const WriteBook = ({ title, value, setValue }) => {
  const handleBack = (e) => {
    e.preventDefault();

    const f_form = document.getElementById("Book_First");
    const s_form = document.getElementById("Book_Second");

    f_form.style.display = "flex";
    s_form.style.display = "none";
  };
  return (
    <>
      <div
        className="flex w-screen items-center justify-between"
        id="topofquill"
      >
        <h1 className="ml-5 text-3xl font-bold">{title}</h1>
        <div className="flex items-end justify-end px-5">
          <button
            onClick={handleBack}
            className="m-2 px-3 py-2 border-2 border-blue-800 text-black"
          >
            Back
          </button>
          <button
            type="submit"
            className="m-2 px-3 py-2 bg-blue-800 text-white"
          >
            Submit
          </button>
        </div>
      </div>
      {/* {error && <div className="text-red-500 mt-2">{error}</div>} */}
      {/* <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          className=" flex items-center justify-center flex-col border-none"
        /> */}
      <div className="w-[80%] h-[90%] border-2 border-gray-600 m-4 p-4">
        <Tiptap />
      </div>
    </>
  );
};

export default WriteBook;
