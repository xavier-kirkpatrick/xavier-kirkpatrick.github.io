import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { animateText } from "./Header";
import ContentsSVG from "../SVGComponents/ContentsSVG";
import DevAcademySVG from "../SVGComponents/EDASVG";
import ProjectsSVG from "../SVGComponents/ProjectsSVG";
import AudioSVG from "../SVGComponents/AudioSVG";
import PersonalSVG from "../SVGComponents/PersonalSVG";

// "animateBranches" handles animation and tranisition duration of the tree menu branches
const animateBranches = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { delay: 1, type: "spring", duration: 2, bounce: 0 },
      opacity: { delay: 1, duration: 0.05 },
    },
  },
};

const linkHoverEffect = {
  initial: { scale: 1 },
  whileHover: {
    scale: 1.1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

// SideBar Component ----------------------------------------------------------------------

function SideBar() {
  return (
    // Sidebar space container div
    <div className="relative mt-1 h-[620px] w-52 font-light">
      {/* sidebar menu container div */}
      <div className="">
        {/* ------- Contents branch ------- */}
        <div>
          <p className="absolute left-[21px] top-[34px] font-primary text-sideBar">
            {animateText("Contents")}
          </p>

          {/* Contents branch SVG */}
          <div className="absolute left-[31px] top-[54px] h-auto w-[17px]">
            <ContentsSVG animateBranches={animateBranches} />
          </div>
        </div>

        {/* Home link */}
        <Link to="/">
          <motion.p
            initial="initial"
            whileHover="whileHover"
            variants={linkHoverEffect}
            className="absolute left-[52px] top-[70px] text-sideBar text-blueLink hover:underline"
          >
            {animateText("Home")}
          </motion.p>
        </Link>

        {/* ------- Dev Academy branch -------- */}
        <div>
          <p className="absolute left-[52px] top-[100px] font-primary text-sideBar leading-[15px]">
            {animateText("Dev")}
            <p>{animateText("Academy")}</p>
          </p>

          {/* Dev Academy branch SVG */}
          <div className="absolute left-[62px] top-[138px] h-auto w-[17px]">
            <DevAcademySVG animateBranches={animateBranches} />
          </div>
        </div>
        {/* ------- Current Projects branch -------- */}
        <div>
          <p className="absolute left-[52px] top-[253px] font-primary text-sideBar leading-[15px]">
            {animateText("Current")}
            <p>{animateText("Projects")}</p>
          </p>
          {/* Current Projects branch SVG */}
          <div className="absolute left-[62px] top-[291px] h-auto w-[17px]">
            <ProjectsSVG animateBranches={animateBranches} />
          </div>
        </div>
        {/* ------- Audio branch -------- */}
        <div>
          <p className="absolute left-[52px] top-[366px] font-primary text-sideBar leading-[15px]">
            {animateText("Audio")}
          </p>
          {/* Audio branch SVG */}
          <div className="absolute left-[62px] top-[384px] h-auto w-[17px]">
            <AudioSVG animateBranches={animateBranches} />
          </div>
        </div>
        {/* ------- Personal branch -------- */}
        <div>
          <p className="absolute left-[52px] top-[483px] font-primary text-sideBar leading-[15px]">
            {animateText("Personal")}
          </p>
          {/* Personal branch SVG */}
          <div className="absolute left-[62px] top-[501px] h-auto w-[17px]">
            <PersonalSVG animateBranches={animateBranches} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
