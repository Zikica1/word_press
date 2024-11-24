import './team.css';
import { useEffect } from 'react';
import { motion, useInView, useAnimate } from 'framer-motion';
import Heading from '../../header/Heading';
import ButtonSec from '../../button-2/buttonSec';
import Team1 from '../../../assets/images/team/team-1.jpg';
import Team2 from '../../../assets/images/team/team-2.jpg';
import Team3 from '../../../assets/images/team/team-3.png';

const Team = () => {
  const [teamScope, teamAnimate] = useAnimate();
  const [scopeAnimate, teamAnimate2] = useAnimate();
  const isInView = useInView(teamScope, {
    once: true,
    margin: '0px 0px -240px 0px',
  });
  const isInView2 = useInView(scopeAnimate, {
    margin: '0px 0px -150px 0px',
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      const handleAnimate = async () => {
        teamAnimate(
          '.team-heading',
          { opacity: 1, y: 0 },
          { type: 'tween', duration: 1.2 }
        );
        teamAnimate(
          '.team-par-1',
          {
            opacity: 1,
            y: 0,
          },
          { type: 'tween', duration: 1.2 }
        );
      };

      handleAnimate();
    }
  }, [isInView, teamAnimate]);

  useEffect(() => {
    if (isInView2) {
      const handelAnimate = async () => {
        await teamAnimate2(
          '.team-par-2',
          { opacity: 1, y: 0 },
          { type: 'tween', duration: 1 }
        );
        await teamAnimate2(
          '.button-4',
          { opacity: 1, scale: [0.8, 1.2, 1] },
          { type: 'tween', duration: 0.7 }
        );
        await teamAnimate2(
          '.button-3',
          { opacity: 1, scale: [0.8, 1.2, 1] },
          { type: 'tween', duration: 0.7 }
        );
      };
      handelAnimate();
    }
  }, [isInView2, teamAnimate2]);

  return (
    <section className='team'>
      <div className='team-wrapper grid grid-container'>
        <div ref={teamScope} className='team-description'>
          <motion.div className='team-heading' initial={{ opacity: 0, y: 100 }}>
            <Heading
              title='We Are The Leader in Web Design'
              subtitle='About Team'
            />
          </motion.div>
          <motion.p className='team-par-1' initial={{ opacity: 0, y: 100 }}>
            We are pioneers in web design, crafting innovative digital
            experiences that captivate and engage. Our expertise transforms your
            vision into a stunning online presence.
          </motion.p>

          <div ref={scopeAnimate} className='team-animate-2'>
            <motion.p className='team-par-2' initial={{ opacity: 0, y: 100 }}>
              With a commitment to excellence, we deliver cutting-edge design
              solutions tailored to your unique needs. Partner with us for a
              website that stands out and drives results.
            </motion.p>
            <div className='button-wrapper'>
              <motion.div
                className='button-4'
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0 }}
              >
                <ButtonSec bg='button-sec-4'>Watch Video</ButtonSec>
              </motion.div>
              <motion.div
                className='button-3'
                style={{ display: 'inline-block' }}
                initial={{ opacity: 0 }}
              >
                <ButtonSec bg='button-sec-3'>Get Started</ButtonSec>
              </motion.div>
            </div>
          </div>
        </div>

        <div className='team-pictures'>
          <div className='team-pictures-wrap'>
            <img className='team-img-1' src={Team1} alt='image-team' />
            <img className='team-img-2' src={Team2} alt='' />
            <img className='team-img-3' src={Team3} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
