import { FiArrowUp } from "react-icons/fi";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="brand" href="#home">
          faiz<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Md Faiz Khan. Built with curiosity.</p>
        <a className="back-top" href="#home">
          Back to top <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
