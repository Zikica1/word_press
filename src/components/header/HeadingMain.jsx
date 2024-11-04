import './headingMain.css';
import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const HeadingMain = forwardRef(({ title, subtitle }, ref) => {
  return (
    <div ref={ref} className='hadingMain'>
      <h5 className='subtitle'>{subtitle}</h5>
      <h1 className='title'>{title}</h1>
    </div>
  );
});

HeadingMain.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

HeadingMain.displayName = 'HeadingMain';

export default HeadingMain;
