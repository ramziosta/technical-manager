import React from 'react';
import Navbar from '../Navbar/index';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
