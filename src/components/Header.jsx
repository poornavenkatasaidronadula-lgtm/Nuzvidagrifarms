import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Products', path: '/products' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Our Commitment', path: '/our-commitment' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span>assist.naf@gmail.com</span>
            <span className="separator">|</span>
            <span>Nuzvid, Eluru District, AP</span>
          </div>
          <div className="top-bar-right">
            <a href="#"><FaFacebook size={14} /></a>
            <a href="#"><FaInstagram size={14} /></a>
            <a href="#"><FaYoutube size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="main-nav-wrapper">
        <div className="container main-nav">
          <Link to="/" className="logo">
            <img src="https://www.nuzvidagrifarms.com/cdn/shop/files/Nuzvid_logo_463bcf9e-fbf0-4e1b-9f12-2734584a22df.png" alt="Nuzvid Agri Farms" className="logo-img" />
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            <ul>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={location.pathname === link.path ? 'active' : ''}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions">
            <Link to="/products" className="btn-primary shop-now-btn">Shop Now</Link>
            <button className="icon-btn"><User size={20} /></button>
            <button className="icon-btn cart-btn">
              <ShoppingCart size={20} />
              <span className="cart-count">0</span>
            </button>
            <button
              className="icon-btn mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/products" className="btn-primary mobile-shop-btn" onClick={() => setIsMobileMenuOpen(false)}>
              Shop Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
