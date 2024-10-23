import './footer.css';
import { useState } from 'react';
import Heading from '../header/Heading';
import { Link } from 'react-router-dom';
import { footer } from '../data/db';
import PropTypes from 'prop-types';
import logo from '../../assets/images/logo-white.png';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const List = ({ title, text }) => {
  return (
    <div>
      <h3 className='footer-title'>{title}</h3>
      <ul>
        {text.map((value, id) => (
          <li key={id}>{value.list}</li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const [text, setText] = useState('');

  const data = new Date();
  return (
    <footer className='footer'>
      <div className='our-community'>
        <div className='our-community-des'>
          <Heading
            title='Subscribe To Our Newsletter'
            subtitle='Join Our Community'
          />
          <p>
            Stay updated with the latest news, exclusive offers, and insights by
            joining our community today!
          </p>

          <form className='form-community' onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='email'>
              <input
                type='email'
                placeholder='Enter Your E-mail'
                value={text}
                onChange={(e) => setText(e.target.value)}
                id='email'
                name='email'
              />
            </label>

            <button type='submit'>Get Started</button>
          </form>
        </div>
      </div>

      <div className='footer-container'>
        <div className='footer-logo'>
          <img src={logo} alt='' className='logo' />
        </div>

        <div className='footer-list-container'>
          {footer.map((items) => (
            <List {...items} key={items.id} />
          ))}
        </div>
      </div>
      <div className='footer-link flex'>
        <p>
          Copyright &copy; {data.getFullYear()} wordPress.All Rights Reserved.
        </p>
        <div className='footer-link-icons flex'>
          <Link>
            <FaFacebookF />
          </Link>
          <Link>
            <FaLinkedinIn />
          </Link>
          <Link>
            <FaInstagram />
          </Link>
          <Link>
            <FaTwitter />
          </Link>
        </div>
      </div>
    </footer>
  );
};

List.propTypes = {
  title: PropTypes.string,
  text: PropTypes.array,
};

export default Footer;
