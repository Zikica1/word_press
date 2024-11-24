import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './buttonSec.css';

const ButtonSec = ({ children, bg, ani, url }) => {
  const location = useLocation();
  const urlLink = url || location.pathname;

  return (
    <Link to={`${urlLink}`} className={`button-sec ${bg} ${ani}`}>
      {children}
    </Link>
  );
};

ButtonSec.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
  ani: PropTypes.string,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // url: PropTypes.string,
};

export default ButtonSec;
