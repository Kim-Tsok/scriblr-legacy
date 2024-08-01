const Book = ({ content }) => {
  return (
    <>
      <div className="m-4">
        <div className="flex flex-col">
          <div className="h-[270px] w-[180px] border-2 border-gray-500 overflow-hidden">
            <img
              src={content.cover?.url}
              alt={content.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[180px] h-[60px] border-2 border-gray-500 px-2 py-1">
            <p className="text-left font-bold text-lg text-ellipsis overflow-hidden whitespace-nowrap">
              {content.title}
            </p>
            <p className="text-left text-sm text-ellipsis overflow-hidden whitespace-nowrap text-gray-600">
              written by John
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
