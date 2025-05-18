import React, { useState, useEffect } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        
        if (scrollY >= sectionTop - 100 && scrollY < sectionTop + sectionHeight - 100) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { title: 'Home', path: '#home' },
    { title: 'About', path: '#about' },
    { title: 'Skills', path: '#skills' },
    { title: 'Services', path: '#services' },
    { title: 'Portfolio', path: '#portfolio' },
    { title: 'Videos', path: '#videos' },
    { title: 'Contact Me', path: '#contact' }
  ];

  return (
    <nav 
      className={`py-2 sm:py-3 px-3 sm:px-6 w-full fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`} 
      style={{ backgroundColor: 'var(--bg-color-primary)', boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.2)' : 'none' }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-lg sm:text-xl md:text-2xl font-bold" style={{ color: 'white' }}>
          ANSHUM JANI
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-1.5 sm:p-2 rounded-md focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? (
            <RiCloseLine className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <RiMenu3Line className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 lg:space-x-6">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.path} 
              className={`transition-colors font-medium py-2 px-1 relative group ${activeSection === link.path.slice(1) ? 'text-blue-400' : 'text-white'}`}
              style={{ color: activeSection === link.path.slice(1) ? 'var(--accent-color)' : 'white' }}
            >
              {link.title}
              <span 
                className={`absolute left-0 right-0 bottom-0 h-0.5 transform ${activeSection === link.path.slice(1) ? 'scale-x-100' : 'scale-x-0'} transition-transform duration-300 group-hover:scale-x-100`} 
                style={{ backgroundColor: 'var(--accent-color)' }}
              ></span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`md:hidden mt-1 sm:mt-2 px-3 sm:px-4 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} 
        style={{ backgroundColor: 'var(--bg-color-primary)' }}
      >
        <div className="flex flex-col space-y-1 sm:space-y-2 py-2">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.path} 
              className={`transition-colors py-2 pl-2 font-medium relative group border-b border-gray-700 ${activeSection === link.path.slice(1) ? 'text-blue-400' : 'text-white'}`}
              style={{ color: activeSection === link.path.slice(1) ? 'var(--accent-color)' : 'white' }}
              onClick={closeMenu}
            >
              {link.title}
              <span 
                className={`absolute left-0 bottom-0 w-1 h-full transform ${activeSection === link.path.slice(1) ? 'scale-y-100' : 'scale-y-0'} origin-bottom transition-transform duration-300 group-hover:scale-y-100`} 
                style={{ backgroundColor: 'var(--accent-color)' }}
              ></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
