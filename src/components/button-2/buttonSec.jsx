import { useRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './buttonSec.css';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
// gsap.registerPlugin(useGSAP);

const ButtonSec = ({ children, bg, ani, url }) => {
  const refEl = useRef();

  return (
    <Link to={`${url}`} ref={refEl} className={`button-sec ${bg} ${ani}`}>
      {children}
    </Link>
  );
};

ButtonSec.displayName = 'ButtonSec';

ButtonSec.propTypes = {
  children: PropTypes.node,
  bg: PropTypes.string,
  ani: PropTypes.string,
  url: PropTypes.number,
};

export default ButtonSec;
