import { Link, NavLink } from 'react-router-dom';
import { useState, useRef } from 'react';
import './header.css';
import { motion } from 'framer-motion';
import logo from '../../assets/images/Logo.png';
import Button from '../button/Button';

const headerVariant = {
  hidden: {},
  visible: {
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.25,
    },
  },
};

const logoVariant = {
  hidden: { opacity: 0, scale: 0.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 40,
      mass: 2,
      damping: 13,
    },
  },
};

const hamVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 1.5,
    },
  },
};

const MotionButton = motion.create(Button);

const buttonVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 110,
      mass: 1,
      damping: 9,
    },
  },
};

const menuVariant = {
  hidden: { opacity: 0, y: -100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);

  const activeStyle = {
    fontWeight: 'bold',
  };

  const handleClick = () => {
    let nextIsOpen = !isOpen;
    setIsOpen(nextIsOpen);
  };

  return (
    <motion.header
      className='header'
      variants={headerVariant}
      initial='hidden'
      animate='visible'
    >
      <Link to='/'>
        <motion.img
          variants={logoVariant}
          className='logo'
          src={logo}
          alt='logo-img'
        />
      </Link>

      <nav className={`nav ${isOpen ? 'show' : ''}`}>
        <motion.ul variants={menuVariant} className='nav-body'>
          <li>
            <NavLink
              to='/'
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='about'
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='projects'
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to='blog'
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to='contact'
              style={({ isActive }) => (isActive ? activeStyle : null)}
            >
              Contact
            </NavLink>
          </li>
        </motion.ul>
        <MotionButton
          variants={buttonVariant}
          ref={buttonRef}
          bg='button-main-bg'
        >
          Get Started
        </MotionButton>
      </nav>

      <motion.button
        onClick={handleClick}
        className={`hamburger ${isOpen ? 'open' : ''}`}
        variants={hamVariant}
      >
        <span className='hamburger-top'></span>
        <span className='hamburger-middle'></span>
        <span className='hamburger-bottom'></span>
      </motion.button>
    </motion.header>
  );
};

export default Header;
