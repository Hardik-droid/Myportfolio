"use client";

import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const CARD_WIDTH = typeof window !== "undefined"
  ? window.innerWidth >= 768 ? window.innerWidth * 0.6 + 64 : window.innerWidth * 0.9 + 64
  : 700;

const Clients = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollTo = (nextIndex: number) => {
    const scroller = containerRef.current?.querySelector("ul") as HTMLElement | null;
    const scrollerParent = containerRef.current?.querySelector(".scroller") as HTMLElement | null;
    if (!scroller || !scrollerParent) return;

    // Pause animation
    scroller.style.animationPlayState = "paused";
    // Make container scrollable temporarily
    scrollerParent.style.overflow = "hidden";

    const cardWidth = scrollerParent.clientWidth >= 768
      ? scrollerParent.clientWidth * 0.6 + 64
      : scrollerParent.clientWidth * 0.9 + 64;

    // Use scrollLeft on scroller element
    scroller.style.transform = `translateX(-${nextIndex * cardWidth}px)`;
    scroller.style.transition = "transform 0.4s ease";

    setIndex(nextIndex);

    // Resume after 4s
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      scroller.style.transform = "";
      scroller.style.transition = "";
      scroller.style.animationPlayState = "";
    }, 4000);
  };

  const prev = () => {
    const next = (index - 1 + testimonials.length) % testimonials.length;
    scrollTo(next);
  };

  const next = () => {
    const next = (index + 1) % testimonials.length;
    scrollTo(next);
  };

  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="relative w-full" ref={containerRef}>
          {/* Left arrow */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-[#04071d] border border-white/10 text-white hover:bg-white/10 transition"
            aria-label="Previous review"
          >
            <FaChevronLeft size={16} />
          </button>

          <div
            className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
          >
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>

          {/* Right arrow */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-[#04071d] border border-white/10 text-white hover:bg-white/10 transition"
            aria-label="Next review"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-4">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className="rounded-full transition-all"
              style={{
                width: i === index ? "20px" : "8px",
                height: "8px",
                backgroundColor: i === index ? "#CBACF9" : "rgba(255,255,255,0.3)",
              }}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.img}
                  //alt={company.name}
                  className="md:w-32 w-32"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
