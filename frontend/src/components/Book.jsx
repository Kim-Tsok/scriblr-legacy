const Book = ({ content }) => {
  return (
    <>
      <div className="m-4">
        <div className="flex flex-col">
          <div className="h-[256px] w-[190px] border-2 border-gray-500">
            <img src={content.cover} alt={content.title} />
          </div>
          <div className="w-[190px] h-[50px] border-2 border-gray-500 px-1">
            <p className="text-left font-bold text-lg text-ellipsis overflow-clip w-[190px] overflow-y-clip h-7">
              {content.title}
            </p>
            <p className="text-left text-sm text-ellipsis overflow-clip w-[190px] text-gray-600">
              written by John
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;
