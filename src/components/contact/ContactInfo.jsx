import './contactInfo.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Heading from '../header/Heading';
import { contact } from '../data/db';
import ContactInfoCard from './ContactInfoCard';

const ContactInfo = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [questions, setQuiestions] = useState('');

  return (
    <>
      <section className='contact-info'>
        <Heading
          title="Let's Create Progress Together For Great Business"
          subtitle='Contact With Us'
        />

        <ul className='contact-info-wrap grid'>
          {contact.map((c) => (
            <ContactInfoCard key={c.id} value={c} />
          ))}
        </ul>
      </section>

      <section className='contact-location'>
        <div className='contact-location-wrap grid grid-container'>
          <div className='contact-left-col'>
            <Heading
              title='Do not Google Design Questions'
              subtitle='Contact With Us'
            />

            <p>
              Your email address will not be published. Required fields are
              marked*
            </p>

            <form
              className='contact-form '
              onSubmit={(e) => e.preventDefault()}
            >
              <div>
                <label htmlFor='name'>
                  <input
                    type='text'
                    placeholder='Your Name*'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </label>
              </div>
              <label htmlFor='question'>
                <textarea
                  name='question'
                  id='question'
                  placeholder='Question*'
                  value={questions}
                  onChange={(e) => setQuiestions(e.target.value)}
                  required
                ></textarea>
              </label>
              <button>Send A Message</button>
            </form>
          </div>

          <div className='contact-right-col'>
            <div className='contact-form-map'>
              <img src='../../../contact-map.png' alt='map' />

              <Link
                to='https://maps.app.goo.gl/dcdBkmv7fxtdwYe6A'
                target='_blank'
              >
                <img src='../../../google-2logo.jpg' alt='google-logo' />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInfo;
