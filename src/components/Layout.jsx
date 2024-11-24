import { Outlet, useLocation } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header key={location.pathname} />
      <Outlet />
      <Footer key={location.key} />
    </>
  );
};

export default Layout;
