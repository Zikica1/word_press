import './portfolio.css';
import HeadingMain from '../header/HeadingMain';
import PortfolioCard from './PortfolioCard';
import { projects } from '../data/db';

const Portfolio = () => {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollPosition = sliderRef.current.scrollLeft;
  //     const width = sliderRef.current.offsetWidth;
  //     const newIndex = Math.round(scrollPosition / width);
  //     setIndex(newIndex);
  //   };

  //   sliderRef.current.addEventListener('scroll', handleScroll);

  //   return () => {
  //     sliderRef.current.removeEventListener('scroll', handleScroll);
  //   };
  // }, [index]);

  return (
    <section className='portfolio'>
      <HeadingMain title='the works we are Proud of' subtitle='portfolio' />
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
