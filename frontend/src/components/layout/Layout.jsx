import React from 'react';
import { Outlet } from 'react-router';
import Footer from './templates/Footer/Footer';
import Header from './templates/Header/Header';

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
