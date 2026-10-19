import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ProjectCarousel from "./project-carousel";

export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020204] py-16 text-[#F8FAFC] sm:py-24 scroll-mt-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

        {/* Section label */}
        <div className="mb-12 flex items-center gap-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4196CE] shadow-[0_0_15px_#4196CE]" />

          <p className="text-xs uppercase tracking-[0.3em] text-[#4196CE] font-inter font-[500]">
            03 / BEST PROJECTS
          </p>
        </div>

        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-space-grotesk font-[700] text-4xl tracking-tight text-white sm:text-5xl">
            SELECTED{" "}
            <span className="text-[#4196CE]">
              WORKS.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[#C6CDD5] font-outfit font-[400]">
            A collection of applications I've built,
            exploring full-stack development,
            backend architecture, and responsive
            web experiences.
          </p>
        </div>

        {/* Carousel */}
        <div className="py-8">
          <ProjectCarousel />
        </div>

        {/* Portfolio link */}
        <div className="mt-10 flex justify-center">
          <Link
            href="https://github.com/Arzy4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[#4196CE] px-6 py-3 text-sm font-inter font-[600] text-[#4196CE] transition-colors hover:bg-[#4196CE] hover:text-[#020204]"
          >
            View All Projects On GitHub
            <ArrowUpRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  );
}
