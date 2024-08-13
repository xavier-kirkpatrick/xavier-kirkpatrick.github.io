import { motion } from "framer-motion";
import { headerLine } from "./Header";

function Footer() {
  return (
    <div>
      <motion.div
        className="border-b border-solid border-black"
        variants={headerLine}
        transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
      ></motion.div>
      <p className="text-center font-primary text-sm">Footer</p>
    </div>
  );
}

export default Footer;
