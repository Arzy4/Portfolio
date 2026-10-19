"use client";

import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
import {
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { useState, useEffect } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if(!status) return;

    const timer = setTimeout(() => {
      setStatus("");
      setIsSuccess(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");
    setIsSuccess(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });   

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      setStatus("Your message has been sent successfully!");
      setIsSuccess(true);
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-[#020204] py-20 text-[#F8FAFC] sm:py-28;"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4196CE] shadow-[0_0_15px_#4196CE]" />
          <p className="text-xs uppercase tracking-[0.3em] text-[#4196CE] font-inter font-[500]">
            05 / Contact Me
          </p>
        </div>

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="font-space-grotesk font-[700] text-4xl tracking-tight sm:text-5xl">
            LET'S MAKE IT{" "}
            <span className="text-[#4196CE]">HAPPEN.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#C6CDD5] font-outfit font-[400]">
            Always open to new opportunities, collaborations, and creative challenges.
            Let's work together to transform your ideas into reality.
          </p>
        </div>

        {/* Contact container */}
        <div className="mx-auto grid max-w-[1150px] gap-6 rounded-[28px] border border-[#3562A2]/50 bg-[#0A1628] p-4 shadow-[0_0_30px_rgba(65,150,206,0.3)] md:grid-cols-[0.85fr_1.5fr] md:gap-10 md:p-6">

          {/* Left: Contact information */}
          <div className="flex flex-col rounded-[20px] bg-[#152D47] p-7 sm:p-9">
            <h3 className="font-space-grotesk font-[600] text-2xl font-bold">
              Contact Information
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#C6CDD5] font-outfit font-[400]">
              Feel free to reach out through any of these
              channels. I'm always open to new connections.
            </p>

            <div className="mt-10 space-y-7">

              {/* Replace with your actual email */}
              <a
                href="mailto:robbyarzy@example.com"
                className="group flex items-center gap-4"
              >
                <FaEnvelope className="shrink-0 text-[#4196CE]" size={21} />
                <span className="break-all text-sm transition-colors group-hover:text-[#4196CE] font-inter font-[500]">
                  robbyarzy@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/6282232138510"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <FaWhatsapp className="shrink-0 text-[#4196CE]" size={21} />
                <span className="flex items-center gap-1 text-sm transition-colors group-hover:text-[#4196CE] font-inter font-[500]">
                  (+62)822-3213-8510
                  <ArrowUpRight size={14} />
                </span>
              </a>

              <a
                href="https://linkedin.com/in/robbyarzy"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <FaLinkedin className="shrink-0 text-[#4196CE]" size={21} />
                <span className="flex items-center gap-1 text-sm transition-colors group-hover:text-[#4196CE] font-inter font-[500]">
                  linkedin.com/in/robbyarzy
                  <ArrowUpRight size={14} />
                </span>
              </a>

              <a
                href="https://github.com/Arzy4"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <FaGithub className="shrink-0 text-[#4196CE]" size={21} />
                <span className="flex items-center gap-1 text-sm transition-colors group-hover:text-[#4196CE] font-inter font-[500]">
                  github.com/Arzy4
                  <ArrowUpRight size={14} />
                </span>
              </a>

              <div className="flex items-center gap-4">
                <MapPin className="shrink-0 text-[#4196CE]" size={21} />
                <span className="text-sm font-inter font-[500]">
                  Surabaya, Indonesia
                </span>
              </div>
            </div>

            {/* Decorative element */}
            <div className="mt-auto pt-10">
              <div className="h-[2px] w-14 bg-[#4196CE]" />
              <p className="mt-4 text-xs tracking-widest text-[#C6CDD5] font-inter font-[600]">
                LET'S BUILD SOMETHING GREAT.
              </p>
            </div>
          </div>

          {/* Right: Contact form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col px-2 py-6 sm:px-5"
          >
            <div className="grid gap-8 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-name" className="text-sm text-[#C6CDD5] font-inter font-[500]">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full border-b border-[#3562A2] bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-[#C6CDD5]/40 focus:border-[#4196CE] font-outfit font-[400]"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="contact-email" className="text-sm text-[#C6CDD5] font-inter font-[500]">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border-b border-[#3562A2] bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-[#C6CDD5]/40 focus:border-[#4196CE] font-outfit font-[400]"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-2">
              <label htmlFor="contact-subject" className="text-sm text-[#C6CDD5] font-inter font-[500]">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                required
                placeholder="What's this about?"
                className="w-full border-b border-[#3562A2] bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-[#C6CDD5]/40 focus:border-[#4196CE] font-outfit font-[400]"
              />
            </div>

            <div className="mt-8 flex flex-col gap-2">
              <label htmlFor="contact-message" className="text-sm text-[#C6CDD5] font-inter font-[500]">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none border-b border-[#3562A2] bg-transparent py-3 text-sm text-white outline-none transition-colors placeholder:text-[#C6CDD5]/40 focus:border-[#4196CE] font-outfit font-[400]"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="mt-10 flex w-fit items-center gap-2 rounded-lg bg-[#4196CE] px-7 py-3 text-sm font-inter font-[600] text-[#020204] transition-all duration-300 hover:-translate-y-1 hover:bg-[#66B2E2]"
            >
              {isSending ? "Sending..." : "Send Message"}
              <ArrowUpRight size={18} />
            </button>

            {status && (
              <p
                role="status"
                className={`mt-4 text-sm font-inter font-[600] ${
                  isSuccess ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
}
