import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import './Layout.css';

const Layout = () => {
  return (
    <>
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
      {/* Floating WhatsApp Widget */}
      <a href="https://wa.me/919985555525" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <div className="wa-bubble">Hey, order here for discounts!</div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
      </a>
    </>
  );
};

export default Layout;
