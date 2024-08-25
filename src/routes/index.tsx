import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeInText } from "../motion_variants/fadeInText";
import Marquee from "react-fast-marquee";

// The Index component is rendered inside the root route or __route.tsx via the outlet.
// This is done via the createLazyFileRoute function which in configured to render Index below.

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const [currentMarquee, setCurrentMarquee] = useState("left");

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
      className="flex min-h-full flex-wrap items-center justify-center space-x-0 space-y-0 text-contentFontSize md:space-x-6"
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
        <div>
          {currentMarquee === "left" && (
            <Marquee
              autoFill={false}
              loop={1}
              speed={35}
              direction="right"
              delay={0}
              gradient={true}
              gradientWidth={5}
              gradientColor="#f1f1ec"
              onFinish={() => setCurrentMarquee("right")}
              className="mb-1 mr-4 mt-1 inline-block text-xs italic text-blueLink"
            >
              Move me!!
            </Marquee>
          )}
        </div>

        <p>
          It is an exciting time for me as I pivot into the tech industry, and
          in 2024, I am looking to progress my career in Development.
        </p>
      </motion.div>
      <motion.div
        drag
        dragConstraints={rightDrag}
        className="w-[350px] hover:text-blueLink"
      >
        <p>
          Here you can find work completed during my studies as well as other
          external projects.
        </p>
        <div>
          {currentMarquee === "right" && (
            <Marquee
              autoFill={false}
              loop={1}
              speed={35}
              direction="left"
              delay={0}
              gradient={true}
              gradientWidth={5}
              gradientColor="#f1f1ec"
              onFinish={() => setCurrentMarquee("left")}
              className="mb-1 mt-1 inline-block text-xs italic text-blueLink"
            >
              Move me!!
            </Marquee>
          )}
        </div>

        <p>
          You’ll also find other non-development related interests where I spend
          my time, personal information and points of contact.
        </p>
      </motion.div>
    </motion.div>
  );
}
