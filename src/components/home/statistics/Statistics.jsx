import { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import './statistics.css';

const Statistics = () => {
  const [counterState, setCounterState] = useState(false);
  const refObserver = useRef(null);

  const observerRef = refObserver.current;

  useEffect(() => {
    const observerCount = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setCounterState(true);
        }
      },
      {
        threshold: 0.25,
        rootMargin: '0px 0px 15px 0px',
      }
    );

    if (refObserver.current) {
      observerCount.observe(refObserver.current);
    }

    return () => {
      if (observerRef) {
        observerCount.unobserve(observerRef);
      }
    };
  }, [observerRef]);

  return (
    <section className='statistics' ref={refObserver}>
      <ul className='statistics-wrap'>
        <li className='item'>
          <h3>
            {counterState ? (
              <CountUp start={0} end={53} duration={2.8}></CountUp>
            ) : (
              0
            )}
            K
          </h3>
          <p>Happy Customer</p>
        </li>
        <li className='item'>
          <h3>
            {counterState ? (
              <CountUp start={0} end={10} duration={2.8}></CountUp>
            ) : (
              0
            )}
            K
          </h3>
          <p>Layout Done</p>
        </li>
        <li className='item'>
          <h3>
            {counterState ? (
              <CountUp start={300} end={500} duration={2.8}></CountUp>
            ) : (
              0
            )}
          </h3>
          <p>Get Award</p>
        </li>
        <li className='item'>
          <h3>
            {counterState ? (
              <CountUp start={0} end={120} duration={2.8}></CountUp>
            ) : (
              0
            )}
          </h3>
          <p>Projects Done</p>
        </li>
      </ul>
    </section>
  );
};

export default Statistics;
