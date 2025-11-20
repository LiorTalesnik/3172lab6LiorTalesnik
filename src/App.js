import Header from "./templates/Header";
import Footer from "./templates/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router";



function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;
