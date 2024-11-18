import '../App.css';
import Hero from '../components/home/Hero';
import Service from '../components/home/service/Service';
import Statistics from '../components/home/statistics/Statistics';
import Team from '../components/home/team/Team';
import Projects from '../components/home/projects/Projects';
import Testimonial from '../components/home/testimonial/Testimonial';
import Pricing from '../components/home/pricing/Pricing';
import BlogCards from '../components/blog/BlogCards';
const Home = () => {
  return (
    <main className='home'>
      <Hero />
      <Service />
      <Statistics />
      <Team />
      <Projects />
      <Testimonial />
      <Pricing />
      <BlogCards isHome={true} />
    </main>
  );
};

export default Home;
