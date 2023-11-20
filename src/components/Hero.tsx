import { motion } from 'framer-motion';
const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen "
    >
      {/* image */}
      <img
        className="object-cover w-full h-[94%] "
        src="./assets/hero.jpg"
        alt="hero"
      />
      {/* content */}
      <motion.div
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="absolute flex flex-col items-center justify-center w-full gap-2 py-4 text-white bottom-20 md:bottom-10 backdrop-blur-md backdrop-contrast-200 backdrop-opacity-50"
      >
        <p className="text-3xl font-bold tracking-widest text-center md:text-4xl ">
          CONTINUE EXPLORING
        </p>
        <p className="p-2 mx-12 text-lg text-center rounded-lg text-md md:text-xl md:mx-40 lg:mx-[200px] backdrop-blur-md backdrop-contrast-200 backdrop-opacity-50">
          "Dive into a world of discovery. Uncover hidden gems and experiences.
          Continue your journey, one exploration at a time. Your next adventure
          awaits."
        </p>
        <button className="btn-primary">EXPLORE TOURS</button>
      </motion.div>
      {/* overlay color */}
      {/* <div className="absolute top-0 z-10 w-full h-screen bg-primary-8 opacity-10"></div> */}
    </section>
  );
};
export default Hero;
