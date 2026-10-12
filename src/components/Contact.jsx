import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiMail,
  FiPhone,
} from "react-icons/fi";
const email = "23f2000288@ds.study.iitm.ac.in";
export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [copied, setCopied] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  }
  async function submit(event) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const response = await fetch("https://getform.io/f/awnygxqb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!response.ok) throw new Error("Message delivery failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">04 / LET’S CONNECT</p>
          <h2>
            Have a problem
            <br />
            worth <span>solving?</span>
          </h2>
          <p>
            I’d love to hear about AI/ML opportunities, research, or an
            interesting project. Let’s build something useful together.
          </p>
          <div className="contact-email">
            <FiMail />
            <a href={`mailto:${email}`}>{email}</a>
            <button
              aria-label={copied ? "Email copied" : "Copy email address"}
              onClick={copyEmail}
            >
              {copied ? <FiCheck /> : <FiCopy />}
            </button>
          </div>
          <span className="copy-status" role="status">
            {copied ? "Email copied to clipboard." : ""}
          </span>
          <a className="phone-link" href="tel:+919572030969">
            <FiPhone /> +91 95720 30969
          </a>
          <div className="contact-social">
            <a
              href="https://github.com/23f2000288"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <FiArrowUpRight />
            </a>
            <a
              href="https://www.linkedin.com/in/md-faiz-khan-21a89334b"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <FiArrowUpRight />
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          <h3>Say hello.</h3>
          <div className="form-row">
            <div>
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                name="name"
                placeholder="Full name"
                autoComplete="name"
                required
                maxLength={120}
                disabled={status === "sending"}
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                maxLength={254}
                disabled={status === "sending"}
              />
            </div>
          </div>
          <label htmlFor="message">What’s on your mind?</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me a little about your idea or opportunity…"
            rows={4}
            required
            maxLength={5000}
            disabled={status === "sending"}
          />
          <button
            className="button button-lime"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <FiArrowUpRight />
          </button>
          <p
            className={`form-status ${status}`}
            role="status"
            aria-live="polite"
          >
            {status === "sent"
              ? "Thanks! Your message has been sent."
              : status === "error"
                ? "Your message could not be sent. Please try again or email me directly."
                : "You can also reach me directly by email."}
          </p>
        </form>
      </div>
    </section>
  );
}
