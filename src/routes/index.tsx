import { createFileRoute } from "@tanstack/react-router";
import { motion, Variants } from "framer-motion";
import { fadeInText } from "../motion_variants/fadeInText";
import { useRef } from "react";

// The Homw component is rendered inside the root route or __route.tsx via the outlet.
// This is done via the createFileRoute function which in configured to render dynamically below.

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const dragConstraintsRef = useRef<HTMLDivElement>(null);

  const sparkleEffect: Variants = {
    effect: {
      opacity: [1, 0.5, 1, 0.4, 0.6, 1, 0.4, 1, 0.7],
      transition: { duration: 4, repeat: Infinity, repeatType: "reverse" },
    },
  };

  const leftText = {
    top: 50,
    right: 50,
    bottom: 50,
    left: -50,
  };

  return (
    // Container div
    <motion.div
      className="flex min-h-full flex-wrap items-center justify-center space-x-0 space-y-0 text-contentFontSize md:space-x-6 md:space-y-0"
      variants={fadeInText}
      initial="initial"
      animate="animate"
      ref={dragConstraintsRef}
    >
      {/* Left text box */}
      <motion.div
        drag
        dragConstraints={dragConstraintsRef}
        className="w-[350px] flex-wrap hover:text-blueLink"
      >
        <p>
          Welcome, I’m a Software Developer based out of Tāmaki Makaurau,
          Auckland, New Zealand.
        </p>
        <motion.div
          variants={sparkleEffect}
          animate="effect"
          className="text-left text-xs italic text-blueLink"
        >
          Move me
        </motion.div>
        <p>
          It is an exciting time for me as I pivot into the tech industry, and
          in 2024, I am looking to progress my career in Development.
        </p>
      </motion.div>

      {/* Right text box */}
      <motion.div
        drag
        dragConstraints={dragConstraintsRef}
        className="w-[350px] flex-wrap hover:text-blueLink"
      >
        <p>
          Here you can find work completed during my studies as well as other
          external projects.
        </p>
        <motion.div
          variants={sparkleEffect}
          animate="effect"
          className="text-left text-xs italic text-blueLink"
        >
          Move me
        </motion.div>
        <p>
          You’ll also find other non-development related interests where I spend
          my time, personal information and points of contact.
        </p>
      </motion.div>
    </motion.div>
  );
}
