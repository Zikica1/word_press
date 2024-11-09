import PropTypes from 'prop-types';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';

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

const PricingList = ({ text }) => {
  return (
    <ul className='flow'>
      {text.map((item, id) => (
        <li key={id}>{item.list}</li>
      ))}
    </ul>
  );
};

const PricingCard = ({ value, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  return (
    <motion.div
      className='card-wrapper'
      ref={ref}
      initial={animations[index % animations.length].initial}
      animate={
        isInView
          ? animations[index % animations.length].animate
          : animations[index % animations.length].initial
      }
      transition={animations[index % animations.length].transition}
    >
      <div className='pricing-card'>
        <div className='pricing-card-hed'>
          <h3>{value.subject}</h3>
          <h5>{value.type}</h5>
        </div>
        <div className='pricing-card-body'>
          <div className='text-wrap'>
            <span>$</span>
            <p> {value.pricing}</p>
            <span>/Mont</span>
          </div>
        </div>
        <div className='pricing-card-foot'>
          <PricingList {...value} />
        </div>
      </div>
      <div className='pricing-card-purchase'>
        <Link>Purchase &rarr;</Link>
      </div>
    </motion.div>
  );
};

PricingCard.propTypes = {
  value: PropTypes.object,
  index: PropTypes.number,
};

PricingList.propTypes = {
  text: PropTypes.array,
};

export default PricingCard;
