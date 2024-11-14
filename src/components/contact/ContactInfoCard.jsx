import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import PropTypes from 'prop-types';

const animations = [
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 },
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
];

const ContactInfoCard = ({ value, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.6,
  });

  return (
    <motion.li
      className='contact-info-card grid'
      ref={ref}
      initial={animations[index % animations.length].initial}
      animate={
        isInView
          ? animations[index % animations.length].animate
          : animations[index % animations.length].initial
      }
      transition={animations[index % animations.length].transition}
    >
      <div className='contact-icon'>{value.icon}</div>

      <div className='contact-card-des'>
        <h3>{value.title}</h3>
        <p>{value.info}</p>
      </div>
    </motion.li>
  );
};

ContactInfoCard.propTypes = {
  value: PropTypes.object,
  index: PropTypes.number,
};

export default ContactInfoCard;
