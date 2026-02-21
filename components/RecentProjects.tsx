"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useTilt } from "@/hooks/useTilt";

const ProjectImage = ({ imgs }: { imgs: string[] }) => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    if (imgs.length <= 1) return;
    const interval = setInterval(() => goTo((current + 1) % imgs.length, "left"), 3000);
    return () => clearInterval(interval);
  }, [current, imgs.length]);

  const goTo = (next: number, dir: "left" | "right") => {
    if (sliding || next === current) return;
    setDirection(dir);
    setSliding(true);
    setTimeout(() => {
      setCurrent(next);
      setSliding(false);
    }, 400);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    goTo((current - 1 + imgs.length) % imgs.length, "right");
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    goTo((current + 1) % imgs.length, "left");
  };

  return (
    <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}>
      <img
        src={imgs[current]}
        alt="cover"
        className="w-full h-full object-cover object-center"
        style={{
          transition: sliding ? "transform 0.4s ease, opacity 0.4s ease" : "none",
          transform: sliding ? (direction === "left" ? "translateX(-8%) scale(0.97)" : "translateX(8%) scale(0.97)") : "translateX(0) scale(1)",
          opacity: sliding ? 0.4 : 1,
        }}
      />
      {imgs.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M8 2L4 6L8 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M4 2L8 6L4 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {imgs.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); goTo(i, i > current ? "left" : "right"); }}
                className="rounded-full transition-all"
                style={{
                  width: i === current ? "16px" : "6px",
                  height: "6px",
                  backgroundColor: i === current ? "#CBACF9" : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const TiltCard = ({ item }: { item: (typeof projects)[0] }) => {
  const { ref, motionStyle, glowBg, handlers } = useTilt();
  return (
    <motion.div ref={ref} style={motionStyle} {...handlers} className="w-full h-full relative">
      {/* Specular glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-10"
        style={{ backgroundImage: glowBg }}
      />
      <PinContainer title={item.title} href={item.link}>
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <ProjectImage imgs={item.imgs} />
        </div>

        <h1 className="font-bold lg:text-2xl md:text-xl text-base" style={{ transform: "translateZ(20px)" }}>
          {item.title}
        </h1>

        <p className="lg:text-xl lg:font-normal font-light text-sm" style={{ color: "#BEC1DD", margin: "1vh 0" }}>
          {item.des}
        </p>

        {"note" in item && item.note ? (
          <div
            className="mt-5 mb-3 flex items-start gap-2 px-3 py-2 rounded-lg"
            style={{ backgroundColor: "rgba(203,172,249,0.08)", border: "1px solid rgba(203,172,249,0.2)" }}
          >
            <span className="text-purple mt-0.5 text-xs">🔒</span>
            <p className="text-xs" style={{ color: "#BEC1DD" }}>{item.note}</p>
          </div>
        ) : (
          <div className="flex items-center justify-between mt-7 mb-3">
            <div className="flex items-center">
              {item.iconLists.map((icon, index) => (
                <div
                  key={index}
                  className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                  style={{ transform: `translateX(-${5 * index + 2}px)` }}
                >
                  <img src={icon} alt="icon" className="p-2" />
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center z-10">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">View on GitHub</p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </a>
            </div>
          </div>
        )}
      </PinContainer>
    </motion.div>
  );
};

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        My <span className="text-purple">12th Grade Projects</span> — BML Hackathon Winner
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[38rem] h-auto flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <TiltCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
