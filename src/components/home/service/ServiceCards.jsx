import { motion } from 'framer-motion';
import { services } from '../../data/db';

const ServiceCards = () => {
  return (
    <div className='service-cards-wrap'>
      {services.map((service) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{
            type: 'tween',
            duration: 0.9,
          }}
          key={service.id}
          className={`service-card ${service.type}`}
        >
          <div className='icon'>{service.icon}</div>
          <h3 className='ser-title'>{service.title}</h3>
          <p>{service.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCards;
