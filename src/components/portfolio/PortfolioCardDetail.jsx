import './portfolioCardDetail.css';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/db';

const PortfolioCardDetail = () => {
  const { id } = useParams();

  const currentCard = projects.find((project) => project.id.toString() === id);

  return (
    <div className='portfolio-card-detail flow'>
      <Link to='..' relative='path'>
        &larr; Back to Projects
      </Link>
      <h2>{currentCard.title}</h2>
      <img src={currentCard.cover} alt='' />

      <div className='portfolio-card-des'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae in
          architecto dolor dolore ea aut nisi, nobis fuga maxime labore eius ut
          dolorem vitae, corrupti, culpa ducimus! Ea atque illum ullam nihil
          quidem labore minus.
        </p>
        <div className='grid'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illo
            perspiciatis obcaecati quisquam atque unde a illum. Quas quo
            suscipit nulla corrupti praesentium ducimus, eligendi eaque? Ab
            fugit doloremque nemo aperiam nulla doloribus illum expedita est
            explicabo, quasi accusantium nisi quisquam esse optio veniam harum
            iusto nobis consequuntur deserunt porro quia unde natus beatae?
            Impedit eligendi explicabo enim eos culpa ducimus laudantium odit
            possimus, itaque maiores perferendis temporibus exercitationem aut
            porro iste cum, neque similique ad tempore suscipit sint laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            exercitationem ex nisi sint reprehenderit aliquid expedita
            temporibus, praesentium libero quae asperiores eum enim ut facere
            nesciunt unde! Culpa asperiores cupiditate eligendi accusamus
            corrupti itaque corporis praesentium quas fuga iusto distinctio,
            aspernatur est perspiciatis a voluptatem placeat enim quam.
            Dignissimos nostrum facere nihil veniam temporibus laboriosam quae
            aut deserunt doloribus sequi!
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardDetail;
