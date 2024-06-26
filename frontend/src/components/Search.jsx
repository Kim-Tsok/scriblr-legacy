import arrow from "/arrow-right.svg";

const Search = () => {
  return (
    <>
      <form className="flex w-screen items-center justify-center">
        <input
          type="search"
          name="search"
          id="searchbar"
          placeholder="Search for authors, writers, articles & books"
          className="p-2 w-[34%] h-[2.5rem] border-2 border-gray-500 outline-none"
        />
        <button className="p-2 h-[2.5rem] px-3 bg-neutral-900" type="submit">
          <img src={arrow} alt="arrow-right" className="w-5" />
        </button>
      </form>
    </>
  );
};

export default Search;
