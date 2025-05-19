import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import { FaGithub } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

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
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4" style={{ color: 'var(--accent-color)' }}>About Me</h2>
        <p className="text-center mb-12 sm:mb-16 text-lg sm:text-xl font-medium" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>My Introduction</p>
        
        <div className="flex flex-col md:flex-row items-center md:items-start gap-16 md:gap-24 lg:gap-32">
          <div className="w-full md:w-1/3 mb-16 md:mb-0">
            <div className="w-full max-w-xs mx-auto h-64 sm:h-80 overflow-hidden flex items-center justify-center transform hover:scale-105 transition-transform duration-300" 
              style={{ 
                backgroundColor: 'rgba(25, 22, 39, 0.5)'
              }}
            >
              <Lottie 
                animationData={animationData}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 md:pl-8 lg:pl-12">
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full rounded-full" style={{ backgroundColor: 'var(--accent-color)' }}></div>
                <p className="text-base sm:text-lg leading-relaxed pl-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  I am a <span className="font-semibold" style={{ color: 'var(--accent-color)' }}>B.Tech Computer Science</span> student at Parul University, passionate about 
                  <span className="font-semibold" style={{ color: 'var(--accent-color)' }}> AI/ML and web development</span>. Currently working as an AI/ML Intern at Tinkering Hub, 
                  where I focus on developing projects involving AI Agents, CNNs, Generative AI, and NLP.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full rounded-full" style={{ backgroundColor: 'var(--accent-color)' }}></div>
                <p className="text-base sm:text-lg leading-relaxed pl-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  My expertise spans across <span className="font-semibold" style={{ color: 'var(--accent-color)' }}>Computer Vision</span>, 
                  <span className="font-semibold" style={{ color: 'var(--accent-color)' }}> NLP</span>, and 
                  <span className="font-semibold" style={{ color: 'var(--accent-color)' }}> Full Stack Development</span>. I have hands-on experience 
                  with frameworks like TensorFlow, PyTorch, React.js, and Node.js, and I'm skilled in implementing 
                  advanced AI techniques including RAG, Vector Databases, and AI Agents.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full rounded-full" style={{ backgroundColor: 'var(--accent-color)' }}></div>
                <p className="text-base sm:text-lg leading-relaxed pl-4" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  When I'm not coding, I enjoy exploring new AI/ML technologies, contributing to open-source projects, 
                  and staying updated with the latest developments in the field of artificial intelligence.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-12">
              <div className="text-center p-4 sm:p-6 shadow-lg rounded-xl transform hover:scale-105 transition-all duration-300" 
                style={{ 
                  backgroundColor: 'rgba(25, 22, 39, 0.5)',
                  boxShadow: '0 4px 20px rgba(67, 97, 238, 0.15)'
                }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--accent-color)' }}>2+</h3>
                <p className="text-sm sm:text-base font-medium" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Internships</p>
              </div>
              <div className="text-center p-4 sm:p-6 shadow-lg rounded-xl transform hover:scale-105 transition-all duration-300" 
                style={{ 
                  backgroundColor: 'rgba(25, 22, 39, 0.5)',
                  boxShadow: '0 4px 20px rgba(67, 97, 238, 0.15)'
                }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--accent-color)' }}>3+</h3>
                <p className="text-sm sm:text-base font-medium" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Major Projects</p>
              </div>
              <div className="text-center p-4 sm:p-6 shadow-lg rounded-xl transform hover:scale-105 transition-all duration-300" 
                style={{ 
                  backgroundColor: 'rgba(25, 22, 39, 0.5)',
                  boxShadow: '0 4px 20px rgba(67, 97, 238, 0.15)'
                }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold mb-2" style={{ color: 'var(--accent-color)' }}>2026</h3>
                <p className="text-sm sm:text-base font-medium" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>Graduation Year</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-6">
              <a 
                href="/Anshum_Jani_resume.pdf"
                download="Anshum_Jani_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold tracking-wide text-base sm:text-lg"
                style={{ 
                  backgroundColor: 'var(--accent-color)', 
                  color: 'white',
                  boxShadow: '0 4px 20px rgba(67, 97, 238, 0.3)'
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
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold tracking-wide text-base sm:text-lg"
                style={{ 
                  backgroundColor: 'rgba(25, 22, 39, 0.5)', 
                  color: 'white',
                  border: '2px solid var(--accent-color)',
                  boxShadow: '0 4px 20px rgba(67, 97, 238, 0.15)'
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(67, 97, 238, 0.1)'} 
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgba(25, 22, 39, 0.5)'}
              >
                <FaGithub className="w-5 h-5 flex-shrink-0" />
                <span>GitHub Profile</span>
              </a>
              <a 
                href="https://leetcode.com/u/Anshum016/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 font-semibold tracking-wide text-base sm:text-lg"
                style={{ 
                  backgroundColor: 'rgba(25, 22, 39, 0.5)', 
                  color: 'white',
                  border: '2px solid var(--accent-color)',
                  boxShadow: '0 4px 20px rgba(67, 97, 238, 0.15)'
                }}
                onMouseOver={e => e.currentTarget.style.backgroundColor = 'rgba(67, 97, 238, 0.1)'} 
                onMouseOut={e => e.currentTarget.style.backgroundColor = 'rgba(25, 22, 39, 0.5)'}
              >
                <SiLeetcode className="w-5 h-5 flex-shrink-0" />
                <span>LeetCode Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
