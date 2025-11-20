export default function Home() {
  return (
    <main id="main-content" className="home-pageBG">

    <section className="mb-5">
    <h1 className="display-4 fw-bold">Lior Talesnik</h1>
    <p className="lead fs-4">
    Applied Computer Science student at Dalhousie University
    </p>

    <p className="fs-5 mt-3">
    I love working with tools like <strong>Java, Python, and also have been getting into networking</strong>, I'm really trying to improve my networking skills, my biggest project right now is trying to make
    my own home lab. I currently study full-time, work in tech retail at Apple part time, and have experience in both
    leadership and collaboration from my my recent roles.My goal is to get a job either in cyber security or
    something in networking once I graduate.
        </p>
      </section>

  {/* Social Links */}
  <section className="mt-4">
  <h2 className="h4 fw-bold">Connect With Me</h2>
  <p className="fs-5">Reach out to me!</p>

  <ul className="list-unstyled fs-5">
    <li>
        📬 <a href="mailto:lr858920@dal.ca" className="text-white text-decoration-underline">
          lr858920@dal.ca
    </a>
    </li>
    <li>

      💼 <a href="https://www.linkedin.com/in/lior-talesnik-5b060b2b1/" target="_blank" rel="noopener noreferrer"
      className="text-white text-decoration-underline">
      LinkedIn Profile
      </a>

   </li>

    <li>
      📌 <a href="https://www.instagram.com/lior_talesnik?igsh=MW1pMWt3M3lpdTI5aQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer"
          className="text-white text-decoration-underline">
          Instagram
        </a>

        </li>

        </ul>

      </section>

      <section className="mt-5 center-text">
      <h2 className="h4 fw-bold">Proudly studying at Dalhousie University</h2>

      <img src="DAL-FullMark-White.webp" className="img-fluid rounded mt-3" alt="Dalhousie University" />

        
      </section>

    </main>
  );
}
