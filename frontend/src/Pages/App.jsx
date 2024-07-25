import Discover from "./Discover";
import About from "./About";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </Router>
    </>
  );
}
