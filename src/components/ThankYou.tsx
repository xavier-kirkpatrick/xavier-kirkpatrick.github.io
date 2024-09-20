import Marquee from "react-fast-marquee";
import { delayMarquee } from "../motion_variants/delayMarquee";
import { motion } from "framer-motion";

function ThankYou() {
  return (
    <Marquee
      autoFill={true}
      speed={20}
      pauseOnHover={true}
      delay={0}
      gradient={true}
      gradientWidth={5}
      gradientColor="#f1f1ec"
      direction="right"
    >
      <motion.div
        className="mr-2 text-center text-xs italic text-blueLink"
        variants={delayMarquee}
        initial="hidden"
        animate="visible"
      >
        Thank you for visiting
      </motion.div>
    </Marquee>
  );
}

export default ThankYou;
