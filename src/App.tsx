import { useState } from 'react';
import { Search, ShoppingCart, ChevronDown, Bell } from 'lucide-react';

const App = () => {
  return (
    <div>
      {/* Top Utility Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-links">
            <span>Hi! <a href="#" style={{ color: 'var(--text-blue)', fontWeight: 600 }}>Sign in</a> or <a href="#" style={{ color: 'var(--text-blue)' }}>register</a></span>
            <a href="#">Daily Deals</a>
            <a href="#">Brand Outlet</a>
            <a href="#">Help & Contact</a>
          </div>
          <div className="top-bar-links">
            <a href="#">Ship to: Sri Lanka</a>
            <a href="#">Sell</a>
            <a href="#">Watchlist <ChevronDown size={12} style={{ display: 'inline' }} /></a>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}><Bell size={16} /></a>
            <a href="#" style={{ display: 'flex', alignItems: 'center' }}><ShoppingCart size={16} /></a>
          </div>
        </div>
      </div>

      {/* Main Header & Search */}
      <header className="main-header">
        <div className="container header-inner">
          <img src="/full_logo.svg" alt="Nalin IT" style={{ height: '44px', cursor: 'pointer', flexShrink: 0 }} />
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-muted)', cursor: 'pointer', flexShrink: 0, lineHeight: 1.2 }}>
            Shop by <br/> category <ChevronDown size={14} />
          </div>

          <div className="search-wrapper">
            <div className="search-container">
              <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '16px', color: 'var(--text-muted)' }}>
                <Search size={20} />
              </div>
              <input type="text" className="search-input" placeholder="Search for anything" />
              <select className="category-select">
                <option>All Categories</option>
                <option>Laptops</option>
                <option>Desktops</option>
                <option>Monitors</option>
                <option>Printers</option>
              </select>
            </div>
            <button className="search-btn">Search</button>
          </div>
          
          <a href="#" style={{ fontSize: '12px', color: 'var(--text-muted)', flexShrink: 0 }}>Advanced</a>
        </div>
      </header>

      {/* Category Nav Strip */}
      <nav className="cat-nav">
        <div className="container">
          <ul>
            <li><a href="#" style={{ color: 'var(--text-main)', fontWeight: 600 }}>Home</a></li>
            <li><a href="#">Saved</a></li>
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Computers & Tablets</a></li>
            <li><a href="#">Laptops</a></li>
            <li><a href="#">PC Components</a></li>
            <li><a href="#">Monitors</a></li>
            <li><a href="#">Printers & Supplies</a></li>
            <li><a href="#">Networking</a></li>
          </ul>
        </div>
      </nav>

      <main className="container">
        {/* Promo Banner */}
        <div className="promo-banner">
          <div className="promo-content">
            <h2 style={{ fontSize: '32px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px' }}>
              Upgrade Your Setup. <br/> Boost Your Productivity.
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-main)', marginBottom: '24px' }}>
              Save up to 30% on premium business laptops and accessories. Official agent warranty included.
            </p>
            <button style={{ 
              backgroundColor: 'var(--text-main)', color: 'white', padding: '12px 24px', 
              fontSize: '16px', fontWeight: 600, width: 'max-content', borderRadius: '4px' 
            }}>
              Shop now
            </button>
          </div>
          <div className="promo-image"></div>
        </div>

        {/* Circular Categories */}
        <div className="section-header">
          <h2 className="section-title">Explore Popular Categories</h2>
          <a href="#" className="section-link">See all</a>
        </div>
        
        <div className="circle-grid">
          {[
            { name: 'Gaming Laptops', img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=200&q=80' },
            { name: 'Business PCs', img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=200&q=80' },
            { name: 'Curved Monitors', img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=200&q=80' },
            { name: 'Graphics Cards', img: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=200&q=80' },
            { name: 'Printers', img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=200&q=80' },
            { name: 'Storage', img: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=200&q=80' },
            { name: 'Networking', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=200&q=80' },
            { name: 'Accessories', img: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=200&q=80' },
          ].map((cat, i) => (
            <div key={i} className="circle-cat">
              <div className="circle-img">
                <img src={cat.img} alt={cat.name} />
              </div>
              <div className="circle-title">{cat.name}</div>
            </div>
          ))}
        </div>

        {/* Daily Deals Grid */}
        <div className="section-header">
          <h2 className="section-title">Today's Deals – All With Free Shipping</h2>
          <a href="#" className="section-link">See all deals</a>
        </div>

        <div className="dense-grid">
          {[
            { title: 'HP EliteBook 840 G8 14" FHD Core i5-1135G7 16GB 512GB SSD W10P', price: '245,000', oldPrice: '280,000', img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=400&q=80' },
            { title: 'Lenovo ThinkPad T14 Gen 2 14" FHD IPS Core i7-1165G7', price: '295,000', img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=400&q=80' },
            { title: 'ASUS ROG Strix G15 15.6" 144Hz RTX 3060 Gaming Laptop', price: '385,000', oldPrice: '410,000', img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=400&q=80' },
            { title: 'ViewSonic VX2758A-2K-PRO 27" 180Hz 2K QHD IPS Monitor', price: '85,000', img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=400&q=80' },
            { title: 'Canon ImageClass LBP 6030 Laser Printer Mono', price: '45,000', oldPrice: '52,000', img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=400&q=80' },
            { title: 'HP ProDesk 280 G9 Intel Core i7-14700 Desktop Computer', price: '215,000', img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80' },
            { title: 'Samsung 980 PRO 1TB PCIe NVMe Gen4 Internal Gaming SSD', price: '28,500', oldPrice: '35,000', img: 'https://images.unsplash.com/photo-1531492746076-161ca9bcad58?auto=format&fit=crop&w=400&q=80' },
          ].map((item, i) => (
            <div key={i} className="product-card">
              <div className="product-img-wrapper">
                <img src={item.img} alt="Product" className="product-img" />
              </div>
              <div className="product-info">
                <div className="product-title">{item.title}</div>
                <div className="product-price">Rs. {item.price}</div>
                {item.oldPrice && <div className="product-old-price">Rs. {item.oldPrice}</div>}
                <div className="product-shipping">Free shipping</div>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Massive Multi-Column Footer */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Products</h4>
              <ul>
                <li><a href="#">Laptops & Notebooks</a></li>
                <li><a href="#">Desktop Computers</a></li>
                <li><a href="#">Monitors & Displays</a></li>
                <li><a href="#">PC Components</a></li>
                <li><a href="#">Printers & Scanners</a></li>
                <li><a href="#">Networking Gear</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>IT Services</h4>
              <ul>
                <li><a href="#">Corporate IT Solutions</a></li>
                <li><a href="#">Warranty & Repairs</a></li>
                <li><a href="#">Custom PC Builds</a></li>
                <li><a href="#">Network Installation</a></li>
              </ul>
              <h4 style={{ marginTop: '24px' }}>Top Brands</h4>
              <ul>
                <li><a href="#">HP</a></li>
                <li><a href="#">ASUS</a></li>
                <li><a href="#">Lenovo</a></li>
                <li><a href="#">MSI</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Showrooms</h4>
              <ul>
                <li><a href="#">Nalin IT Exclusive (Jaffna)</a></li>
                <li><a href="#">HP World Northern (Jaffna)</a></li>
                <li><a href="#">Nalin IT Kilinochchi</a></li>
                <li><a href="#">Nalin IT Mannar</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Nalin IT</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Customer Testimonials</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact Us</h4>
              <ul>
                <li><a href="#">195/2, Parameshwara Junction, Palaly Road, Jaffna.</a></li>
                <li><a href="#">021 222 1121</a></li>
                <li><a href="#">nalinshowroom@nit.lk</a></li>
              </ul>
              <h4 style={{ marginTop: '24px' }}>Follow Us</h4>
              <ul style={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
                <li><a href="#" style={{ color: 'var(--text-blue)', fontWeight: 600 }}>Facebook</a></li>
                <li><a href="#" style={{ color: 'var(--text-blue)', fontWeight: 600 }}>Instagram</a></li>
                <li><a href="#" style={{ color: 'var(--text-blue)', fontWeight: 600 }}>LinkedIn</a></li>
              </ul>
            </div>
          </div>
          
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '24px', display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span>Copyright © 2009-2026 Nalin Information Technologies Pvt Ltd. All Rights Reserved.</span>
            <a href="#" style={{ textDecoration: 'underline' }}>Privacy Policy</a>
            <a href="#" style={{ textDecoration: 'underline' }}>Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
