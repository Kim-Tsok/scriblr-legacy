import Discover from "../Pages/Discover";
import { Link } from "react-router-dom";
import WaitlistForm from "./WaitlistForm";
import twitter from "/x-twitter.svg";
import instagram from "/instagram.svg";
import linkedin from "/linkedin-in.svg";

const Landing = () => {
  return (
    <div className="h-screen dark:text-black dark:bg-white bg-black text-white">
      <div className="w-screen flex items-center justify-center h-full -mt-[4rem] flex-col overflow-y-clip">
        <h1 className="text-[30px] font-bold max-sm:text-[24px] max-md:text-[27px]">
          It only takes one line
        </h1>
        <p className="w-[50%] m-2 text-center max-md:w-[87%] max-sm:text-sm">
          Scriblr is a decentralized hub for writers, publisher and readers
          where you hire and be hired, read and be read, find and be found.
          Where Books, articles, scripts and other content are ranked on generic
          quality.
        </p>

        <div className="flex mt-4">
          <WaitlistForm />
          {/* <Link
            // to="/discover"
            className="bg-black py-2 px-4 text-blue-800 font-semibold m-2 flex items-center justify-center"
          >
            Join Waitlist
          </Link> */}
          {/* <a
            href="#"
            className="border-2 border-black w-[90px] h-[40px] text-black font-semibold m-2 flex items-center justify-center"
          >
            Sign in
          </a> */}
        </div>
        <footer className="absolute bottom-0 pb-5 flex ">
          <a href="https://instagram.com/komma__01/" className="mx-3 ">
            <img src={instagram} alt="" className="h-7 max-md:h-6" />
          </a>
          <a href="https://x.com/Komma_01" className="mx-3">
            <img src={twitter} alt="" className="h-7 max-md:h-6" />
          </a>
          <a
            href="https://linkedin.com/in/kim-tsok-5b6b82261/"
            className="mx-3"
          >
            <img src={linkedin} alt="" className="h-7 max-md:h-6" />
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Landing;
