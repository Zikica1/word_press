import Heading from '../../header/Heading';
import ButtonSec from '../../button-2/buttonSec';
import ServiceCards from './ServiceCards';
import './service.css';

const Service = () => {
  return (
    <section className='service'>
      <div className='service-container'>
        <div className='service-text'>
          <Heading title='Ultimate Experiences' subtitle='Our Services' />
          <p>
            Delivering cutting-edge WordPress solutions that elevate your online
            presence with seamless functionality, creative design, and unmatched
            performance.
          </p>
          <ButtonSec bg='button-sec-1'>Read More</ButtonSec>
        </div>

        <ServiceCards />
      </div>
    </section>
  );
};

export default Service;
