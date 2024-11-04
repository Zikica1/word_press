import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = forwardRef(({ children }, ref) => {
  return (
    <Link ref={ref} className='button-main'>
      {children}
    </Link>
  );
});

Button.propTypes = {
  children: PropTypes.node,
};

Button.displayName = 'Button';

export default Button;
