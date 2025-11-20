export default function Projects() {
  return (
    <main className="projects-pageBG">
    <h1>Projects</h1>

    <div className="row mt-4">
    <div className="col-md-6 mb-3">
    <div className="card h-100">
    <div className="card-body">
    <h2 className="h5 card-title">Weather App </h2>
    <p>This is a website to involves showing real time weather using a public API to capture live weather data and display it.</p>
    <p><strong>Tools:</strong> React, JavaScript, Bootstrap, SQL, Public API </p>

    </div>
    </div>
    </div>

    <div className="col-md-6 mb-3">
    <div className="card h-100">
    <div className="card-body">
    <h2 className="h5 card-title">HomeLab</h2>
    <p>I'm currently building a personal homelab server environment. The goal is to create an isolated space where 
        I can experiment with hosting web services, managing users, and running virtual machines securely.</p>
    <p><strong>Tools:</strong>Proxmox, Ubuntu Server, Docker + Portainer, Pi-hole </p>

    </div>
    </div>
    </div>
    </div>
    </main>
  );
}
