import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    { title: 'Contact Me', path: '#contact' }
  ];

  return (
    <nav className="py-4 px-6 w-full fixed top-0 z-10" style={{ backgroundColor: 'var(--bg-color-primary)', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold" style={{ color: 'white' }}>
          ANSHUM JANI
        </a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.path} 
              className="transition-colors font-medium relative group"
              style={{ color: 'white' }}
            >
              {link.title}
              <span 
                className="absolute left-0 right-0 bottom-0 h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" 
                style={{ backgroundColor: 'var(--accent-color)' }}
              ></span>
            </a>
          ))}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 px-4" style={{ backgroundColor: 'var(--bg-color-primary)' }}>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.path} 
                className="transition-colors py-2 font-medium relative group"
                style={{ color: 'white' }}
                onClick={closeMenu}
              >
                {link.title}
                <span 
                  className="absolute left-0 right-0 bottom-0 h-0.5 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" 
                  style={{ backgroundColor: 'var(--accent-color)' }}
                ></span>
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
