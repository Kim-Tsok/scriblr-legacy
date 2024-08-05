import { Link } from "react-router-dom";

const Book = ({ content }) => {
  return (
    <>
      <div className="m-4">
        <Link to={`/discover/books/d/${content._id}`} className="w-full">
          <div className="flex flex-col">
            <div className="h-[270px] w-[180px] max-md:h-[180px] max-md:w-[120px] border-2 border-gray-500 overflow-hidden">
              <img
                src={content.cover?.url}
                alt={content.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[180px] h-[60px] max-md:w-[120px] border-2 border-gray-500 px-2 py-1">
              <p className="text-left font-bold text-lg text-ellipsis overflow-hidden whitespace-nowrap text-black">
                {content.title}
              </p>
              <p className="text-left text-sm text-ellipsis overflow-hidden whitespace-nowrap text-gray-600">
                written by John
              </p>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Book;
