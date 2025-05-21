import React, { useState } from 'react'
import { RiExternalLinkLine, RiMailSendLine, RiCloseLine } from 'react-icons/ri'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'WorkForceAI',
      description: 'AI-powered workforce management platform built with Flask, featuring GitHub repository summarization, stock price prediction, and dynamic tool deployment using RAG, Vector Databases, and AI Agents.',
      images: ['/WorkForceAI.jpeg', '/WorkForceDashboard.jpeg'],
      demoLink: 'https://github.com/Anshum016/WorkForceAI'
    },
    {
      id: 2,
      title: 'Computer Vision Projects',
      description: 'Advanced computer vision projects including object detection on COCO dataset using PyTorch, implementing custom architectures, and data loading pipelines. Features include real-time object detection, model training, and evaluation.',
      images: [
        '/Object_Detection_Architecture.jpeg',
        '/Object_Detection_Data_Loading.jpeg',
        '/Object_Detecction_Model.jpeg'
      ],
      demoLink: 'https://github.com/Anshum016/Computer-Vision-Projects'
    },
    {
      id: 3,
      title: 'AVB Shipping and Logistic',
      description: 'Full-stack website developed with React.js, Tailwind CSS, Express.js, and MongoDB, featuring responsive design and optimized performance.',
      images: ['/AVBShipping1.png', '/AVBShipping2.png', '/AVBShipping3.png'],
      demoLink: 'https://github.com/Anshum016/AVB-Shipping'
    }
  ];

  const openGallery = (project) => {
    setSelectedProject(project);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-36 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: 'white' }}>Projects</h2>
        <p className="text-center mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Most recent work</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
              <div 
                className="h-48 bg-gray-200 flex items-center justify-center cursor-pointer relative group" 
                style={{ backgroundColor: 'rgba(25, 22, 39, 0.3)' }}
                onClick={() => project.images && openGallery(project)}
              >
                {project.images ? (
                  <>
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-white font-medium">Click to view gallery</p>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-500" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Project Image</p>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'white' }}>{project.title}</h3>
                <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{project.description}</p>
                <a 
                  href={project.demoLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors font-medium"
                  style={{ 
                    backgroundColor: 'var(--accent-color)', 
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)'
                  }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#3451d1'} 
                  onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-color)'}
                >
                  <RiExternalLinkLine className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Image Gallery Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <button 
              onClick={closeGallery}
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              <RiCloseLine className="w-6 h-6" />
            </button>
            <div className="max-w-4xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {selectedProject.images.map((image, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={image} 
                      alt={`${selectedProject.title} - Image ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        
        <div className="mt-16 text-center bg-white shadow-lg rounded-xl p-8" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'white' }}>You have a new project?</h3>
          <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            I would love to chat with you about your project and see how we can work together to create 
            something truly amazing. Let's connect.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors font-medium"
            style={{ 
              backgroundColor: 'var(--accent-color)', 
              color: 'white',
              boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)'
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor = '#3451d1'} 
            onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-color)'}
          >
            <RiMailSendLine className="w-5 h-5" />
            Contact Me
          </a>
        </div>
      </div>
    </div>
  )
}

export default Portfolio 