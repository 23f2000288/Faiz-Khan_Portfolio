import { useEffect, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
const links = [
  ["Work", "work"],
  ["About", "about"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          className="brand"
          href="#home"
          onClick={() => setOpen(false)}
          aria-label="Faiz Khan home"
        >
          faiz<span>.</span>
          <small>AI / ML ENGINEER</small>
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
        <nav
          id="navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-resume" href="/Faiz-Khan-CV.pdf" download>
            Résumé <FiArrowUpRight />
          </a>
        </nav>
      </div>
    </header>
  );
}
