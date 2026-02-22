import { useRef } from "react";
import { useMotionValue, useTransform, useSpring } from "framer-motion";

export function useTilt() {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 600,
    damping: 40,
    mass: 0.5,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 600,
    damping: 40,
    mass: 0.5,
  });
  const scale = useSpring(1, { stiffness: 600, damping: 40, mass: 0.5 });
  const glowX = useTransform(x, [-0.5, 0.5], ["0%", "100%"]);
  const glowY = useTransform(y, [-0.5, 0.5], ["0%", "100%"]);
  const glowBg = useTransform(
    [glowX, glowY],
    ([gx, gy]: string[]) =>
      `radial-gradient(circle at ${gx} ${gy}, rgba(203,172,249,0.15) 0%, transparent 65%)`
  );

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const onMouseEnter = () => scale.set(1.03);
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
    scale.set(1);
  };

  return {
    ref,
    motionStyle: {
      rotateX,
      rotateY,
      scale,
      transformStyle: "preserve-3d" as const,
    },
    glowBg,
    handlers: { onMouseMove, onMouseEnter, onMouseLeave },
  };
}
