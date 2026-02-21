"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { currentProjects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useTilt } from "@/hooks/useTilt";

const VisitWebsiteBtn = ({ href }: { href: string }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex justify-center items-center gap-2 z-10 px-3 py-1.5 rounded-full transition-all duration-300"
      style={{
        border: "1px solid rgba(203,172,249,0.4)",
        backgroundColor: hovered ? "rgba(203,172,249,0.15)" : "transparent",
        transform: hovered ? "scale(1.05)" : "scale(1)",
      }}
    >
      <span className="text-sm font-medium transition-all duration-300" style={{ color: "#CBACF9" }}>
        {hovered ? "Taking you there..." : "Visit Website"}
      </span>
      <FiExternalLink
        size={14}
        color="#CBACF9"
        style={{
          transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
          transition: "transform 0.3s ease",
        }}
      />
    </a>
  );
};

const TiltCard = ({ item }: { item: (typeof currentProjects)[0] }) => {
  const { ref, motionStyle, glowBg, handlers } = useTilt();
  return (
    <motion.div ref={ref} style={motionStyle} {...handlers} className="w-full h-full relative">
      {/* Specular glow */}
      <motion.div
        className="absolute inset-0 rounded-3xl pointer-events-none z-10"
        style={{ backgroundImage: glowBg }}
      />
      <PinContainer title={item.title} href={item.link}>

        {/* Image */}
        <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
          <div className="relative w-full h-full overflow-hidden lg:rounded-3xl" style={{ backgroundColor: "#13162D" }}>
            <img src={item.imgs[0]} alt="cover" className="w-full h-full object-cover object-center" />
            <div
              className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(6px)",
                border: `1px solid ${item.status === "Ongoing" ? "rgba(251,191,36,0.5)" : "rgba(74,222,128,0.5)"}`,
              }}
            >
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${item.status === "Ongoing" ? "bg-yellow-400" : "bg-green-400"}`} />
              <span className="text-xs font-medium" style={{ color: item.status === "Ongoing" ? "#fde68a" : "#4ade80" }}>
                {item.status}
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="font-bold lg:text-2xl md:text-xl text-base" style={{ transform: "translateZ(20px)" }}>
          {item.title}
        </h1>

        {/* Description */}
        <p className="lg:text-xl lg:font-normal font-light text-sm" style={{ color: "#BEC1DD", margin: "1vh 0" }}>
          {item.des}
        </p>

        {/* Icons + Link */}
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
            {item.link.includes("github") ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center z-10">
                <p className="flex lg:text-xl md:text-xs text-sm text-purple">View on GitHub</p>
                <FaLocationArrow className="ms-3" color="#CBACF9" />
              </a>
            ) : (
              <VisitWebsiteBtn href={item.link} />
            )}
          </div>
        </div>

      </PinContainer>
    </motion.div>
  );
};

const CurrentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Currently <span className="text-purple">Working On</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {currentProjects.map((item) => (
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

export default CurrentProjects;
