import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Analyze from "./pages/Analyze.jsx";
import Result from "./pages/Result.jsx";
import Sorting from "./pages/Sorting.jsx";
import Learn from "./pages/Learn.jsx";
import History from "./pages/History.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analyze" element={<Analyze />} />
          <Route path="/result" element={<Result />} />
          <Route path="/sorting" element={<Sorting />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
