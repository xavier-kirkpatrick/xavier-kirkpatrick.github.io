import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
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

function Header() {
  const animateXavKirk = (name: string) => {
    return (
      <motion.span
        className="inline-block overflow-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {name.split("").map((character, index: number) => (
          <motion.span variants={letter} key={index} className="inline-block">
            {character}
          </motion.span>
        ))}
      </motion.span>
    );
  };

  return (
    <div>
      <motion.div className="ml-56 pt-12 font-raleway text-2xl">
        <h1>{animateXavKirk("Xavier")}</h1>
        <h1>{animateXavKirk("Kirkpatrick")}</h1>
      </motion.div>
      <motion.div
        className="ml-56 w-80 border-b border-black pt-2 font-raleway text-2xl"
        variants={headerLine}
        transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
      />
    </div>
  );
}

export default Header;
