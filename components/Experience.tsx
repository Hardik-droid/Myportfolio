import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const TiltCard = ({ card }: { card: (typeof workExperience)[0] }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });
  const scale = useSpring(1, { stiffness: 200, damping: 20 });
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseEnter = () => scale.set(1.04);
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 w-full h-full rounded-[calc(1.75rem*0.96)] relative overflow-hidden cursor-pointer"
    >
      {/* Dynamic specular highlight that follows cursor */}
      <motion.div
        className="absolute inset-0 rounded-[calc(1.75rem*0.96)] pointer-events-none"
        style={{
          background: useMotionValue("") as any,
          backgroundImage: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx} ${gy}, rgba(203,172,249,0.18) 0%, transparent 60%)`
          ) as any,
        }}
      />

      {/* Content lifted in Z */}
      <motion.img
        src={card.thumbnail}
        alt={card.thumbnail}
        className="lg:w-32 md:w-20 w-16 relative"
        style={{ transform: "translateZ(30px)" }}
      />
      <div className="lg:ms-5 relative" style={{ transform: "translateZ(20px)" }}>
        <h1 className="text-start text-xl md:text-2xl font-bold">
          {card.title}
        </h1>
        <p className="text-start text-white-100 mt-3 font-semibold">
          {card.desc}
        </p>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <TiltCard card={card} />
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
