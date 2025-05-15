import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side - Text */}
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <div className="mb-6">
              <p className="text-2xl font-medium mb-2" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Hi, I am</p>
              <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ color: 'white' }}>Anshum Jani</h1>
              <div className="h-1 w-24 mb-6" style={{ backgroundColor: 'var(--accent-color)' }}></div>
              <h2 className="text-3xl md:text-4xl font-semibold mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Web Developer</h2>
              <p className="text-lg max-w-lg mb-8" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                I have a passion for building intuitive, user-friendly interfaces that provide 
                an enjoyable and seamless user experience.
              </p>
              <div className="flex gap-4">
                <a 
                  href="#contact" 
                  className="px-6 py-3 rounded-lg transition-colors font-medium"
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
                  className="border px-6 py-3 rounded-lg transition-colors"
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
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              {/* Main photo container */}
              <div 
                className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 z-10 relative"
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
                className="w-64 h-64 md:w-80 md:h-80 rounded-full absolute top-4 left-4 z-0"
                style={{ 
                  backgroundColor: 'rgba(67, 97, 238, 0.2)',
                }}
              ></div>
              
              {/* Floating dots decoration */}
              <div
                className="absolute top-0 right-0 w-16 h-16 rounded-full z-20"
                style={{ backgroundColor: 'rgba(67, 97, 238, 0.3)' }}
              ></div>
              <div
                className="absolute bottom-10 left-0 w-8 h-8 rounded-full z-20"
                style={{ backgroundColor: 'rgba(67, 97, 238, 0.5)' }}
              ></div>
              <div
                className="absolute bottom-0 right-16 w-12 h-12 rounded-full z-20"
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