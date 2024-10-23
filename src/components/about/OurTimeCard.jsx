import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const OurTimeCard = ({ item }) => {
  return (
    <div className='time-img-card'>
      <img src={item.img} alt={item.name} />
      <div className='time-detail-card'>
        <h5>{item.position}</h5>
        <h3>{item.name}</h3>
        <ul className='time-icons flex'>
          {item.icons.map((icon, id) => (
            <li key={id}>
              <Link>{icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

OurTimeCard.propTypes = {
  item: PropTypes.object,
};

export default OurTimeCard;
