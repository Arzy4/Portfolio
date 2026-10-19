"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type ProjectHeroCarouselProps = {
  title: string;
  description: string;
  period: string;
  github: string;
  images: string[];
  imageTitle: string[];
  imageDesc: string[],
  liveUrl?: string;
  documentationUrl?: string;
};

export default function ProjectDetailCarousel({
  title,
  description,
  github,
  images,
  imageTitle,
  imageDesc,
  liveUrl,
  documentationUrl,
}: ProjectHeroCarouselProps) {
  const total = images.length;

  const [slideIndex, setSlideIndex] = useState(total > 1 ? 1 : 0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const touchStartX = useRef<number | null>(null);
  const resetFrame = useRef<number | null>(null);

  // Real image index, excluding cloned slides
  const activeIndex =
    total > 1 ? (slideIndex - 1 + total) % total : 0;

  // Clone the last and first images
  const slides =
    total > 1
      ? [images[total - 1], ...images, images[0]]
      : images;

  const changeSlide = (step: number) => {
    if (isAnimating || total <= 1) return;

    setTransitionEnabled(true);
    setIsAnimating(true);
    setSlideIndex((prev) => prev + step);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === activeIndex || total <= 1) return;

    setTransitionEnabled(true);
    setIsAnimating(true);
    setSlideIndex(index + 1);
  };

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (event.target !== event.currentTarget) return;
    if (event.propertyName !== "transform") return;

    if (slideIndex === total + 1) {
      // Fake first slide -> real first slide
      setTransitionEnabled(false);
      setSlideIndex(1);
    } else if (slideIndex === 0) {
      // Fake last slide -> real last slide
      setTransitionEnabled(false);
      setSlideIndex(total);
    }

    setIsAnimating(false);
  };

  useEffect(() => {
    if (!transitionEnabled) {
      resetFrame.current = requestAnimationFrame(() => {
        resetFrame.current = requestAnimationFrame(() => {
          setTransitionEnabled(true);
        });
      });
    }

    return () => {
      if (resetFrame.current !== null) {
        cancelAnimationFrame(resetFrame.current);
      }
    };
  }, [transitionEnabled]);

  return (
    <div className="relative mx-auto w-full max-w-[1074px]">
      {/* PROJECT HEADER */}
      <section className="mb-12 flex flex-col items-center text-center">
        <h1 className="font-space-grotesk font-[700] text-5xl tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
          <span className="text-[#4196CE]">.</span>
        </h1>

        <p className="mt-5 max-w-3xl font-inter font[400] text-sm leading-relaxed text-[#C6CDD5] md:text-lg lg:text-xl">
          {description}
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {(liveUrl || documentationUrl) && (
            <Link
              href={liveUrl || documentationUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 rounded-xl bg-[#4196CE] px-8 py-4 font-space-grotesk font-[600] text-[#020204] transition-colors hover:bg-[#70B9E8]"
            >
              {liveUrl ? "Live Demo" : "API Documentation"}
              <ArrowUpRight size={20} />
            </Link>
          )}

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#4196CE]/70 bg-[#0A1628] px-5 py-3 font-space-grotesk font-[600] text-sm text-white transition-colors hover:bg-[#4196CE]/20 md:px-7"
          >
            GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <section
        aria-label={`${title} project showcase`}
        className="group relative isolate mx-auto w-full max-w-[1074px] h-[620px] overflow-hidden rounded-[24px] border border-[#3562A2] bg-[#0A1628] md:h-[500px] lg:h-[570px]"
        onTouchStart={(event) => {
          touchStartX.current = event.changedTouches[0].screenX;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;

          const difference =
            touchStartX.current - event.changedTouches[0].screenX;

          if (Math.abs(difference) > 50) {
            changeSlide(difference > 0 ? 1 : -1);
          }

          touchStartX.current = null;
        }}
      >
        {/* SLIDING BACKGROUND IMAGES */}
        <div
          className={`absolute inset-0 flex ${
            transitionEnabled
              ? "transition-transform duration-[600ms] ease-in-out"
              : ""
          }`}
          style={{
            transform: `translateX(-${total > 1 ? slideIndex * 100 : 0}%)`,
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.length > 0 ? (
            slides.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative h-full w-full shrink-0"
              >
                <Image
                  src={image}
                  alt={`${title} project screenshot ${
                    total > 1
                      ? ((index - 1 + total) % total) + 1
                      : index + 1
                  }`}
                  fill
                  priority={index === (total > 1 ? 1 : 0)}
                  sizes="(max-width: 768px) 100vw, 90vw"
                  className="object-cover object-center"
                />
              </div>
            ))
          ) : (
            <div className="h-full w-full shrink-0 bg-[#0A1628]" />
          )}
        </div>

        {/* DARK GRADIENT OVERLAY */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#020812]/100 via-[#020812]/70 to-[#020812]/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* CENTERED BOTTOM CONTENT */}
        <div 
          className={[
            "pointer-events-none absolute inset-x-0 bottom-16 z-20",
            "flex translate-y-6 flex-col items-center px-6 text-center opacity-0",
            "transition-all duration-500 ease-out",
            "group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100",
            "group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100",
            "md:bottom-50",
          ].join(" ")}
        >
          <h1 className="font-space-grotesk font-[700] text-5xl tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl lg:text-8xl">
            {imageTitle[activeIndex] ?? title}
            <span className="text-[#4196CE]">.</span>
          </h1>

          <p className="mt-4 max-w-3xl font-inter font-[400] text-sm leading-relaxed text-[#F8FAFC] md:mt-5 md:text-lg lg:text-xl">
            {imageDesc[activeIndex] ?? title}
          </p>
        </div>

        {/* SLIDE INDICATORS */}
        {total > 1 && (
          <div className="absolute inset-x-0 bottom-6 z-30 flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToSlide(index)}
                aria-label={`Show screenshot ${index + 1}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? "w-8 bg-[#4196CE]"
                    : "w-4 bg-black/50 hover:bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* CAROUSEL ARROWS LEFT */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => changeSlide(-1)}
              disabled={isAnimating}
              aria-label="Previous screenshot"
              className="absolute -left-3 bottom-60 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#4196CE] bg-[#020812]/80 text-white backdrop-blur-md transition hover:bg-[#4196CE] disabled:cursor-wait md:-left-20 md:h-12 md:w-12"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              type="button"
              onClick={() => changeSlide(1)}
              disabled={isAnimating}
              aria-label="Next screenshot"
              className="absolute -right-3 bottom-60 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#4196CE] bg-[#020812]/80 text-white backdrop-blur-md transition hover:bg-[#4196CE] disabled:cursor-wait md:-right-20 md:h-12 md:w-12"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
    </div>
  );
}
