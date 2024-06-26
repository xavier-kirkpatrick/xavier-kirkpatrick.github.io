import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";

// "animateBranches" handles animation and tranisition duration of the tree menu branches
const animateBranches = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay: number = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay, duration: 0.05 },
      },
    };
  },
};

// SideBar Component ----------------------------------------------------------------------

function SideBar() {
  return (
    <div>
      {/* ------- Contents section ------- */}
      <div className="relative">
        <motion.p className="ml-8 mt-12 font-jost text-lg">Contents</motion.p>
        <motion.svg
          width={17}
          height={443}
          viewBox="0 0 17 443"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          className="absolute left-12 top-7"
        >
          <motion.g id="Contents">
            <motion.line
              id="Line 3"
              x1={0.5}
              x2={0.5}
              y2={30}
              stroke="black"
              variants={animateBranches}
              custom={0.1}
            />
            <motion.line
              id="Line 4"
              x1={0.993774}
              y1={29.5}
              x2={15.9938}
              y2={29.5}
              stroke="black"
              variants={animateBranches}
              custom={0.5}
            />
            <motion.line
              id="Line 5"
              x1={16.5}
              y1={21}
              x2={16.5}
              y2={443}
              stroke="black"
              variants={animateBranches}
              custom={1.0}
            />
          </motion.g>
        </motion.svg>
      </div>

      {/* Home link */}
      <Link to="/">
        <motion.p className="ml-20 mt-4">Home</motion.p>
      </Link>

      {/* ------- Dev Academy section -------- */}
      <div className="relative mt-1">
        <motion.p className="ml-20 font-jost text-lg">Dev Academy</motion.p>
        <motion.svg
          width={17}
          height={104}
          viewBox="0 0 17 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          className="absolute left-24 top-7"
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
      </div>
    </div>
  );
}

export default SideBar;
