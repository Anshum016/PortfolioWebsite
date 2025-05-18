import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/HomeComponent'
import About from './Components/About'
import Skills from './Components/Skills'
import Services from './Components/Services'
import Portfolio from './Components/Portfolio'
import VideoProjects from './Components/VideoProjects'
import Contactme from './Components/Contactme'
import { FaGithub } from 'react-icons/fa'
import './App.css'

const WaveDivider = ({ fillColor }) => (
  <div className="shape-divider wave">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill" style={{fill: fillColor}}></path>
    </svg>
  </div>
);

const TriangleDivider = ({ fillColor }) => (
  <div className="shape-divider triangle">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill" style={{fill: fillColor}}></path>
    </svg>
  </div>
);

const TiltDivider = ({ fillColor }) => (
  <div className="shape-divider tilt">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" style={{fill: fillColor}}></path>
    </svg>
  </div>
);

const CurveDivider = ({ fillColor }) => (
  <div className="shape-divider curve">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" className="shape-fill" style={{fill: fillColor}}></path>
    </svg>
  </div>
);

const App = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="main-container">
        <section id="home" className="relative">
          <Home />
          <WaveDivider fillColor="var(--bg-color-secondary)" />
        </section>
        
        <section id="about" className="relative">
          <About />
          <TriangleDivider fillColor="var(--bg-color-primary)" />
        </section>

        <section id="portfolio" className="relative">
          <Portfolio />
          <WaveDivider fillColor="var(--bg-color-secondary)" />
        </section>

        <section id="videos" className="relative">
          <VideoProjects />
          <TriangleDivider fillColor="var(--bg-color-primary)" />
        </section>
        
        <section id="skills" className="relative">
          <Skills />
          <TiltDivider fillColor="var(--bg-color-secondary)" />
        </section>
        
        <section id="services" className="relative">
          <Services />
          <CurveDivider fillColor="var(--bg-color-primary)" />
        </section>
        
        <section id="contact" className="relative">
          <Contactme />
        </section>
        
        <footer className="relative py-8 text-center" style={{ backgroundColor: 'var(--bg-color-primary)' }}>
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--accent-color)' }}>Anshum</h2>
            <p className="mb-6" style={{ color: 'white' }}>AI/ML & Front-End Developer</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#services" className="hover:text-blue-600" style={{ color: 'white' }}>Services</a>
              <a href="#portfolio" className="hover:text-blue-600" style={{ color: 'white' }}>Projects</a>
              <a href="#videos" className="hover:text-blue-600" style={{ color: 'white' }}>Videos</a>
              <a href="#contact" className="hover:text-blue-600" style={{ color: 'white' }}>Contact Me</a>
              <a 
                href="https://github.com/Anshum016" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-blue-600" 
                style={{ color: 'white' }}
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </a>
            </div>
            <p style={{ color: 'rgba(255, 255, 255, 0.7)' }}>© Anshum Jani. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
