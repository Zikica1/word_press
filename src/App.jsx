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
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} errorElement={<NotFoundPage />} />
        <Route
          path='about'
          element={<About />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path='projects'
          element={<Projects />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path='projects/:id'
          element={<PortfolioCardDetail />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path='/:id'
          element={<PortfolioCardDetail />}
          errorElement={<NotFoundPage />}
        />
        <Route path='blog' element={<Blog />} errorElement={<NotFoundPage />} />
        <Route
          path='blog/:id'
          element={<BlogCardDetail />}
          errorElement={<NotFoundPage />}
        />
        <Route
          path='contact'
          element={<Contact />}
          errorElement={<NotFoundPage />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
