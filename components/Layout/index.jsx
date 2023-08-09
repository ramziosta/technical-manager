import React from 'react';
import Navbar from '../Navbar/index';
import Footer from '../Footer';



const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
