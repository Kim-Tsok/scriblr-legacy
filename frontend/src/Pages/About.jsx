import Landing from "../components/Landing";
import Search from "../components/Search";
import WaitlistForm from "../components/WaitlistForm";
import { Link } from "react-router-dom";
import earth from "/earth.jpg";

const About = () => {
  return (
    <>
      <div className="font-mono h-screen flex items-center justify-center flex-col">
        <h1 className="text-zinc-700 font-extrabold text-3xl pb-6 text-center">
          Sorry, this page is under construction :(
        </h1>
        <Link
          to="/"
          className="p-2 h-[2.5rem] px-3 bg-blue-900 text-white max-md:m-3"
        >
          Go Home
        </Link>
      </div>
    </>
  );
};

export default About;
