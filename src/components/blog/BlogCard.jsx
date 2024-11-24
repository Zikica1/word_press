import PropTypes from 'prop-types';
import ButtonSec from '../button-2/buttonSec';
import { forwardRef } from 'react';

const BlogDes = ({ description }) => {
  const des = description[0];
  const desPreview = des.split(' ').slice(0, 20).join(' ');

  return (
    <>
      <p>{`${desPreview}...`}</p>
    </>
  );
};

const BlogCard = forwardRef(({ blog, isHome }, ref) => {
  return (
    <div ref={ref} className={`blog-card ${!isHome && 'blog-card-how'}`}>
      <img
        src={blog.img}
        alt={blog.title}
        className={isHome ? 'blog-card-img-home' : 'blog-card-img'}
      />
      <div
        className={`blog-card-cont grid ${
          isHome ? 'blog-card-home' : 'blog-card-content-how'
        }`}
      >
        <h3>
          <span>{blog.data}</span>
          {blog.title}
        </h3>
        <BlogDes {...blog} />

        {isHome ? (
          <ButtonSec url={`blog/${blog.id}`} bg='button-sec-4'>
            Read More
          </ButtonSec>
        ) : (
          <ButtonSec url={`${blog.id}`} bg='button-sec-3'>
            Read More
          </ButtonSec>
        )}
      </div>
    </div>
  );
});

BlogCard.propTypes = {
  blog: PropTypes.object,
  isHome: PropTypes.bool,
};

BlogDes.propTypes = {
  description: PropTypes.array,
};

BlogCard.displayName = 'BlogCard';
export default BlogCard;
