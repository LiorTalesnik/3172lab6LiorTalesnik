import { useState, useEffect } from "react";
import Header from "./templates/Header";
import Footer from "./templates/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router";


function App() {
  const [theme, setTheme] = useState(() => {
  if (typeof window !== "undefined") {
  const stored = localStorage.getItem("theme");
  return stored === "dark" ? "dark" : "light";

    }
    return "light";

  });

  useEffect(() => {
  localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`d-flex flex-column min-vh-100 theme-${theme}`}>
      <Header theme={theme} onToggleTheme={toggleTheme} />

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