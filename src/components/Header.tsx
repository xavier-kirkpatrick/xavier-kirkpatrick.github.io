import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import DisplayWeather from "./DisplayWeather";

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
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      variants={headerLine}
      transition={{ duration: 1 }}
      initial="hidden"
      animate="visible"
      className="border-b border-solid border-black"
    >
      <div className="flex flex-col">
        <div className="flex flex-shrink-0 flex-grow-0 pb-4 pt-10">
          {/* ------- Header bar name title section ------- */}
          <div className="flex pl-[40px] font-primary text-[25px] font-normal leading-8 tracking-wider">
            <h1>{animateText("Xavier Kirkpatrick")}</h1>
          </div>
          {/* ------- Header bar date, time and weather data section ------- */}
          <div className="absolute right-[100px] flex items-center space-x-5 font-primary text-[18px] leading-[23px] tracking-wider">
            <p>
              {animateText(
                dateTime
                  .toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })
                  .replace(/:/g, ":"),
              )}
            </p>
            <p>
              {animateText(dateTime.toLocaleDateString().replace(/\//g, "."))}
            </p>
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
