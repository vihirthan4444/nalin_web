import { Search, ShoppingCart, ArrowRight, Monitor, Laptop, Truck, ShieldCheck, MapPin } from 'lucide-react';

const App = () => {
  return (
    <div style={{ paddingBottom: '100px' }}>
      
      {/* Floating Navigation Pill */}
      <nav className="floating-nav">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img src="/logo_only.svg" alt="Nalin IT Logo" style={{ height: '28px' }} />
          <span style={{ fontWeight: 800, fontFamily: 'Outfit', fontSize: '20px', letterSpacing: '-0.5px' }}>NALIN IT</span>
        </div>
        
        <div style={{ display: 'flex', gap: '32px', fontWeight: 500, fontSize: '15px' }}>
          <a href="#" style={{ color: 'var(--brand-primary)' }}>Store</a>
          <a href="#">Mac</a>
          <a href="#">PC</a>
          <a href="#">Components</a>
          <a href="#">Showrooms</a>
        </div>

        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <button><Search size={20} /></button>
          <button style={{ position: 'relative' }}>
            <ShoppingCart size={20} />
            <span style={{
              position: 'absolute', top: '-4px', right: '-4px',
              backgroundColor: 'var(--brand-primary)', color: 'white',
              fontSize: '10px', fontWeight: 800, width: '16px', height: '16px',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>0</span>
          </button>
        </div>
      </nav>

      {/* Hero Typography */}
      <header style={{ paddingTop: '180px', paddingBottom: '80px', textAlign: 'center' }}>
        <div className="container">
          <div style={{ display: 'inline-block', border: '1px solid var(--border-color)', padding: '6px 16px', borderRadius: '100px', fontSize: '13px', fontWeight: 600, marginBottom: '24px' }}>
            <span style={{ color: 'var(--brand-primary)' }}>New:</span> HP EliteBook Series Available Now
          </div>
          <h1 style={{ fontSize: '84px', fontWeight: 800, letterSpacing: '-3px', lineHeight: 1.1, marginBottom: '24px' }}>
            Technology,<br />
            Curated for You.
          </h1>
          <p style={{ fontSize: '20px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.5 }}>
            Northern Sri Lanka's most trusted destination for premium laptops, workstations, and enterprise hardware.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <button className="btn-dark">Shop All Products <ArrowRight size={18} /></button>
            <button className="btn-outline">Our Showrooms</button>
          </div>
        </div>
      </header>

      {/* Bento Box Grid */}
      <section className="container">
        <div className="bento-grid">
          
          {/* Main Big Block */}
          <div className="bento-item bento-col-2 bento-row-2" style={{ backgroundColor: '#f1f5f9' }}>
            <div className="badge">Laptops</div>
            <div style={{ padding: '40px', position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '12px' }}>Power Meets Portability.</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '16px', maxWidth: '300px' }}>Discover the latest ultra-thin and gaming laptops from HP, Dell, and ASUS.</p>
            </div>
            <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=80" alt="Laptops" className="zoom-img" style={{ position: 'absolute', bottom: 0, left: 0, height: '70%', objectPosition: 'bottom' }} />
          </div>

          {/* Top Right Wide Block */}
          <div className="bento-item bento-col-2" style={{ backgroundColor: 'var(--brand-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}></div>
            <div>
              <h2 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px' }}>Build Your Dream Setup.</h2>
              <p style={{ opacity: 0.8, marginBottom: '24px', fontSize: '18px' }}>Custom PCs, high-end components, and professional monitors.</p>
              <button style={{ backgroundColor: 'white', color: 'var(--brand-primary)', padding: '12px 24px', borderRadius: '100px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                Explore Components <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Small Blocks */}
          <div className="bento-item flex-center" style={{ flexDirection: 'column', textAlign: 'center', padding: '32px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--brand-primary)' }}>
              <ShieldCheck size={32} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>Official Agent Warranty</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>100% genuine products backed by full agent warranty.</p>
          </div>

          <div className="bento-item flex-center" style={{ flexDirection: 'column', textAlign: 'center', padding: '32px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', color: 'var(--brand-primary)' }}>
              <MapPin size={32} />
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>4 Showrooms</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px' }}>Experience our tech firsthand in Jaffna, Kilinochchi & Mannar.</p>
          </div>

          {/* Bottom Full Wide Block */}
          <div className="bento-item bento-col-4" style={{ display: 'flex', alignItems: 'stretch' }}>
            <div style={{ flex: '0 0 40%', padding: '48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid var(--border-color)' }}>
              <div className="badge" style={{ position: 'relative', top: 0, left: 0, display: 'inline-block', width: 'max-content', marginBottom: '24px' }}>New Arrival</div>
              <h2 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '16px' }}>HP Elite Dragonfly G3</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px', fontSize: '16px' }}>The ultimate enterprise convertible. Ultralight, powerful, and secure.</p>
              <div style={{ fontSize: '24px', fontWeight: 800, fontFamily: 'Outfit' }}>Rs. 420,000</div>
            </div>
            <div style={{ flex: '1', position: 'relative', backgroundColor: '#f8fafc' }}>
               <img src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=1000&q=80" alt="HP Elite Dragonfly" className="zoom-img" />
            </div>
          </div>

        </div>
      </section>

      {/* Super Minimal Footer */}
      <footer className="container" style={{ marginTop: '120px', borderTop: '1px solid var(--border-color)', padding: '60px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src="/logo_only.svg" alt="Nalin IT Logo" style={{ height: '24px' }} />
              <span style={{ fontWeight: 800, fontFamily: 'Outfit', fontSize: '18px', letterSpacing: '-0.5px' }}>NALIN IT</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '14px', maxWidth: '250px' }}>
              Northern Province's leading IT provider. Supplying high-performance technology since 2009.
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '80px' }}>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '24px', fontSize: '15px' }}>Products</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)', fontSize: '14px' }}>
                <li>Laptops</li>
                <li>Desktops</li>
                <li>Monitors</li>
                <li>Accessories</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '24px', fontSize: '15px' }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)', fontSize: '14px' }}>
                <li>About Us</li>
                <li>Contact</li>
                <li>Terms & Privacy</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontWeight: 700, marginBottom: '24px', fontSize: '15px' }}>Showrooms</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: 'var(--text-muted)', fontSize: '14px' }}>
                <li>Jaffna (Exclusive)</li>
                <li>Jaffna (HP World)</li>
                <li>Kilinochchi</li>
                <li>Mannar</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
