import './testimonial.css';
import { useState } from 'react';
import Heading from '../../header/Heading';
import { testimonial } from '../../data/db';
import TestiCard from './TestiCard';

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  const handleNextClick = () => {
    if (index < testimonial.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className='testimonial'>
      <Heading
        title='Do not Believe Me Check Client Says'
        subtitle='Testimonial'
      />
      <div className='testimonial-wrapper'>
        {testimonial.map((item) => (
          <TestiCard
            key={item.id}
            value={item}
            handleNextClick={handleNextClick}
            handlePrevClick={handlePrevClick}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
