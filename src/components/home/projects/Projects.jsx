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
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const refItem = useRef(null);
  const refCard = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = refItem.current.scrollLeft;
  //     const width = refItem.current.offsetWidth;
  //     const newIndex = Math.round(scrollPosition / width);
  //     setIndex(newIndex);
  //   };

  //   refItem.current.addEventListener('scroll', handleScroll);

  //   return () => {
  //     refItem.current.removeEventListener('scroll', handleScroll);
  //   };
  // }, [index]);

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

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - -refItem.current.offsetLeft);
    setScrollLeft(refItem.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - refItem.current.offsetLeft;
    const walk = (x - startX) * 1;
    refItem.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
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
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
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
