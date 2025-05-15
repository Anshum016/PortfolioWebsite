import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: 'white' }}>About Me</h2>
        <p className="text-center mb-8 sm:mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>My Introduction</p>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <div className="rounded-xl w-full max-w-xs mx-auto h-64 sm:h-80 overflow-hidden shadow-lg" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
              {/* About me image */}
              <img 
                src="/ImageAnshum2.jpg" 
                alt="Anshum Jani" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              I have 5 years of experience and a deep understanding of various web technologies such 
              as HTML, CSS, JavaScript, React, Node.js, and MongoDB.
            </p>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              I am dedicated to keeping up with the latest trends and techniques in web development, 
              and I am constantly learning and expanding my skill set. I have a keen eye for detail 
              and strive for perfection in every project I work on.
            </p>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              When I'm not coding, I enjoy exploring new technologies and working on side projects. 
              I am a sports enthusiast and enjoy playing basketball regularly.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="text-center p-3 sm:p-4 shadow-md rounded-lg" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>5+</h3>
                <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Years experience</p>
              </div>
              <div className="text-center p-3 sm:p-4 shadow-md rounded-lg" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>15+</h3>
                <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Projects completed</p>
              </div>
              <div className="text-center p-3 sm:p-4 shadow-md rounded-lg" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>3+</h3>
                <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Companies worked</p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <a 
                href="/Anshum_Jani_resume.pdf"
                download="Anshum_Jani_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors font-medium"
                style={{ 
                  backgroundColor: 'var(--accent-color)', 
                  color: 'white',
                  boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)'
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#3451d1'} 
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-color)'}
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
