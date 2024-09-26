import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { headerLine } from "../motion_variants/headerLine.ts";
import { linkHoverEffect } from "../motion_variants/linkHoverEffect.ts";
import ContentsSVG from "../SVGComponents/ContentsSVG";
import DevAcademySVG from "../SVGComponents/EDASVG";
import ProjectsSVG from "../SVGComponents/ProjectsSVG";
import AudioSVG from "../SVGComponents/AudioSVG";
import PersonalSVG from "../SVGComponents/PersonalSVG";
import React from "react";
import DarkModeButton from "./DarkModeButton.tsx";
import useTrackEvent from "../hooks/useTrackEvent";
import { useDarkMode } from "../hooks/useDarkMode";
import { getDarkModeGlobalBgColour } from "../motion_variants/darkModeGlobalBg";
import { getDarkModeTextColour } from "../motion_variants/darkModeText";

// SideBar Component ----------------------------------------------------------------------

const SideBar = React.memo(function SideBar() {
  const trackButtonClick = useTrackEvent();
  const { darkMode } = useDarkMode();

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
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animateText = (text: string) => {
    return (
      <motion.div
        className="inline-block overflow-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {text.split("").map((character, index) => (
          <motion.div
            variants={letter}
            key={`${character}-${index}`}
            className="inline-block"
          >
            {character === " " ? "\u00A0" : character}
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    // Sidebar space container div
    <motion.div
      variants={getDarkModeGlobalBgColour(darkMode)}
      initial="initial"
      animate="animate"
    >
      <motion.div
        className="flex min-h-screen flex-col border-r border-solid border-slate-400"
        variants={headerLine}
        initial="hidden"
        animate="visible"
      >
        <div className="relative flex flex-grow tracking-wide">
          {/* sidebar menu container div */}

          {/* ------- Contents branch ------- */}
          <div>
            <motion.p
              variants={getDarkModeTextColour(darkMode)}
              initial="initial"
              animate="animate"
              className="absolute left-[21px] top-[34px] font-primary text-mainFont"
            >
              {animateText("Contents")}
            </motion.p>

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
              className="absolute left-[52px] top-[70px] text-mainFont text-blueLink hover:underline"
            >
              {animateText("Home")}
            </motion.p>
          </Link>

          {/* ------- Study Projects branch -------- */}
          <div>
            <motion.div
              variants={getDarkModeTextColour(darkMode)}
              initial="initial"
              animate="animate"
              className="absolute left-[52px] top-[100px] font-primary text-mainFont"
            >
              <p className="mb-[-12px]">{animateText("Study")}</p>
              <p>{animateText("Projects")}</p>
            </motion.div>

            {/* Study Projects branch SVG */}
            <div className="absolute left-[62px] top-[138px] h-auto w-[17px]">
              <DevAcademySVG animateBranches={animateBranches} />
            </div>
            {/* Study Projects submenu links */}

            <div className="absolute left-[82px] top-[154px] flex flex-col space-y-[-1px]">
              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-mainFont text-blueLink"
                >
                  <p className="mb-[-12px]">{animateText("Foundations")}</p>

                  <p>{animateText("Blog")}</p>
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-mainFont text-blueLink"
                >
                  {animateText("Projects")}
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-mainFont text-blueLink"
                >
                  {animateText("Infomation")}
                </motion.p>
              </Link>
            </div>
          </div>
          {/* ------- Current Projects branch -------- */}
          <div>
            <motion.div
              variants={getDarkModeTextColour(darkMode)}
              initial="initial"
              animate="animate"
              className="absolute left-[52px] top-[253px] font-primary text-mainFont"
            >
              <p className="mb-[-12px]">{animateText("Current")}</p>
              <p>{animateText("Projects")}</p>
            </motion.div>
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
                  className="text-mainFont text-blueLink"
                >
                  <p>{animateText("Plchldr")}</p>
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-mainFont text-blueLink"
                >
                  {animateText("Task Master")}
                </motion.p>
              </Link>
            </div>
          </div>
          {/* ------- Audio branch -------- */}
          <div>
            <motion.p
              variants={getDarkModeTextColour(darkMode)}
              initial="initial"
              animate="animate"
              className="absolute left-[52px] top-[366px] font-primary text-mainFont leading-[15px]"
            >
              {animateText("Audio")}
            </motion.p>
            {/* Audio branch SVG */}
            <div className="absolute left-[62px] top-[384px] h-auto w-[17px]">
              <AudioSVG animateBranches={animateBranches} />
            </div>
            {/* Audio submenu links */}

            <div className="absolute left-[82px] top-[400px] flex flex-col space-y-[-2px]">
              <motion.p
                initial="initial"
                whileHover="whileHover"
                variants={linkHoverEffect}
                className="text-mainFont text-blueLink"
              >
                <a
                  href="https://soundcloud.com/cos-sound"
                  target="_blank"
                  rel="noreferrer"
                >
                  {animateText("COS Sound")}
                </a>
              </motion.p>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-mainFont text-blueLink"
                >
                  {animateText("4::section")}
                </motion.p>
              </Link>

              <Link to="">
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-mainFont text-blueLink"
                >
                  {animateText("Infomation")}
                </motion.p>
              </Link>
            </div>
          </div>
          {/* ------- Personal branch -------- */}
          <div>
            <motion.p
              variants={getDarkModeTextColour(darkMode)}
              initial="initial"
              animate="animate"
              className="absolute left-[52px] top-[483px] font-primary text-mainFont leading-[15px]"
            >
              {animateText("Personal")}
            </motion.p>
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
                  className="text-mainFont text-blueLink"
                >
                  <p>{animateText("Email")}</p>
                </motion.p>
              </Link>

              <Link
                to="/resume"
                onClick={() =>
                  trackButtonClick("Button", "Click", "Resume Button")
                }
              >
                <motion.p
                  initial="initial"
                  whileHover="whileHover"
                  variants={linkHoverEffect}
                  className="text-mainFont text-blueLink"
                >
                  {animateText("Resume")}
                </motion.p>
              </Link>

              <motion.p
                initial="initial"
                whileHover="whileHover"
                variants={linkHoverEffect}
                className="text-mainFont text-blueLink"
              >
                <a
                  href="https://www.linkedin.com/in/xavier-kirkpatrick-ab0aba2a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {animateText("LinkedIn")}
                </a>
              </motion.p>

              <motion.p
                initial="initial"
                whileHover="whileHover"
                variants={linkHoverEffect}
                className="text-mainFont text-blueLink"
              >
                <a
                  href="https://github.com/xavier-kirkpatrick"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {animateText("GitHub")}
                </a>
              </motion.p>
            </div>
          </div>
          <div className="absolute bottom-10 left-[70px]">
            <DarkModeButton />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

export default SideBar;
