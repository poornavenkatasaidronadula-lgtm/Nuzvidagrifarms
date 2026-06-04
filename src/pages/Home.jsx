import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { FaArrowRight, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('wood-pressed-oils');

  const blogs = [
    {
      id: 'brown-sugar',
      image: "https://www.nuzvidagrifarms.com/cdn/shop/articles/Organic_Brown_sugar_370x.png?v=1759230994",
      link: "/blogs/brown-sugar"
    },
    {
      id: 'buffalo-ghee',
      image: "https://www.nuzvidagrifarms.com/cdn/shop/articles/NAF-FL1-BufaloGhee_370x.jpg?v=1759150769",
      link: "/blogs/buffalo-ghee"
    },
    {
      id: 'mineral-salt',
      image: "https://www.nuzvidagrifarms.com/cdn/shop/articles/NAF-FL-MineralSalt_370x.jpg?v=1759150645",
      link: "/blogs/mineral-salt"
    },
    {
      id: 'real-food',
      image: "https://www.nuzvidagrifarms.com/cdn/shop/articles/Flier_370x.jpg?v=1759298285",
      link: "/blogs/real-food"
    },
    {
      id: 'red-chilli',
      image: "https://www.nuzvidagrifarms.com/cdn/shop/articles/NAF-FL-RedChilliPowder_370x.jpg?v=1759150731",
      link: "/blogs/red-chilli"
    },
    {
      id: 'turmeric',
      image: "https://www.nuzvidagrifarms.com/cdn/shop/articles/NAF-FL-Turmeric_370x.jpg?v=1759150715",
      link: "/blogs/turmeric"
    },
    {
      id: 'jaggery',
      image: "https://www.nuzvidagrifarms.com/cdn/shop/articles/NAF-FL-Jaggery_370x.jpg?v=1759150700",
      link: "/blogs/jaggery"
    },
    {
      id: 'coldpressed-oils',
      image: "https://www.nuzvidagrifarms.com/cdn/shop/articles/NAF-FL-Oils_370x.jpg?v=1759150787",
      link: "/blogs/coldpressed-oils"
    },
    {
      id: 'a2-ghee',
      image: "https://www.nuzvidagrifarms.com/cdn/shop/articles/NAF-FL1-A2GHEE_370x.jpg?v=1759150680",
      link: "/blogs/a2-ghee"
    },
    {
      id: 'forest-honey',
      image: "https://www.nuzvidagrifarms.com/cdn/shop/articles/NAF-FL-Honey_fde9b232-10fa-4e95-8e25-5d109399ddf9_370x.jpg?v=1759150454",
      link: "/blogs/forest-honey"
    }
  ];

  const blogScrollRef = useRef(null);

  const scrollBlogs = (direction) => {
    if (blogScrollRef.current) {
      const scrollAmount = blogScrollRef.current.offsetWidth / 2; // scroll by half container width
      blogScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
                  <div className="banner-arrow-btn">
                    <FaArrowRight />
                  </div>
                </Link>
              </div>

              <div className="promo-banner-small">
                <Link to="/our-intro" className="promo-img-link">
                  <img src="https://www.nuzvidagrifarms.com/cdn/shop/files/Our_Intro_1200x.jpg?v=1759857682" alt="Our Intro" className="promo-bg-img" />
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

      <section className="blog-insights py-4">
        <div className="container position-relative">
          <h2 className="section-title text-center text-uppercase fw-bold" style={{ letterSpacing: '2px', color: '#333' }}>BLOG & INSIGHTS<span style={{ color: '#8B4513' }}>.</span></h2>
          <div className="blog-slider-container position-relative mt-4">
            <button className="blog-slider-btn prev-btn" onClick={() => scrollBlogs('left')} aria-label="Scroll left">
              <FaChevronLeft />
            </button>

            <div className="blog-grid-scroll" ref={blogScrollRef}>
              {blogs.map(blog => (
                <div className="blog-card" key={blog.id}>
                  <Link to={blog.link} className="blog-img-wrapper">
                    <img src={blog.image} alt={blog.id} />
                  </Link>
                  <div className="blog-content">
                    <h3 className="blog-title">
                      <Link to={blog.link}>{blog.title}</Link>
                    </h3>
                    <Link to={blog.link} className="read-more-link">Read More</Link>
                  </div>
                </div>
              ))}
            </div>

            <button className="blog-slider-btn next-btn" onClick={() => scrollBlogs('right')} aria-label="Scroll right">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
