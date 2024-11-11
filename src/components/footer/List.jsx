import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';

const listVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: (index) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      delay: index * 0.2,
      duration: 0.8,
    },
  }),
};

const List = ({ title, text, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={listVariant}
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
    >
      <h3 className='footer-title'>{title}</h3>
      <ul>
        {text.map((value, id) => (
          <li key={id}>{value.list}</li>
        ))}
      </ul>
    </motion.div>
  );
};

List.propTypes = {
  title: PropTypes.string,
  text: PropTypes.array,
  index: PropTypes.number,
};

export default List;
