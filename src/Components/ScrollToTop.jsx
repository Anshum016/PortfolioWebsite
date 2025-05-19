import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full transition-all duration-300 transform hover:scale-110 z-50"
          style={{
            backgroundColor: 'var(--accent-color)',
            boxShadow: '0 4px 20px rgba(67, 97, 238, 0.3)',
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop; 