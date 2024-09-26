import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { fadeInText } from "../motion_variants/fadeInText";
import { useDarkMode } from "../hooks/useDarkMode";
import { getDarkModeGlobalBgColour } from "../motion_variants/darkModeGlobalBg";
import { getDarkModeTextColour } from "../motion_variants/darkModeText";

export const Route = createFileRoute("/resume")({
  component: Resume,
});

export default function Resume() {
  const { darkMode } = useDarkMode();

  return (
    <motion.div
      variants={getDarkModeGlobalBgColour(darkMode)}
      initial="initial"
      animate="animate"
      className="flex min-h-full flex-col items-center justify-center space-y-5 font-primary text-contentFontSize"
    >
      <motion.div variants={fadeInText} initial="initial" animate="animate">
        {/* Flex container for text column */}
        <motion.div
          variants={getDarkModeTextColour(darkMode)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center justify-center space-y-5 font-primary text-contentFontSize"
        >
          <p>Resume availble on request.</p>
          <p>Please reach out.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
