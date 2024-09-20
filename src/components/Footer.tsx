import { motion } from "framer-motion";
import { headerLine } from "../motion_variants/headerLine.ts";

function Footer() {
  const fadeInText = {
    initial: { opacity: 0 },
    animate: {
      opacity: 0.7,
      transition: {
        duration: 5,
      },
    },
  };

  return (
    <>
      <motion.div
        className="border-t border-solid border-slate-400"
        variants={headerLine}
        transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <motion.p
        variants={fadeInText}
        initial="initial"
        animate="animate"
        className="text-center font-primary text-sm text-slate-800"
      >
        &copy; 2024 Xavier Kirkpatrick
      </motion.p>
    </>
  );
}

export default Footer;
