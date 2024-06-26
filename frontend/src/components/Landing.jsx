import Discover from "../Pages/Discover";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="h-[26rem] text-black bg-blue-800">
      <div className="w-screen flex items-center justify-center h-full -mt-[4rem] text-white flex-col">
        <h1 className="text-[30px] font-bold">It only takes one line</h1>
        <p className="w-[50%] m-2 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
          deleniti quos aut dolor quod. Autem sed minus quidem quisquam illum,
          voluptatem sunt quia eos ad alias veniam earum doloribus a.
        </p>

        <div className="flex">
          <Link
            to={"/discover"}
            className="bg-white w-[90px] h-[40px] text-blue-800 font-semibold m-2 flex items-center justify-center"
          >
            Login
          </Link>
          <a
            href="#"
            className="border-2 border-white w-[90px] h-[40px] text-white font-semibold m-2 flex items-center justify-center"
          >
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
