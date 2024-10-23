import './hero.css';
import ButtonSec from '../button-2/buttonSec';
import heroImg1 from '../../assets/images/hero/hero-card-1.png';
import heroImg2 from '../../assets/images/hero/hero-card-2.png';
import heroImg3 from '../../assets/images/hero/hero-card-3.png';
import heroImg4 from '../../assets/images/hero/hero-card-4.png';
import heroImg5 from '../../assets/images/hero/hero-card-5.png';
import heroImg6 from '../../assets/images/hero/hero-card-6.png';
import heroImg7 from '../../assets/images/hero/hero-card-7.png';
import heroImg8 from '../../assets/images/hero/hero-card-8.png';
import HeadingMain from '../header/HeadingMain';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// gsap.registerPlugin(useGSAP, ScrollTrigger);
// import { useRef } from 'react';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-wrapper grid grid-container'>
        <div className='hero-heading'>
          <div className='hero-ani-1'>
            <HeadingMain
              title='make more time for the work that matters most'
              subtitle='We Are WordPress Agency'
            />
            <p>
              Focus on what matters while we take care of your WordPress site.
              Fast, reliable, and tailored IT services for your digital success.
            </p>
          </div>

          <div className='button-wrap flex'>
            <ButtonSec bg='button-sec-1' ani='button-sec-1-ani'>
              Watch Video
            </ButtonSec>
            <ButtonSec bg='button-sec-2' ani='button-sec-2-ani'>
              Get Started
            </ButtonSec>
          </div>
        </div>

        <div className='hero-img-wrap'>
          <div className='hero-img-1'>
            <img src={heroImg1} alt='' />
          </div>
          <div className='hero-img-2'>
            <img src={heroImg2} alt='' />
          </div>
          <div className='hero-img-3'>
            <img src={heroImg3} alt='' />
          </div>
          <div className='hero-img-4'>
            <img src={heroImg4} alt='' />
          </div>
          <div className='hero-img-5'>
            <img src={heroImg5} alt='' />
          </div>
          <div className='hero-img-6'>
            <img src={heroImg6} alt='' />
          </div>
          <div className='hero-img-7'>
            <img src={heroImg7} alt='' />
          </div>
          <div className='hero-img-8'>
            <img src={heroImg8} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
