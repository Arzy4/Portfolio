"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ProjectCarouselProps = {
  excludeProjectId?: string;
  layout?: "carousel" | "grid";
};

const projects = [
  {
    id: "voltra",
    title: "VOLTRA",
    image: "/projectImage/voltra.png",
    category: "FULL-STACK APPLICATION",
    type: "Full Stack",
    description:
      "An EV charging platform for exploring charging stations, selecting slots, and managing reservations.",
    techStack: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
    ],
    href: "/projectDetailPage/voltra",
  },
  {
    id: "fintrack",
    title: "FINTRACK",
    image: "/projectImage/fintrack.png",
    category: "BACKEND APPLICATION",
    type: "Backend",
    description:
      "A financial management REST API with account management, transactions, authentication, and database integration.",
    techStack: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "JWT",
    ],
    href: "/projectDetailPage/fintrack",
  },
  {
    id: "revoshop",
    title: "REVOSHOP",
    image: "/projectImage/revoshop.png",
    category: "FRONTEND APPLICATION",
    type: "Frontend",
    description:
      "A responsive e-commerce application with product browsing, cart management, and authentication.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React",
      "Platzi API",
    ],
    href: "/projectDetailPage/revoshop",
  },
];

export default function OtherProjectCarousel({
  excludeProjectId,
  layout = "carousel",
}: ProjectCarouselProps) {
    const ANIMATION_DURATION = 800;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const filteredProjects = projects.filter(
      (project) => project.id !== excludeProjectId
    );

    const touchStartX = useRef(0);
    const animationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const getPosition = (index: number) => {
      const total = filteredProjects.length;

      if (total === 0) return "center";

      const offset = (index - currentIndex + total) % total;

      if (offset === 0) return "center";

      if (total === 2) return "right-1";

      if (offset === 1) return "right-1";

      return "left-1";
    };

    const updateCarousel = (step: number) => {
      const total = filteredProjects.length;

      if (isAnimating || step === 0 || total <= 1) return;

      setIsAnimating(true);

      setCurrentIndex((prev) => (prev + step + total) % total);

      if (animationTimer.current) {
        clearTimeout(animationTimer.current);
      }

      animationTimer.current = setTimeout(() => {
        setIsAnimating(false);
      }, ANIMATION_DURATION);
    };

    useEffect(() => {
    return () => {
        if (animationTimer.current) {
          clearTimeout(animationTimer.current);
        }
      };
    }, []);

  return (
    <div
        className={layout === "carousel"
            ? "project-carousel-container"
            : "w-full"
        }
        onTouchStart={(e) => {
            touchStartX.current = e.changedTouches[0].screenX;
        }}
        onTouchEnd={(e) => {
            const diff = touchStartX.current - e.changedTouches[0].screenX;

            if (Math.abs(diff) > 50) {
            updateCarousel(diff > 0 ? 1 : -1);
            }
        }}
    >
      {/* Carousel track */}
      <div className={layout === "carousel"
          ? "project-carousel-track"
          : "grid grid-cols-1 justify-items-center md:grid-cols-2"
      }
      >

        {filteredProjects.map((project, index) => {
          const position = getPosition(index);

          return (
            <article
                key={project.id}
                className={layout === "carousel"
                    ? `project-card ${position}`
                    : "flex h-full w-full max-w-[500px] flex-col overflow-hidden rounded-[24px] border border-[#3562A2] bg-[#071320] transition-all duration-300 hover:border-[#4196CE] hover:bg-[#10213A]"
                }
            >
              {/* Project preview */}
              <div className="relative h-[210px] shrink-0 overflow-hidden bg-[#18191D]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 640px) 280px, 380px"
                  className="object-cover object-center"
                />
              </div>

              {/* Project details */}
              <div className="flex min-h-0 flex-1 flex-col p-6">

                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-[#4196CE]/40 bg-[#4196CE]/10 px-3 py-1 text-xs font-inter font-[500] text-[#4196CE]">
                    {project.type}
                  </span>

                  <span className="text-xs text-[#C6CDD5] font-inter font-[500]">
                    Featured
                  </span>
                </div>

                <h3 className="font-space-grotesk font-[700] text-2xl text-white">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#C6CDD5] font-outfit font-[400] text-justify lg:text-left">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap content-start gap-2 justify-center lg:justify-start">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-[#193A5B] px-2.5 py-1 text-xs text-[#C6CDD5] font-inter font-[500]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-7">
                  <Link
                    href={project.href}
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#4196CE] px-4 py-3 text-sm font-inter font-[600] text-[#020204] transition-colors hover:bg-[#70B9E8]"
                  >
                    View Project Details
                    <ArrowRight size={18} />
                  </Link>
                </div>

              </div>
            </article>
          );
        })}
      </div>

      {layout === "carousel" && (
        <>
            {/* Navigation */}
            {/* Previous */}
            <button
                type="button"
                onClick={() => updateCarousel(-1)}
                disabled={isAnimating}
                aria-label="Previous project"
                className="absolute left-0 top-[45%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#020204] transition-transform hover:scale-110 disabled:cursor-wait"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Next */}
            <button
                type="button"
                onClick={() => updateCarousel(1)}
                disabled={isAnimating}
                aria-label="Next project"
                className="absolute right-0 top-[45%] z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#020204] transition-transform hover:scale-110 disabled:cursor-wait"
            >
                <ChevronRight size={24} />
            </button>

        {/* Indicators */}
        {filteredProjects.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
                {filteredProjects.map((project, index) => (
                    <button
                    key={project.id}
                    type="button"
                    onClick={() => {
                        if (isAnimating || index === currentIndex) return;

                        const total = filteredProjects.length;

                        const forward = (index - currentIndex + total) % total;
                        const backward = (currentIndex - index + total) % total;

                        updateCarousel(forward <= backward ? forward : -backward);
                    }}
                    aria-label={`Show ${project.title}`}
                    aria-current={currentIndex === index ? "true" : undefined}
                    className={`h-2 rounded-full transition-all ${
                        currentIndex === index
                        ? "w-8 bg-[#4196CE]"
                        : "w-2 bg-[#3562A2]"
                    }`}
                    />
                ))}
                </div>
            )}
        </>
      )}
    </div>
  );
}
