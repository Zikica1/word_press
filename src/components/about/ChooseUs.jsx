import './chooseUs.css';
import Heading from '../header/Heading';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const ChooseUs = () => {
  return (
    <section className='choose-us'>
      <div className='choose-us-wrap'>
        <div className='choose-us-des'>
          <Heading
            title='An Exceptionally Unique Experience Tailored To You'
            subtitle='Why Choose Us'
          />

          <p>
            We are idea generators, goal seekers, challenge-thirsty
            professionals, creators of unique Internet projects. We deliver
            unconventional solutions
          </p>
          <div className='chose-cards-container flex'>
            <div className='choose-card-design flow'>
              <div className='icon'>
                <FaEnvelope />
              </div>
              <h3>Minimal Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                aliquid!
              </p>
            </div>
            <div className='choose-card-material flow'>
              <div className='icon'>
                <FaBell />
              </div>
              <h3>Best material</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, molestias!
              </p>
            </div>
          </div>
        </div>

        <div className='choose-us-img flow'>
          <div className='choose-picture-1'>
            <img src='../../../pictures/about/about-1-img.jpg' alt='' />
          </div>
          <div className='choose-picture-2'>
            <img src='../../../pictures/about/about-2-img.jpg' alt='' />
          </div>
          <div className='choose-picture-3'>
            <img src='../../../pictures/about/about-3-img.png' alt='' />
          </div>
          <div className='choose-picture-4'>
            <img src='../../../pictures/about/about-4-img.png' alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
