import Discover from "./Discover";
import About from "./About";
import BookDetails from "./BookDetails";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AppRouter from "./AppRouter";
import Navbar from "../components/Navbar";
import Signup from "./Signup";
import Login from "./Login";
import { AuthContext } from "../context/AuthContext";
import { useAuthContext } from "../hooks/useAuthContext";
import TermsOfService from "./Legal/TermsOfService";
import NotFound from "./NotFound";

export default function App() {
  const { user } = useAuthContext();
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/discover"
            element={user ? <Discover /> : <Navigate to="/signup" />}
          />
          <Route path="/discover/books" element={<Discover />} />
          <Route
            path="/signup"
            element={user ? <Navigate to="/discover" /> : <Signup />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/discover" /> : <Login />}
          />
          <Route path="/discover/books/d/:id" element={<BookDetails />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
