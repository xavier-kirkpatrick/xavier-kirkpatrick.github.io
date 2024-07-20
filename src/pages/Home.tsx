import { motion } from "framer-motion";

const fadeInText = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: 5,
    },
  },
};

function HomePage() {
  return (
    <motion.div
      className="text-mainFont flex flex-shrink-0 flex-wrap items-start justify-center space-x-6 font-primary"
      variants={fadeInText}
      initial="initial"
      animate="animate"
    >
      <div className="w-[400px] pt-[80px]">
        <p>
          Hello, I’m a Software Developer based out of Tāmaki Makaurau,
          Auckland, New Zealand.
        </p>
        <br />
        <p>
          It is an exciting time for me as I pivot into the tech industry, and
          in 2024, I am looking to kickstart my career as a Developer.
        </p>
      </div>
      <div className="w-[400px] pt-[200px]">
        <p>
          Here you can find work completed during my time at Dev Academy
          Aotearoa as well as other external projects.
        </p>
        <br />
        <p>
          You’ll also find other non-development related interests where I spend
          my time, personal information and points of contact.
        </p>
        <br />
        <p>kirkpatrickxavier@gmail.com</p>
      </div>
    </motion.div>
  );
}

export default HomePage;
