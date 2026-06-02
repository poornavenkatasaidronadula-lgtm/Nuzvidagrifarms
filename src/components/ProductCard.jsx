import React from 'react';
import { Star } from 'lucide-react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} className="primary-img" />
        {product.hoverImage && (
          <img src={product.hoverImage} alt={product.title} className="hover-img" />
        )}
        <div className="product-actions">
          <button className="btn-primary full-width">Add to Cart</button>
        </div>
      </div>
      <div className="product-info">
        <h3 className="product-title">{product.title}</h3>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              size={14} 
              fill={i < Math.floor(product.rating) ? "var(--color-secondary)" : "none"} 
              color={i < Math.floor(product.rating) ? "var(--color-secondary)" : "#ccc"} 
            />
          ))}
          <span className="review-count">({product.reviews})</span>
        </div>
        <p className="product-price">₹{product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
