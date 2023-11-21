import Card from './Card';
import { tours } from './Data';
import { motion } from 'framer-motion';

import { fadeInVariants } from './variants';

const TourList = () => {
  return (
    <section
      id="tours"
      className="flex flex-col items-center pt-10"
    >
      <h1 className="section">
        FEATURED <span className="text-primary-7"> TOURS</span>
      </h1>
      <div className="grid gap-8 px-4 pb-10 w-80 md:w-full md:grid-cols-2 lg:grid-cols-3 ">
        {tours.map((tour, index) => {
          return (
            <motion.div
              variants={fadeInVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: false,
              }}
              custom={index}
            >
              <Card {...tour} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
export default TourList;
