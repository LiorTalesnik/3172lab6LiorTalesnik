import { useEffect, useState } from "react";


const API_URL = "http://localhost:4000/api/projects"; 


export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
  const fetchProjects = async () => {
  try {
  setLoading(true);
  setErrorMsg("");

  const response = await fetch(API_URL);

  if (!response.ok) {
  throw new Error(`Server returned status ${response.status}`);
    }

    const data = await response.json();
    setProjects(data);
    } catch (error) {
    console.error("Error loading projects:", error);
    setErrorMsg("Could not load projects from the server. Please try again later.");
   
       
  } finally {
  setLoading(false);
  }
    };

    fetchProjects();
  }, []);

  return (
    <main id="main-content" className="projects-pageBG">
    <div className="container mt-5">
    <h1>Projects</h1>
    <p className="mt-3">
    Here are a few projects that show what I&apos;ve been working on recently.
    </p>

    {loading && (
    <p className="mt-3">Loading projects...</p>
    )}

    {!loading && errorMsg && (
    <div className="alert alert-warning mt-3" role="alert">
    {errorMsg}
    </div>
    )}

  <div className="row mt-4">
  {projects.map((project) => (
  <div key={project.id} className="col-md-6 mb-3">
  <div className="card h-100">
  <div className="card-body">
  <h2 className="h5 card-title">{project.name}</h2>
  <p className="card-text">{project.description}</p>
  {project.tech && (
  <p className="card-text">
  <strong>Tools:</strong> {project.tech}
  
</p>
  )}

  </div>
      </div>
     </div>

))}

    {!loading && projects.length === 0 && !errorMsg && (
    <p>No projects to show yet.</p>
    )}
  </div>
  </div>
  </main>
  );
}
