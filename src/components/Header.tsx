import { motion } from "framer-motion";

function Header() {
  return (
    <div>
      <motion.div
        className=" w-80% ml-56 border-b border-black pt-10 font-raleway text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Xavier</h1>
        <h1>Kirkpatrick</h1>
      </motion.div>
    </div>
  );
}

export default Header;
