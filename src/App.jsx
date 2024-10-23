import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PortfolioCardDetail from './components/portfolio/PortfolioCardDetail';
import BlogCardDetail from './components/blog/BlogCardDetail';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='projects' element={<Projects />} />
        <Route path='projects/:id' element={<PortfolioCardDetail />} />
        <Route path='/:id' element={<PortfolioCardDetail />} />
        <Route path='blog' element={<Blog />} />
        <Route path='blog/:id' element={<BlogCardDetail />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
