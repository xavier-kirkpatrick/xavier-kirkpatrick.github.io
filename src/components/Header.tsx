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
      <div
        id="container"
        className="ml-56 mr-60 flex items-baseline justify-between pt-10"
      >
        <motion.div className="font-jost text-2xl tracking-wider">
          <h1>{animateXavKirk("Xavier")}</h1>
          <h1>{animateXavKirk("Kirkpatrick")}</h1>
        </motion.div>

        <div>
          <motion.div
            className="flex flex-col justify-evenly tracking-wider"
            variants={headerLine}
            transition={{ duration: 1 }}
            initial="hidden"
            animate="visible"
          >
            <p className="font-jost text-lg">Tāmaki Makaurau, NZ</p>

            <p className="font-jost text-lg">
              {dateTime
                .toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })
                .replace(/:/g, ":")}
              {" - "}
              {dateTime.toLocaleDateString()}
            </p>
          </motion.div>
        </div>
      </div>

      <div>
        <motion.div
          className="ml-52 mr-10 border-b border-black pt-2 font-jost text-2xl"
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
