import { motion, Variants } from "framer-motion";
import { getDarkModeSVGColour } from "../motion_variants/darkModeSVG";
import { useDarkMode } from "../hooks/useDarkMode";

function ProjectsSVG({
  animateBranches,
}: {
  readonly animateBranches: Variants;
}) {
  const { darkMode } = useDarkMode();

  return (
    <motion.svg
      // width={17}
      // height={64}
      viewBox="0 0 17 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <motion.g
        variants={getDarkModeSVGColour(darkMode)}
        initial="initial"
        animate="animate"
        id="Current Projects Branch"
      >
        <motion.line
          id="Line 9"
          x1={0.5}
          x2={0.5}
          y2={30}
          initial="hidden"
          animate="visible"
          variants={animateBranches}
          custom={0.1}
        />
        <motion.line
          id="Line 10"
          x1={0.993774}
          y1={29.5}
          x2={15.9938}
          y2={29.5}
          initial="hidden"
          animate="visible"
          variants={animateBranches}
          custom={0.5}
        />
        <motion.line
          id="Line 11"
          x1={16.5}
          y1={21}
          x2={16.5}
          y2={64}
          initial="hidden"
          animate="visible"
          variants={animateBranches}
          custom={1.0}
        />
      </motion.g>
    </motion.svg>
  );
}
export default ProjectsSVG;
