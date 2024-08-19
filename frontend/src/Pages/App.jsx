import Discover from "./Discover";
import About from "./About";
import BookDetails from "./BookDetails";
import Home from "./Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Signup from "./Signup";
import Login from "./Login";
import { useAuthContext } from "../hooks/useAuthContext";
import WaitlistNavbar from "../components/WaitlistNavbar";
import TermsOfService from "./Legal/TermsOfService";
import NotFound from "./NotFound";
import ContentForm from "../components/ContentForm";
import ArticlesPage from "../components/ArticlesPage";
import CreateContent from "../components/CreateContent";

function Layout({ navbar, children }) {
  return (
    <div>
      {navbar}
      <main>{children}</main>
    </div>
  );
}

export default function App() {
  const { user } = useAuthContext();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Router>
        {}
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
          <Route path="/discover/articles" element={<ArticlesPage />} />
          <Route path="/discover/books/d/:id" element={<BookDetails />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/:id/*" element={<NotFound />} />
          <Route path="/create" element={<CreateContent />} />
        </Routes>
      </Router>
    </>
  );
}
