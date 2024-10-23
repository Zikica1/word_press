import './headingMain.css';
import PropTypes from 'prop-types';

const HeadingMain = ({ title, subtitle }) => {
  return (
    <div className='hadingMain'>
      <h5 className='subtitle'>{subtitle}</h5>
      <h1 className='title'>{title}</h1>
    </div>
  );
};

HeadingMain.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default HeadingMain;
