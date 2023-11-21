import ReadMoreButton from './Readmore';
import { moveInLeft, moveInRight } from './variants';
import { motion } from 'framer-motion';
import { readmoreText } from './Data';
import Title from './Title';
const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center p-10 "
    >
      {/* about */}
      <Title
        title="ABOUT"
        subtitle="US"
      />
      {/* content */}
      <div className="grid gap-5 md:grid-cols-2 md:flex-row justify-evenly">
        <motion.div
          variants={moveInLeft}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
          className="relative"
        >
          <div className="relative">
            {/* rectangle element */}
            <div className="absolute w-full h-full border-8 right-6 bottom-6 border-primary-6 -z-10 "></div>
            <div className="absolute w-1/2 h-[300px]  md:hidden -bottom-5 right-30 border-8 border-primary-4 -z-10 "></div>
            {/* image */}
            <img
              src="./assets/beach.jpg"
              alt="Your Image"
              className="w-full rounded-lg max-h-[900px] "
            />
            {/* corner shadow */}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-gradient-to-br from-transparent via-white to-white"></div>
          </div>
        </motion.div>
        {/* article */}
        <motion.article
          variants={moveInRight}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: false,
          }}
          className="flex flex-col gap-4 pt-4 text-center md:text-left"
        >
          <h3>Explore The Difference</h3>

          <ReadMoreButton
            text={readmoreText}
            maxLength={200}
          />
        </motion.article>
      </div>
    </section>
  );
};
export default About;
