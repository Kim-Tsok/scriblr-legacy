import Discover from "./Discover";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </Router>
    </>
  );
}
