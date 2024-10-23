import './heading.css';
import PropTypes from 'prop-types';

const Heading = ({ title, subtitle }) => {
  return (
    <div className='heading'>
      <h5 className='subtitle'>{subtitle}</h5>
      <h2 className='title'>{title}</h2>
    </div>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Heading;
