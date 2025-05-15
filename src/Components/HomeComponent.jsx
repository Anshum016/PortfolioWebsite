import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 sm:pt-20 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-16">
          {/* Left side - Text */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-4 lg:pr-8 order-2 md:order-1 mt-8 sm:mt-0">
            <div>
              <p className="text-xl sm:text-2xl font-medium mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Hi, I am</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4" style={{ color: 'white' }}>Anshum Jani</h1>
              <div className="h-1 w-24 mb-6" style={{ backgroundColor: 'var(--accent-color)' }}></div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Web Developer</h2>
              <p className="text-base sm:text-lg max-w-lg mb-6 sm:mb-8" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                I have a passion for building intuitive, user-friendly interfaces that provide 
                an enjoyable and seamless user experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="#contact" 
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors font-medium text-center"
                  style={{ 
                    backgroundColor: 'var(--accent-color)', 
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)'
                  }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#3451d1'} 
                  onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-color)'}
                >
                  Contact Me
                </a>
                <a 
                  href="#about" 
                  className="border px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors text-center"
                  style={{ 
                    borderColor: '#4361ee', 
                    color: 'white'
                  }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(67, 97, 238, 0.1)'} 
                  onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Scroll Down
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Profile Photo */}
          <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 mt-16 md:mt-0">
            <div className="relative w-full max-w-sm">
              {/* Main photo container */}
              <div 
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 z-10 relative mx-auto"
                style={{ 
                  borderColor: 'var(--accent-color)',
                  boxShadow: '0 10px 30px rgba(67, 97, 238, 0.3)'
                }}
              >
                {/* Profile image */}
                <img 
                  src="/ProfileAnshumwithoutbg.png" 
                  alt="Anshum Jani" 
                  className="w-full h-full object-cover object-center"
                  style={{ 
                    mixBlendMode: 'multiply', 
                    backgroundColor: 'transparent'
                  }}
                />
              </div>

              {/* Decorative elements */}
              <div 
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full absolute top-4 left-1/2 -translate-x-1/2 md:left-4 md:translate-x-0 z-0"
                style={{ 
                  backgroundColor: 'rgba(67, 97, 238, 0.2)',
                }}
              ></div>
              
              {/* Floating dots decoration */}
              <div
                className="absolute top-0 right-1/4 md:right-0 w-12 sm:w-16 h-12 sm:h-16 rounded-full z-20"
                style={{ backgroundColor: 'rgba(67, 97, 238, 0.3)' }}
              ></div>
              <div
                className="absolute bottom-10 left-1/4 md:left-0 w-6 sm:w-8 h-6 sm:h-8 rounded-full z-20"
                style={{ backgroundColor: 'rgba(67, 97, 238, 0.5)' }}
              ></div>
              <div
                className="absolute bottom-0 right-1/3 md:right-16 w-10 sm:w-12 h-10 sm:h-12 rounded-full z-20"
                style={{ backgroundColor: 'rgba(67, 97, 238, 0.4)' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 