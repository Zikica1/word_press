import './hero.css';
import { useEffect } from 'react';
import { motion, useAnimate, useInView } from 'framer-motion';
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

const Hero = () => {
  const [scope, animate] = useAnimate();
  const [scopeImg, animateImg] = useAnimate();
  const [scopeImg2, animateImg2] = useAnimate();
  const isInView = useInView(scopeImg, {
    margin: '0px 0px -150px 0px',
    once: true,
  });

  const isInView2 = useInView(scopeImg2, {
    margin: '0px 0px 0px 0px',
    once: true,
  });

  useEffect(() => {
    const handleHeroAni = async () => {
      await animate(
        '.hero-ani-1',
        { opacity: [0, 1], y: [100, 0] },
        { duration: 1 }
      );
      await animate(
        '.button-1',
        { opacity: 1, scale: [0.8, 1.2, 1] },
        {
          type: 'tween',
          duration: 0.8,
        }
      );
      await animate(
        '.button-2',
        { opacity: 1, scale: [0.8, 1.2, 1] },
        {
          type: 'tween',
          duration: 0.8,
        }
      );
    };

    handleHeroAni();
  }, [animate]);

  useEffect(() => {
    if (isInView) {
      animateImg(
        '.hero-img-1',
        { opacity: 1, scale: [1.1, 1.05, 1] },
        { type: 'tween', duration: 1.8 }
      );
      animateImg(
        '.hero-img-8 img',
        { y: '0%' },
        { type: 'tween', duration: 1, delay: 0.5 }
      );
      animateImg(
        '.hero-img-4',
        { opacity: 1, y: 0 },
        {
          type: 'tween',
          duration: 1,
          delay: 0.25,
        }
      );
      animateImg(
        '.hero-img-6',
        { y: 0, opacity: 1 },
        { type: 'tween', duration: 1, delay: 1 }
      );
    }
  }, [animateImg, isInView]);

  useEffect(() => {
    if (isInView2) {
      animateImg2(
        '.hero-img-2',
        { opacity: 1, x: 0 },
        { type: 'tween', duration: 1, delay: 0.2 }
      );
      animateImg2(
        '.hero-img-7',
        { opacity: 1, scale: 1 },
        { type: 'tween', duration: 1 }
      );
      animateImg2(
        '.hero-img-5 img',
        { opacity: 1, x: '0%' },
        { type: 'tween', duration: 1, delay: 1 }
      );
      animateImg2(
        '.hero-img-3',
        { opacity: 1, y: 0 },
        { type: 'tween', duration: 1, delay: 1 }
      );
    }
  }, [animateImg2, isInView2]);

  return (
    <section className='hero'>
      <div className='hero-wrapper grid grid-container'>
        <div ref={scope} className='hero-heading'>
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
            <div className='button-1'>
              <ButtonSec bg='button-sec-1' ani='button-sec-1-ani'>
                Watch Video
              </ButtonSec>
            </div>

            <div className='button-2'>
              <ButtonSec bg='button-sec-2' ani='button-sec-2-ani'>
                Get Started
              </ButtonSec>
            </div>
          </div>
        </div>

        <div ref={scopeImg} className='hero-img-wrap'>
          <div className='hero-img-1'>
            <img src={heroImg1} alt='' />
          </div>

          <div ref={scopeImg2}>
            <motion.div className='hero-img-2' initial={{ x: -50 }}>
              <img src={heroImg2} alt='' />
            </motion.div>
            <motion.div className='hero-img-3' initial={{ y: 50 }}>
              <img src={heroImg3} alt='' />
            </motion.div>
            <div className='hero-img-5' style={{ overflow: 'hidden' }}>
              <motion.img src={heroImg5} alt='' initial={{ x: '-100%' }} />
            </div>
            <motion.div className='hero-img-7' initial={{ scale: 1.3 }}>
              <img src={heroImg7} alt='' />
            </motion.div>
          </div>
          <motion.div className='hero-img-4' initial={{ y: -40 }}>
            <img src={heroImg4} alt='' />
          </motion.div>

          <motion.div className='hero-img-6' initial={{ y: 50, opacity: 0 }}>
            <img src={heroImg6} alt='' />
          </motion.div>

          <div className='hero-img-8' style={{ overflow: 'hidden' }}>
            <motion.img src={heroImg8} alt='' initial={{ y: '-100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
