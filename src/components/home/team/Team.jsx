import './team.css';
import Heading from '../../header/Heading';
import ButtonSec from '../../button-2/buttonSec';
import Team1 from '../../../assets/images/team/team-1.jpg';
import Team2 from '../../../assets/images/team/team-2.jpg';
import Team3 from '../../../assets/images/team/team-3.png';

const Team = () => {
  return (
    <section className='team'>
      <div className='team-wrapper grid grid-container'>
        <div className='team-description'>
          <Heading
            title='We Are The Leader in Web Design'
            subtitle='About Team'
          />

          <p>
            We are pioneers in web design, crafting innovative digital
            experiences that captivate and engage. Our expertise transforms your
            vision into a stunning online presence.
          </p>
          <p>
            With a commitment to excellence, we deliver cutting-edge design
            solutions tailored to your unique needs. Partner with us for a
            website that stands out and drives results.
          </p>

          <div className='button-wrapper'>
            <ButtonSec bg='button-sec-4'>Watch Video</ButtonSec>
            <ButtonSec bg='button-sec-3'>Get Started</ButtonSec>
          </div>
        </div>

        <div className='team-pictures'>
          <div className='team-pictures-wrap'>
            <img className='team-img-1' src={Team1} alt='image-team' />
            <img className='team-img-2' src={Team2} alt='' />
            <img className='team-img-3' src={Team3} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
