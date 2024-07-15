import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

const headerLine = {
  hidden: { opacity: 0, x: -500 },
  visible: { opacity: 1, x: 0 },
};

export const animateText = (text: string) => {
  return (
    <motion.div
      className="inline-block overflow-hidden"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((character, index) => (
        <motion.div variants={letter} key={index} className="inline-block">
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
    // Header Container div below
    // Border div here:
    // <div className="h-[136px] border-2 border-solid border-red-700">
    <div>
      <div className="flex items-start pb-3 pt-10 font-light tracking-wider">
        {/* ------- Header bar name title section ------- */}
        <motion.div className="pl-[216px] font-primary text-2xl leading-[25px]">
          <h1>{animateText("Xavier")}</h1>
          <h1>{animateText("Kirkpatrick")}</h1>
        </motion.div>
        {/* ------- Header bar date + time + location section ------- */}
        <motion.div className="font-primary text-[17px] leading-[20px]">
          <div className="absolute right-0 pr-[235px]">
            <p>{animateText("Tāmaki Makaurau, NZ")}</p>
            <div className="flex justify-between">
              {animateText(
                dateTime
                  .toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })
                  .replace(/:/g, ":"),
              )}
              <div>{animateText(dateTime.toLocaleDateString())}</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ------- Header bar separator line ------- */}
      <motion.div
        className="absolute left-[200px] w-5/6 border-b border-solid border-black pr-10"
        variants={headerLine}
        transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
}

export default Header;
