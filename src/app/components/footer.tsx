import Image from "next/image";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const navigation = [
  [
    { label: "Home", href: "/#home" },
    { label: "Projects", href: "/#projects" },
    { label: "About Me", href: "/#about" },
  ],
  [
    { label: "My Process", href: "/#process" },
    { label: "Contact", href: "/#contact" },
  ],
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Arzy4",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: FaLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/YOUR_PHONE_NUMBER",
    icon: FaWhatsapp,
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] px-5 py-8 md:px-10">
      <div className="mx-auto max-w-[1440px] rounded-[28px] border border-white/10 bg-[#020204] px-8 py-12 md:px-12 lg:px-14 lg:py-14">

        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_auto] lg:gap-10">

          {/* Left: Logo and introduction */}
          <div className="flex flex-col items-start">

            <Link href="/#home">
              <Image
                src="/websiteLogo.png"
                alt="Robby Logo"
                width={210}
                height={90}
                className="h-auto w-[180px] object-contain sm:w-[210px]"
              />
            </Link>

            <p className="mt-5 max-w-[320px] text-xl leading-relaxed text-[#C6CDD5] sm:text-2xl font-outfit font-[400]">
              Building thoughtful digital experiences through code.
            </p>

          </div>

          {/* Middle: Navigation */}
          <div className="grid grid-cols-2 gap-8 border-[#3562A2]/30 lg:border-l lg:pl-12 justify-items-center pt-7 4196CE] font-inter font-[500]">

            {navigation.map((column, index) => (
              <div
                key={index}
                className="flex flex-col gap-10"
              >
                {column.map((item) =>
                  item.href.startsWith("http") ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl text-[#C6CDD5] transition-colors duration-300 hover:text-[#4196CE]"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-xl text-[#C6CDD5] transition-colors duration-300 hover:text-[#4196CE]"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
            ))}

          </div>

          {/* Right: Social media icons */}
          <div className="flex gap-4 border-[#3562A2]/30 lg:flex-col lg:border-l lg:pl-16 justify-center">

            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3562A2]/50 text-[#C6CDD5] transition-all duration-300 hover:-translate-y-1 hover:border-[#4196CE] hover:bg-[#152D47] hover:text-[#4196CE]"
                >
                  <Icon size={19} />
                </a>
              );
            })}

          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-[#3562A2]/30 pt-6 text-xs text-[#C6CDD5] sm:flex-row 4196CE] font-inter font-[400]">
          <p>© 2026 Robby Arzy. All rights reserved.</p>

          <p>
            Designed & Built with Next.js and Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
