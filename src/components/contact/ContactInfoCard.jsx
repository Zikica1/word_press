import PropTypes from 'prop-types';

const ContactInfoCard = ({ value }) => {
  return (
    <li className='contact-info-card grid'>
      <div className='contact-icon'>{value.icon}</div>

      <div className='contact-card-des'>
        <h3>{value.title}</h3>
        <p>{value.info}</p>
      </div>
    </li>
  );
};

ContactInfoCard.propTypes = {
  value: PropTypes.object,
};

export default ContactInfoCard;
