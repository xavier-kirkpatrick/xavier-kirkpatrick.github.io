import { motion, Variants } from "framer-motion";

function PersonalSVG({
  animateBranches,
}: {
  readonly animateBranches: Variants;
}) {
  return (
    <motion.svg
      width={17}
      height={112}
      viewBox="0 0 17 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.g id="Personal Branch">
        <motion.line
          id="Line 15"
          x1={0.5}
          x2={0.5}
          y2={30}
          stroke="black"
          variants={animateBranches}
          custom={0.1}
        />

        <motion.line
          id="Line 16"
          x1={0.993774}
          y1={29.5}
          x2={15.9938}
          y2={29.5}
          stroke="black"
          variants={animateBranches}
          custom={0.5}
        />
        <motion.line
          id="Line 17"
          x1={16.5}
          y1={21}
          x2={16.5}
          y2={112}
          stroke="black"
          variants={animateBranches}
          custom={1.0}
        />
      </motion.g>
    </motion.svg>
  );
}
export default PersonalSVG;
