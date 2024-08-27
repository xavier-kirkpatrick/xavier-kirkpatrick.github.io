import { createFileRoute } from "@tanstack/react-router";
import { motion, Variants } from "framer-motion";
import { fadeInText } from "../motion_variants/fadeInText";
import { ParentDragContext } from "./__root";
import { useContext } from "react";

// The Homw component is rendered inside the root route or __route.tsx via the outlet.
// This is done via the createFileRoute function which in configured to render dynamically below.

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const parentRef = useContext(ParentDragContext);

  const sparkleEffect: Variants = {
    effect: {
      opacity: [1, 0.5, 1, 0.4, 0.6, 1, 0.4, 1, 0.7],
      transition: { duration: 4, repeat: Infinity, repeatType: "loop" },
    },
  };

  return (
    // Container div
    <motion.div
      className="flex min-h-full flex-wrap items-center justify-center space-x-0 space-y-0 text-contentFontSize md:space-x-6 md:space-y-0"
      variants={fadeInText}
      initial="initial"
      animate="animate"
    >
      {/* Left text box */}
      <motion.div
        drag
        dragConstraints={parentRef ?? undefined}
        className="w-[350px] hover:text-blueLink"
      >
        <motion.div
          variants={sparkleEffect}
          animate="effect"
          className="text-center text-xs italic text-blueLink"
        >
          Move me
        </motion.div>
        <p>
          Welcome, I’m a Software Developer based out of Tāmaki Makaurau,
          Auckland, New Zealand.
        </p>

        <p>
          It is an exciting time for me as I pivot into the tech industry, and
          in 2024, I am looking to progress my career in Development.
        </p>
      </motion.div>

      {/* Right text box */}
      <motion.div
        drag
        dragConstraints={parentRef}
        className="w-[350px] hover:text-blueLink"
      >
        <motion.div
          variants={sparkleEffect}
          animate="effect"
          className="text-center text-xs italic text-blueLink"
        >
          Move me
        </motion.div>
        <p>
          Here you can find work completed during my studies as well as other
          external projects.
        </p>

        <p>
          You’ll also find other non-development related interests where I spend
          my time, personal information and points of contact.
        </p>
      </motion.div>
    </motion.div>
  );
}
