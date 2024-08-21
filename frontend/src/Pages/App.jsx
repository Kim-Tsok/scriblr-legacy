import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import WaitlistNavbar from "../components/WaitlistNavbar";
import Home from "./Home";
import About from "./About";
import Discover from "./Discover";
import BookDetails from "./BookDetails";
import Signup from "./Signup";
import Login from "./Login";
import TermsOfService from "./Legal/TermsOfService";
import NotFound from "./NotFound";
import ContentForm from "../components/ContentForm";
import ArticlesPage from "../components/ArticlesPage";
import CreateContent from "../components/CreateContent";
import { useAuthContext } from "../hooks/useAuthContext";
import EmptyNav from "../components/Navbar/EmptyNav";

function Layout() {
  const location = useLocation();
  const getNavbarComponent = () => {
    if (location.pathname === "/") {
      return WaitlistNavbar;
    }
    if (location.pathname.startsWith("/discover")) {
      return Navbar;
    }
    if (location.pathname.startsWith("/signup")) {
      return EmptyNav;
    }
    if (location.pathname.startsWith("/login")) {
      return EmptyNav;
    }
    return Navbar;
  };

  const NavbarComponent = getNavbarComponent();

  return (
    <div>
      <NavbarComponent />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/discover"
            element={
              useAuthContext().user ? <Discover /> : <Navigate to="/signup" />
            }
          />
          <Route path="/discover/books" element={<Discover />} />
          <Route
            path="/signup"
            element={
              useAuthContext().user ? <Navigate to="/discover" /> : <Signup />
            }
          />
          <Route
            path="/login"
            element={
              useAuthContext().user ? <Navigate to="/discover" /> : <Login />
            }
          />
          <Route path="/discover/articles" element={<ArticlesPage />} />
          <Route path="/discover/books/d/:id" element={<BookDetails />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/create" element={<CreateContent />} />
          <Route path="/create/books" element={<ContentForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
