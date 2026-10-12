import { useState } from "react";
import {
  FiArrowUpRight,
  FiArrowRight,
  FiLayers,
  FiMessageSquare,
  FiTrendingUp,
  FiShield,
  FiShoppingBag,
} from "react-icons/fi";
const projects = [
  {
    id: "01",
    title: "UnboxingAI",
    subtitle: "An AI-powered learning companion.",
    category: "Generative AI",
    kind: "learning",
    Icon: FiLayers,
    description:
      "A full-stack platform that brings live AI news and research to learners, adapting each story to Beginner, Intermediate, or Expert level with Gemini and cross-referencing coverage with Tavily.",
    tags: ["React", "Express", "Gemini", "Tavily", "SQLite"],
    detail:
      "Google OAuth 2.0 and Express sessions connect each learner to saved stories, playlists, streaks, and preferences. A personal dashboard and research explorer make learning easier to follow.",
    href: "https://unboxingai.onrender.com/",
    note: "PERSONALIZED AI LEARNING",
  },
  {
    id: "02",
    title: "TDS Virtual TA",
    subtitle: "Relevant answers. Grounded in context.",
    category: "Generative AI",
    kind: "rag",
    Icon: FiMessageSquare,
    description:
      "A RAG assistant that retrieves relevant course discussions and uses an LLM to generate answers grounded in the source material.",
    tags: ["Python", "FastAPI", "FAISS", "OpenAI", "RAG"],
    detail:
      "Scraped and cleaned Discourse forum content, generated embeddings, and built a FAISS semantic index. Prompt engineering grounds responses in retrieved content to reduce hallucinations.",
    href: "https://tds-virtual-ta-zvjo.onrender.com/",
    note: "RETRIEVAL-AUGMENTED GENERATION",
  },
  {
    id: "03",
    title: "Purchase Value Prediction",
    subtitle: "Finding signals in e-commerce data.",
    category: "Machine Learning",
    kind: "prediction",
    Icon: FiTrendingUp,
    description:
      "XGBoost regression on a 105-column e-commerce dataset, with feature engineering for a highly imbalanced, zero-inflated purchase-value target.",
    tags: ["Python", "XGBoost", "Pandas", "Feature engineering"],
    detail:
      "Handled missing values and categorical encoding, then engineered session, device, and geographic features. Ranked 159th out of 1,800+ participants with an out-of-sample R² of 0.68.",
    note: "159 / 1,800+ · TOP 9%",
  },
  {
    id: "04",
    title: "Insurance Premium Prediction",
    subtitle: "From predictive models to a usable app.",
    category: "Machine Learning",
    kind: "insurance",
    Icon: FiShield,
    description:
      "Compared Random Forest and XGBoost models to predict insurance premiums, then deployed inference with FastAPI and a Streamlit dashboard.",
    tags: ["Scikit-Learn", "Random Forest", "XGBoost", "Streamlit"],
    detail:
      "Built and evaluated regression models on structured insurance data, achieving an R² of 0.83. The API and dashboard bring predictions into an interactive application.",
    note: "R² 0.83 · REGRESSION",
  },
  {
    id: "05",
    title: "Sonik — Smart Retail Management",
    subtitle: "A connected workspace for everyday retail operations.",
    category: "Full-Stack",
    kind: "retail",
    Icon: FiShoppingBag,
    description:
      "A team-built full-stack retail management app for small stores and supermarkets. Connects POS billing, inventory, customer credit, supplier workflows, and financial reporting in one workspace.",
    tags: ["Vue 3", "Vite", "FastAPI", "SQLAlchemy", "SQLite", "Chart.js"],
    detail:
      "A Vue 3 frontend with Pinia and Vue Router connects to a FastAPI backend. Features include stock, expiry and damage tracking, milk subscriptions, employee shifts, ML-based insights, and Razorpay integration. An optional Groq-powered AI assistant uses the shared store database to answer business questions. Developed as a collaborative software engineering course project.",
    href: "https://retaildelhi.netlify.app/",
    source: "https://github.com/23f2004126/Software_Engineering_Project",
    note: "FULL-STACK RETAIL OPERATIONS",
  },
];
function ProjectArt({ project }) {
  const Icon = project.Icon;
  return (
    <div className={`project-art art-${project.kind}`} aria-hidden="true">
      <div className="art-grid" />
      {project.kind === "learning" && (
        <div className="learning-art">
          <div className="art-window-title">
            <Icon /> UnboxingAI <span>● ● ●</span>
          </div>
          <div className="level-chips">
            <span>Beginner</span>
            <span className="selected">Intermediate</span>
            <span>Expert</span>
          </div>
          <div className="story-lines">
            <b>AI, made understandable.</b>
            <span />
            <span />
            <span />
          </div>
          <div className="art-bottom">
            Research → Your next insight <FiArrowRight />
          </div>
        </div>
      )}
      {project.kind === "rag" && (
        <div className="rag-art">
          <div className="rag-node">
            <FiLayers />
            <span>Course knowledge</span>
          </div>
          <div className="rag-connector" />
          <div className="rag-node rag-center">
            <Icon />
            <span>Retrieve + Generate</span>
          </div>
          <div className="rag-connector" />
          <div className="rag-answer">
            A grounded answer <span>↗</span>
          </div>
        </div>
      )}
      {project.kind === "prediction" && (
        <div className="chart-art">
          <div className="chart-heading">
            <span>ML LEADERBOARD</span>
            <strong>
              Top 9%
              <FiTrendingUp />
            </strong>
          </div>
          <div className="rank-art">
            <strong>
              159<span> / 1,800+</span>
            </strong>
            <div className="rank-track">
              <i />
            </div>
          </div>
          <div className="chart-caption">
            XGBOOST REGRESSION <span>R² 0.68</span>
          </div>
        </div>
      )}
      {project.kind === "insurance" && (
        <div className="insurance-art">
          <div className="insurance-icon">
            <Icon />
          </div>
          <div>
            <span>PREDICTION MODEL</span>
            <strong>
              0.83 <small>R²</small>
            </strong>
            <p>Evaluate. Predict. Deploy.</p>
          </div>
          <div className="model-pills">
            <span>Random Forest</span>
            <span>XGBoost</span>
          </div>
        </div>
      )}
      {project.kind === "retail" && (
        <div className="retail-art">
          <div className="retail-art-heading">
            <Icon />
            <div>
              <strong>Sonik</strong>
              <span>SMART RETAIL MANAGEMENT</span>
            </div>
          </div>
          <div className="retail-modules">
            <span>POS billing</span>
            <span>Inventory</span>
            <span>Business insights</span>
            <span>AI assistant</span>
          </div>
          <div className="retail-stack">
            Vue 3 <FiArrowRight /> FastAPI <FiArrowRight /> Store data
          </div>
        </div>
      )}
      <span className="art-label">{project.note}</span>
    </div>
  );
}
export default function Projects() {
  const [filter, setFilter] = useState("All projects");
  const visible = projects.filter(
    (project) => filter === "All projects" || project.category === filter,
  );
  return (
    <section id="work" className="section work-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Built with purpose.
              <br />
              <span className="muted">Backed by data.</span>
            </h2>
          </div>
          <p>
            A selection of projects across applied AI,
            <br className="desktop-break" /> predictive systems, and full-stack
            development.
          </p>
        </div>
        <div className="project-toolbar">
          <div className="filters" role="group" aria-label="Filter projects">
            {[
              "All projects",
              "Generative AI",
              "Machine Learning",
              "Full-Stack",
            ].map((label) => (
              <button
                key={label}
                className={filter === label ? "filter active" : "filter"}
                aria-pressed={filter === label}
                onClick={() => setFilter(label)}
              >
                {label}
              </button>
            ))}
          </div>
          <span className="project-count" aria-live="polite">
            {String(visible.length).padStart(2, "0")} PROJECTS
          </span>
        </div>
        <div className="project-grid">
          {visible.map((project) => (
            <article
              className={`project-card${project.kind === "retail" ? " project-featured" : ""}`}
              key={project.id}
            >
              <ProjectArt project={project} />
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>/{project.id}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-description">{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <details>
                    <summary>
                      Project details <span>+</span>
                    </summary>
                    <p>{project.detail}</p>
                  </details>
                  {project.href && (
                    <a
                      className="demo-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live demo <FiArrowUpRight />
                    </a>
                  )}
                </div>
                {project.source && (
                  <a
                    className="text-link project-source-link"
                    href={project.source}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source on GitHub <FiArrowUpRight />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
        <a
          className="text-link github-link"
          href="https://github.com/23f2000288"
          target="_blank"
          rel="noreferrer"
        >
          Explore my GitHub <FiArrowUpRight />
        </a>
      </div>
    </section>
  );
}
