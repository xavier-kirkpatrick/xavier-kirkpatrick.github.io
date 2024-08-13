import { motion } from "framer-motion";

function HomePage() {
  const fadeInText = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 5,
      },
    },
  };

  const leftDrag = {
    top: -50,
    left: -50,
    right: 150,
    bottom: 50,
  };

  const rightDrag = {
    top: -50,
    left: -150,
    right: 50,
    bottom: 50,
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center font-primary text-mainFont"
      variants={fadeInText}
      initial="initial"
      animate="animate"
    >
      <div className="mt-[15%] flex flex-shrink-0 flex-wrap items-baseline justify-center space-y-10 lg:space-x-10">
        <motion.div
          drag
          dragConstraints={leftDrag}
          className="w-[350px] hover:text-blueLink"
        >
          <p>
            Hello, I’m a Software Developer based out of Tāmaki Makaurau,
            Auckland, New Zealand.
          </p>
          <br />
          <p>
            It is an exciting time for me as I pivot into the tech industry, and
            in 2024, I am looking to kickstart my career as a Developer.
          </p>
        </motion.div>
        <motion.div
          drag
          dragConstraints={rightDrag}
          className="w-[350px] hover:text-blueLink"
        >
          <p>
            Here you can find work completed during my time at Dev Academy
            Aotearoa as well as other external projects.
          </p>
          <br />
          <p>
            You’ll also find other non-development related interests where I
            spend my time, personal information and points of contact.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HomePage;
