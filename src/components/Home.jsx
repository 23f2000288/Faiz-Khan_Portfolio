import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
export default function Home() {
  return (
    <section id="home" className="hero container">
      <div className="hero-copy">
        <p className="eyebrow">
          <span className="status-dot" /> AI ENGINEERING · DATA SCIENCE ·
          RESEARCH
        </p>
        <p className="hero-intro">Hi, I'm Md Faiz Khan.</p>
        <h1>
          Turning data
          <br />
          into <span className="highlight">intelligence.</span>
        </h1>
        <p className="hero-description">
          I build AI systems and full-stack applications that move from ideas to
          real-world solutions. My work spans machine learning, NLP, Transformers,
          Generative AI, and Full-Stack Development.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#work">
            Explore my work <FiArrowDown />
          </a>
          <a className="text-link" href="#contact">
            Let’s connect <FiArrowUpRight />
          </a>
        </div>
        <div className="hero-social">
          <a
            href="https://github.com/23f2000288"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub <FiArrowUpRight />
          </a>
          <a
            href="https://www.linkedin.com/in/md-faiz-khan-21a89334b"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn /> LinkedIn <FiArrowUpRight />
          </a>
          <span>Based in India</span>
        </div>
      </div>
      <div className="portrait-stage">
        <div className="portrait-top">
          <span>
            <i /> THE HUMAN BEHIND THE MODELS
          </span>
          <span>01 / FK</span>
        </div>
        <div className="portrait-wrap">
          <img
            src="/faiz-khan.jpeg"
            alt="Md Faiz Khan wearing glasses and a black shirt"
            width="1172"
            height="1342"
            fetchPriority="high"
          />
          <div className="portrait-label">
            <span>Curiosity → Code → Impact</span>
            <FiArrowUpRight />
          </div>
        </div>
        <div className="portrait-bottom">
          <div>
            <strong>Md Faiz Khan</strong>
            <span>AI / ML Engineer</span>
          </div>
          <span className="portrait-monogram">fk.</span>
        </div>
        <div className="portrait-stamp">
          IIT
          <br />
          <strong>MADRAS</strong>
          <span>BS · DATA SCIENCE</span>
        </div>
      </div>
      <div className="proof-strip">
        <div>
          <strong>IIT Madras</strong>
          <span>BS Data Science & Programming</span>
        </div>
        <div>
          <strong>
            CYStar <FiArrowUpRight />
          </strong>
          <span>AI Research Intern · Jan–Jul 2026</span>
        </div>
        <div>
          <strong>
            Top 9%<span className="metric-note"> / 1,800+</span>
          </strong>
          <span>ML competition participants</span>
        </div>
      </div>
    </section>
  );
}
