import Discover from "./Discover";
import About from "./About";
import BookDetails from "./BookDetails";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";
import Navbar from "../components/Navbar";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/discover/books/d/:id" element={<BookDetails />} />
        </Routes>
      </Router>
    </>
  );
}
