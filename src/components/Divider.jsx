import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Divider() {
  const triggerRef = useRef(null);
  const isVisible = useInView(triggerRef);
  const control = useAnimation();

  useEffect(() => {
    if (isVisible) {
      control.start("visible");
    }
  }, [isVisible]);



  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <motion.svg
        className="pt-2"
      width="20"
      height="100"
      viewBox="0 0 1 100"
      initial="hidden"
      animate={control}
      ref={triggerRef}
      
    >
      <motion.line
        x1="0"

        y1="100"
        x2="0"
        y2="0"
        stroke="#58749b"
        variants={draw}
        custom={2.5}
      />
    </motion.svg>
  );
}
