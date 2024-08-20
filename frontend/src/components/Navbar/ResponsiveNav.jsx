import { Link } from "react-router-dom";

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

const ResponsiveNav = (setIsMenuOpen, isMenuOpen) => {
  return (
    <>
      <div className="fixed h-screen flex justify-center items-center text-center text-3xl leading-[3rem] top-[3.2rem] left-0 right-0 bg-white border-b-2 border-zinc z-20 md:hidden rounded-lg mx-3 my-7 border-4 border-neutral-300">
        <ul className="py-2">
          <li className="px-4 py-2">
            <Link to="/discover/books" onClick={toggleMenu}>
              Books
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/discover/books" onClick={toggleMenu}>
              Articles
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/discover/books" onClick={toggleMenu}>
              Writers
            </Link>
          </li>
          <li className="px-4 py-2">
            <Link to="/discover/books" onClick={toggleMenu}>
              Publishers
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ResponsiveNav;
