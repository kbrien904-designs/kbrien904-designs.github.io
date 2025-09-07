import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile screen
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const NavItem = ({ to, children, navKey, mobile = false }) => (
    <Link 
      to={to} 
      className={`relative group nav-hover transition-colors py-2 ${
        mobile 
          ? 'block text-slate-600 text-lg py-3 border-b border-slate-100 last:border-b-0' 
          : 'text-slate-600'
      }`}
      onMouseEnter={() => !mobile && setHoveredNavItem(navKey)}
      onMouseLeave={() => !mobile && setHoveredNavItem(null)}
      onClick={mobile ? () => setMobileMenuOpen(false) : undefined}
    >
      {children}
      {!mobile && <WiggleLine isVisible={hoveredNavItem === navKey} variant={navKey} />}
    </Link>
  );

  const WiggleLine = ({ isVisible, variant }) => {
    const paths = {
      home: "M2,4 Q10,1 18,3 T34,2 Q42,4 50,2 T66,3 Q74,1 82,4 T98,3",
      about: "M3,5 Q8,2 15,4 T28,3 Q35,5 42,3 T55,4 Q62,2 69,5 T82,4 Q89,6 97,4",
      portfolio: "M1,3 Q12,6 23,2 T39,4 Q46,1 54,5 T70,3 Q77,6 84,2 T99,5",
      contact: "M2,3 Q9,5 16,2 T32,4 Q39,1 46,5 T62,3 Q69,6 76,2 T92,4 Q98,1 99,3"
    };

    return (
      <svg
        className={`absolute -bottom-1 left-0 w-full h-2 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
      >
        <path
          d={paths[variant]}
          stroke="#ed5c5c"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          className={`wiggle-line ${isVisible ? 'animate' : ''}`}
        />
      </svg>
    );
  };

  return (
    <>
      <style>{`
        @keyframes drawLeftToRight {
          from { stroke-dashoffset: 120; }
          to { stroke-dashoffset: 0; }
        }
        .wiggle-line {
          stroke-dasharray: 120;
          stroke-dashoffset: 120;
          transition: none;
        }
        .wiggle-line.animate {
          animation: drawLeftToRight 0.6s ease-out forwards;
        }
        .custom-red-gradient {
          background: linear-gradient(135deg, #ed5c5c, #c53030);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .nav-hover:hover { color: #ed5c5c; }
      `}</style>
      
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold custom-red-gradient">
            Kathleen O'Brien
          </Link>
          
          {/* Desktop Navigation */}
          {!isMobile && (
            <div className="flex space-x-8">
              <NavItem to="/" navKey="home">Home</NavItem>
              <NavItem to="/about" navKey="about">About</NavItem>
              <NavItem to="/portfolio" navKey="portfolio">Portfolio</NavItem>
              <NavItem to="/contact" navKey="contact">Contact</NavItem>
            </div>
          )}
          
          {/* Mobile Menu Button */}
          {isMobile && (
            <button 
              className="text-slate-600 hover:text-red-500 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMobile && mobileMenuOpen && (
          <div className="bg-white border-t border-slate-200 shadow-lg">
            <div className="px-6 py-4 space-y-1">
              <NavItem to="/" navKey="home" mobile>Home</NavItem>
              <NavItem to="/about" navKey="about" mobile>About</NavItem>
              <NavItem to="/portfolio" navKey="portfolio" mobile>Portfolio</NavItem>
              <NavItem to="/contact" navKey="contact" mobile>Contact</NavItem>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;