import './blog.css';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import PropTypes from 'prop-types';
import BlogCard from './BlogCard';
import { blogs } from '../data/db';
import Heading from '../header/Heading';

const MotionBlogCard = motion.create(BlogCard);

const animations = [
  {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
  },
  {
    initial: { opacity: 0, scale: 1.1 },
    animate: { opacity: 1, scale: 1 },
  },
  {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
  },
];

const BlogCards = ({ isHome = false }) => {
  const ref = useRef(null);

  const blogCardFil = isHome ? blogs.slice(0, 3) : blogs;

  return (
    <section
      className='blog-cards'
      style={{
        backgroundColor: isHome ? '#ffffff' : '#f3f4f6',
      }}
    >
      {isHome && (
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.9 }}
          transition={{ type: 'tween', duration: 1 }}
        >
          <Heading title='Letest Posts' subtitle='Blog' />
        </motion.div>
      )}
      <div className={`blog-card-wrap  ${isHome ? 'flex-wrap' : 'grid'}`}>
        {blogCardFil.map((blog, index) => (
          <MotionBlogCard
            ref={ref}
            key={blog.id}
            blog={blog}
            isHome={isHome}
            initial={
              isHome
                ? animations[index % blogCardFil.length].initial
                : { opacity: 0, y: 50 }
            }
            whileInView={
              isHome
                ? animations[index % blogCardFil.length].animate
                : { opacity: 1, y: 0 }
            }
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          />
        ))}
      </div>
    </section>
  );
};

BlogCards.propTypes = {
  isHome: PropTypes.bool,
};

export default BlogCards;
