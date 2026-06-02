import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('wood-pressed-oils');

  // Live Site Products
  const products = [
    {
      id: 1,
      title: 'Coconut Oil',
      price: 220,
      rating: 5.0,
      reviews: 12,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Oils_600x.jpg?v=1759147557',
      category: 'wood-pressed-oils'
    },
    {
      id: 2,
      title: 'Mustard Oil',
      price: 125,
      rating: 5.0,
      reviews: 8,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Oils_600x.jpg?v=1759147557',
      category: 'wood-pressed-oils'
    },
    {
      id: 3,
      title: 'Groundnut Oil',
      price: 390,
      rating: 5.0,
      reviews: 24,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Oils_600x.jpg?v=1759147557',
      category: 'wood-pressed-oils'
    },
    {
      id: 4,
      title: 'Sesame Oil',
      price: 525,
      rating: 5.0,
      reviews: 15,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Oils_600x.jpg?v=1759147557',
      category: 'wood-pressed-oils'
    },
    {
      id: 5,
      title: 'Safflower Oil',
      price: 545,
      rating: 5.0,
      reviews: 10,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Oils_600x.jpg?v=1759147557',
      category: 'wood-pressed-oils'
    },
    {
      id: 6,
      title: 'A2 Cow Ghee 500 ml',
      price: 1750,
      rating: 5.0,
      reviews: 32,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL1-A2GHEE_600x.jpg?v=1759145353',
      category: 'a2-ghee'
    },
    {
      id: 7,
      title: 'A2 Cow Ghee 1 Liter',
      price: 3500,
      rating: 5.0,
      reviews: 18,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL1-A2GHEE_600x.jpg?v=1759145353',
      category: 'a2-ghee'
    },
    {
      id: 8,
      title: 'Forest Honey',
      price: 199,
      rating: 5.0,
      reviews: 45,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Honey_600x.jpg?v=1759144691',
      category: 'natural-sweeteners'
    },
    {
      id: 9,
      title: 'Organic Natural Sugar',
      price: 80,
      rating: 5.0,
      reviews: 22,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/Organic_Brown_sugar_600x.png?v=1759199738',
      category: 'natural-sweeteners'
    },
    {
      id: 10,
      title: 'Organic Jaggery Powder',
      price: 80,
      rating: 5.0,
      reviews: 19,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Jaggery_52810e54-a591-4d63-a6e0-628fe24f18e7_600x.jpg?v=1759146500',
      category: 'natural-sweeteners'
    },
    {
      id: 11,
      title: 'Organic Jaggery',
      price: 80,
      rating: 5.0,
      reviews: 14,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Jaggery_600x.jpg?v=1759146385',
      category: 'natural-sweeteners'
    },
    {
      id: 12,
      title: 'Himalayan Pink Salt',
      price: 50,
      rating: 5.0,
      reviews: 19,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-MineralSalt_600x.jpg?v=1759145237',
      category: 'countryside-grocery'
    },
    {
      id: 13,
      title: 'Masala Chilli Powder',
      price: 135,
      rating: 5.0,
      reviews: 27,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-RedChilliPowder_600x.jpg?v=1759144186',
      category: 'countryside-grocery'
    },
    {
      id: 14,
      title: 'Red Chilli Powder',
      price: 180,
      rating: 5.0,
      reviews: 31,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-RedChilliPowder_600x.jpg?v=1759144186',
      category: 'countryside-grocery'
    },
    {
      id: 15,
      title: 'Organic Turmeric Powder',
      price: 125,
      rating: 5.0,
      reviews: 25,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL-Turmeric_600x.jpg?v=1759145811',
      category: 'countryside-grocery'
    },
    {
      id: 16,
      title: 'Buffalo Ghee',
      price: 520,
      rating: 5.0,
      reviews: 14,
      image: 'https://www.nuzvidagrifarms.com/cdn/shop/files/NAF-FL1-BufaloGhee_600x.jpg?v=1759148766',
      category: 'market-products'
    }
  ];

  const filteredProducts = products.filter(p => p.category === activeTab || activeTab === 'all');

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Empty content as per the original theme which uses image only */}
        </div>
      </section>

      {/* Promotional Banners Section (3 Cards) */}
      <section className="promo-banners-section py-4">
        <div className="container">
          <div className="promo-banners-grid">
            {/* Left Large Banner */}
            <div className="promo-banner-large">
              <Link to="/our-commitment" className="promo-img-link">
                <img src="https://www.nuzvidagrifarms.com/cdn/shop/files/our_commitment_1200x.jpg?v=1759857822" alt="Our Commitment" className="promo-bg-img" />
                <div className="banner-arrow-btn">
                  <FaArrowRight />
                </div>
              </Link>
            </div>
            
            {/* Right Stacked Banners */}
            <div className="promo-banners-stacked">
              <div className="promo-banner-small">
                <Link to="/about-us" className="promo-img-link">
                  <img src="https://www.nuzvidagrifarms.com/cdn/shop/files/ABOUT_US_1200x.jpg?v=1759149023" alt="About Us" className="promo-bg-img" />
                  <div className="promo-banner-info text-white">
                    <h2>About Us</h2>
                  </div>
                  <div className="banner-arrow-btn">
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
              
              <div className="promo-banner-small">
                <Link to="/our-intro" className="promo-img-link">
                  <img src="https://www.nuzvidagrifarms.com/cdn/shop/files/Our_Intro_1200x.jpg?v=1759857682" alt="Our Intro" className="promo-bg-img" />
                  <div className="promo-banner-info text-white text-uppercase">
                    <span className="banner-subtitle">OUR INTRO</span>
                  </div>
                  <div className="banner-arrow-btn">
                    <FaArrowRight />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Goodness We Share */}
      <section className="goodness-section py-4">
        <div className="container">
          <h2 className="section-title text-center">The Goodness We Share</h2>
          <div className="tabs">
            <button 
              className={`tab-btn ${activeTab === 'wood-pressed-oils' ? 'active' : ''}`}
              onClick={() => setActiveTab('wood-pressed-oils')}
            >
              WOOD PRESSED OILS
            </button>
            <button 
              className={`tab-btn ${activeTab === 'a2-ghee' ? 'active' : ''}`}
              onClick={() => setActiveTab('a2-ghee')}
            >
              A2 GHEE
            </button>
            <button 
              className={`tab-btn ${activeTab === 'natural-sweeteners' ? 'active' : ''}`}
              onClick={() => setActiveTab('natural-sweeteners')}
            >
              NATURAL SWEETNERS
            </button>
            <button 
              className={`tab-btn ${activeTab === 'countryside-grocery' ? 'active' : ''}`}
              onClick={() => setActiveTab('countryside-grocery')}
            >
              COUNTRYSIDE GROCERY
            </button>
            <button 
              className={`tab-btn ${activeTab === 'market-products' ? 'active' : ''}`}
              onClick={() => setActiveTab('market-products')}
            >
              MARKET PRODUCTS
            </button>
          </div>

          <div className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="no-products">No products found in this category.</p>
            )}
          </div>
        </div>
      </section>

      {/* Health Basket Banner */}
      <section className="health-basket-section">
        <div className="container position-relative">
          <div className="row">
            <div className="col-12">
              <div className="health-basket-content text-center">
                <h2 className="basket-subtitle">Health Basket of the Month</h2>
                <h1 className="basket-title">Your monthly pack of Pure Health<br /></h1>
                <p className="basket-desc">Smart Savings, and Traditional Goodness</p>
                <div className="btn-wrapper mt-4">
                  <Link to="/collections/all" className="basket-shop-btn">Shop now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Absolutely positioned product composition image on the left */}
        <div className="basket-left-img">
          <img 
            src="https://www.nuzvidagrifarms.com/cdn/shop/files/Monthly_banner_b0109ce9-ef11-4669-aab8-936a4c64223f_514x.png?v=1759637551" 
            alt="Health Basket Collage" 
          />
        </div>
      </section>

      {/* Video Hub */}
      <section className="video-hub py-4">
        <div className="container">
          <h2 className="section-title text-center">Experience Our Tradition</h2>
          <div className="video-container">
            <div className="video-placeholder position-relative overflow-hidden">
              <img 
                src="/farm-video-thumbnail.png" 
                alt="Farm to Table Showcase" 
                className="w-100 h-100 object-fit-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog & Insights */}
      <section className="blog-insights py-4">
        <div className="container">
          <h2 className="section-title text-center">Blog & Insights</h2>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-img-wrapper">
                <img src="https://images.unsplash.com/photo-1621213032549-31e84ce00947?auto=format&fit=crop&q=80&w=400" alt="Brown Sugar" />
              </div>
              <div className="blog-content">
                <h3>Brown Sugar: Pure, Wholesome Sweetness</h3>
                <p>Rooted in tradition, discover why brown sugar is the healthier alternative...</p>
                <Link to="#" className="read-more-link">Read More</Link>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img-wrapper">
                <img src="https://images.unsplash.com/photo-1615486171447-49f3900994f1?auto=format&fit=crop&q=80&w=400" alt="Wood Pressed Oils" />
              </div>
              <div className="blog-content">
                <h3>The Magic of Wood Pressed Oils</h3>
                <p>How the ancient ghani method preserves nutrients and flavor...</p>
                <Link to="#" className="read-more-link">Read More</Link>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-img-wrapper">
                <img src="https://images.unsplash.com/photo-1596647904085-300e844f2bb7?auto=format&fit=crop&q=80&w=400" alt="A2 Ghee" />
              </div>
              <div className="blog-content">
                <h3>A2 Ghee: The Golden Elixir</h3>
                <p>Understanding the difference between regular ghee and pure A2 cow ghee...</p>
                <Link to="#" className="read-more-link">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
