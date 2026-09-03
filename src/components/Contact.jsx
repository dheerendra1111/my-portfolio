import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { useReveal } from "../hooks/useReveal";
import { SendIcon, GitHubIcon, LinkedInIcon, EmailIcon } from "./Icons";

/* ── Formspree Integration ──────────────────────────────
   1. Go to https://formspree.io and create a free account.
   2. Create a new form → copy the form ID (looks like "xpzgkdob").
   3. Replace YOUR_FORM_ID below with that ID.
   ──────────────────────────────────────────────────────── */
const FORMSPREE_ID = "YOUR_FORM_ID"; // ← Replace this

export default function Contact() {
  const [ref, revealed] = useReveal(0.1);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Please enter a valid email";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSending(true);
    setServerError("");

    try {
      // If Formspree ID hasn't been set yet, fall back to UI-only mode
      if (!FORMSPREE_ID || FORMSPREE_ID === "YOUR_FORM_ID") {
        await new Promise((r) => setTimeout(r, 800)); // Simulate network delay
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        return;
      }

      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        setServerError("Something went wrong. Please try again or email me directly.");
      }
    } catch {
      setServerError("Network error. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div
        ref={ref}
        className={`reveal ${revealed ? "revealed" : ""} mx-auto max-w-6xl px-5 sm:px-8`}
      >
        <h2 className="section-heading text-3xl font-bold text-white sm:text-4xl">
          Let's Build Something Together.
        </h2>
        <p className="mt-5 max-w-2xl text-base text-gray-400 sm:text-lg">
          I'm always interested in discussing software engineering, interesting
          projects, technology, and new opportunities.
        </p>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Contact Form */}
          <div className="flex-1">
            {submitted ? (
              <div className="glass rounded-2xl p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
                  <svg
                    className="h-8 w-8 text-emerald-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="mt-2 text-gray-400">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-6 rounded-lg px-6 py-2.5 text-sm font-medium text-gray-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`form-input w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 ${
                      errors.name ? "border-red-500/50" : ""
                    }`}
                    autoComplete="name"
                    disabled={sending}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={`form-input w-full rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 ${
                      errors.email ? "border-red-500/50" : ""
                    }`}
                    autoComplete="email"
                    disabled={sending}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or opportunity..."
                    className={`form-input w-full resize-none rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 ${
                      errors.message ? "border-red-500/50" : ""
                    }`}
                    disabled={sending}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400">{errors.message}</p>
                  )}
                </div>

                {serverError && (
                  <p className="rounded-lg bg-red-500/10 px-4 py-2.5 text-sm text-red-400 border border-red-500/20">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  className="btn-primary flex items-center gap-2.5 rounded-xl px-7 py-3.5 text-sm font-semibold text-white disabled:opacity-60 disabled:cursor-not-allowed"
                  id="contact-submit"
                  disabled={sending}
                >
                  <span className="flex items-center gap-2.5">
                    {sending ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <SendIcon className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="w-full space-y-5 lg:w-80 shrink-0">
            <div className="glass rounded-2xl p-6 space-y-6">
              <h3 className="text-base font-bold text-white">Contact Info</h3>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white group"
              >
                <div className="rounded-lg bg-accent-500/10 p-2.5 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                  <EmailIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="font-medium text-gray-300">{personalInfo.email}</p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white group"
              >
                <div className="rounded-lg bg-accent-500/10 p-2.5 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                  <LinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">LinkedIn</p>
                  <p className="font-medium text-gray-300">Connect on LinkedIn</p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-gray-400 transition-colors hover:text-white group"
              >
                <div className="rounded-lg bg-accent-500/10 p-2.5 text-accent-400 transition-colors group-hover:bg-accent-500/20">
                  <GitHubIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">GitHub</p>
                  <p className="font-medium text-gray-300">View my repositories</p>
                </div>
              </a>
            </div>

            {/* Location card */}
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-2">
                Based in
              </p>
              <p className="text-sm font-semibold text-white">Indore, India</p>
              <p className="text-sm text-gray-400">Open to remote &amp; onsite</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
