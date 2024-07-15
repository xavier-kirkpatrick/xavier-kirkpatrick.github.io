import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { animateText } from "./Header";
import ContentsSVG from "../SVGComponents/ContentsSVG";
import DevAcademySVG from "../SVGComponents/EDASVG";

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
    // Container div here
    <div className="relative mt-1 h-[620px] w-52 border-2 border-solid border-black font-light">
      {/* ------- Contents section ------- */}

      <motion.p className="absolute left-[21px] top-[34px] font-primary text-sideBar">
        {animateText("Contents")}
      </motion.p>
      {/* Contents branch svg */}
      <div className="absolute left-[31px] top-[54px] h-auto w-[17px]">
        <ContentsSVG animateBranches={animateBranches} />
      </div>
      {/* Home link */}
      <Link to="/">
        <motion.p className="absolute left-[52px] top-[70px] text-sideBar text-blueLink hover:underline">
          {animateText("Home")}
        </motion.p>
      </Link>

      {/* ------- Dev Academy section -------- */}
      <div>
        <motion.p className="absolute left-[52px] top-[100px] block text-wrap font-primary text-sideBar leading-4">
          {animateText("Dev")}
          <motion.p>{animateText("Academy")}</motion.p>
        </motion.p>
      </div>
      {/* Dev Academy branch svg */}
      <div className="absolute left-[62px] top-[138px] h-auto w-[17px]">
        <DevAcademySVG animateBranches={animateBranches} />
      </div>
    </div>
  );
}

export default SideBar;
