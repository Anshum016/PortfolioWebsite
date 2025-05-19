import React, { useState } from 'react'
import { FaRobot, FaCode, FaPalette } from 'react-icons/fa'

const Services = () => {
  const [activeModal, setActiveModal] = useState(null);
  
  const services = [
    {
      id: 1,
      title: 'AI/ML Development',
      icon: <FaRobot />,
      details: [
        'Developing AI/ML models using TensorFlow and PyTorch',
        'Implementing Computer Vision and NLP solutions',
        'Building AI Agents and RAG pipelines',
        'Working with Vector Databases and LLMs'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Development',
      icon: <FaCode />,
      details: [
        'Building responsive web applications with React.js',
        'Developing backend services using Node.js and Flask',
        'Implementing RESTful APIs and database solutions',
        'Creating user-friendly interfaces with Tailwind CSS'
      ]
    },
    {
      id: 3,
      title: 'UI/UX Design',
      icon: <FaPalette />,
      details: [
        'Creating intuitive user interfaces',
        'Designing responsive layouts',
        'Implementing modern design principles',
        'Using tools like Figma and Photoshop'
      ]
    }
  ];

  const openModal = (id) => {
    setActiveModal(id);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-36 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: 'white' }}>Services</h2>
        <p className="text-center mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>What I offer</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transform hover:scale-105 transition-all duration-300" 
              style={{ 
                backgroundColor: 'rgba(25, 22, 39, 0.5)',
                boxShadow: '0 4px 20px rgba(67, 97, 238, 0.15)'
              }}
            >
              <div className="text-4xl mb-4" style={{ color: 'var(--accent-color)' }}>{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'white' }}>{service.title}</h3>
              <button 
                onClick={() => openModal(service.id)}
                className="font-medium hover:text-blue-400 transition-colors"
                style={{ color: 'var(--accent-color)' }}
              >
                View More
              </button>
              
              {/* Modal */}
              {activeModal === service.id && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                  <div className="bg-white rounded-xl p-6 max-w-lg w-full mx-4 relative" style={{ backgroundColor: 'rgba(25, 22, 39, 0.95)' }}>
                    <button 
                      onClick={closeModal}
                      className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: 'white' }}>{service.title}</h3>
                    <ul className="space-y-3">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          <span style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
