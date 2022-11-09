import React from 'react';
// import DetailsPage from '../DetailsPage/DetailsPage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <div>
      <Header />
      {children}
      {/* <DetailsPage /> */}
      <Footer />
    </div>
  );
};

export default Layout;
