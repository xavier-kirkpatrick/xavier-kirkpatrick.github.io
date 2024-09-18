import { motion } from "framer-motion";
import DisplayWeather from "./DisplayWeather";
import DateTime from "./DateTime";

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

export const headerLine = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2, delay: 0.5 } },
};

export const animateText = (text: string) => {
  return (
    <motion.div
      className="inline-block overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((character) => (
        <motion.div variants={letter} key={character} className="inline-block">
          {character === " " ? "\u00A0" : character}
        </motion.div>
      ))}
    </motion.div>
  );
};

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
      <div className="flex flex-col">
        <div className="flex items-center justify-between pb-6 pt-10">
          {/* ------- Header bar name title section ------- */}
          <div className="flex pl-10 font-primary text-[25px] font-normal leading-8 tracking-wider">
            <h1>Xavier Kirkpatrick</h1>
          </div>
          {/* ------- Header bar date, time and weather data section ------- */}
          <div className="pr-10">
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
