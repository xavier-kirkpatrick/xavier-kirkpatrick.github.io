import { motion } from "framer-motion";
import DisplayWeather from "./DisplayWeather";
import DateTime from "./DateTime";
import { headerLine } from "../motion_variants/headerLine.ts";

// Header Component ----------------------------------------------------------------------

function Header() {
  return (
    <motion.div
      variants={headerLine}
      transition={{ duration: 1 }}
      initial="hidden"
      animate="visible"
      className="border-b border-solid border-black"
    >
      {/* flex col conatiner for visual items: title, dateitme and weather */}
      <div className="flex flex-col">
        {/* flex row container for title and datetime items  */}
        <div className="flex flex-wrap items-baseline justify-center pb-6 pt-10 sm:justify-between">
          {/* ------- Header bar name title section ------- */}
          <div className="flex pl-10 font-primary text-[25px] font-normal leading-8 tracking-wider sm:justify-start">
            <h1>Xavier Kirkpatrick</h1>
          </div>
          {/* ------- Header bar date, time and weather data section ------- */}
          <div className="hidden pr-10 sm:flex">
            <DateTime />
          </div>
        </div>
        <p>
          <DisplayWeather />
        </p>
      </div>
    </motion.div>
  );
}

export default Header;
