import { Link } from "react-router";

export default function Header({ theme, onToggleTheme }) {
  const isDark = theme === "dark";

  return (
  <header>
     
  <nav
  className={`navbar navbar-expand-lg ${
  isDark ? "navbar-dark bg-dark" : "navbar-light bg-light"
  }`}
  >
  <div className="container">
  <Link className="navbar-brand" to="/">
  My Portfolio
  </Link>

  <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#mainNavbar"
  aria-controls="mainNavbar"
  aria-expanded="false"
  aria-label="Toggle navigation"
  >
  <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="mainNavbar">
  <ul className="navbar-nav ms-auto">
  <li className="nav-item">
  <Link className="nav-link" to="/">
  Home
  </Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/about">
  About
  </Link>
  </li>
  <li className="nav-item">
  <Link className="nav-link" to="/projects">
  Projects
  </Link>
  </li>
  </ul>

  <button
  type="button"
  className="btn btn-outline-secondary btn-sm ms-3"
  onClick={onToggleTheme}
  >
  {isDark ? "Light Mode" : "Dark Mode"}
  </button>
  </div>
  </div>
  </nav>
</header>
  );
}