import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeInText } from "../motion_variants/fadeInText";

// The Index component is rendered inside the root route or __route.tsx via the outlet.
// This is done via the createLazyFileRoute function which in configured to render Index below.

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const leftDrag = {
    top: -50,
    left: -50,
    right: 150,
    bottom: 50,
  };

  const rightDrag = {
    top: -50,
    left: -150,
    right: 50,
    bottom: 50,
  };

  return (
    <motion.div
      className="text-contentFontSize flex min-h-full flex-wrap items-center justify-center space-x-0 md:space-x-6"
      variants={fadeInText}
      initial="initial"
      animate="animate"
    >
      <motion.div
        drag
        dragConstraints={leftDrag}
        className="w-[350px] hover:text-blueLink"
      >
        <p>
          Welcome, I’m a Software Developer based out of Tāmaki Makaurau,
          Auckland, New Zealand.
        </p>
        <br />
        <p>
          It is an exciting time for me as I pivot into the tech industry, and
          in 2024, I am looking to kickstart my career as a Developer.
        </p>
      </motion.div>
      <motion.div
        drag
        dragConstraints={rightDrag}
        className="w-[350px] hover:text-blueLink"
      >
        <p>
          Here you can find work completed during my study as well as other
          external projects.
        </p>
        <br />
        <p>
          You’ll also find other non-development related interests where I spend
          my time, personal information and points of contact.
        </p>
      </motion.div>
    </motion.div>
  );
}
