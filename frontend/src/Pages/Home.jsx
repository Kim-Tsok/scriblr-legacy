import Navbar from "../components/WaitlistNavbar";
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
