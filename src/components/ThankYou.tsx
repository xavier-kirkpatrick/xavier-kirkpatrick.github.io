import Marquee from "react-fast-marquee";
import { delayMarquee } from "../motion_variants/delayMarquee";
import { motion } from "framer-motion";

function ThankYou() {
  return (
    <motion.div variants={delayMarquee} initial="hidden" animate="visible">
      <Marquee
        autoFill={true}
        speed={20}
        pauseOnHover={true}
        delay={0}
        gradient={false}
        gradientWidth={5}
        gradientColor="#f1f1ec"
        direction="right"
      >
        <motion.div className="mr-2 text-center text-xs italic text-blueLink">
          Thank you for visiting
        </motion.div>
      </Marquee>
    </motion.div>
  );
}

export default ThankYou;
