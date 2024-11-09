import './service.css';
import { useEffect } from 'react';
import { motion, useInView, useAnimate } from 'framer-motion';
import Heading from '../../header/Heading';
import ButtonSec from '../../button-2/buttonSec';
import ServiceCards from './ServiceCards';

const Service = () => {
  const [serviceScope, animate] = useAnimate();
  const isInView = useInView(serviceScope, {
    margin: '0px 0px -200px 0px',
  });

  useEffect(() => {
    if (isInView) {
      animate(
        '.service-heading',
        { opacity: 1, y: 0 },
        { type: 'tween', duration: 1 }
      );
      animate(
        '.service-text p',
        { opacity: 1, y: 0 },
        { type: 'tween', duration: 1 }
      );
      animate(
        '.button-sec',
        { opacity: 1, scale: 1 },
        { type: 'tween', duration: 1, delay: 1 }
      );
    }
  }, [isInView, animate]);

  return (
    <section className='service'>
      <div className='service-container'>
        <div ref={serviceScope} className='service-text'>
          <motion.div
            className='service-heading'
            initial={{ opacity: 0, y: -100 }}
          >
            <Heading title='Ultimate Experiences' subtitle='Our Services' />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: -100 }}>
            Delivering cutting-edge WordPress solutions that elevate your online
            presence with seamless functionality, creative design, and unmatched
            performance.
          </motion.p>
          <motion.div
            className='button-sec'
            initial={{ opacity: 0, scale: 1.2 }}
          >
            <ButtonSec bg='button-sec-1'>Read More</ButtonSec>
          </motion.div>
        </div>

        <ServiceCards />
      </div>
    </section>
  );
};

export default Service;
