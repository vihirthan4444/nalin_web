import { useState, useEffect } from 'react';
import { 
  Search, ShoppingCart, ChevronRight, Monitor, Laptop, 
  Cpu, HardDrive, Headphones, Printer, MapPin, 
  Phone, Mail, ShieldCheck, Truck, Clock, ArrowRight,
  Star
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Announcement Bar */}
      <div style={{ 
        backgroundColor: 'var(--brand-primary)', 
        color: 'white', 
        padding: '10px 0',
        fontSize: '13px',
        fontWeight: 500,
        letterSpacing: '0.3px'
      }}>
        <div className="container flex-between">
          <div className="flex-center" style={{ gap: '24px' }}>
            <span className="flex-center" style={{ gap: '6px' }}>
              <Truck size={14} /> Free shipping on orders above Rs. 500,000
            </span>
            <span className="flex-center" style={{ gap: '6px', opacity: 0.8 }}>
              <Clock size={14} /> Mon–Sat 9AM–5PM
            </span>
          </div>
          <div className="flex-center" style={{ gap: '6px', fontWeight: 600 }}>
            <Phone size={14} /> (+94) 21 222 1121
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={scrolled ? "glass" : ""} style={{ 
        position: 'sticky',
        top: 0,
        zIndex: 100,
        padding: scrolled ? '16px 0' : '24px 0',
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'white',
        borderBottom: scrolled ? '1px solid rgba(226, 232, 240, 0.8)' : '1px solid var(--surface-300)'
      }}>
        <div className="container flex-between">
          <div className="flex-center" style={{ gap: '48px' }}>
            <img src="/full_logo.svg" alt="Nalin IT Logo" style={{ height: '42px' }} />
            
            <div style={{ display: 'flex', gap: '32px' }}>
              <a href="#" className="nav-link" style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>Home</a>
              <a href="#" className="nav-link">Laptops</a>
              <a href="#" className="nav-link">Desktops</a>
              <a href="#" className="nav-link">Components</a>
              <a href="#" className="nav-link">Accessories</a>
              <a href="#" className="nav-link">Showrooms</a>
            </div>
          </div>

          <div className="flex-center" style={{ gap: '24px' }}>
            <button style={{ color: 'var(--text-700)' }} className="hover-lift">
              <Search size={22} />
            </button>
            <button style={{ position: 'relative', color: 'var(--text-700)' }} className="hover-lift">
              <ShoppingCart size={22} />
              <span style={{
                position: 'absolute', top: '-6px', right: '-8px',
                backgroundColor: 'var(--status-sale)', color: 'white',
                fontSize: '11px', fontWeight: 700, width: '18px', height: '18px',
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 4px rgba(239, 68, 68, 0.3)'
              }}>0</span>
            </button>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--surface-400)' }}></div>
            <button className="btn-primary flex-center" style={{ gap: '8px' }}>
              Visit Showroom <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header style={{
        position: 'relative',
        padding: '40px 0 80px',
        overflow: 'hidden',
        backgroundColor: 'var(--surface-100)'
      }}>
        {/* Background Decorative Elements */}
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%', width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(43, 59, 143, 0.08) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', bottom: '-20%', left: '-10%', width: '800px', height: '800px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, rgba(255,255,255,0) 70%)',
          borderRadius: '50%', zIndex: 0
        }} />

        <div className="container flex-between" style={{ position: 'relative', zIndex: 1, gap: '64px' }}>
          <div style={{ flex: '1 1 50%', maxWidth: '600px' }} className="animate-slide-up">
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'var(--surface-200)', border: '1px solid var(--surface-400)',
              color: 'var(--brand-primary)', padding: '6px 16px', borderRadius: '30px',
              fontWeight: 600, fontSize: '13px', marginBottom: '32px'
            }}>
              <Star size={14} fill="currentColor" /> HP World Authorized Partner • Est. 2009
            </div>
            
            <h1 style={{ fontSize: '64px', fontWeight: 800, letterSpacing: '-1.5px', marginBottom: '24px' }}>
              The Core of <br />
              <span style={{ 
                background: 'linear-gradient(90deg, var(--brand-primary) 0%, var(--brand-accent) 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
              }}>Northern IT.</span>
            </h1>
            
            <p style={{ fontSize: '18px', color: 'var(--text-500)', marginBottom: '48px', lineHeight: 1.7 }}>
              Empowering the Northern Province with premium technology since 2009. 
              Discover the latest laptops, powerful workstations, and enterprise 
              solutions backed by unparalleled after-sales support.
            </p>
            
            <div className="flex-center" style={{ gap: '16px', justifyContent: 'flex-start' }}>
              <button className="btn-primary" style={{ padding: '16px 36px', fontSize: '16px' }}>
                Shop Collection
              </button>
              <button className="btn-secondary" style={{ padding: '16px 36px', fontSize: '16px' }}>
                View Promotions
              </button>
            </div>
            
            <div style={{ marginTop: '48px', display: 'flex', gap: '32px', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-900)' }}>15+</div>
                <div style={{ fontSize: '13px', color: 'var(--text-500)', fontWeight: 500 }}>Years of Trust</div>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--surface-300)' }}></div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-900)' }}>4</div>
                <div style={{ fontSize: '13px', color: 'var(--text-500)', fontWeight: 500 }}>Showrooms</div>
              </div>
              <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--surface-300)' }}></div>
              <div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--text-900)' }}>10k+</div>
                <div style={{ fontSize: '13px', color: 'var(--text-500)', fontWeight: 500 }}>Happy Clients</div>
              </div>
            </div>
          </div>
          
          <div style={{ flex: '1 1 50%', position: 'relative' }} className="animate-slide-up delay-2">
            <div style={{ 
              position: 'relative', borderRadius: '24px', overflow: 'hidden',
              boxShadow: '0 30px 60px -12px rgba(43, 59, 143, 0.25)',
              aspectRatio: '4/3', minHeight: '400px'
            }}>
              <img 
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1200&q=80" 
                alt="Premium Tech Setup" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(to top, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0) 100%)',
                padding: '40px 32px 24px', color: 'white'
              }}>
                <div style={{ fontWeight: 700, fontSize: '20px', fontFamily: 'Outfit' }}>HP Elite Dragonfly G3</div>
                <div style={{ opacity: 0.8, fontSize: '14px' }}>Now available at Nalin IT Exclusive</div>
              </div>
            </div>
            
            {/* Floating Badge */}
            <div className="glass" style={{
              position: 'absolute', top: '40px', left: '-40px',
              padding: '16px 24px', borderRadius: '16px', display: 'flex', alignItems: 'center', gap: '16px',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
            }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', backgroundColor: 'var(--brand-primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: '16px', color: 'var(--text-900)' }}>Official Warranty</div>
                <div style={{ fontSize: '13px', color: 'var(--text-500)' }}>On all purchases</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Categories */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--surface-200)', marginTop: '-40px', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div className="flex-between" style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '32px', fontWeight: 700 }}>Shop by Category</h2>
            <a href="#" className="flex-center" style={{ color: 'var(--brand-primary)', fontWeight: 600, gap: '4px' }}>
              View all <ChevronRight size={18} />
            </a>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '20px' }}>
            {[
              { icon: <Laptop size={32} strokeWidth={1.5} />, name: 'Laptops' },
              { icon: <Monitor size={32} strokeWidth={1.5} />, name: 'Monitors' },
              { icon: <Cpu size={32} strokeWidth={1.5} />, name: 'Components' },
              { icon: <HardDrive size={32} strokeWidth={1.5} />, name: 'Storage' },
              { icon: <Printer size={32} strokeWidth={1.5} />, name: 'Printers' },
              { icon: <Headphones size={32} strokeWidth={1.5} />, name: 'Accessories' },
            ].map((cat, i) => (
              <div key={i} className="card-hover" style={{
                backgroundColor: 'white', padding: '32px 20px', borderRadius: '16px',
                textAlign: 'center', cursor: 'pointer', border: '1px solid var(--surface-300)',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px'
              }}>
                <div style={{ 
                  color: 'var(--brand-primary)', backgroundColor: 'var(--brand-light)',
                  width: '72px', height: '72px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 0.3s ease'
                }}>
                  {cat.icon}
                </div>
                <div style={{ fontWeight: 600, color: 'var(--text-900)' }}>{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals / Products */}
      <section style={{ padding: '100px 0', backgroundColor: 'white' }}>
        <div className="container">
          <div className="flex-between" style={{ marginBottom: '48px' }}>
            <div>
              <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Latest Arrivals</h2>
              <p style={{ color: 'var(--text-500)' }}>Discover our newest premium tech hardware.</p>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid var(--surface-400)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover-lift">
                <ChevronRight size={24} style={{ transform: 'rotate(180deg)', color: 'var(--text-700)' }} />
              </button>
              <button style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--text-900)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hover-lift">
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px' }}>
            {[
              { name: 'HP OMEN 32C QHD 165Hz Curved', cat: 'Monitors', price: '125,000', badge: 'NEW', img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80' },
              { name: 'ASUS ExpertCenter D500ME i5', cat: 'Desktops', price: '210,000', badge: 'HOT', img: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80' },
              { name: 'MSI Thin 15 B13UC i5 Gaming', cat: 'Laptops', price: '285,000', img: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&w=600&q=80' },
              { name: 'Canon ImageClass LBP 6030', cat: 'Printers', price: '45,000', img: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80' },
            ].map((product, i) => (
              <div key={i} className="card-hover" style={{
                backgroundColor: 'white', borderRadius: '24px', overflow: 'hidden',
                border: '1px solid var(--surface-400)', position: 'relative',
                display: 'flex', flexDirection: 'column', boxShadow: '0 4px 20px rgba(0,0,0,0.03)'
              }}>
                {product.badge && (
                  <span style={{ 
                    position: 'absolute', top: '20px', left: '20px', zIndex: 10,
                    backgroundColor: product.badge === 'NEW' ? 'var(--status-new)' : 'var(--status-sale)', 
                    color: 'white', padding: '6px 14px', borderRadius: '30px', 
                    fontSize: '11px', fontWeight: 800, letterSpacing: '0.5px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}>{product.badge}</span>
                )}
                <div style={{ 
                  height: '260px', backgroundColor: 'var(--surface-200)', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px'
                }}>
                  <img src={product.img} alt={product.name} style={{ mixBlendMode: 'multiply', maxHeight: '100%', objectFit: 'contain', transition: 'transform 0.4s ease' }} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'} />
                </div>
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ color: 'var(--text-500)', fontSize: '12px', fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {product.cat}
                  </div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '20px', lineHeight: 1.5, color: 'var(--text-900)', flex: 1, fontFamily: 'Outfit' }}>
                    {product.name}
                  </h3>
                  <div className="flex-between" style={{ borderTop: '1px solid var(--surface-300)', paddingTop: '20px' }}>
                    <div style={{ fontSize: '22px', fontWeight: 800, color: 'var(--brand-primary)', fontFamily: 'Outfit', letterSpacing: '-0.5px' }}>
                      Rs. {product.price}
                    </div>
                    <button style={{ 
                      width: '44px', height: '44px', borderRadius: '50%', 
                      backgroundColor: 'var(--brand-light)', color: 'var(--brand-primary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }} 
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--brand-primary)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(43,59,143,0.2)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--brand-light)'; e.currentTarget.style.color = 'var(--brand-primary)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
                    >
                      <ShoppingCart size={20} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Features Section */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1))', opacity: 0.8, transform: 'skewX(-20deg) translateX(100px)' }}></div>
        <div style={{ position: 'absolute', bottom: '-50px', left: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(43, 59, 143, 0.4)', filter: 'blur(80px)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px' }}>
            {[
              { icon: <ShieldCheck size={44} strokeWidth={1.5} />, title: 'Genuine Warranty', desc: '100% authentic products with official agent warranty.' },
              { icon: <MapPin size={44} strokeWidth={1.5} />, title: '4 Showrooms', desc: 'Visit us in Jaffna, Kilinochchi, and Mannar.' },
              { icon: <Clock size={44} strokeWidth={1.5} />, title: '15+ Years Exp', desc: 'Trusted by the Northern Province since 2009.' },
              { icon: <Truck size={44} strokeWidth={1.5} />, title: 'Island-wide Delivery', desc: 'Free shipping on all orders over Rs. 500,000.' }
            ].map((feature, i) => (
              <div key={i} style={{ padding: '16px', position: 'relative' }}>
                <div style={{ color: 'var(--brand-accent)', marginBottom: '32px', filter: 'drop-shadow(0 0 12px rgba(59, 130, 246, 0.4))' }}>
                  {feature.icon}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', fontFamily: 'Outfit', color: 'white', letterSpacing: '-0.3px' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.7, fontSize: '15px' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#090e17', color: 'white', paddingTop: '100px' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '64px', marginBottom: '80px' }}>
            <div>
              <div style={{ backgroundColor: 'white', padding: '12px', borderRadius: '12px', display: 'inline-block', marginBottom: '32px' }}>
                <img src="/full_logo.svg" alt="Nalin IT Logo" style={{ height: '40px' }} />
              </div>
              <p style={{ color: 'var(--text-500)', lineHeight: 1.7, marginBottom: '32px', maxWidth: '320px', fontSize: '15px' }}>
                The premier IT provider in the Northern Province of Sri Lanka. Supplying high-performance technology and enterprise solutions since 2009.
              </p>
            </div>
            
            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '32px', fontFamily: 'Outfit', color: 'white' }}>Company</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-500)', fontSize: '15px' }}>
                <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='var(--text-500)'}>About Us</a></li>
                <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='var(--text-500)'}>Careers</a></li>
                <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='var(--text-500)'}>Terms of Business</a></li>
                <li><a href="#" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color='white'} onMouseLeave={e => e.currentTarget.style.color='var(--text-500)'}>Privacy Policy</a></li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '32px', fontFamily: 'Outfit', color: 'white' }}>Showrooms</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-500)', fontSize: '15px' }}>
                <li>Nalin IT Exclusive</li>
                <li>HP World Northern</li>
                <li>Nalin IT Kilinochchi</li>
                <li>Nalin IT Mannar</li>
              </ul>
            </div>

            <div>
              <h4 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '32px', fontFamily: 'Outfit', color: 'white' }}>Get in Touch</h4>
              <div style={{ color: 'var(--text-500)', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '15px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <MapPin size={20} style={{ color: 'var(--brand-primary)', flexShrink: 0 }} />
                  <span>195/2, Parameshwara Junction, Palaly Road, Jaffna.</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <Phone size={20} style={{ color: 'var(--brand-primary)' }} />
                  <span>021 222 1121</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <Mail size={20} style={{ color: 'var(--brand-primary)' }} />
                  <span>nalinshowroom@nit.lk</span>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ 
            borderTop: '1px solid rgba(255,255,255,0.05)', 
            padding: '32px 0', 
            display: 'flex', 
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'var(--text-500)',
            fontSize: '14px'
          }}>
            <div>© 2026 Nalin Information Technologies. All Rights Reserved.</div>
            <div>Designed with precision by ALBUZZ</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
