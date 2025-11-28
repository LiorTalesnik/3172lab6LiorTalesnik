const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());


const projects = [
  {
    id: 1,
    name: "Weather App",
    description:
      "This is a website to involves showing real time weather using a public API to capture live weather data and display it.",
    tech: "React, JavaScript, Bootstrap, SQL, Public API",
  },
  {
    id: 2,
    name: "HomeLab",
    description:
      "I'm currently building a personal homelab server environment. The goal is to create an isolated space where I can experiment with hosting web services, managing users, and running virtual machines securely.",
    tech: "Proxmox, Ubuntu Server, Docker + Portainer, Pi-hole",
  },
];


app.get("/api/projects", (req, res) => {
  res.json(projects);
});


app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
