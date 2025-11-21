import './contactInfo.css';
import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import Heading from '../header/Heading';
import { contact } from '../data/db';
import ContactInfoCard from './ContactInfoCard';
import axios from 'axios';

const variant = {
  hidden: { opacity: 0, scale: 1.1 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'tween',
      duration: 1,
    },
  },
};

const variant2 = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  },
};
const variant3 = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  },
};

const ContactInfo = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const refHeading = useRef(null);
  const refForm = useRef(null);

  const isInView = useInView(refHeading, {
    once: true,
    margin: '0px 0px -170px 0px',
  });

  const isInView2 = useInView(refForm, {
    once: true,
    margin: '0px 0px -250px 0px',
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await axios.post(
        '/.netlify/functions/send-message',
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        {
          headers: {
            Accept: 'application/json',
          },
        }
      );
      if (res.data.success) {
        setStatus('Poruka uspešno poslata!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Došlo je do greške. Pokušajte ponovo.');
      }
    } catch (error) {
      console.error('Greška pri slanju:', error);
      setStatus('Došlo je do greške. Pokušajte ponovo.');
    }
  };

  return (
    <>
      <section className='contact-info'>
        <motion.div
          variants={variant}
          initial='hidden'
          animate='visible'
          className='contactHeading'
        >
          <Heading
            title="Let's Create Progress Together For Great Business"
            subtitle='Contact With Us'
          />
        </motion.div>

        <ul className='contact-info-wrap grid'>
          {contact.map((c, i) => (
            <ContactInfoCard key={c.id} value={c} index={i} />
          ))}
        </ul>
      </section>

      <section className='contact-location'>
        <div className='contact-location-wrap grid grid-container'>
          <div className='contact-left-col'>
            <motion.div
              ref={refHeading}
              variants={variant2}
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
            >
              <Heading
                title='Do not Google Design Questions'
                subtitle='Contact With Us'
              />

              <p>
                Your email address will not be published. Required fields are
                marked*
              </p>
            </motion.div>

            <motion.form
              ref={refForm}
              variants={variant3}
              initial='hidden'
              animate={isInView2 ? 'visible' : 'hidden'}
              className='contact-form '
              onSubmit={handleSubmit}
            >
              <div>
                <label htmlFor='name'>
                  <input
                    type='text'
                    placeholder='Your Name*'
                    value={form.name}
                    onChange={handleChange}
                    name='name'
                    id='name'
                    required
                  />
                </label>
                <label htmlFor='email'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    placeholder='Your Email*'
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </label>
              </div>
              <label htmlFor='question'>
                <textarea
                  name='message'
                  id='message'
                  placeholder='Question*'
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </label>
              <button>Send A Message</button>

              {status === 'loading' && <p>Šaljem...</p>}
              {status === 'success' && <p>Poruka poslata!</p>}
              {status === 'error' && <p>Greška! Pokušajte ponovo.</p>}
            </motion.form>
          </div>

          <div className='contact-right-col'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: 0.6, once: true }}
              transition={{ type: 'tween', duration: 1 }}
              className='contact-form-map'
            >
              <img src='../../../contact-map.png' alt='map' />

              <Link
                to='https://maps.app.goo.gl/dcdBkmv7fxtdwYe6A'
                target='_blank'
              >
                <img src='../../../google-2logo.jpg' alt='google-logo' />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
