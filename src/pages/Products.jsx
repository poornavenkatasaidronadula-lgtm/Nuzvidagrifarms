import React from 'react';
import { FaEye, FaShoppingCart, FaHeart } from 'react-icons/fa';
import './Products.css';

const Products = () => {
  const products = [
    { id: 1, title: 'A2 Cow Ghee 1 Liter', price: 3500, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL1-A2GHEE_600x.jpg?v=1759145353' },
    { id: 2, title: 'A2 Cow Ghee 500 ml', price: 1750, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL1-A2GHEE_600x.jpg?v=1759145353' },
    { id: 3, title: 'Buffalo Ghee', price: 520, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL1-BufaloGhee_600x.jpg?v=1759148766' },
    { id: 4, title: 'Masala Chilli Powder', price: 135, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-RedChilliPowder_600x.jpg?v=1759144186' },
    { id: 5, title: 'Mineral Salt', price: 50, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-MineralSalt_600x.jpg?v=1759145237' },
    { id: 6, title: 'Forest Honey', price: 199, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Honey_600x.jpg?v=1759144691' },
    { id: 7, title: 'Organic Jaggery', price: 80, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Jaggery_600x.jpg?v=1759146385' },
    { id: 8, title: 'Organic Jaggery Powder', price: 80, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Jaggery_52810e54-a591-4d63-a6e0-628fe24f18e7_600x.jpg?v=1759146500' },
    { id: 9, title: 'Organic Natural Sugar', price: 80, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/Organic_Brown_sugar_600x.png?v=1759199738' },
    { id: 10, title: 'Red Chilli Powder', price: 180, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-RedChilliPowder_600x.jpg?v=1759144186' },
    { id: 11, title: 'Organic Turmeric Powder', price: 125, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Turmeric_600x.jpg?v=1759145811' },
    { id: 12, title: 'Coconut Oil', price: 220, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Oils_600x.jpg?v=1759147557' },
    { id: 13, title: 'Groundnut Oil', price: 390, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Oils_600x.jpg?v=1759147557' },
    { id: 14, title: 'Mustard Oil', price: 125, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Oils_600x.jpg?v=1759147557' },
    { id: 15, title: 'Safflower Oil', price: 545, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Oils_600x.jpg?v=1759147557' },
    { id: 16, title: 'Sesame Oil', price: 525, image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Oils_600x.jpg?v=1759147557' },
  ];

  return (
    <div className="products-page">

      {/* Banner */}
      <div className="products-banner">
        <img
          src="https://www.nuzvidagrifarms.com/cdn/shop/files/Our_Intro_1200x.jpg?v=1759857682"
          alt="Products Banner"
          className="banner-img"
        />
        <div className="banner-breadcrumb-text">
          Home &nbsp;|&nbsp; <span className="active-crumb">Products</span>
        </div>
      </div>

      {/* Page Body */}
      <div className="products-body">

        {/* LEFT SIDEBAR */}
        <aside className="products-sidebar">

          {/* Categories */}
          <div className="sidebar-widget">
            <div className="sidebar-widget-header">
              <span className="widget-title"><span className="dash-mark">--</span><span className="dot-mark">·</span> Categories</span>
              <span className="widget-toggle">−</span>
            </div>
            <ul className="widget-list">
              <li><a href="#">A2 Ghee (2)</a></li>
              <li><a href="#">Countryside Grocery (4)</a></li>
              <li><a href="#">Market Products (1)</a></li>
              <li><a href="#">Natural Sweeteners (4)</a></li>
              <li><a href="#">Wood Pressed Oils (5)</a></li>
            </ul>
          </div>

          {/* Availability */}
          <div className="sidebar-widget">
            <div className="sidebar-widget-header">
              <span className="widget-title"><span className="dash-mark">--</span><span className="dot-mark">·</span> Availability</span>
              <span className="widget-toggle">−</span>
            </div>
            <ul className="widget-list">
              <li>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>In Stock <span style={{ color: '#2d7a5c' }}>(16)</span></span>
                </label>
              </li>
              <li>
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Out Of Stock <span style={{ color: '#2d7a5c' }}>(0)</span></span>
                </label>
              </li>
            </ul>
          </div>

          {/* Price */}
          <div className="sidebar-widget">
            <div className="sidebar-widget-header">
              <span className="widget-title"><span className="dash-mark">--</span><span className="dot-mark">·</span> Price</span>
              <span className="widget-toggle">−</span>
            </div>
            <div className="price-range-box">
              <div className="price-row">
                <div className="price-col">
                  <label className="price-label">From ₹</label>
                  <input type="number" defaultValue="0" className="price-input-box" />
                </div>
                <div className="price-col">
                  <label className="price-label">To ₹</label>
                  <input type="number" defaultValue="3500.00" className="price-input-box" />
                </div>
              </div>
              <button className="filter-btn">Filter</button>
            </div>
          </div>

        </aside>

        {/* RIGHT CONTENT */}
        <div className="products-main">

          {/* Toolbar */}
          <div className="products-toolbar">
            <div className="toolbar-left">
              <button className="view-btn active">⊞</button>
              <button className="view-btn">☰</button>
            </div>
            <div className="toolbar-center">
              <select className="sort-select">
                <option>Alphabetically, A-Z</option>
                <option>Alphabetically, Z-A</option>
                <option>Price, low to high</option>
                <option>Price, high to low</option>
              </select>
            </div>
            <div className="toolbar-right">
              <strong>Showing 1 - 16 of 16 result</strong>
            </div>
          </div>

          {/* Product Grid */}
          <div className="products-grid">
            {products.map(product => (
              <div className="product-card" key={product.id}>
                <div className="product-img-box">
                  <img src={product.image} alt={product.title} />
                  <div className="card-hover-actions">
                    <button className="card-action-btn" title="Quick View"><FaEye /></button>
                    <button className="card-action-btn" title="Add to Cart"><FaShoppingCart /></button>
                    <button className="card-action-btn" title="Add to Wishlist"><FaHeart /></button>
                  </div>
                </div>
                <div className="product-card-info">
                  <h3 className="product-card-title">{product.title}</h3>
                  <p className="product-card-price">Rs. {product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;
