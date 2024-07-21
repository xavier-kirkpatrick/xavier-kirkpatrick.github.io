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
      <div className="relative flex items-start pb-1 pt-10">
        {/* ------- Header bar name title section ------- */}
        <motion.div className="pl-[40px] font-primary text-[25px] font-normal leading-8 tracking-wider">
          <h1>{animateText("Xavier")}</h1>
          <h1 className="ml-10">{animateText("Kirkpatrick")}</h1>
        </motion.div>
        {/* ------- Header bar date + time + location section ------- */}
        <motion.div className="absolute right-[100px] font-primary text-[17px] leading-[23px]">
          <div className="">
            <p className="tracking-wider">
              {animateText("Tāmaki Makaurau, NZ")}
            </p>
            <p className="flex justify-between tracking-widest">
              {animateText(
                dateTime
                  .toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                  })
                  .replace(/:/g, ":"),
              )}
              {animateText(dateTime.toLocaleDateString())}
            </p>
          </div>
        </motion.div>
      </div>

      {/* ------- Header bar separator line ------- */}
      <motion.div
        className="border-b border-solid border-black"
        variants={headerLine}
        transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
      ></motion.div>
    </div>
  );
}

export default Header;
