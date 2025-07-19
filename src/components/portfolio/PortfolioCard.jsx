import { Link } from 'react-router-dom';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PortfolioCard = forwardRef(
  ({ project, index, isDragging, isHome = false }, ref) => {
    return (
      <div ref={project.id === index ? ref : null} className='project-card'>
        <Link
          to={`${project.id}`}
          onClick={(e) => {
            if (isDragging) e.preventDefault();
          }}
        >
          <img src={project.cover} alt='' draggable={false} />
          <div className={`description ${isHome && 'description-project'}`}>
            <h3>{project.title}</h3>
            <p>{project.type}</p>
          </div>
        </Link>
      </div>
    );
  }
);

PortfolioCard.displayName = 'PortfolioCard';

PortfolioCard.propTypes = {
  project: PropTypes.object,
  index: PropTypes.number,
  isHome: PropTypes.bool,
  isDragging: PropTypes.bool,
};

export default PortfolioCard;
