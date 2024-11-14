import './chooseUs.css';
import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimate } from 'framer-motion';
import Heading from '../header/Heading';
import { FaBell, FaEnvelope } from 'react-icons/fa';

const variantChooseHeader = {
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

const variantImg = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  },
};

const variantImg2 = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'tween',
      duration: 0.8,
    },
  },
};

const ChooseUs = () => {
  const [scopeCards, animateCards] = useAnimate();
  const refImg = useRef(null);
  const refImg2 = useRef(null);

  const isInView = useInView(scopeCards, {
    once: true,
    amount: 0.8,
  });
  const isInView2 = useInView(refImg, {
    margin: '0px 0px -200px 0px',
    once: true,
  });
  const isInView3 = useInView(refImg2, {
    margin: '0px 0px -150px 0px',
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      const handleAnimate = async () => {
        await animateCards(
          '.choose-card-design',
          { opacity: 1, scale: 1 },
          { type: 'tween', duration: 0.8 }
        );
        await animateCards(
          '.choose-card-material',
          { opacity: 1, scale: 1 },
          { type: 'tween', duration: 0.8 }
        );
      };

      handleAnimate();
    }
  });

  return (
    <section className='choose-us'>
      <div className='choose-us-wrap grid grid-container'>
        <div className='choose-us-des'>
          <motion.div
            variants={variantChooseHeader}
            initial='hidden'
            animate='visible'
          >
            <Heading
              title='An Exceptionally Unique Experience Tailored To You'
              subtitle='Why Choose Us'
            />

            <p>
              We are idea generators, goal seekers, challenge-thirsty
              professionals, creators of unique Internet projects. We deliver
              unconventional solutions
            </p>
          </motion.div>

          <div ref={scopeCards} className='chose-cards-container flex'>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              className='choose-card-design flow'
            >
              <div className='icon'>
                <FaEnvelope />
              </div>
              <h3>Minimal Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                aliquid!
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 1.1 }}
              className='choose-card-material'
            >
              <div className='icon'>
                <FaBell />
              </div>
              <h3>Best material</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, molestias!
              </p>
            </motion.div>
          </div>
        </div>

        <div className='choose-us-img flow'>
          <div className='choose-picture-1'>
            <motion.img
              ref={refImg}
              variants={variantImg}
              initial='hidden'
              animate={isInView2 ? 'visible' : 'hidden'}
              src='../../../pictures/about/about-1-img.jpg'
              alt=''
            />
          </div>
          <div className='choose-picture-2'>
            <motion.img
              ref={refImg2}
              variants={variantImg2}
              initial='hidden'
              animate={isInView3 ? 'visible' : 'hidden'}
              src='../../../pictures/about/about-2-img.jpg'
              alt=''
            />
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
