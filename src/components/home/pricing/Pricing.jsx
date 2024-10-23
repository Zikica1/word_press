import './pricing.css';
import Heading from '../../header/Heading';
import { pricing } from '../../data/db';
import PricingCard from './PricingCard';

const Pricing = () => {
  return (
    <section className='pricing'>
      <Heading
        title='Choose The Right Plan For Your Business'
        subtitle='Pricing Table'
      />
      <div className='pricing-cards-container  grid flow'>
        {pricing.map((price) => (
          <PricingCard key={price.id} value={price} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
