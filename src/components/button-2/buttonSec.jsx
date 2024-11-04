import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './buttonSec.css';

const ButtonSec = ({ children, bg, ani, url }) => {
  return (
    <Link to={`${url}`} className={`button-sec ${bg} ${ani}`}>
      {children}
    </Link>
  );
};

ButtonSec.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
  ani: PropTypes.string,
  url: PropTypes.number,
};

export default ButtonSec;
