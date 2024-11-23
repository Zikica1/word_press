import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './buttonSec.css';

const ButtonSec = ({ children, bg, ani, url }) => {
  const location = useLocation();
  const linkUrl = url || location.pathname;
  return (
    <Link to={linkUrl} className={`button-sec ${bg} ${ani}`}>
      {children}
    </Link>
  );
};

ButtonSec.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
  ani: PropTypes.string,
  url: PropTypes.string,
};

export default ButtonSec;
