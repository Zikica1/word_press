import { useParams } from 'react-router-dom';
import './blogCardDetail.css';
import { blogs } from '../data/db';
import { FaRegHeart } from 'react-icons/fa';
import { MdOutlineShare } from 'react-icons/md';

const BlogCardDetail = () => {
  const { id } = useParams();
  const blogCurrent = blogs.find((b) => b.id.toString() === id);

  return (
    <section className='blog-card-detail'>
      <div className='blog-img-detail'>
        <img src={blogCurrent.imgsec} alt={blogCurrent.title} />
      </div>

      <div className='blog-card-detail-wrap'>
        <div className='blog-description-detail'>
          <h1>{blogCurrent.title}</h1>
          <div>
            <span>Business</span>
            <span>{blogCurrent.data}</span>
          </div>
          {blogCurrent.description.map((d, id) => (
            <p key={id}>{d}</p>
          ))}
        </div>

        <div className='blog-tags-detail'>
          <p>Tags: Blog</p>
          <div>
            <FaRegHeart />
            <MdOutlineShare />
          </div>
        </div>

        <div className='blog-comment-detail'>
          <h3>Add a Comment</h3>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form className='form-blog' onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor='name'>
                <input
                  type='text'
                  placeholder='Name*'
                  required
                  id='name'
                  name='name'
                  autoFocus
                />
              </label>
              <label htmlFor='email'>
                <input
                  type='email'
                  placeholder='E-Mail *'
                  required
                  id='email'
                  name='email'
                  autoFocus
                />
              </label>
            </div>
            <label htmlFor='website'>
              <input
                type='text'
                placeholder='Website'
                id='website'
                name='website'
                autoFocus
              />
            </label>
            <label htmlFor='comment'>
              <textarea
                type='text'
                placeholder='Comment'
                id='comment'
                name='comment'
                autoFocus
              ></textarea>
            </label>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BlogCardDetail;
