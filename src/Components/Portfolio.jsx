import React from 'react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Chat Application',
      description: 'Chat app created using react, firebase and chat-engine.',
      image: '/project1.jpg',
      demoLink: '#'
    },
    {
      id: 2,
      title: 'Track service request graph',
      description: 'Service request graph to show various stages of bidirectional progress.',
      image: '/project2.jpg',
      demoLink: '#'
    },
    {
      id: 3,
      title: 'Stop-watch',
      description: 'Light weight Stop-Watch application using React without external libraries/dependencies.',
      image: '/project3.jpg',
      demoLink: '#'
    },
    {
      id: 4,
      title: 'File reader',
      description: 'Light weight file reader React component without external libraries/dependencies.',
      image: '/project4.jpg',
      demoLink: '#'
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-36 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: 'white' }}>Portfolio</h2>
        <p className="text-center mb-12" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Most recent work</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-xl overflow-hidden" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
              <div className="h-48 bg-gray-200 flex items-center justify-center" style={{ backgroundColor: 'rgba(25, 22, 39, 0.3)' }}>
                {/* Placeholder for project image */}
                <p className="text-gray-500" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: 'white' }}>{project.title}</h3>
                <p className="mb-4" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>{project.description}</p>
                <a 
                  href={project.demoLink} 
                  className="inline-block px-4 py-2 rounded-lg transition-colors font-medium"
                  style={{ 
                    backgroundColor: 'var(--accent-color)', 
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(67, 97, 238, 0.3)'
                  }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = '#3451d1'} 
                  onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--accent-color)'}
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center bg-white shadow-lg rounded-xl p-8" style={{ backgroundColor: 'rgba(25, 22, 39, 0.5)' }}>
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'white' }}>You have a new project?</h3>
          <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            I would love to chat with you about your project and see how we can work together to create 
            something truly amazing. Let's connect.
          </p>
          <a 
            href="#contact" 
            className="inline-block px-6 py-3 rounded-lg transition-colors font-medium"
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
        </div>
      </div>
    </div>
  )
}

export default Portfolio 