import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import About from "./About";

const home = () => {
  return (
    <>
      <div className="font-mono">
        <Navbar />
        <Landing />
      </div>
    </>
  );
};

export default home;
