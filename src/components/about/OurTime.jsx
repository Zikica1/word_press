import './ourTime.css';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Heading from '../header/Heading';
import { time } from '../data/db';
import OurTimeCard from './OurTimeCard';

const variantHeading = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
};

const OurTime = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -150px 0px',
  });
  return (
    <section className='our-time'>
      <motion.div
        ref={ref}
        variants={variantHeading}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
      >
        <Heading
          title='Meet The Minds Shaping An Industry'
          subtitle='Our team'
        />
      </motion.div>

      <div className='time-img-container grid'>
        {time.map((item, i) => (
          <OurTimeCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </section>
  );
};

export default OurTime;
