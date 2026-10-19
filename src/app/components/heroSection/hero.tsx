import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import TechStackCard from "./techStackCard";

export default function Hero() {
    return (
        <section
        id="home"
        className="relative isolate min-h-screen overflow-hidden bg-[#020204] text-[#F8FAFC]"
      >
        {/* Ambient background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10%] top-[5%] h-[700px] w-[700px] rounded-full bg-[#0C2D5A]/40 blur-[150px]"
        />

        <div className="relative mx-auto flex min-h-screen max-w-[1440px] flex-col px-6 pt-32 md:px-10 lg:px-16">
          {/* Status labels */}
          <div className="flex flex-wrap justify-between gap-4 text-[10px] uppercase tracking-[0.22em] text-[#C6CDD5] sm:text-xs">
            <div className="flex items-center gap-3 font-inter font-[600]">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4196CE] shadow-[0_0_16px_#4196CE]"/>
              Open to Opportunities
            </div>
          </div>

          {/* Main hero content */}
          <div className="grid flex-1 items-center gap-10 pt-14 lg:pt-4 pb-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-0">
            {/* Left section */}
            <div className="relative z-20 mb-10">
              <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#4196CE] sm:text-sm font-inter font-[600] text-center lg:text-left">
                Hello, I'm Robby Arzy
              </p>

              <h1 className="text-[clamp(3.1rem,7vw,7.5rem)] leading-[0.98] tracking-[-0.065em] font-space-grotesk font-[700] text-center lg:text-left">
                <span className="block">SOFTWARE</span>
                <span className="block text-[#4196CE]">
                  DEVELOPER
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-relaxed text-[#C6CDD5] md:text-lg font-outfit font-[400] text-center lg:text-left">
                I build modern web applications and reliable
                backend systems, transforming ideas into
                functional digital experiences.
              </p>

              {/* Call to action */}
              <div className="mt-9 flex flex-row items-center justify-center gap-2 sm:gap-4 lg:justify-start">
                <Link
                  href="/#projects"
                  className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#4196CE] px-4 py-3 text-xs font-inter font-[600] text-[#020204] transition-all duration-300 hover:-translate-y-1 hover:bg-[#70B9E8] hover:shadow-[0_10px_35px_#4196CE30] sm:gap-4 sm:px-7 sm:py-4"
                >
                  Explore My Work
                  <ArrowUpRight size={18} />
                </Link>

                <Link
                  href="/#about"
                  className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-white/30 px-4 py-3 text-xs font-inter font-[600] transition-colors hover:border-[#4196CE] hover:text-[#4196CE] sm:gap-4 sm:px-7 sm:py-4"
                >
                  More About Me
                </Link>
              </div>
            </div>

            {/* Right section */}
            <div className="relative mx-auto h-[460px] w-full max-w-[560px] sm:h-[570px] lg:h-[690px]">
              {/* Blue background glow */}
              <div
                aria-hidden="true"
                className="absolute inset-12 rounded-full bg-[#1B579C]/50 blur-[90px]"
              />

              {/* Tilted background panel */}
              <div
                aria-hidden="true"
                className="absolute inset-x-10 bottom-12 top-12 rotate-[10deg] rounded-[48px] border border-[#4196CE]/50 bg-gradient-to-br from-[#0C2D5A] via-[#1B579C] to-[#020204] shadow-[0_0_80px_#1B579C50]"
              />

              {/* Decorative code */}
              <div className="absolute right-3 top-[30%] z-10 hidden font-space-grotesk font-[400] text-xs leading-relaxed tracking-wider text-[#8AC9F3] sm:block">
                <p>&lt;/&gt;</p>
                <p>Transforming</p>
                <p>ideas into</p>
                <p>codes</p>
                <p>/&gt;</p>
              </div>

              {/* Profile photo */}
              <div className="absolute inset-x-0 bottom-10 top-0 z-10">
                <Image
                  src="/profile/heroProfile.png"
                  alt="Robby Arzy"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain object-bottom"
                />
              </div>

              {/* Decorative orbit */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[-5%] top-[58%] z-20 h-[150px] w-[110%] -rotate-[15deg] rounded-[50%] border border-[#4196CE]/70"
              />

              {/* Orbit points */}
              <div
                aria-hidden="true"
                className="absolute bottom-[22%] left-[2%] z-20 h-2 w-2 rounded-full bg-[#4196CE] shadow-[0_0_16px_5px_#4196CE]"
              />

              {/* Floating technology card */}
              <div className="absolute bottom-6 right-0 z-30 w-[min(100%,390px)]">
                <TechStackCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}