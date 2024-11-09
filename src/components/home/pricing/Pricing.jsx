import './pricing.css';
import { useRef } from 'react';
import { useInView, motion } from 'framer-motion';
import Heading from '../../header/Heading';
import { pricing } from '../../data/db';
import PricingCard from './PricingCard';

const Pricing = () => {
  const refHeading = useRef(null);
  const isInView = useInView(refHeading, {
    once: true,
    amount: 0.9,
  });

  return (
    <section className='pricing'>
      <motion.div
        ref={refHeading}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{
          opacity: isInView ? 1 : 0,
          scale: isInView ? 1 : 1.1,
        }}
        transition={{
          type: 'tween',
          duration: 1,
        }}
      >
        <Heading
          title='Choose The Right Plan For Your Business'
          subtitle='Pricing Table'
        />
      </motion.div>

      <div className='pricing-cards-container  grid flow'>
        {pricing.map((price, index) => (
          <PricingCard key={price.id} value={price} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
