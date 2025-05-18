import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { FaGithub } from 'react-icons/fa'

const About = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch('/Animation - 1747588653449.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  if (!animationData) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen pt-28 pb-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: 'white' }}>About Me</h2>
        <p className="text-center mb-8 sm:mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>My Introduction</p>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          <div className="w-full md:w-1/3 mb-12 md:mb-0">
            <div className="rounded-xl w-full max-w-xs mx-auto h-64 sm:h-80 overflow-hidden shadow-lg flex items-center justify-center" 
              style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}
            >
              <Lottie 
                animationData={animationData}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3">
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              I am a B.Tech Computer Science student at Parul University, passionate about AI/ML and web development. 
              Currently working as an AI/ML Intern at Tinkering Hub, where I focus on developing projects involving 
              AI Agents, CNNs, Generative AI, and NLP.
            </p>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              My expertise spans across Computer Vision, NLP, and Full Stack Development. I have hands-on experience 
              with frameworks like TensorFlow, PyTorch, React.js, and Node.js, and I'm skilled in implementing 
              advanced AI techniques including RAG, Vector Databases, and AI Agents.
            </p>
            <p className="mb-6 sm:mb-8 text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              When I'm not coding, I enjoy exploring new AI/ML technologies, contributing to open-source projects, 
              and staying updated with the latest developments in the field of artificial intelligence.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="text-center p-3 sm:p-4 shadow-md rounded-lg" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>2+</h3>
                <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Internships</p>
              </div>
              <div className="text-center p-3 sm:p-4 shadow-md rounded-lg" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>3+</h3>
                <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Major Projects</p>
              </div>
              <div className="text-center p-3 sm:p-4 shadow-md rounded-lg" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
                <h3 className="text-xl sm:text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>2026</h3>
                <p className="text-sm sm:text-base" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Graduation Year</p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start gap-4">
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
              <a 
                href="https://github.com/Anshum016"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition-colors font-medium"
                style={{ 
                  backgroundColor: 'rgba(25, 22, 39, 0.5)', 
                  color: 'white',
                  border: '1px solid var(--accent-color)'
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(67, 97, 238, 0.1)'} 
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgba(25, 22, 39, 0.5)'}
              >
                <FaGithub className="w-5 h-5" />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
