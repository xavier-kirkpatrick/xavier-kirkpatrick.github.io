import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeInText } from "../motion_variants/fadeInText";

export const Route = createFileRoute("/resume")({
  component: Resume,
});

export default function Resume() {
  return (
    <motion.div
      variants={fadeInText}
      initial="initial"
      animate="animate"
      className="flex min-h-full flex-col items-center justify-center space-y-5"
    >
      <h1>Resume availble on request</h1>
      <p>kirkpatrickxavier@gmail.com</p>
    </motion.div>
  );
}
