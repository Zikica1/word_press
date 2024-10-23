import './blog.css';
import PropTypes from 'prop-types';
import BlogCard from './BlogCard';
import { blogs } from '../data/db';
import Heading from '../header/Heading';

const BlogCards = ({ isHome = false }) => {
  const blogCardFil = isHome ? blogs.slice(0, 3) : blogs;

  return (
    <section
      className='blog-cards'
      style={{
        backgroundColor: isHome ? '#ffffff' : '#f3f4f6',
      }}
    >
      {isHome && <Heading title='Letest Posts' subtitle='Blog' />}
      <div className={`blog-card-wrap  ${isHome ? 'flex-wrap' : 'grid'}`}>
        {blogCardFil.map((blog) => (
          <BlogCard key={blog.id} blog={blog} isHome={isHome} />
        ))}
      </div>
    </section>
  );
};

BlogCards.propTypes = {
  isHome: PropTypes.bool,
};

export default BlogCards;
