import { useState } from "react";

const SKILLS = [
  "Java",
  "Python",
  "JavaScript",
  "React",
  "HTML & CSS",
  "Bootstrap",
  "Linux",
  "Git & GitHub",
  "SQL",
  "ProxMox",
  "Docker",
  "ubuntu",
  "Windows Server",
  "jira",
];

export default function About() {
  const [searchText, setSearchText] = useState("");

  const filteredSkills = SKILLS.filter((skill) =>
    skill.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault(); 
  };

  return (
    <main id="main-content" className="about-pageBG">
    <div className="container mt-5">
    <h1>About Me</h1>

    <section className="mt-4">
    <h2>Education</h2>
    <p>
    I'm an Applied Computer Science student at Dalhousie University.
    I focus on programming, web development, and networking.
    </p>
    </section>

    <section className="mt-4">
    <h2>Experience</h2>
    <p>
- IT Support, Corey Craig LTD (Internship) — Halifax, NS <br />
- Specialist, Apple (Part Time) — Halifax, NS
    </p>
    </section>

    <section className="mt-5">
    <h2>Goals</h2>
    <p>
    I'm interested in roles that are software development with networking
    or cybersecurity, and I'm building a small homelab to keep learning
    outside of class.
    </p>
    </section>

    <section className="mt-5">
    <h2>Skills</h2>
    <p>Type to find a skill.</p>

    <form className="row g-2" onSubmit={handleSubmit}>
    <div className="col-sm-8 col-md-6">
    <input
    type="text"
    className="form-control"
    placeholder="Search skills (e.g., React)"
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    />
    </div>
    </form>

    <ul className="list-group mt-3">
    {filteredSkills.length === 0 ? (
    <li className="list-group-item">
    No skills match that search.
    </li>
    ) : (
    filteredSkills.map((skill) => (
    <li key={skill} className="list-group-item">
    {skill}
    </li>
    ))
    )}
    </ul>
  </section>

        
    </div>
    </main>
  );
}
