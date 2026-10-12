import {
  FiCode,
  FiCpu,
  FiMessageSquare,
  FiDatabase,
  FiLayers,
  FiCloud,
} from "react-icons/fi";
const groups = [
  {
    title: "NLP & Generative AI",
    Icon: FiMessageSquare,
    featured: true,
    items: [
      "NLP",
      "Transformers",
      "Generative AI",
      "LLMs",
      "RAG",
      "Tokenization",
      "Embeddings",
      "Prompt engineering",
      "Gemini API",
      "Tavily API",
      "OpenAI API",
    ],
  },
  {
    title: "Machine Learning",
    Icon: FiCpu,
    items: [
      "Scikit-Learn",
      "XGBoost",
      "Random Forest",
      "Regression",
      "Classification",
      "Hyperparameter tuning",
      "Model evaluation",
    ],
  },
  {
    title: "Deep Learning & Vision",
    Icon: FiLayers,
    items: [
      "PyTorch",
      "TensorFlow",
      "CNNs",
      "Transfer learning",
      "OpenCV",
      "Feature extraction",
      "Object detection",
    ],
  },
  {
    title: "Programming & Data",
    Icon: FiCode,
    items: [
      "Python",
      "SQL",
      "C++",
      "JavaScript",
      "Pandas",
      "NumPy",
      "Exploratory data analysis",
      "Feature engineering",
    ],
  },
  {
    title: "Full-Stack Development",
    Icon: FiCloud,
    items: [
      "React",
      "Vite",
      "Vue.js",
      "Express",
      "FastAPI",
      "REST APIs",
      "OAuth 2.0",
      "Streamlit",
    ],
  },
  {
    title: "Tools & Databases",
    Icon: FiDatabase,
    items: ["Docker", "Git / GitHub", "Linux", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    title: "Cloud & Deployment",
    Icon: FiCloud,
    items: ["GCP", "AWS", "Cloud deployments", "MLOps", "DevOps"],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">03 / MY TOOLKIT</p>
            <h2>
              The tools behind
              <br />
              <span className="muted">the ideas.</span>
            </h2>
          </div>
          <p>
            From data preparation to deployment,
            <br className="desktop-break" /> the stack I use to bring AI to
            life.
          </p>
        </div>
        <div className="skills-grid">
          {groups.map(({ title, Icon, items, featured }, index) => (
            <article
              key={title}
              className={`skill-card${featured ? " skill-featured" : ""}`}
            >
              <div className="skill-top">
                <Icon />
                <span>0{index + 1}</span>
              </div>
              <h3>{title}</h3>
              <div className="skill-tags">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
