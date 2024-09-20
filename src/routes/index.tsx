import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeInText } from "../motion_variants/fadeInText";
import { useRef } from "react";
import ThankYou from "../components/ThankYou";

// The Homw component is rendered inside the root route or __route.tsx via the outlet.
// This is done via the createFileRoute function which in configured to render dynamically below.

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  return (
    // Container div

    <motion.div className="flex min-h-full flex-col" ref={constraintsRef}>
      {/* flex row #1 */}
      <motion.div
        className="flex flex-grow flex-wrap items-center justify-center space-x-0 space-y-0 text-contentFontSize md:space-x-10 md:space-y-0"
        variants={fadeInText}
        initial="initial"
        animate="animate"
      >
        {/* Left text box */}
        <motion.div className="w-[350px] border-solid border-slate-400 text-center hover:border hover:text-blueLink">
          <p>
            Welcome, I’m a Software Developer from Tāmaki Makaurau, Auckland,
            New Zealand.
          </p>
          <br />
          <p>
            It is an exciting time for me as I pivot into the tech industry, and
            in 2024, I am looking to progress my career in Development.
          </p>
        </motion.div>

        {/* Right text box */}
        <motion.div className="w-[350px] border-solid border-slate-400 text-center hover:border hover:text-blueLink">
          <p>
            Here you can find work completed during my studies as well as other
            external projects.
          </p>
          <br />
          <p>
            You’ll also find other non-development related interests where I
            spend my time, personal information and points of contact.
          </p>
        </motion.div>
      </motion.div>
      {/* flex row #2 */}
      <div>
        <ThankYou />
      </div>
    </motion.div>
  );
}
