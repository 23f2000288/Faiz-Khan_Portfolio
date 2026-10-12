import { FiArrowUpRight, FiAward } from "react-icons/fi";
export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <div>
            <p className="eyebrow">02 / THE PERSON & THE PATH</p>
            <h2>
              Curious by nature.
              <br />
              <span className="muted">Engineer by practice.</span>
            </h2>
            <p className="about-description">
              I’m Md Faiz Khan, an AI/ML engineer and BS Data Science and
              Programming student at IIT Madras. I enjoy connecting research
              with useful applications — understanding the data, building the
              model, and making it work beyond the notebook.
            </p>
            <p className="about-description">
              My work spans computer vision, natural language processing, and
              Generative AI. At CYStar, I worked on phishing and brand
              impersonation detection using real-world image and text data.
            </p>
            <a className="text-link" href="/Faiz-Khan-CV.pdf" download>
              Get the full résumé <FiArrowUpRight />
            </a>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-top">
                <span>EXPERIENCE</span>
                <span>JAN — JUL 2026</span>
              </div>
              <h3>AI Research Intern</h3>
              <p className="timeline-place">
                CYStar · Department of CSE, IIT Madras
              </p>
              <ul>
                <li>
                  Developed and evaluated ML and deep learning models for
                  phishing and brand impersonation detection.
                </li>
                <li>
                  Built image and text pipelines for ingestion, cleaning,
                  feature extraction, and evaluation.
                </li>
                <li>
                  Deployed inference services with FastAPI and Docker, and
                  shared benchmarks with the research team.
                </li>
              </ul>
            </article>
            <article className="timeline-item">
              <div className="timeline-top">
                <span>EDUCATION</span>
                <span>EXPECTED 2027</span>
              </div>
              <h3>Indian Institute of Technology Madras</h3>
              <p className="timeline-place">
                BS in Data Science and Programming
              </p>
              <span className="cgpa">
                CGPA <strong>7.8 / 10</strong>
              </span>
            </article>
          </div>
        </div>
        <div className="certifications">
          <p>
            <FiAward /> CONTINUED LEARNING
          </p>
          <span>NPTEL · Database Management Systems</span>
          <span>Machine Learning Workshop · IIT Madras</span>
          <span>HackerRank · SQL (Advanced)</span>
        </div>
      </div>
    </section>
  );
}
