import { motion } from "framer-motion";

function SideBar() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 1 + i * 0.5;
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

  return (
    <>
      <div></div>
      <div className="ml-7 max-w-5">
        <motion.svg
          // width={17}
          // height={443}
          viewBox="0 0 17 443"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
        >
          <g id="Contents">
            <motion.line
              id="Line 3"
              x1={0.5}
              x2={0.5}
              y2={30}
              stroke="black"
              variants={draw}
              custom={0.5}
            />
            <motion.line
              id="Line 4"
              x1={0.993774}
              y1={29.5}
              x2={15.9938}
              y2={29.5}
              stroke="black"
              variants={draw}
              custom={1}
            />
            <motion.line
              id="Line 5"
              x1={16.5}
              y1={21}
              x2={16.5}
              y2={443}
              stroke="black"
              variants={draw}
              custom={1.5}
            />
          </g>
        </motion.svg>
      </div>
    </>
  );
}

export default SideBar;
