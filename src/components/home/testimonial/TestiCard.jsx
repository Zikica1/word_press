import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import {
  FaLongArrowAltLeft,
  FaLongArrowAltRight,
  FaQuoteLeft,
} from 'react-icons/fa';

const TestiCard = ({ value, handleNextClick, handlePrevClick, index }) => {
  return (
    <motion.div
      className='test-card grid grid-container grid-container--test'
      style={{ translate: `${-100 * index}%` }}
    >
      <div className='test-img'>
        <div className='test-img-wrap'>
          <img src={value.cover} alt={value.name} />
          <div className='test-icon'>
            <FaQuoteLeft />
          </div>
        </div>
      </div>
      <div className='test-card-description'>
        <h3>{value.title}</h3>
        <p className='test-text'>{value.text}</p>
        <div className='stars-container'>
          {value.icons.map((icon, id) => (
            <span key={id}>{icon}</span>
          ))}
        </div>
        <h3>{value.name}</h3>
        <p>{value.job}</p>
        <div className='test-buttons-container'>
          <button onClick={handlePrevClick} aria-label='previous'>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={handleNextClick} aria-label='next'>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
TestiCard.propTypes = {
  value: PropTypes.object,
  handleNextClick: PropTypes.func,
  handlePrevClick: PropTypes.func,
  index: PropTypes.number,
};

export default TestiCard;
