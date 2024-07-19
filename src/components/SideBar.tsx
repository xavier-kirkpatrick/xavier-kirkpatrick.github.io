import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { animateText, headerLine } from "./Header";
import ContentsSVG from "../SVGComponents/ContentsSVG";
import DevAcademySVG from "../SVGComponents/EDASVG";
import ProjectsSVG from "../SVGComponents/ProjectsSVG";
import AudioSVG from "../SVGComponents/AudioSVG";
import PersonalSVG from "../SVGComponents/PersonalSVG";

// "animateBranches" handles animation and tranisition duration of the menu SVG branches
const animateBranches = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (dly: number) => {
    const delay = 0.7 + dly * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
        opacity: { delay, duration: 0.09 },
      },
    };
  },
};

// Link text magnifying hover effect
const linkHoverEffect = {
  initial: { x: 0 },
  whileHover: {
    x: 4,
    transition: { duration: 0.3 },
  },
};

// SideBar Component ----------------------------------------------------------------------

function SideBar() {
  return (
    // Sidebar space container div
    <div>
      <div className="bg-mainBgColour pt-[100px]">
        <div className="relative tracking-wider">
          {/* sidebar menu container div */}

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
            <div className="absolute left-[52px] top-[100px] font-primary text-sideBar">
              <p className="mb-[-14px]">{animateText("Dev")}</p>
              <p>{animateText("Academy")}</p>
            </div>

            {/* Dev Academy branch SVG */}
            <div className="absolute left-[62px] top-[138px] h-auto w-[17px]">
              <DevAcademySVG animateBranches={animateBranches} />
            </div>
            {/* Dev Academy submenu links */}

            <div className="absolute left-[82px] top-[154px] flex flex-col space-y-[0px]">
              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  <p className="mb-[-14px]">{animateText("Foundations")}</p>
                  <p>{animateText("Blog")}</p>
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  {animateText("Projects")}
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  {animateText("Infomation")}
                </motion.p>
              </Link>
            </div>
          </div>
          {/* ------- Current Projects branch -------- */}
          <div>
            <p className="absolute left-[52px] top-[253px] font-primary text-sideBar">
              <p className="mb-[-14px]">{animateText("Current")}</p>
              <p>{animateText("Projects")}</p>
            </p>
            {/* Current Projects branch SVG */}
            <div className="absolute left-[62px] top-[291px] h-auto w-[17px]">
              <ProjectsSVG animateBranches={animateBranches} />
            </div>
            {/* Current Projects submenu links */}

            <div className="absolute left-[82px] top-[307px] flex flex-col space-y-[1px]">
              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  <p>{animateText("Plchldr")}</p>
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  {animateText("Task Master")}
                </motion.p>
              </Link>
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
            {/* Audio submenu links */}

            <div className="absolute left-[82px] top-[400px] flex flex-col space-y-[-2px]">
              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  <p>{animateText("COS Sound")}</p>
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  {animateText("4::section")}
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  {animateText("Infomation")}
                </motion.p>
              </Link>
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
            {/* Personal submenu links */}

            <div className="absolute left-[82px] top-[517px] flex flex-col space-y-[-2px]">
              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  <p>{animateText("Email")}</p>
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  {animateText("Resume")}
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  {animateText("LinkedIn")}
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-sideBar text-blueLink"
                >
                  {animateText("GitHub")}
                </motion.p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="mt-[30px] h-auto w-0 border-r-[1px] border-solid border-black pl-[192px]"
        variants={headerLine}
        transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
}

export default SideBar;
