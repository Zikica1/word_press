import { Outlet, useLocation } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = () => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <Header key={location.pathname} />
      <Outlet />
      <Footer key={location.key} />
    </>
  );
};

export default Layout;
