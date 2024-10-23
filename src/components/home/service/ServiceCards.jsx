import { services } from '../../data/db';

const ServiceCards = () => {
  return (
    <div className='service-cards-wrap'>
      {services.map((service) => (
        <div key={service.id} className={`service-card ${service.type}`}>
          <div className='icon'>{service.icon}</div>
          <h3 className='ser-title'>{service.title}</h3>
          <p>{service.text}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceCards;
