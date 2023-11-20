import { GiReceiveMoney, GiHiking } from 'react-icons/gi';
import { FaSocks } from 'react-icons/fa';
import { fadeInVariants } from './variants';
import { motion } from 'framer-motion';
const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center py-10 rounded-xl"
    >
      <div className="section">
        Our <span className="text-primary-4 ">Services</span>
      </div>
      <motion.div
        variants={fadeInVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="py-4 bg-primary-9"
      >
        {/* services */}
        <div className="flex flex-col items-start justify-between gap-10 px-20 md:flex-row">
          <div className="service-content">
            <GiReceiveMoney className="service" />
            <h3>Saving Money</h3>
            <p className="text-sm">
              Navigate the journey of saving money with smart financial choices
              and prudent budgeting
            </p>
          </div>
          <div className="service-content">
            <GiHiking className="service" />
            <div>
              <h3>Endless Hiking</h3>
              <p className="text-sm">
                Embark on a trail of endless hiking, where each step unveils new
                landscapes and unrivaled outdoor experiences
              </p>
            </div>
          </div>
          <div className="service-content">
            <FaSocks className="service" />
            <div>
              <h3>Amazing Comfort</h3>
              <p className="text-sm">
                Luxuriate in amazing comfort, finding solace in plush
                surroundings and tailored amenities that redefine relaxation.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Services;
