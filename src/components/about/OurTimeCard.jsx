import { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const cardsAnimate = [
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
  {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
  },
];

const OurTimeCard = ({ item, index }) => {
  const refCard = useRef(null);
  const isInView = useInView(refCard, {
    once: true,
    amount: 0.7,
  });

  return (
    <motion.div
      ref={refCard}
      className='time-img-card'
      initial={cardsAnimate[index % cardsAnimate.length].initial}
      animate={
        isInView
          ? cardsAnimate[index % cardsAnimate.length].animate
          : cardsAnimate[index % cardsAnimate.length].initial
      }
      transition={cardsAnimate[index % cardsAnimate.length].transition}
    >
      <img src={item.img} alt={item.name} />
      <div className='time-detail-card'>
        <h5>{item.position}</h5>
        <h3>{item.name}</h3>
        <ul className='time-icons flex'>
          {item.icons.map((icon, id) => (
            <li key={id}>
              <Link>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

OurTimeCard.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};

export default OurTimeCard;
