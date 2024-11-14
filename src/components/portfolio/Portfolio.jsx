import './portfolio.css';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeadingMain from '../header/HeadingMain';
import PortfolioCard from './PortfolioCard';
import { projects } from '../data/db';

const variantPortfolio = {
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

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '0px 0px -150px 0px',
  });

  return (
    <section className='portfolio'>
      <motion.div
        ref={ref}
        className='portfolioHeading'
        variants={variantPortfolio}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
      >
        <HeadingMain title='the works we are Proud of' subtitle='portfolio' />
      </motion.div>

      <div
        className='project-wrap grid
        grid-col'
      >
        {projects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
