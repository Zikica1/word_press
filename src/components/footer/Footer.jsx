import './footer.css';
import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimate } from 'framer-motion';
import Heading from '../header/Heading';
import List from './List';
import { Link } from 'react-router-dom';
import { footer } from '../data/db';
import logo from '../../assets/images/logo-white.png';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa';

const logoVariant = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  },
};

const Footer = () => {
  const [text, setText] = useState('');
  const [scopeHeading, animateCommunity] = useAnimate();
  const isInView = useInView(scopeHeading, {
    once: true,
    amount: 0.8,
  });
  const refLogo = useRef(null);
  const isInView2 = useInView(refLogo, {
    once: true,
    amount: 0.5,
  });

  const data = new Date();

  useEffect(() => {
    const handleAnimation = async () => {
      if (isInView) {
        await animateCommunity(
          '.content-anim',
          { opacity: 1, y: 0 },
          { type: 'tween', duration: 0.8 }
        );
        await animateCommunity(
          '.form-community',
          { opacity: 1, y: 0 },
          { type: 'tween', duration: 0.8 }
        );
      }
    };

    handleAnimation();
  }, [isInView, animateCommunity]);

  return (
    <footer className='footer'>
      <div className='our-community'>
        <div ref={scopeHeading} className='our-community-des'>
          <motion.div className='content-anim' initial={{ opacity: 0, y: 50 }}>
            <Heading
              title='Subscribe To Our Newsletter'
              subtitle='Join Our Community'
            />
            <p>
              Stay updated with the latest news, exclusive offers, and insights
              by joining our community today!
            </p>
          </motion.div>

          <motion.form
            style={{ opacity: 0, y: -25 }}
            className='form-community'
            onSubmit={(e) => e.preventDefault()}
          >
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
          </motion.form>
        </div>
      </div>

      <div className='footer-container'>
        <motion.div
          ref={refLogo}
          className='footer-logo'
          variants={logoVariant}
          initial='hidden'
          animate={isInView2 ? 'visible' : 'hidden'}
        >
          <img src={logo} alt='' className='logo' />
        </motion.div>

        <div className='footer-list-container'>
          {footer.map((items, index) => (
            <List {...items} key={items.id} index={index} />
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

export default Footer;
