import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import { useContentsContext } from "../hooks/useContentContext";

const BookDetails = () => {
  const [isLoading, setIsLoading] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();
  const {
    data: content,
    error,
    isPending,
  } = useFetch("https://scriblr-backend.onrender.com/api/contents/" + id);

  const handleClick = () => {
    fetch("https://scriblr-backend.onrender.com/api/contents/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/discover");
    });
  };

  console.log(content);
  return (
    <>
      <div className="p-4 bg-white">
        <div className="mt-[4.5rem] flex max-md:flex-col bg-white text-black">
          <div className="flex flex-col justify-center items-center bg-white">
            <div className="h-[270px] w-[180px] border-2 border-gray-500 overflow-hidden">
              <img
                src={content?.cover?.secure_url}
                alt={content?.title}
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              to="/discover"
              className="p-2 h-[2.5rem] px-3 bg-blue-900 text-white my-3 text-center"
            >
              Read Book
            </Link>
            {/* <Link
              to="/discover"
              onClick={handleClick}
              className="p-2 h-[2.5rem] px-3 bg-red-600 text-white text-center"
            >
              Delete
            </Link> */}
          </div>
          <div className="px-4 w-[50%] max-md:w-[95%]">
            <div className="mb-2">
              <label className="font-bold text-xl my-1">Title:</label>
              <p>{content?.title}</p>
            </div>
            <div>
              <label className="font-bold text-xl my-1">Description:</label>
              <p className="text-justify">{content?.about}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
