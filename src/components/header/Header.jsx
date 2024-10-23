import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import './header.css';
import logo from '../../assets/images/Logo.png';
import Button from '../button/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = {
    fontWeight: 'bold',
  };

  const handleClick = () => {
    let nextIsOpen = !isOpen;
    setIsOpen(nextIsOpen);
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='logo' src={logo} alt='' />
      </Link>

      <nav className={`nav ${isOpen ? 'show' : ''}`}>
        <ul className='nav-body'>
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
        </ul>
        <Button bg='button-main-bg'>Get Started</Button>
      </nav>

      <button
        onClick={handleClick}
        className={`hamburger ${isOpen ? 'open' : ''}`}
      >
        <span className='hamburger-top'></span>
        <span className='hamburger-middle'></span>
        <span className='hamburger-bottom'></span>
      </button>
    </header>
  );
};

export default Header;
