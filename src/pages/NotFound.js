// src/pages/NotFound.js
import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="container text-center mt-5">
      <h1 className="mb-3">404 - Page Not Found</h1>
      <p className="mb-4">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-outline-primary">
        Go Home
      </Link>
    </main>
  );
}
