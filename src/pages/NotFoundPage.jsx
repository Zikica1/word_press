import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <FaExclamationTriangle
        style={{
          display: 'block',
          marginInline: 'auto',
          marginBlock: '4em 0.5em',
          color: 'orange',
          fontSize: '30px',
        }}
      />
      <h1
        style={{
          color: 'black',
          fontWeight: '800',
          fontSize: '36px',
          marginBlockEnd: '0.5rem',
        }}
      >
        404 Not Found
      </h1>
      <p style={{ color: 'black', fontSize: '1rem', fontWeight: '600' }}>
        This page does not exist
      </p>
      <Link
        to='/'
        style={{
          color: 'white',
          backgroundColor: '#6001d3',
          paddingBlock: '12px',
          paddingInline: '24px',
          borderRadius: '16px',
          marginBlockStart: '1rem',
        }}
      >
        Go Back
      </Link>
    </section>
  );
};

export default NotFoundPage;
