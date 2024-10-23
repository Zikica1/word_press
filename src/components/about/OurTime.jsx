import './ourTime.css';
import Heading from '../header/Heading';
import { time } from '../data/db';
import OurTimeCard from './OurTimeCard';

const OurTime = () => {
  return (
    <section className='our-time'>
      <Heading title='Meet The Minds Shaping An Industry' subtitle='Our team' />

      <div className='time-img-container grid'>
        {time.map((item) => (
          <OurTimeCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default OurTime;
