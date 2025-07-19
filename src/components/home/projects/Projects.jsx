import './projects.css';
import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';
import { motion } from 'framer-motion';
import PortfolioCard from '../../portfolio/PortfolioCard';
import HeadingMain from '../../header/HeadingMain';
import { projects } from '../../data/db';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const projectFilt = projects.slice(0, 6);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const refItem = useRef(null);
  const refCard = useRef(null);

  const handleClickNext = () => {
    flushSync(() => {
      if (index < projectFilt.length - 1) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    });

    refCard.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handleClickPrev = () => {
    flushSync(() => {
      if (index === 0) {
        setIndex(projectFilt.length - 1);
      } else {
        setIndex(index - 1);
      }
    });

    refCard.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  };

  const handlePointerDown = (e) => {
    e.preventDefault();
    setIsDragging(false);
    setStartX(e.pageX - refItem.current.offsetLeft);
    setScrollLeft(refItem.current.scrollLeft);
    window.addEventListener('pointerup', handlePointerUp);
    if (refItem.current) {
      refItem.current.classList.add('dragging');
    }
  };

  const handlePointerMove = (e) => {
    if (e.buttons !== 1) return;
    const x = e.pageX - refItem.current.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 5) {
      setIsDragging(true);
    }
    refItem.current.scrollLeft = scrollLeft - walk;
  };

  const handlePointerUp = () => {
    setTimeout(() => setIsDragging(false), 0);
    if (refItem.current) {
      refItem.current.classList.remove('dragging');
    }
    window.removeEventListener('pointerup', handlePointerUp);
  };

  const handlePointerLeave = () => {
    setIsDragging(false);
    if (refItem.current) {
      refItem.current.classList.remove('dragging');
    }
    window.removeEventListener('pointerup', handlePointerUp);
  };

  return (
    <section className='projects-main'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: [1.1, 1] }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ type: 'tween', duration: 1 }}
      >
        <HeadingMain title='The Works We Are Proud Of' subtitle='Portfolio' />
      </motion.div>

      <motion.div
        style={{ position: 'relative' }}
        className='projects-main-container'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, scale: [1.1, 1] }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ type: 'tween', duration: 1 }}
      >
        <div
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          ref={refItem}
          className='projects-wrap'
        >
          {projectFilt.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={index}
              ref={refCard}
              isHome={true}
              isDragging={isDragging}
            />
          ))}
        </div>
        <div className='buttons-wrapper'>
          <button
            style={{ position: 'absolute', left: 0, top: '25%' }}
            onClick={handleClickPrev}
            className='button-project button-project-left'
          >
            <FaChevronLeft />
          </button>
          <button
            style={{ position: 'absolute', right: 0, top: '25%' }}
            onClick={handleClickNext}
            className='button-project button-project-right'
          >
            <FaChevronRight />
          </button>
        </div>
      </motion.div>

      {projectFilt.map((__, id) => (
        <button
          key={id}
          style={{
            width: '20px',
            height: '4px',
            border: 'none',
            backgroundColor: id === index ? '#f9346e' : '#08142026',
            marginInlineEnd: '1em',
            cursor: 'pointer',
          }}
        ></button>
      ))}
    </section>
  );
};

export default Projects;
