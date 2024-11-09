import './testimonial.css';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Heading from '../../header/Heading';
import { testimonial } from '../../data/db';
import TestiCard from './TestiCard';

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const refTesHeading = useRef(null);

  const isInView = useInView(refTesHeading, {
    once: true,
    amount: 1,
  });

  const handleNextClick = () => {
    if (index < testimonial.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className='testimonial'>
      <motion.div
        ref={refTesHeading}
        style={{
          opacity: isInView ? 1 : 0,
          y: isInView ? 0 : -80,
          transition: 'all 1s ease',
        }}
      >
        <Heading
          title='Do not Believe Me Check Client Says'
          subtitle='Testimonial'
        />
      </motion.div>

      <div className='testimonial-wrapper'>
        {testimonial.map((item) => (
          <TestiCard
            key={item.id}
            value={item}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
