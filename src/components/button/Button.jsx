import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({ children }) => {
  return <Link className='button-main'>{children}</Link>;
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
