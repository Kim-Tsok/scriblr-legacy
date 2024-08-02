import Navbar from "../components/Navbar";
import BookDetails from "./BookDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Discover from "./Discover";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/discover" element={<Discover />} />

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
