import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const letter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const headerLine = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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

  const animateXavKirk = (name: string) => {
    return (
      <motion.div
        className="inline-block overflow-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {name.split("").map((character) => (
          <motion.div
            variants={letter}
            key={character}
            className="inline-block"
          >
            {character}
          </motion.div>
        ))}
      </motion.div>
    );
  };

  return (
    <>
      <div className="mr-56 flex items-baseline justify-between">
        <motion.div className="pt-12 font-raleway text-2xl">
          <h1>{animateXavKirk("Xavier")}</h1>
          <h1>{animateXavKirk("Kirkpatrick")}</h1>
        </motion.div>

        <div>
          <motion.div
            className="flex flex-col font-raleway"
            variants={headerLine}
            transition={{ duration: 1 }}
            initial="hidden"
            animate="visible"
          >
            <p className=" text-lg tracking-widest">
              {dateTime
                .toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  second: "2-digit",
                  hour12: false,
                })
                .replace(/:/g, ":")}
            </p>

            <p className="text-lg tracking-widest">
              {dateTime.toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </div>

      <div>
        <motion.div
          className="border-b border-black pt-2 font-raleway text-2xl"
          variants={headerLine}
          transition={{ duration: 4 }}
          initial="hidden"
          animate="visible"
        />
      </div>
    </>
  );
}

export default Header;
