import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-black/50 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <span 
          className="text-xl font-extrabold text-white tracking-widest cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}
        >
          MIKHAIL<span className="text-cyan-400"> TIUTEREV</span>
        </span>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          {['Home', 'Projects', 'Resume', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className="hover:text-cyan-400 transition-colors uppercase tracking-wide"
              style={{
                transition: 'all 0.3s ease',
                filter: 'drop-shadow(0 0 0px rgba(45,212,255,0))'
              }}
              onMouseEnter={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 8px rgba(45,212,255,0.5))'}
              onMouseLeave={(e) => e.currentTarget.style.filter = 'drop-shadow(0 0 0px rgba(45,212,255,0))'}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;