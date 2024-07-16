import { motion, Variants } from "framer-motion";

function DevAcademySVG({
  animateBranches,
}: {
  readonly animateBranches: Variants;
}) {
  return (
    <motion.svg
      // width={17}
      // height={443}
      viewBox="0 0 17 104"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial="hidden"
      animate="visible"
    >
      <motion.g id="Dev Academy Branch">
        <motion.line
          id="Line 6"
          x1={0.5}
          x2={0.5}
          y2={30}
          stroke="black"
          variants={animateBranches}
          custom={0.1}
        />
        <motion.line
          id="Line 7"
          x1={0.993774}
          y1={29.5}
          x2={15.9938}
          y2={29.5}
          stroke="black"
          variants={animateBranches}
          custom={0.5}
        />
        <motion.line
          id="Line 8"
          x1={16.5}
          y1={21}
          x2={16.5}
          y2={104}
          stroke="black"
          variants={animateBranches}
          custom={1.0}
        />
      </motion.g>
    </motion.svg>
  );
}
export default DevAcademySVG;
