import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PricingList = ({ text }) => {
  return (
    <ul className='flow'>
      {text.map((item, id) => (
        <li key={id}>{item.list}</li>
      ))}
    </ul>
  );
};

const PricingCard = ({ value }) => {
  return (
    <div className='pricing-card'>
      <div className='pricing-card-purchase'>
        <Link>Purchase &rarr;</Link>
      </div>
      <div className='pricing-card-hed'>
        <h3>{value.subject}</h3>
        <h5>{value.type}</h5>
      </div>
      <div className='pricing-card-body'>
        <div className='text-wrap'>
          <span>$</span>
          <p> {value.pricing}</p>
          <span>/Mont</span>
        </div>
      </div>
      <div className='pricing-card-foot'>
        <PricingList {...value} />
      </div>
    </div>
  );
};

PricingCard.propTypes = {
  value: PropTypes.object,
};

PricingList.propTypes = {
  text: PropTypes.array,
};

export default PricingCard;
