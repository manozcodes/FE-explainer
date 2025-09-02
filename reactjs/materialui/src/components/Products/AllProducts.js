import React, { useState } from "react";
import "./AllProducts.css";
import ProductFilter from "./ProductFilter";

const AllProducts = () => {
  const [wishlist, setWishlist] = useState(new Set());

  // Sample product data
  const products = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones",
      price: "$89.99",
      category: "Electronics",
      description: "Premium sound quality with noise cancellation",
      image: "🎧",
    },
    {
      id: 2,
      title: "Smart Fitness Watch",
      price: "$199.99",
      category: "Wearables",
      description: "Track your health and fitness goals",
      image: "⌚",
    },
    {
      id: 3,
      title: "Organic Cotton T-Shirt",
      price: "$29.99",
      category: "Clothing",
      description: "Comfortable and eco-friendly fabric",
      image: "👕",
    },
    {
      id: 4,
      title: "Portable Power Bank",
      price: "$49.99",
      category: "Electronics",
      description: "10,000mAh fast charging battery",
      image: "🔋",
    },
    {
      id: 5,
      title: "Stainless Steel Water Bottle",
      price: "$24.99",
      category: "Home",
      description: "Keeps drinks cold for 24 hours",
      image: "🥤",
    },
    {
      id: 6,
      title: "Wireless Gaming Mouse",
      price: "$79.99",
      category: "Gaming",
      description: "High precision with RGB lighting",
      image: "🖱️",
    },
    {
      id: 7,
      title: "Yoga Mat Premium",
      price: "$34.99",
      category: "Fitness",
      description: "Non-slip surface with carrying strap",
      image: "🧘",
    },
    {
      id: 8,
      title: "Bluetooth Speaker",
      price: "$69.99",
      category: "Electronics",
      description: "Waterproof with 20-hour battery life",
      image: "🔊",
    },
    {
      id: 9,
      title: "Leather Wallet",
      price: "$39.99",
      category: "Accessories",
      description: "Genuine leather with RFID protection",
      image: "👛",
    },
    {
      id: 10,
      title: "Coffee Maker",
      price: "$129.99",
      category: "Kitchen",
      description: "Programmable with thermal carafe",
      image: "☕",
    },
  ];

  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      const newWishlist = new Set(prev);
      if (newWishlist.has(productId)) {
        newWishlist.delete(productId);
      } else {
        newWishlist.add(productId);
      }
      return newWishlist;
    });
  };

  const addToCart = (product) => {
    alert(`Added ${product.title} to cart!`);
    // Here you would typically dispatch to a cart state management system
  };

  return (
    <div className="products-container">
      <ProductFilter />
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              {product.image}
              <button
                className={`wishlist-btn ${
                  wishlist.has(product.id) ? "active" : ""
                }`}
                onClick={() => toggleWishlist(product.id)}
                aria-label="Add to wishlist"
              >
                ❤️
              </button>
            </div>
            <div className="product-content">
              <h3 className="product-title">{product.title}</h3>
              <div className="product-price">{product.price}</div>
              <span className="product-category">{product.category}</span>
              <p className="product-description">{product.description}</p>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
