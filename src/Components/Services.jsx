import React, { useState } from 'react'
import { FaRobot, FaCode, FaBrain, FaPalette } from 'react-icons/fa'

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
      title: 'AI Research',
      icon: <FaBrain />,
      details: [
        'Research in AI Agents and Neural Networks',
        'Implementing advanced AI techniques',
        'Working with Generative AI models',
        'Developing custom AI solutions'
      ]
    },
    {
      id: 4,
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
            <div key={service.id} className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'white' }}>{service.title}</h3>
              <button 
                onClick={() => openModal(service.id)}
                className="font-medium hover:text-blue-800 transition-colors"
                style={{ color: 'var(--accent-color)' }}
              >
                View More
              </button>
              
              {/* Modal */}
              {activeModal === service.id && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                  <div className="bg-white rounded-xl p-8 max-w-md w-full" style={{ backgroundColor: 'rgba(25, 22, 39, 0.9)' }}>
                    <h4 className="text-2xl font-semibold mb-4" style={{ color: 'white' }}>{service.title}</h4>
                    <ul className="mb-6">
                      {service.details.map((detail, index) => (
                        <li key={index} className="flex items-start mb-3">
                          <div className="mr-2 text-blue-600">•</div>
                          <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>{detail}</p>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={closeModal}
                      className="px-6 py-2 rounded-lg transition-colors font-medium"
                      style={{ 
                        backgroundColor: 'var(--accent-color)', 
                        color: 'white',
                        boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)'
                      }}
                      onMouseOver={e => e.currentTarget.style.backgroundColor = '#3451d1'} 
                      onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-color)'}
                    >
                      Close
                    </button>
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
