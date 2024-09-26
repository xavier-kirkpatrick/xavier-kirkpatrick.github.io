import { motion } from "framer-motion";
import DisplayWeather from "./DisplayWeather";
import DateTime from "./DateTime";
import { headerLine } from "../motion_variants/headerLine.ts";
import { useDarkMode } from "../hooks/useDarkMode";
import { getDarkModeGlobalBgColour } from "../motion_variants/darkModeGlobalBg";
import { getDarkModeTextColour } from "../motion_variants/darkModeText";

// Header Component ----------------------------------------------------------------------

function Header() {
  const { darkMode } = useDarkMode();
  return (
    <motion.div
      variants={getDarkModeGlobalBgColour(darkMode)}
      initial="initial"
      animate="animate"
    >
      <motion.div
        variants={headerLine}
        transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
        className="border-b border-solid border-slate-400"
      >
        {/* flex col conatiner for visual items: title, dateitme and weather */}
        <div className="flex flex-col">
          {/* flex row container for title and datetime items  */}
          <motion.div
            variants={getDarkModeTextColour(darkMode)}
            initial="initial"
            animate="animate"
            className="flex flex-wrap items-baseline justify-center pb-6 pt-10 sm:justify-between"
          >
            {/* ------- Header bar name title section ------- */}
            <div className="ml-10 flex font-title text-[27px] font-normal leading-8 tracking-wider">
              <h1>Xavier Kirkpatrick</h1>
            </div>
            {/* ------- Header bar date, time and weather data section ------- */}
            <div className="mr-10 hidden sm:flex">
              <DateTime />
            </div>
          </motion.div>
          <p>
            <DisplayWeather />
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Header;
